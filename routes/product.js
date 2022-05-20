const express = require("express") ;
const router = express.Router();
const { addproduct, deleteproduct, getproducts } = require("../controllers/product");
const upload = require("../middleware/upload");


router.post('/addProduct', upload.single("imageURL"), addproduct);


router.delete('/:_id', deleteproduct);

router.get ("/allproducts" ,  getproducts)




module.exports = router;