import React, { useState } from 'react';
import { Send, Building, BarChartIcon as ChartBarIcon, CheckCircle, AlertCircle } from 'lucide-react';
import { useForm } from '@formspree/react';
import { SEO } from '../components/SEO';
import toast from 'react-hot-toast';

const ApplyPage: React.FC = () => {
  const [state, handleSubmit] = useForm(
    import.meta.env.VITE_FORMSPREE_APPLY_KEY || "myzwnkkp"
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await handleSubmit(e);
      if (state.succeeded) {
        toast.success('Application submitted successfully! We\'ll review it and get back to you soon.');
        // Reset form
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO 
        title="Apply for Partnership - Meta3Ventures"
        description="Apply to partner with Meta3Ventures and join our ecosystem of innovative AI and technology companies."
      />
      
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-transparent bg-clip-text">
                Apply for Partnership
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Ready to build the future of intelligent systems? Tell us about your venture.
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
                  <Building className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-400" />
                  Company Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      disabled={isSubmitting}
                      placeholder="https://yourcompany.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="founderName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Founder Name *
                    </label>
                    <input
                      type="text"
                      id="founderName"
                      name="founderName"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="stage" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company Stage *
                    </label>
                    <select
                      id="stage"
                      name="stage"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      <option value="">Select stage</option>
                      <option value="idea">Idea Stage</option>
                      <option value="mvp">MVP/Prototype</option>
                      <option value="early-revenue">Early Revenue</option>
                      <option value="growth">Growth Stage</option>
                      <option value="scale">Scale Stage</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    placeholder="Tell us about your company, vision, and what problem you're solving..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label htmlFor="fundingNeeds" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Funding Amount Sought *
                    </label>
                    <select
                      id="fundingNeeds"
                      name="fundingNeeds"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      <option value="">Select amount</option>
                      <option value="under-500k">Under $500K</option>
                      <option value="500k-1m">$500K - $1M</option>
                      <option value="1m-5m">$1M - $5M</option>
                      <option value="5m-10m">$5M - $10M</option>
                      <option value="over-10m">Over $10M</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Industry Focus *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      <option value="">Select industry</option>
                      <option value="ai-ml">AI & Machine Learning</option>
                      <option value="blockchain">Blockchain & Web3</option>
                      <option value="fintech">FinTech</option>
                      <option value="healthtech">HealthTech</option>
                      <option value="edtech">EdTech</option>
                      <option value="enterprise">Enterprise Software</option>
                      <option value="consumer">Consumer Technology</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="pitch" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Pitch Deck URL (Google Drive, Dropbox, etc.)
                  </label>
                  <input
                    type="url"
                    id="pitch"
                    name="pitch"
                    disabled={isSubmitting}
                    placeholder="https://drive.google.com/..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  />
                </div>

                <div className="mt-6">
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows={3}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    placeholder="Any additional information you'd like to share..."
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting || state.submitting}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg flex items-center justify-center transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl"
                >
                  {isSubmitting || state.submitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </div>

              {state.succeeded && (
                <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-lg text-center animate-fadeIn flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Thank you for your application! We'll review it and get back to you soon.
                </div>
              )}

              {Array.isArray(state.errors) && state.errors.length > 0 && (
                <div className="mt-4 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-lg text-center animate-fadeIn flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  There was an error submitting your application. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyPage;