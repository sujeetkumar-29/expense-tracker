# Expense Tracker Application

A full-stack expense tracking application built with React.js frontend and Node.js backend. This application helps users manage their personal finances by tracking income and expenses with visual analytics and reporting features.

## 🚀 Features

- **User Authentication**: Secure login and registration system
- **Dashboard Analytics**: Visual representation of financial data with charts and graphs
- **Expense Management**: Add, edit, delete, and categorize expenses
- **Income Tracking**: Record and manage multiple income sources
- **Transaction History**: View all transactions with filtering and search capabilities
- **Dark/Light Mode**: Toggle between themes for better user experience
- **Data Export**: Export financial data to Excel format
- **Responsive Design**: Mobile-friendly interface
- **Real-time Updates**: Live data synchronization

## 🛠️ Tech Stack

### Frontend
- **React.js** - User interface library
- **Vite** - Build tool and development server
- **CSS3** - Styling and animations
- **Chart.js/Recharts** - Data visualization
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Multer** - File upload middleware
- **ExcelJS** - Excel file generation

## 📁 Project Structure

```
sujeetkumar-29-expense-tracker/
├── README.md
├── backend/                 # Backend API server
│   ├── config/             # Database configuration
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   └── server.js           # Entry point
└── frontend/               # React frontend
    ├── src/
    │   ├── components/     # Reusable components
    │   ├── pages/          # Page components
    │   ├── context/        # React context providers
    │   ├── hooks/          # Custom hooks
    │   └── utils/          # Utility functions
    └── public/             # Static assets
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sujeetkumar-29/expense-tracker.git
   cd sujeetkumar-29-expense-tracker
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/expense-tracker
   JWT_SECRET=your-jwt-secret-key
   ```
   
   Start the backend server:
   ```bash
   npm start
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```
   
   Start the development server:
   ```bash
   npm run dev
   ```

4. **Access the Application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:8000`

## 📱 Usage

1. **Sign Up**: Create a new account or log in with existing credentials
2. **Dashboard**: View your financial overview with charts and recent transactions
3. **Add Income**: Record your income sources with categories and amounts
4. **Track Expenses**: Log your expenses with categories, descriptions, and amounts
5. **View Transactions**: Browse all your financial transactions with filtering options
6. **Analytics**: Analyze your spending patterns with visual charts
7. **Export Data**: Download your financial data in Excel format

## 🎯 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Dashboard
- `GET /api/dashboard/overview` - Get financial overview

### Income
- `GET /api/income` - Get all income records
- `POST /api/income` - Add new income
- `PUT /api/income/:id` - Update income
- `DELETE /api/income/:id` - Delete income

### Expenses
- `GET /api/expenses` - Get all expenses
- `POST /api/expenses` - Add new expense
- `PUT /api/expenses/:id` - Update expense
- `DELETE /api/expenses/:id` - Delete expense

## 🎨 Features Overview

### Dashboard
- Financial overview cards
- Monthly expense trends
- Income vs expense charts
- Recent transactions list

### Expense Management
- Categorized expense tracking
- Emoji-based category selection
- Date-wise expense filtering
- Expense analytics and reports

### Income Tracking
- Multiple income source management
- Monthly income trends
- Income category organization

### User Experience
- Responsive mobile design
- Dark/Light theme toggle
- Smooth animations and transitions
- Intuitive navigation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Sujeet Kumar**
- GitHub: [@sujeetkumar-29](https://github.com/sujeetkumar-29)

## 🙏 Acknowledgments

- Thanks to all contributors and supporters
- Inspired by modern financial management applications
- Built with love for the open-source community

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the maintainer.

---

⭐ If you found this project helpful, please give it a star on GitHub!
