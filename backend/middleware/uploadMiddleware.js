import multer from 'multer';

// Configure storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Set the destination for uploaded files
    },

    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
// File filter
const fileFilter = (req, file, cb)=>{

const allowedTypes = [
    'image/png',
    'image/jpg',
    'image/jpeg'
];
if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
}
else {
    cb(new Error('Only .jpeg , .jpg and .png format are allowed!'), false);
}
};
// Initialize multer with storage and file filter
 const upload  = multer({  storage, fileFilter });

 export default upload; 
       
        
           