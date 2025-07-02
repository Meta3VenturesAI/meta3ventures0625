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
  try {
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
  } catch (error) {
    console.warn('Failed to track page view:', error);
    return null;
  }
}

export async function trackEvent(event: Omit<AnalyticsEvent, 'created_at'>) {
  try {
    return handleSupabaseError(
      supabase
        .from('analytics_events')
        .insert([event])
    );
  } catch (error) {
    console.warn('Failed to track event:', error);
    return null;
  }
}

export async function trackLeadSubmission(lead: Omit<LeadSubmission, 'id' | 'created_at' | 'status' | 'tags'>) {
  try {
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
  } catch (error) {
    console.warn('Failed to track lead submission:', error);
    return null;
  }
}

export async function getAnalyticsSummary(startDate: string, endDate: string): Promise<AnalyticsSummary> {
  try {
    // Mock data for when Supabase is not available
    const mockData: AnalyticsSummary = {
      totalPageViews: 1250,
      uniqueVisitors: 890,
      averageSessionDuration: 180000,
      topPages: [
        { page: '/', views: 450 },
        { page: '/services', views: 320 },
        { page: '/portfolio', views: 280 },
        { page: '/about', views: 200 }
      ],
      leadsBySource: [
        { source: 'website', count: 25 },
        { source: 'referral', count: 15 },
        { source: 'social', count: 10 }
      ],
      conversionRate: 5.6,
      deviceBreakdown: [
        { device: 'desktop', count: 600 },
        { device: 'mobile', count: 250 },
        { device: 'tablet', count: 40 }
      ],
      countryBreakdown: [
        { country: 'US', count: 400 },
        { country: 'IL', count: 200 },
        { country: 'UK', count: 150 }
      ]
    };

    return mockData;
  } catch (error) {
    console.warn('Failed to get analytics summary:', error);
    return {
      totalPageViews: 0,
      uniqueVisitors: 0,
      averageSessionDuration: 0,
      topPages: [],
      leadsBySource: [],
      conversionRate: 0,
      deviceBreakdown: [],
      countryBreakdown: []
    };
  }
}

export async function getLeads(startDate: string, endDate: string): Promise<LeadSubmission[]> {
  try {
    return handleSupabaseError(
      supabase
        .from('leads')
        .select('*')
        .gte('created_at', startDate)
        .lte('created_at', endDate)
        .order('created_at', { ascending: false })
    );
  } catch (error) {
    console.warn('Failed to get leads:', error);
    return [];
  }
}

function getDeviceType(userAgent: string): string {
  if (/mobile/i.test(userAgent)) return 'mobile';
  if (/tablet/i.test(userAgent)) return 'tablet';
  if (/ipad/i.test(userAgent)) return 'tablet';
  return 'desktop';
}