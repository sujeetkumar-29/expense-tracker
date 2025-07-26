import React from 'react';
import { FaDollarSign, FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-100 dark:bg-black text-gray-800 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="">
                <img src="/expenselogo.svg" className="h-10 dark:bg-black" alt="logo" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Expense Tracker
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 max-w-md">
              Take control of your money. Track expenses, manage income, and gain insights — all in one place!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <FaGithub className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800 dark:text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors">Features</a></li>
              <li><a href="#screenshots" className="text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors">Screenshots</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-300 hover:text-emerald-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-800 dark:text-white">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="h-5 w-5 text-emerald-500" />
                <span className="text-gray-600 dark:text-gray-300">support@expensetracker.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="h-5 w-5 text-emerald-500" />
                <span className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="h-5 w-5 text-emerald-500" />
                <span className="text-gray-600 dark:text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Stay Updated</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Get the latest updates and financial tips delivered to your inbox.
            </p>
            <div className="">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500 text-gray-900 dark:text-white"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-800 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            © 2025 Expense Tracker. All rights reserved. Built with ❤️ for better financial management.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
