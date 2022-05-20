const Product = require("../model/Product")



exports.addproduct = async(req,res)=> {

const {name,ref ,description} = req.body

const imageURL = req.file.filename

    try {
       
        const newProduct = new Product ({
            name,
            description,
             ref,
            imageURL
        })
        

        await newProduct.save()
        
        res.status(200).send({msg : 'Porduit ajouté', newProduct})
        
    } catch (error) {
        res.status(400).send({msg : 'Produit non ajouté', error})   
    }
}




exports.deleteproduct = async (req,res) => {
    try {
        const{_id}= req.params;
        await Product.findOneAndDelete({_id})
        res.status(200).send({msg : "Product deleted"})
    } catch (error) {
        res.status(400).send({msg : "cannot delete this Product", error})      
    }
}


exports.getproducts = async (req,res) => {
    try {
        const listProducts = await Product.find();
        res.status(200).send({msg : 'Products list',listProducts})
        
    } catch (error) {
        res.status(400).send({msg : 'cannot get all Products', error})
    }
  }