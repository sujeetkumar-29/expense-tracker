import React, { useState } from 'react'
import TransactionInfoCard from '../Cards/TransactionInfoCard'
import moment from 'moment'
import { LuDownload, LuRefreshCw, LuFilter } from 'react-icons/lu'

const TransactionList = ({ 
    transactions = [], 
    loading = false,
    onDelete, 
    onDownloadAll, 
    onDownloadIncome, 
    onDownloadExpense, 
    onRefresh 
}) => {
    const [filter, setFilter] = useState('all') // 'all', 'income', 'expense'
    const [sortBy, setSortBy] = useState('date') // 'date', 'amount'
    const [sortOrder, setSortOrder] = useState('desc') // 'asc', 'desc'

    // Filter transactions based on selected filter
    const filteredTransactions = transactions?.filter(transaction => {
        if (filter === 'all') return true
        return transaction.type === filter
    }) || []

    // Sort transactions
    const sortedTransactions = [...filteredTransactions].sort((a, b) => {
        let aValue, bValue
        
        if (sortBy === 'date') {
            aValue = new Date(a.date)
            bValue = new Date(b.date)
        } else if (sortBy === 'amount') {
            aValue = parseFloat(a.amount)
            bValue = parseFloat(b.amount)
        }
        
        if (sortOrder === 'asc') {
            return aValue > bValue ? 1 : -1
        } else {
            return aValue < bValue ? 1 : -1
        }
    })

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter)
    }

    const handleSortChange = (newSortBy) => {
        if (sortBy === newSortBy) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
        } else {
            setSortBy(newSortBy)
            setSortOrder('desc')
        }
    }

    return (
        <div className="card">
            {/* Header with title and action buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                <div>
                    <h5 className="text-lg dark:text-white">All Transactions</h5>
                    <p className="text-xs text-gray-400 mt-0.5">
                        View and manage all your income and expense transactions
                    </p>
                </div>
                
                <div className="flex flex-wrap items-center gap-2">
                    {/* Refresh Button */}
                    {/* <button 
                        className="card-btn flex items-center gap-2" 
                        onClick={onRefresh}
                        disabled={loading}
                    >
                        <LuRefreshCw className={`text-base ${loading ? 'animate-spin' : ''}`} />
                        Refresh
                    </button> */}

                    {/* Download Dropdown */}
                    <div className="">
                        <button className="card-btn flex items-center gap-2" onClick={onDownloadAll} >
                            <LuDownload className="text-base" />
                            Download
                        </button>
                        {/* <div className="absolute right-0 top-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 min-w-[160px]">
                            <button 
                                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 rounded-t-lg"
                                
                            >
                                All Transactions
                            </button>
                            <button 
                                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                                onClick={onDownloadIncome}
                            >
                                Income Only
                            </button>
                            <button 
                                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 rounded-b-lg"
                                onClick={onDownloadExpense}
                            >
                                Expenses Only
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Filters and Sorting */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                {/* Filter Buttons */}
                {/* <div className="flex items-center gap-2">
                    <LuFilter className="text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Filter:</span>
                    <div className="flex gap-1">
                        {['all', 'income', 'expense'].map((filterType) => (
                            <button
                                key={filterType}
                                className={`px-3 py-1 rounded-full text-xs capitalize transition-colors ${
                                    filter === filterType
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
                                }`}
                                onClick={() => handleFilterChange(filterType)}
                            >
                                {filterType}
                            </button>
                        ))}
                    </div>
                </div> */}

                {/* Sort Buttons */}
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>
                    <div className="flex gap-1">
                        {['date', 'amount'].map((sortType) => (
                            <button
                                key={sortType}
                                className={`px-3 py-1 rounded-full text-xs capitalize transition-colors flex items-center gap-1 ${
                                    sortBy === sortType
                                        ? 'bg-green-500 text-white'
                                        : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
                                }`}
                                onClick={() => handleSortChange(sortType)}
                            >
                                {sortType}
                                {sortBy === sortType && (
                                    <span className="text-xs">
                                        {sortOrder === 'asc' ? '↑' : '↓'}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-sm text-blue-600 dark:text-blue-400">Total</div>
                    <div className="text-lg font-semibold dark:text-white">{sortedTransactions.length}</div>
                </div>
                <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div className="text-sm text-green-600 dark:text-green-400">Income</div>
                    <div className="text-lg font-semibold dark:text-white">
                        {sortedTransactions.filter(t => t.type === 'income').length}
                    </div>
                </div>
                <div className="text-center p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <div className="text-sm text-red-600 dark:text-red-400">Expenses</div>
                    <div className="text-lg font-semibold dark:text-white">
                        {sortedTransactions.filter(t => t.type === 'expense').length}
                    </div>
                </div>
                {/* <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="text-sm text-purple-600 dark:text-purple-400">Net</div>
                    <div className="text-lg font-semibold dark:text-white">
                        {sortedTransactions.filter(t => t.type === 'income').length - 
                         sortedTransactions.filter(t => t.type === 'expense').length}
                    </div>
                </div> */}
            </div>

            {/* Loading State */}
            {loading && (
                <div className="flex justify-center items-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    <span className="ml-2 text-gray-600 dark:text-gray-400">Loading transactions...</span>
                </div>
            )}

            {/* Transactions Grid */}
            {!loading && (
                <>
                    {sortedTransactions.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {sortedTransactions.map((transaction) => (
                                <TransactionInfoCard
                                    key={transaction._id}
                                    title={transaction.type === 'income' ? transaction.source : transaction.category}
                                    icon={transaction.icon}
                                    date={moment(transaction.date).format("Do MMM YYYY")}
                                    amount={transaction.amount}
                                    type={transaction.type}
                                    onDelete={() => onDelete(transaction._id, transaction.type)}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-8">
                            <div className="text-gray-400 dark:text-gray-600 text-lg mb-2">No transactions found</div>
                            <div className="text-gray-500 dark:text-gray-500 text-sm">
                                {filter !== 'all' 
                                    ? `No ${filter} transactions match your current filter`
                                    : 'Start by adding some income or expense transactions'
                                }
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}

export default TransactionList