import React from 'react';
import { FaArrowRight, FaPlay, FaStar, FaUsers, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-200 dark:bg-emerald-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl opacity-70 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
              <div className="flex items-center bg-emerald-100 dark:bg-emerald-900 rounded-full px-4 py-2">
                <FaStar className="h-4 w-4 text-emerald-600 dark:text-emerald-400 mr-2" />
                <span className="text-sm font-medium text-emerald-800 dark:text-emerald-200">
                  #1 Personal Finance Tracker
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Take Control of Your
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent block">
                Financial Future
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              Track expenses, manage income, and gain valuable insights — all in one place!
              Make smarter financial decisions with beautiful charts and comprehensive analytics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
             <Link to="/signup" >
              <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started Free
                <FaArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
             </Link>
              <button className="group px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-300 dark:border-gray-600 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                <FaPlay className="inline mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <FaUsers className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mr-2" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">10K+</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Happy Users</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <FaChartLine className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">$2M+</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Money Tracked</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <FaStar className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-2" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">4.9</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">App Rating</p>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-lg">Dashboard Overview</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
                    <p className="text-sm text-emerald-600 dark:text-emerald-400">Income</p>
                    <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">$5,420</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                    <p className="text-sm text-red-600 dark:text-red-400">Expenses</p>
                    <p className="text-2xl font-bold text-red-700 dark:text-red-300">$3,280</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-sm text-blue-600 dark:text-blue-400">Balance</p>
                    <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">$2,140</p>
                  </div>
                </div>
                <div className="h-32 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">📊 Interactive Charts</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="text-sm text-gray-600 dark:text-gray-400">🛒 Grocery Shopping</span>
                    <span className="font-semibold text-red-600 dark:text-red-400">-$85</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="text-sm text-gray-600 dark:text-gray-400">💼 Salary</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">+$3,200</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
