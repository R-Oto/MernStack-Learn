const express = require('express')
const database = require("./connect")
const ObjectId = require("mongodb").ObjectId
const postRoutes = express.Router()

postRoutes.route("/").get(async (req,res) => {
    let db = database.getDb()
    let data = await db.collection("posts").find({}).toArray()
    if(data.length > 0){
        res.json(data)
    }else{
        throw new Error("Data was not found")
    }
})

postRoutes.route("/:id").get(async (req,res) => {
    let db = database.getDb()
    let data = await db.collection("posts").findOne({_id: new ObjectId(req.params.id)})
    if(Object.keys(data).length > 0){
        res.json(data)
    }else{
        throw new Error("Data was not found")
    }
})

postRoutes.route("/").post(async (req,res) => {
    let db = database.getDb()
    let mongoObject = {
        title:req.body.title,
        description:req.body.description,
        content:req.body.content,
        author:req.body.author,
        dateCreated:req.body.dateCreated
    }
    let data = await db.collection("posts").insertOne(mongoObject)
    res.json(data)
    if(Object.keys(data).length > 0){
        res.json(data)
    }else{
        throw new Error("Data was not found")
    }
})

postRoutes.route("/:id").put(async (req,res) => {
    let db = database.getDb()
    let mongoObject = {
        $set: {
            title:req.body.title,
            description:req.body.description,
            content:req.body.content,
            author:req.body.author,
            dateCreated:req.body.dateCreated
        }
    }
    let data = await db.collection("posts").updateOne({_id: new ObjectId(req.params.id)}, mongoObject)
    res.json(data)
})

postRoutes.route("/:id").delete(async (req,res) => {
    let db = database.getDb()
    let data = await db.collection("posts").deleteOne({_id: new ObjectId(req.params.id)})
    res.json(data)
})

module.exports = postRoutes;