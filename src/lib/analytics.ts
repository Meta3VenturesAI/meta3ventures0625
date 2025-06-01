import { supabase, handleSupabaseError } from './supabase';
import { format, subDays } from 'date-fns';

export interface PageView {
  page: string;
  timestamp: string;
  session_id: string;
  referrer?: string;
  duration_ms?: number;
}

export interface LeadSubmission {
  id: string;
  name: string;
  email: string;
  company?: string;
  interest: string;
  source: string;
  created_at: string;
}

export interface AnalyticsSummary {
  totalPageViews: number;
  uniqueVisitors: number;
  averageSessionDuration: number;
  topPages: { page: string; views: number }[];
  leadsBySource: { source: string; count: number }[];
  conversionRate: number;
}

export async function trackPageView(pageView: Omit<PageView, 'timestamp'>) {
  return handleSupabaseError(
    supabase
      .from('page_views')
      .insert([{ ...pageView, timestamp: new Date().toISOString() }])
  );
}

export async function trackLeadSubmission(lead: Omit<LeadSubmission, 'id' | 'created_at'>) {
  return handleSupabaseError(
    supabase
      .from('leads')
      .insert([lead])
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
    leads
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
    conversionRate: (totalLeads / uniqueVisitors.length) * 100
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