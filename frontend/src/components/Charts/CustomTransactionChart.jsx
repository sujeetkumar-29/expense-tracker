import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Area,
    ComposedChart,
    Bar
} from "recharts";

const CustomTransactionChart = ({ data }) => {
    
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">{label}</p>
                    {payload.map((entry, index) => (
                        <div key={index} className="flex items-center gap-2 mb-1">
                            <div 
                                className="w-3 h-3 rounded-full" 
                                style={{ backgroundColor: entry.color }}
                            />
                            <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                                {entry.dataKey}:
                            </span>
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                ₹{entry.value?.toLocaleString()}
                            </span>
                        </div>
                    ))}
                    {/* Show net amount */}
                    {payload.length > 1 && (
                        <div className="border-t border-gray-200 dark:border-gray-600 pt-2 mt-2">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                    Net Amount:
                                </span>
                                <span className={`text-sm font-bold ${
                                    (payload[0]?.value || 0) - (payload[1]?.value || 0) >= 0 
                                        ? 'text-green-600 dark:text-green-400' 
                                        : 'text-red-600 dark:text-red-400'
                                }`}>
                                    ₹{((payload[0]?.value || 0) - (payload[1]?.value || 0)).toLocaleString()}
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            )
        }
        return null
    }

    const CustomLegend = ({ payload }) => {
        return (
            <div className="flex justify-center gap-6 mt-4">
                {payload?.map((entry, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <div 
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: entry.color }}
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                            {entry.value}
                        </span>
                    </div>
                ))}
            </div>
        )
    }

    // Calculate the maximum value for better Y-axis scaling
    const maxValue = Math.max(
        ...data.map(item => Math.max(item.income || 0, item.expense || 0))
    );

    return (
        <div className="bg-white dark:bg-gray-900 mt-6">
            <ResponsiveContainer width="100%" height={350}>
                <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid 
                        strokeDasharray="3 3" 
                        stroke="#e0e7ff" 
                        className="dark:stroke-gray-700"
                    />
                    <XAxis 
                        dataKey="month" 
                        tick={{ fontSize: 12, fill: "#6b7280" }} 
                        stroke="#9ca3af"
                        className="dark:stroke-gray-500"
                    />
                    <YAxis 
                        tick={{ fontSize: 12, fill: "#6b7280" }} 
                        stroke="#9ca3af"
                        className="dark:stroke-gray-500"
                        tickFormatter={(value) => `₹${value.toLocaleString()}`}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend content={<CustomLegend />} />
                    
                    {/* Income Line */}
                    <Line
                        type="monotone"
                        dataKey="income"
                        stroke="#10b981"
                        strokeWidth={3}
                        dot={{ 
                            fill: "#10b981", 
                            strokeWidth: 2, 
                            r: 5,
                            className: "hover:r-7 transition-all"
                        }}
                        activeDot={{ 
                            r: 7, 
                            fill: "#059669",
                            stroke: "#ffffff",
                            strokeWidth: 2
                        }}
                        name="income"
                    />
                    
                    {/* Expense Line */}
                    <Line
                        type="monotone"
                        dataKey="expense"
                        stroke="#ef4444"
                        strokeWidth={3}
                        dot={{ 
                            fill: "#ef4444", 
                            strokeWidth: 2, 
                            r: 5,
                            className: "hover:r-7 transition-all"
                        }}
                        activeDot={{ 
                            r: 7, 
                            fill: "#dc2626",
                            stroke: "#ffffff",
                            strokeWidth: 2
                        }}
                        name="expense"
                    />
                    
                    {/* Net Amount Bars (subtle background bars) */}
                    <Bar
                        dataKey="netAmount"
                        fill="#f3f4f6"
                        fillOpacity={0.3}
                        stroke="#d1d5db"
                        strokeWidth={1}
                        radius={[4, 4, 0, 0]}
                        name="net amount"
                    />
                </ComposedChart>
            </ResponsiveContainer>
            
            {/* Chart Summary */}
            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="space-y-1">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Total Income</p>
                        <p className="text-lg font-semibold text-green-600 dark:text-green-400">
                            ₹{data.reduce((sum, item) => sum + (item.income || 0), 0).toLocaleString()}
                        </p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Total Expenses</p>
                        <p className="text-lg font-semibold text-red-600 dark:text-red-400">
                            ₹{data.reduce((sum, item) => sum + (item.expense || 0), 0).toLocaleString()}
                        </p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Net Amount</p>
                        <p className={`text-lg font-semibold ${
                            data.reduce((sum, item) => sum + ((item.income || 0) - (item.expense || 0)), 0) >= 0
                                ? 'text-green-600 dark:text-green-400'
                                : 'text-red-600 dark:text-red-400'
                        }`}>
                            ₹{data.reduce((sum, item) => sum + ((item.income || 0) - (item.expense || 0)), 0).toLocaleString()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomTransactionChart