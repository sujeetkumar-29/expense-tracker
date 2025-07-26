import React from 'react';
import { FiCheckCircle } from 'react-icons/fi'; // Feather check icon

const Screenshots = () => {
  const screenshots = [
    {
      title: "Dashboard Overview",
      description: "Get a complete view of your finances with beautiful charts and summaries",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Total Balance", "Monthly Summary", "Recent Transactions", "Quick Stats"]
    },
    {
      title: "Expense Management",
      description: "Track and categorize expenses with powerful filtering and search capabilities",
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Add Expenses", "Category Filters", "Receipt Upload", "Edit & Delete"]
    },
    {
      title: "Income Tracking",
      description: "Monitor your income sources and view detailed analytics with interactive charts",
      image: "https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Multiple Income Sources", "Visual Analytics", "Growth Tracking", "Export Data"]
    },
    {
      title: "Interactive Charts",
      description: "Understand your spending patterns with beautiful, interactive visualizations",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Pie Charts", "Bar Graphs", "Trend Lines", "Custom Periods"]
    }
  ];

  return (
    <section id="screenshots" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            See ExpenseMate in
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent block">
              Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Take a tour through our intuitive interface and discover how easy it is to 
            manage your finances with ExpenseMate's powerful features.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="flex-1">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                    <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      </div>
                    </div>
                    <img
                      src={screenshot.image}
                      alt={`Screenshot showing ${screenshot.title.toLowerCase()}`}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {screenshot.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {screenshot.description}
                </p>
                <ul className="space-y-3">
                  {screenshot.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center lg:justify-start">
                      <FiCheckCircle className="text-emerald-500 mr-3 text-xl" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Transform Your Financial Life?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join thousands of users who have already taken control of their finances with ExpenseMate.
            </p>
            <button
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              aria-label="Start your financial journey with ExpenseMate"
            >
              Start Your Financial Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
