import moment from "moment"
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export const getInitials = (name) => {
  if (!name) return ""
  const words = name.split(" ");
  let initials = ""

  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i][0];
  }
  return initials.toUpperCase()
}


export const addThousandsSeparator = (num) => {
  if (num == null || isNaN(num)) return ""
  const [integerPart, fractionalPart] = num.toString().split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return fractionalPart ? `${formattedInteger}.${fractionalPart}` : formattedInteger;

}

export const prepareExpenseBarChartData = (data = []) => {
  const chartData = data.map((item) => ({
    month: moment(item?.date).format('Do MMM'),
    category: item?.category,
    amount: item?.amount,
  }))
  return chartData;
}

export const prepareIncomeBarChartData = (data = []) => {
  const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date))

  const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format('Do MMM'),
    amount: item?.amount,
    source: item?.source,
  }))
  return chartData;
}

export const prepareExpenseLineChartData = (data = []) => {
  const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date))
  const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format('Do MMM'),
    amount: item?.amount,
    category: item?.category,
  }))
  return chartData;
}

// Add this function to your utils/helper.js file

export const prepareTransactionChartData = (transactions) => {
    if (!transactions || !Array.isArray(transactions)) {
        return [];
    }

    // Group transactions by month and type
    const monthlyData = {};
    
    transactions.forEach(transaction => {
        const date = new Date(transaction.date);
        const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        const monthName = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
        
        if (!monthlyData[monthKey]) {
            monthlyData[monthKey] = {
                month: monthName,
                income: 0,
                expense: 0,
                netAmount: 0,
                transactionCount: 0
            };
        }
        
        const amount = parseFloat(transaction.amount) || 0;
        monthlyData[monthKey].transactionCount += 1;
        
        if (transaction.type === 'income') {
            monthlyData[monthKey].income += amount;
        } else if (transaction.type === 'expense') {
            monthlyData[monthKey].expense += amount;
        }
        
        // Calculate net amount (income - expense)
        monthlyData[monthKey].netAmount = monthlyData[monthKey].income - monthlyData[monthKey].expense;
    });
    
    // Convert to array and sort by date
    const sortedData = Object.keys(monthlyData)
        .sort()
        .map(key => monthlyData[key])
        .slice(-12); // Show last 12 months
    
    return sortedData;
};

// Keep the old function for backward compatibility if needed elsewhere
export const prepareTransactionBarChartData = prepareTransactionChartData;

