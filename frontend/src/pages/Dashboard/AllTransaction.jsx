import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import axiosInstance from '../../utils/axiosInstance'
import { API_PATHS } from '../../utils/apiPaths'
import Modal from '../../components/Modal'
import toast from 'react-hot-toast'
import DeleteAlert from '../../components/DeleteAlert'
import { useUserAuth } from '../../hooks/useUserAuth'
import { useResponsive } from '../../hooks/useResponsive'
import TransactionList from '../../components/AllTransaction/TransactionList'
import TransactionOverview from '../../components/AllTransaction/TransactionOverview'

const AllTransaction = () => {
    useUserAuth()
    const { isMobile, isTablet } = useResponsive()
    const [transactionData, setTransactionData] = useState([])
    const [loading, setLoading] = useState(false)

    const [openDeleteAlert, setOpenDeleteAlert] = useState({
        show: false,
        data: null,
        type: null, // 'income' or 'expense'
    })

    // Get All Transaction Details
    const fetchTransactionDetails = async () => {
        if (loading) return;
        setLoading(true);
        try {
            const response = await axiosInstance.get(`${API_PATHS.DASHBOARD.GET_DATA}`)

            if (response.data) {
                setTransactionData(response.data);
            }
        } catch (error) {
            console.log("Something went wrong. Please try later", error)
            toast.error("Failed to fetch transactions")
        } finally {
            setLoading(false);
        }
    }

    // Delete Transaction (Income or Expense)
    const deleteTransaction = async (id, type) => {
        try {
            const endpoint = type === 'income' 
                ? API_PATHS.INCOME.DELETE_INCOME(id)
                : API_PATHS.EXPENSE.DELETE_EXPENSE(id);
            
            await axiosInstance.delete(endpoint)
            setOpenDeleteAlert({ show: false, data: null, type: null });
            toast.success(`${type === 'income' ? 'Income' : 'Expense'} deleted successfully`);
            fetchTransactionDetails();
        } catch (error) {
            console.error(
                `Error deleting ${type}:`,
                error.response?.data?.message || error.message
            )
            toast.error(`Failed to delete ${type}`)
        }
    }

    // Download handlers
    const handleDownloadAllTransactions = async () => {
        try {
            const response = await axiosInstance.get(
                `${API_PATHS.DASHBOARD.DOWNLOAD_ALL_TRANSACTIONS}`,
                { responseType: "blob" }
            )
            
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement("a")
            link.href = url
            link.setAttribute("download", "all_transactions.xlsx")
            document.body.appendChild(link)
            link.click()
            link.parentNode.removeChild(link)
            window.URL.revokeObjectURL(url)
            
            toast.success("Transactions downloaded successfully")
        } catch (error) {
            console.error("Error downloading transactions:", error)
            toast.error("Failed to download transactions. Please try again.")
        }
    }

    const handleDownloadIncomeDetails = async () => {
        try {
            const response = await axiosInstance.get(
                API_PATHS.INCOME.DOWNLOAD_INCOME,
                { responseType: "blob" }
            )
            
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement("a")
            link.href = url
            link.setAttribute("download", "income_details.xlsx")
            document.body.appendChild(link)
            link.click()
            link.parentNode.removeChild(link)
            window.URL.revokeObjectURL(url)
            
            toast.success("Income details downloaded successfully")
        } catch (error) {
            console.error("Error downloading income details:", error)
            toast.error("Failed to download income details. Please try again.")
        }
    }

    const handleDownloadExpenseDetails = async () => {
        try {
            const response = await axiosInstance.get(
                API_PATHS.EXPENSE.DOWNLOAD_EXPENSE,
                { responseType: "blob" }
            )
            
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement("a")
            link.href = url
            link.setAttribute("download", "expense_details.xlsx")
            document.body.appendChild(link)
            link.click()
            link.parentNode.removeChild(link)
            window.URL.revokeObjectURL(url)
            
            toast.success("Expense details downloaded successfully")
        } catch (error) {
            console.error("Error downloading expense details:", error)
            toast.error("Failed to download expense details. Please try again.")
        }
    }

    const handleRefresh = () => {
        fetchTransactionDetails()
        toast.success("Transactions refreshed")
    }

    useEffect(() => {
        fetchTransactionDetails()
        return () => { }
    }, [])

    return (
        <DashboardLayout activeMenu="All Transaction">
            {/* Responsive spacing and layout */}
            <div className={`space-y-4 ${isMobile ? 'sm:space-y-6' : 'sm:space-y-6 lg:space-y-8'}`}>
                {/* Page Header - Responsive */}
                <div className={`
                    bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700
                    ${isMobile ? 'p-4' : 'p-6'}
                `}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div>
                            <h1 className={`
                                font-bold text-gray-900 dark:text-white
                                ${isMobile ? 'text-xl' : 'text-2xl lg:text-3xl'}
                            `}>
                                All Transactions
                            </h1>
                            <p className={`
                                text-gray-600 dark:text-gray-400 mt-1
                                ${isMobile ? 'text-sm' : 'text-base'}
                            `}>
                                Manage and view all your income and expense transactions
                            </p>
                        </div>
                        
                        {/* Quick action buttons for mobile */}
                        {isMobile && (
                            <div className="flex gap-2">
                                <button
                                    onClick={handleRefresh}
                                    className="px-3 py-2 text-sm bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                                >
                                    Refresh
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Transaction Overview Section - Responsive */}
                <div className={`
                    bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700
                    ${isMobile ? 'overflow-x-auto' : ''}
                `}>
                    <TransactionOverview
                        transactions={transactionData?.recentTransactions}
                        loading={loading}
                        onRefresh={handleRefresh}
                        onDownloadAll={handleDownloadAllTransactions}
                        onDownloadIncome={handleDownloadIncomeDetails}
                        onDownloadExpense={handleDownloadExpenseDetails}
                        isMobile={isMobile}
                    />
                </div>

                {/* Transaction List Section - Responsive */}
                <div className={`
                    bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700
                    ${isMobile ? 'overflow-x-auto' : ''}
                `}>
                    <TransactionList
                        transactions={transactionData?.recentTransactions}
                        loading={loading}
                        onDelete={(id, type) => {
                            setOpenDeleteAlert({ show: true, data: id, type: type });
                        }}
                        onDownloadAll={handleDownloadAllTransactions}
                        onDownloadIncome={handleDownloadIncomeDetails}
                        onDownloadExpense={handleDownloadExpenseDetails}
                        onRefresh={handleRefresh}
                        isMobile={isMobile}
                        isTablet={isTablet}
                    />
                </div>

                {/* Delete Confirmation Modal - Mobile optimized */}
                <Modal
                    isOpen={openDeleteAlert.show}
                    onClose={() => setOpenDeleteAlert({ show: false, data: null, type: null })}
                    title={`Delete ${openDeleteAlert.type === 'income' ? 'Income' : 'Expense'}`}
                    isMobile={isMobile}
                >
                    <DeleteAlert
                        content={`Are you sure you want to delete this ${openDeleteAlert.type === 'income' ? 'income' : 'expense'} transaction?`}
                        onDelete={() => deleteTransaction(openDeleteAlert.data, openDeleteAlert.type)}
                        isMobile={isMobile}
                    />
                </Modal>
            </div>
        </DashboardLayout>
    )
}

export default AllTransaction