import React from 'react';
import {
  FaShieldAlt,
  FaChartBar,
  FaWallet,
  FaChartLine,
  FaChartPie,
  FaFileDownload,
  FaFileImage,
  FaMoon,
  FaSearch,
  FaMobileAlt
} from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: FaShieldAlt,
      title: "Secure Authentication",
      description: "Sign up and login with secure authentication. Protected dashboard with profile photo selection and personalized experience.",
      color: "emerald"
    },
    {
      icon: FaChartBar,
      title: "Comprehensive Dashboard",
      description: "Personalized dashboard with finance summary, income/expense tracking, and last 30 days overview with beautiful visualizations.",
      color: "blue"
    },
    {
      icon: FaChartLine,
      title: "Income Management",
      description: "Add and categorize income entries with interactive charts. View comprehensive income history and track your earning sources.",
      color: "purple"
    },
    {
      icon: FaWallet,
      title: "Expense Tracking",
      description: "Add, edit, and delete expenses with powerful filtering. Categorize spending and gain insights into your financial habits.",
      color: "red"
    },
    {
      icon: FaChartPie,
      title: "Interactive Charts",
      description: "Custom bar, pie, and line charts with interactive tooltips. Visual insights that make understanding your finances effortless.",
      color: "indigo"
    },
    {
      icon: FaMoon,
      title: "Dark Mode Support",
      description: "Smooth dark/light theme switcher for comfortable viewing. Your eyes will thank you during those late-night budget sessions.",
      color: "gray"
    },
    {
      icon: FaSearch,
      title: "All Transactions View",
      description: "Combined view of income and expenses. Search, filter, and manage all transactions easily in one comprehensive interface.",
      color: "green"
    },
    {
      icon: FaFileImage,
      title: "File Upload Support",
      description: "Upload images or documents for transactions. Keep receipts organized and accessible with advanced file management.",
      color: "orange"
    },
    {
      icon: FaFileDownload,
      title: "Data Export",
      description: "Download your financial data as Excel files. Export income and expense details for tax preparation or external analysis.",
      color: "teal"
    },
    {
      icon: FaMobileAlt,
      title: "Responsive Design",
      description: "Perfect experience across all devices. Track your finances seamlessly whether you're on desktop, tablet, or mobile.",
      color: "pink"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: "text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/20",
      blue: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/20",
      purple: "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/20",
      red: "text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/20",
      indigo: "text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/20",
      gray: "text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-900/20",
      green: "text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20",
      orange: "text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/20",
      teal: "text-teal-600 dark:text-teal-400 bg-teal-100 dark:bg-teal-900/20",
      pink: "text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-pink-900/20"
    };
    return colors[color] || colors.emerald;
  };

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent block">
              Master Your Finances
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover powerful features designed to simplify expense tracking, boost financial awareness, 
            and help you achieve your money goals with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className={`w-14 h-14 rounded-xl ${getColorClasses(feature.color)} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-7 w-7" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Demo Credentials */}
        {/* <div className="mt-16 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Try It Now - Demo Credentials
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Experience Expense Tracker with our demo account. No signup required!
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md mx-auto shadow-lg">
            <div className="text-left space-y-2">
              <div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">Email:</span>
                <span className="ml-2 text-emerald-600 dark:text-emerald-400 font-mono">demo@expensetracker.com</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">Password:</span>
                <span className="ml-2 text-emerald-600 dark:text-emerald-400 font-mono">demo123</span>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Features;
