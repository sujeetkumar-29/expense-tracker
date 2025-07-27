import Income from "../models/Income.js";
import Expense from "../models/Expense.js";
import xlsx from 'xlsx';
import { isValidObjectId, Types } from "mongoose";

// Dashboard data controller
export const getDashboardData = async (req, res) => {
    try {
        const userId = req.user.id;
        const userObjectId = new Types.ObjectId(String(userId));

        // Fetch total income & expenses
        const totalIncome = await Income.aggregate([
            { $match: { userId: userObjectId } },
            { $group: { _id: null, total: { $sum: "$amount" } } },
        ]);

        const totalExpense = await Expense.aggregate([
            { $match: { userId: userObjectId } },
            { $group: { _id: null, total: { $sum: "$amount" } } },
        ]);

        // Get income transactions in the last 60 days
        const last60DaysIncomeTransactions = await Income.find({
            userId,
            date: { $gte: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000) },
        }).sort({ date: -1 });

        // Get total income for last 60 days
        const incomeLast60Days = last60DaysIncomeTransactions.reduce(
            (sum, transaction) => sum + transaction.amount, 0
        );

        // Get Expense transactions in the last 30 days
        const last30DaysExpenseTransactions = await Expense.find({
            userId,
            date: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
        }).sort({ date: -1 });

        // Get total expense for last 30 days
        const expensesLast30Days = last30DaysExpenseTransactions.reduce(
            (sum, transaction) => sum + transaction.amount, 0
        );

        // Fetch last transactions (income+ expense)
        const lastTransactions = [
            ...(await Income.find({ userId }).sort({ date: -1 }).limit()).map(txn => ({
                ...txn.toObject(),
                type: "income",
            })),
            ...(await Expense.find({ userId }).sort({ date: -1 }).limit()).map(txn => ({
                ...txn.toObject(),
                type: "expense",
            })),
        ].sort((a, b) =>
            b.date - a.date
        );

        // Final Response
        res.json({
            totalBalance:
                (totalIncome[0]?.total || 0) - (totalExpense[0]?.total || 0),
            totalIncome: totalIncome[0]?.total || 0,
            totalExpenses: totalExpense[0]?.total || 0,
            last30DaysExpenses: {
                total: expensesLast30Days,
                transactions: last30DaysExpenseTransactions,
            },
            last60DaysIncome: {
                total: incomeLast60Days,
                transactions: last60DaysIncomeTransactions, 
            },
            recentTransactions: lastTransactions,
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

// Download All Transactions as Excel
export const downloadAllTransactionsExcel = async (req, res) => {
    const userId = req.user.id;
    try {
        // Fetch all income transactions
        const incomeTransactions = await Income.find({ userId }).sort({ date: -1 });
        
        // Fetch all expense transactions
        const expenseTransactions = await Expense.find({ userId }).sort({ date: -1 });

        // Combine all transactions and prepare data for Excel
        const allTransactions = [
            ...incomeTransactions.map((item) => ({
                Date: item.date,
                Type: "Income",
                Category: item.source,
                Amount: item.amount,
                // Icon: item.icon || '',
            })),
            ...expenseTransactions.map((item) => ({
                Date: item.date,
                Type: "Expense", 
                Category: item.category,
                Amount: item.amount,
                // Icon: item.icon || '',
            }))
        ].sort((a, b) => new Date(b.Date) - new Date(a.Date)); // Sort by date descending

        // Create workbook with multiple sheets
        const wb = xlsx.utils.book_new();

        // Sheet 1: All Transactions
        const allTransactionsSheet = xlsx.utils.json_to_sheet(allTransactions);
        xlsx.utils.book_append_sheet(wb, allTransactionsSheet, 'All Transactions');

        // Sheet 2: Income Only
        const incomeData = incomeTransactions.map((item) => ({
            Date: item.date,
            Source: item.source,
            Amount: item.amount,
            // Icon: item.icon || '',
        }));
        const incomeSheet = xlsx.utils.json_to_sheet(incomeData);
        xlsx.utils.book_append_sheet(wb, incomeSheet, 'Income Details');

        // Sheet 3: Expenses Only
        const expenseData = expenseTransactions.map((item) => ({
            Date: item.date,
            Category: item.category,
            Amount: item.amount,
            // Icon: item.icon || '',
        }));
        const expenseSheet = xlsx.utils.json_to_sheet(expenseData);
        xlsx.utils.book_append_sheet(wb, expenseSheet, 'Expense Details');

        // Sheet 4: Summary
        const totalIncome = incomeTransactions.reduce((sum, item) => sum + item.amount, 0);
        const totalExpenses = expenseTransactions.reduce((sum, item) => sum + item.amount, 0);
        const netBalance = totalIncome - totalExpenses;

        const summaryData = [
            { Metric: 'Total Income', Amount: totalIncome },
            { Metric: 'Total Expenses', Amount: totalExpenses },
            { Metric: 'Net Balance', Amount: netBalance },
            { Metric: 'Total Transactions', Amount: allTransactions.length },
            { Metric: 'Income Transactions', Amount: incomeTransactions.length },
            { Metric: 'Expense Transactions', Amount: expenseTransactions.length },
        ];
        const summarySheet = xlsx.utils.json_to_sheet(summaryData);
        xlsx.utils.book_append_sheet(wb, summarySheet, 'Summary');

        // Write file and send for download
        xlsx.writeFile(wb, 'all_transactions.xlsx');
        res.download('all_transactions.xlsx');

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}