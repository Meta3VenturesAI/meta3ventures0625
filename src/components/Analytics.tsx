import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { getAnalyticsSummary, getLeads, AnalyticsSummary, LeadSubmission } from '../lib/analytics';
import { Download, Calendar, RefreshCw } from 'lucide-react';
import { format, subDays } from 'date-fns';

const COLORS = ['#4F46E5', '#7C3AED', '#2563EB', '#9333EA', '#3B82F6'];

const DATE_RANGES = [
  { label: 'Last 7 days', days: 7 },
  { label: 'Last 30 days', days: 30 },
  { label: 'Last 90 days', days: 90 }
];

export const Analytics: React.FC = () => {
  const [dateRange, setDateRange] = useState({
    start: format(subDays(new Date(), 30), 'yyyy-MM-dd'),
    end: format(new Date(), 'yyyy-MM-dd')
  });
  const [summary, setSummary] = useState<AnalyticsSummary | null>(null);
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    loadData();
    // Set up auto-refresh every 5 minutes
    const interval = setInterval(() => {
      setRefreshKey(prev => prev + 1);
    }, 300000);
    return () => clearInterval(interval);
  }, [dateRange, refreshKey]);

  const loadData = async () => {
    setLoading(true);
    try {
      const [summaryData, leadsData] = await Promise.all([
        getAnalyticsSummary(dateRange.start, dateRange.end),
        getLeads(dateRange.start, dateRange.end)
      ]);
      setSummary(summaryData);
      setLeads(leadsData);
    } catch (error) {
      console.error('Error loading analytics:', error);
      // Set fallback data
      setSummary({
        totalPageViews: 0,
        uniqueVisitors: 0,
        averageSessionDuration: 0,
        topPages: [],
        leadsBySource: [],
        conversionRate: 0,
        deviceBreakdown: [],
        countryBreakdown: []
      });
      setLeads([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDateRangeSelect = (days: number) => {
    setDateRange({
      start: format(subDays(new Date(), days), 'yyyy-MM-dd'),
      end: format(new Date(), 'yyyy-MM-dd')
    });
  };

  const exportData = () => {
    if (leads.length === 0) {
      alert('No data to export');
      return;
    }

    const csvData = leads.map(lead => ({
      Name: lead.name,
      Email: lead.email,
      Company: lead.company || '',
      Interest: lead.interest,
      Source: lead.source,
      Date: format(new Date(lead.created_at), 'yyyy-MM-dd HH:mm:ss')
    }));

    const csv = [
      Object.keys(csvData[0]).join(','),
      ...csvData.map(row => Object.values(row).map(value => `"${value}"`).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `leads-${dateRange.start}-to-${dateRange.end}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!summary) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">Unable to load analytics data</p>
          <button
            onClick={() => setRefreshKey(prev => prev + 1)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Date Range Controls */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-gray-500" />
          <select
            value={30}
            onChange={(e) => handleDateRangeSelect(Number(e.target.value))}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          >
            {DATE_RANGES.map(range => (
              <option key={range.days} value={range.days}>
                {range.label}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={() => setRefreshKey(prev => prev + 1)}
          className="flex items-center px-4 py-2 text-indigo-600 hover:text-indigo-700"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Page Views', value: summary.totalPageViews.toLocaleString() },
          { label: 'Unique Visitors', value: summary.uniqueVisitors.toLocaleString() },
          { label: 'Total Leads', value: leads.length.toLocaleString() },
          { label: 'Conversion Rate', value: `${summary.conversionRate.toFixed(2)}%` }
        ].map((stat, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Pages Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Top Pages</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={summary.topPages}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="page" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="views" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Leads by Source */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Leads by Source</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={summary.leadsBySource}
                dataKey="count"
                nameKey="source"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {summary.leadsBySource.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold">Recent Leads</h3>
          <button
            onClick={exportData}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </button>
        </div>
        <div className="overflow-x-auto">
          {leads.length > 0 ? (
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Interest</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Source</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {leads.map(lead => (
                  <tr key={lead.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">{lead.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">{lead.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">{lead.company || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">{lead.interest}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">{lead.source}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                      {format(new Date(lead.created_at), 'PPP')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
              No leads data available for the selected date range.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};