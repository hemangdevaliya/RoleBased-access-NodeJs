const express=require('express')
const verifyToken=require('../middlewares/authMiddleware')
const authorizeRules=require('../middlewares/roleMiddleware')
const router=express.Router()

router.get('/admin',verifyToken,authorizeRules('admin'),(req,res)=>{
res.json({message:"welcome admin"})
})

router.get('/manager',verifyToken,authorizeRules('admin','manager'),(req,res)=>{
    res.json({message:"welcome manager"})
})

router.get('/user',verifyToken,authorizeRules('admin','manager','user'),(req,res)=>{
    res.json({message:"welcome user"})
})

module.exports=router
