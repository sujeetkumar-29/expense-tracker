import React, { useEffect, useState } from 'react'
import CustomTransactionChart from "../Charts/CustomTransactionChart"
import { prepareTransactionChartData } from '../../utils/helper'

const TransactionOverview = ({ transactions, loading }) => {
    const [chartData, setChartData] = useState([])

    useEffect(() => {
        if (transactions && transactions.length > 0) {
            const result = prepareTransactionChartData(transactions)
            setChartData(result)
        }
        return () => { }
    }, [transactions])

    return (
        <div className="card">
            <div className="mb-4">
                <h5 className="text-lg dark:text-white">Transaction Overview</h5>
                <p className="text-xs text-gray-400 mt-0.5">
                    Track all your transactions and analyze your financial patterns over time.
                </p>
            </div>

            <div className="mt-10">
                {chartData.length > 0 ? (
                    <CustomTransactionChart data={chartData} />
                ) : (
                    <div className="flex items-center justify-center h-64 text-gray-500 dark:text-gray-400">
                        {loading ? 'Loading chart data...' : 'No transaction data available for chart'}
                    </div>
                )}
            </div>
        </div>
    )
}

export default TransactionOverview
