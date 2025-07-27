import express from 'express';

import { protect } from '../middleware/authMiddleware.js';
import { downloadAllTransactionsExcel, getDashboardData} from '../controllers/dashboardController.js';

const router = express.Router();

router.get('/', protect, getDashboardData);
router.get('/download-all-transactions', protect,downloadAllTransactionsExcel)

export default router;

 

