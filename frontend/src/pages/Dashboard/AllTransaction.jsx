import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import axiosInstance from '../../utils/axiosInstance'
import { API_PATHS } from '../../utils/apiPaths'
import Modal from '../../components/Modal'
import toast from 'react-hot-toast'
import DeleteAlert from '../../components/DeleteAlert'
import { useUserAuth } from '../../hooks/useUserAuth'
import TransactionList from '../../components/AllTransaction/TransactionList'
import TransactionOverview from '../../components/AllTransaction/TransactionOverview'

const AllTransaction = () => {
    useUserAuth()
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

    // Handle download all transactions
    const handleDownloadAllTransactions = async () => {
        try {
            // You might need to create a new API endpoint for downloading all transactions
            // For now, I'll show how it could work with a hypothetical endpoint
            const response = await axiosInstance.get(
                `${API_PATHS.DASHBOARD.DOWNLOAD_ALL_TRANSACTIONS}`, // You'll need to add this to your API_PATHS
                {
                    responseType: "blob",
                }
            )
            
            // Create a URL for the blob
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

    // Handle download income details only
    const handleDownloadIncomeDetails = async () => {
        try {
            const response = await axiosInstance.get(
                API_PATHS.INCOME.DOWNLOAD_INCOME,
                {
                    responseType: "blob",
                }
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

    // Handle download expense details only
    const handleDownloadExpenseDetails = async () => {
        try {
            const response = await axiosInstance.get(
                API_PATHS.EXPENSE.DOWNLOAD_EXPENSE, // Assuming this exists similar to income
                {
                    responseType: "blob",
                }
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

    // Refresh transactions
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
            <div className="my-5 mx-auto">
                <div className="grid grid-cols-1 gap-6">
                    {/* Transaction Overview Section */}
                    <div className="">
                        <TransactionOverview
                            transactions={transactionData?.recentTransactions}
                            loading={loading}
                            onRefresh={handleRefresh}
                            onDownloadAll={handleDownloadAllTransactions}
                            onDownloadIncome={handleDownloadIncomeDetails}
                            onDownloadExpense={handleDownloadExpenseDetails}
                        />
                    </div>

                    {/* Transaction List Section */}
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
                    />
                </div>

                {/* Delete Confirmation Modal */}
                <Modal
                    isOpen={openDeleteAlert.show}
                    onClose={() => setOpenDeleteAlert({ show: false, data: null, type: null })}
                    title={`Delete ${openDeleteAlert.type === 'income' ? 'Income' : 'Expense'}`}
                >
                    <DeleteAlert
                        content={`Are you sure you want to delete this ${openDeleteAlert.type === 'income' ? 'income' : 'expense'} transaction?`}
                        onDelete={() => deleteTransaction(openDeleteAlert.data, openDeleteAlert.type)}
                    />
                </Modal>
            </div>
        </DashboardLayout>
    )
}

export default AllTransaction