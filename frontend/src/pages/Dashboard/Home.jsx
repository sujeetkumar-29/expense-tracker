import React, { useState, useEffect } from 'react';
import { 
  FiPlus, 
  FiDollarSign, 
  FiTrendingUp, 
  FiTrendingDown, 
  FiPieChart, 
  FiCalendar,
  FiEye,
  FiEyeOff,
  FiFilter,
  FiSearch,
  FiBell,
  FiSettings,
  FiUser,
  FiMoreHorizontal
} from 'react-icons/fi';
import { 
  IoWalletOutline,
  IoHomeOutline,
  IoCarOutline,
  IoRestaurantOutline,
  IoGameControllerOutline,
  IoHeartOutline,
  IoCartOutline
} from 'react-icons/io5';
import { 
  MdFastfood,
  MdDirectionsCar,
  MdHome,
  MdSportsEsports,
  MdFavorite,
  MdShoppingCart
} from 'react-icons/md';

const ExpenseTrackerHome = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newExpense, setNewExpense] = useState({
    type: 'expense',
    amount: '',
    category: 'food',
    description: '',
    date: new Date().toISOString().split('T')[0]
  });

  // Sample data
  const [expenses, setExpenses] = useState([
    { id: 1, type: 'expense', amount: 45.99, category: 'food', description: 'Lunch at restaurant', date: '2024-07-06', icon: MdFastfood },
    { id: 2, type: 'income', amount: 2500.00, category: 'salary', description: 'Monthly salary', date: '2024-07-05', icon: FiDollarSign },
    { id: 3, type: 'expense', amount: 89.50, category: 'transport', description: 'Gas fill-up', date: '2024-07-04', icon: MdDirectionsCar },
    { id: 4, type: 'expense', amount: 129.99, category: 'shopping', description: 'Grocery shopping', date: '2024-07-03', icon: MdShoppingCart },
    { id: 5, type: 'expense', amount: 599.99, category: 'home', description: 'Rent payment', date: '2024-07-02', icon: MdHome },
    { id: 6, type: 'expense', amount: 29.99, category: 'entertainment', description: 'Movie tickets', date: '2024-07-01', icon: MdSportsEsports }
  ]);

  const categories = [
    { id: 'food', name: 'Food & Dining', icon: MdFastfood, color: 'bg-orange-500' },
    { id: 'transport', name: 'Transportation', icon: MdDirectionsCar, color: 'bg-blue-500' },
    { id: 'shopping', name: 'Shopping', icon: MdShoppingCart, color: 'bg-green-500' },
    { id: 'home', name: 'Home & Bills', icon: MdHome, color: 'bg-purple-500' },
    { id: 'entertainment', name: 'Entertainment', icon: MdSportsEsports, color: 'bg-pink-500' },
    { id: 'health', name: 'Health & Fitness', icon: MdFavorite, color: 'bg-red-500' }
  ];

  const totalBalance = expenses.reduce((sum, expense) => {
    return expense.type === 'income' ? sum + expense.amount : sum - expense.amount;
  }, 0);

  const totalIncome = expenses.filter(e => e.type === 'income').reduce((sum, e) => sum + e.amount, 0);
  const totalExpenses = expenses.filter(e => e.type === 'expense').reduce((sum, e) => sum + e.amount, 0);

  const handleAddExpense = () => {
    if (newExpense.amount && newExpense.description) {
      const expense = {
        id: Date.now(),
        ...newExpense,
        amount: parseFloat(newExpense.amount),
        icon: categories.find(c => c.id === newExpense.category)?.icon || FiDollarSign
      };
      setExpenses([expense, ...expenses]);
      setNewExpense({
        type: 'expense',
        amount: '',
        category: 'food',
        description: '',
        date: new Date().toISOString().split('T')[0]
      });
      setShowAddModal(false);
    }
  };

  const filteredExpenses = expenses.filter(expense => {
    const matchesSearch = expense.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || expense.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <IoWalletOutline className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ExpenseTracker
                </h1>
                <p className="text-sm text-gray-500">Manage your finances</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">
                <FiBell className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">
                <FiSettings className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">
                <FiUser className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John! 👋</h2>
          <p className="text-gray-600">Here's an overview of your financial activity</p>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Balance */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-100 text-sm font-medium">Total Balance</span>
                <button onClick={() => setShowBalance(!showBalance)} className="text-blue-100 hover:text-white transition-colors">
                  {showBalance ? <FiEye className="w-5 h-5" /> : <FiEyeOff className="w-5 h-5" />}
                </button>
              </div>
              <div className="text-3xl font-bold mb-1">
                {showBalance ? formatCurrency(totalBalance) : '••••••'}
              </div>
              <div className="flex items-center text-blue-100">
                <FiTrendingUp className="w-4 h-4 mr-1" />
                <span className="text-sm">+12.5% from last month</span>
              </div>
            </div>
          </div>

          {/* Income */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <FiTrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">This Month</p>
                <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalIncome)}</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-600">Income</span>
              <div className="ml-auto flex items-center text-green-600">
                <span className="text-sm font-medium">+8.2%</span>
              </div>
            </div>
          </div>

          {/* Expenses */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <FiTrendingDown className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">This Month</p>
                <p className="text-2xl font-bold text-gray-900">{formatCurrency(totalExpenses)}</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-600">Expenses</span>
              <div className="ml-auto flex items-center text-red-600">
                <span className="text-sm font-medium">+3.1%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Quick Actions</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setNewExpense(prev => ({...prev, category: category.id}));
                    setShowAddModal(true);
                  }}
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-blue-200 group"
                >
                  <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 text-center">{category.name}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filters and Search */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-4">
              <h3 className="text-xl font-semibold text-gray-900">Recent Transactions</h3>
              <button 
                onClick={() => setShowAddModal(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
              >
                <FiPlus className="w-4 h-4" />
                <span>Add New</span>
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <FiSearch className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search transactions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Transactions List */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="divide-y divide-gray-100">
            {filteredExpenses.map((expense) => {
              const IconComponent = expense.icon;
              const category = categories.find(c => c.id === expense.category);
              return (
                <div key={expense.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${category?.color || 'bg-gray-500'} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{expense.description}</h4>
                        <p className="text-sm text-gray-500">{category?.name || 'Other'} • {expense.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-semibold ${expense.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                        {expense.type === 'income' ? '+' : '-'}{formatCurrency(expense.amount)}
                      </div>
                      <button className="text-gray-400 hover:text-gray-600 mt-1">
                        <FiMoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Add Transaction Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Add Transaction</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setNewExpense(prev => ({...prev, type: 'expense'}))}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      newExpense.type === 'expense' 
                        ? 'border-red-500 bg-red-50 text-red-700' 
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <FiTrendingDown className="w-5 h-5 mx-auto mb-1" />
                    <span className="text-sm font-medium">Expense</span>
                  </button>
                  <button
                    onClick={() => setNewExpense(prev => ({...prev, type: 'income'}))}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      newExpense.type === 'income' 
                        ? 'border-green-500 bg-green-50 text-green-700' 
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <FiTrendingUp className="w-5 h-5 mx-auto mb-1" />
                    <span className="text-sm font-medium">Income</span>
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                  <div className="relative">
                    <FiDollarSign className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="number"
                      step="0.01"
                      placeholder="0.00"
                      value={newExpense.amount}
                      onChange={(e) => setNewExpense(prev => ({...prev, amount: e.target.value}))}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={newExpense.category}
                    onChange={(e) => setNewExpense(prev => ({...prev, category: e.target.value}))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <input
                    type="text"
                    placeholder="Enter description..."
                    value={newExpense.description}
                    onChange={(e) => setNewExpense(prev => ({...prev, description: e.target.value}))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    value={newExpense.date}
                    onChange={(e) => setNewExpense(prev => ({...prev, date: e.target.value}))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex space-x-4 mt-6">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-3 px-4 border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddExpense}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-200"
                >
                  Add Transaction
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseTrackerHome;