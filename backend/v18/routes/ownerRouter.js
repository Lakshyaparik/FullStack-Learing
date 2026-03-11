const express = require('express');
const ownerLog = require('debug')("app:owner")
const ownerModel = require('../models/ownerModel')
const router = express.Router();
const {isOwner} = require('../middlewares/isOwner')
const upload = require('../config/multerConfig')
const productModel = require('../models/productModel')

//route for create owner in development environment
if(process.env.NODE_ENV ==="development")
{
    router.post('/create-owner',async (req,res)=>{

        if(await ownerModel.countDocuments() > 0)
        return res.status(400).send("Service is not available")

        let {fullname,email,password,contact}= req.body;
        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password,
            contact
        })
        res.send(createdOwner)
    })
}

router.get('/', (req, res) => {
    res.json('owner router')
})

router.get('/createProduct',(req,res)=>{
    res.render('createProduct')
})

router.post('/createProduct',upload.single('image'),async(req,res)=>{

    try{
        let {name,description,price,category} = req.body
    
        const createdProduct = await productModel.create({
            name,
            description,
            price,
            category,
            image : {
                data : req.file.buffer,
                contentType : req.file.mimetype                
            }
        })
        res.redirect('/owner')
        
    }
    catch(err){
        res.send(err.message)
    }
})

module.exports = router;