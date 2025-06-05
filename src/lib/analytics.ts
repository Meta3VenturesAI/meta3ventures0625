import { supabase, handleSupabaseError } from './supabase';
import { format, subDays } from 'date-fns';

export interface PageView {
  page: string;
  timestamp: string;
  session_id: string;
  referrer?: string;
  duration_ms?: number;
  user_agent?: string;
  device_type?: string;
  country_code?: string;
}

export interface AnalyticsEvent {
  event_type: string;
  event_data: Record<string, any>;
  session_id: string;
  page_url: string;
}

export interface LeadSubmission {
  id: string;
  name: string;
  email: string;
  company?: string;
  interest: string;
  source: string;
  created_at: string;
  status: string;
  tags: string[];
  last_contacted?: string;
}

export interface AnalyticsSummary {
  totalPageViews: number;
  uniqueVisitors: number;
  averageSessionDuration: number;
  topPages: { page: string; views: number }[];
  leadsBySource: { source: string; count: number }[];
  conversionRate: number;
  deviceBreakdown: { device: string; count: number }[];
  countryBreakdown: { country: string; count: number }[];
}

export async function trackPageView(pageView: Omit<PageView, 'timestamp'>) {
  const userAgent = navigator.userAgent;
  const deviceType = getDeviceType(userAgent);

  return handleSupabaseError(
    supabase
      .from('page_views')
      .insert([{
        ...pageView,
        timestamp: new Date().toISOString(),
        user_agent: userAgent,
        device_type: deviceType
      }])
  );
}

export async function trackEvent(event: Omit<AnalyticsEvent, 'created_at'>) {
  return handleSupabaseError(
    supabase
      .from('analytics_events')
      .insert([event])
  );
}

export async function trackLeadSubmission(lead: Omit<LeadSubmission, 'id' | 'created_at' | 'status' | 'tags'>) {
  return handleSupabaseError(
    supabase
      .from('leads')
      .insert([{
        ...lead,
        status: 'new',
        tags: []
      }])
      .select()
      .single()
  );
}

export async function getAnalyticsSummary(startDate: string, endDate: string): Promise<AnalyticsSummary> {
  const [
    pageViews,
    uniqueVisitors,
    sessionDurations,
    topPages,
    leads,
    deviceStats,
    countryStats
  ] = await Promise.all([
    handleSupabaseError(
      supabase
        .from('page_views')
        .select('count')
        .gte('timestamp', startDate)
        .lte('timestamp', endDate)
        .single()
    ),
    handleSupabaseError(
      supabase
        .from('page_views')
        .select('session_id')
        .gte('timestamp', startDate)
        .lte('timestamp', endDate)
        .distinct()
    ),
    handleSupabaseError(
      supabase
        .from('page_views')
        .select('duration_ms')
        .eq('page', 'exit')
        .gte('timestamp', startDate)
        .lte('timestamp', endDate)
    ),
    handleSupabaseError(
      supabase
        .from('page_views')
        .select('page, count')
        .gte('timestamp', startDate)
        .lte('timestamp', endDate)
        .neq('page', 'exit')
        .group('page')
        .order('count', { ascending: false })
        .limit(5)
    ),
    handleSupabaseError(
      supabase
        .from('leads')
        .select('source, count')
        .gte('created_at', startDate)
        .lte('created_at', endDate)
        .group('source')
    ),
    handleSupabaseError(
      supabase
        .from('page_views')
        .select('device_type, count')
        .gte('timestamp', startDate)
        .lte('timestamp', endDate)
        .group('device_type')
    ),
    handleSupabaseError(
      supabase
        .from('page_views')
        .select('country_code, count')
        .gte('timestamp', startDate)
        .lte('timestamp', endDate)
        .group('country_code')
    )
  ]);

  const totalLeads = leads.reduce((acc, curr) => acc + curr.count, 0);
  const averageDuration = sessionDurations.length > 0
    ? sessionDurations.reduce((acc, curr) => acc + (curr.duration_ms || 0), 0) / sessionDurations.length
    : 0;

  return {
    totalPageViews: pageViews.count,
    uniqueVisitors: uniqueVisitors.length,
    averageSessionDuration: averageDuration,
    topPages: topPages.map(({ page, count }) => ({ page, views: count })),
    leadsBySource: leads.map(({ source, count }) => ({ source, count })),
    conversionRate: (totalLeads / uniqueVisitors.length) * 100,
    deviceBreakdown: deviceStats.map(({ device_type, count }) => ({ device: device_type, count })),
    countryBreakdown: countryStats.map(({ country_code, count }) => ({ country: country_code, count }))
  };
}

export async function getLeads(startDate: string, endDate: string): Promise<LeadSubmission[]> {
  return handleSupabaseError(
    supabase
      .from('leads')
      .select('*')
      .gte('created_at', startDate)
      .lte('created_at', endDate)
      .order('created_at', { ascending: false })
  );
}

function getDeviceType(userAgent: string): string {
  if (/mobile/i.test(userAgent)) return 'mobile';
  if (/tablet/i.test(userAgent)) return 'tablet';
  if (/ipad/i.test(userAgent)) return 'tablet';
  return 'desktop';
}