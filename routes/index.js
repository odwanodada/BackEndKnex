const express = require('express');
const knex = require('../db/knex');
const cors = require('cors')

const router = express.Router();

router.use(cors({
    origin: "http://localhost:8080",
}))

router.get('/users', (req, res) => {
    try {
     knex("users")
        .then(users => {
            res.status(200).json({
                status: 'ok',
                data: users
            })
        })
    } catch (error) {
        console.log(error),
        res.status(400).json({
            status: 'error',
            data: error
        })
    }
})

router.delete('/user/:id', (req, res) => {
    try {
        knex("users")
        .where('id', req.params.id)
        .delete()
        .then(() => {
            res.status(200).json({
                status: 'ok',
                data: 'User deleted'
             })
           })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            data: error
        })
    }
})

router.put('/update-users/:id', (req, res) => {
    const id = req.params.id
    try {
        knex("users")
        .where('id', id)
        .update({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        })
        .returning(['id', 'name', 'username', 'password'])
       .then(users => {
            res.status(200).json({
            status: 'ok',
            data: users
             })
           })
       } catch (error) {
           console.log(error),
           res.status(400).json({
               status: 'error',
               data: error
           })
       }
})

router.post('/add-users', (req, res) => {
    try {
        knex("users")
        .insert({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        })
        .returning(['id', 'name', 'username', 'password'])
           .then(users => {
               res.status(200).json({
                   status: 'ok',
                   data: users
               })
           })
       } catch (error) {
           console.log(error),
           res.status(400).json({
               status: 'error',
               data: error
           })
       }
})


//GetBlogs
router.get('/all-blogs', (req, res) => {
    try {
     knex("blogs")
        .then(users => {
            res.status(200).json({
                status: 'ok',
                data: users
            })
        })
    } catch (error) {
        console.log(error),
        res.status(400).json({
            status: 'error',
            data: error
        })
    }
})

//Add Blog
router.post('/add-blog', (req, res) => {
    try {
        knex("blogs")
        .insert({
            title: req.body.title,
            author: req.body.author,
            content: req.body.content,
        })
        .returning(['id', 'title', 'author', 'content'])
           .then(blogs => {
               res.status(200).json({
                   status: 'ok',
                   data: blogs
               })
           })
       } catch (error) {
           console.log(error),
           res.status(400).json({
               status: 'error',
               data: error
           })
       }
})

//Update Blog

router.put('/update-blog/:id', (req, res) => {
    const id = req.params.id
    try {
        knex("blogs")
        .where('id', id)
        .update({
            title: req.body.title,
            author: req.body.author,
            content: req.body.content,
        })
        .returning(['id', 'title', 'author', 'content'])
       .then(users => {
            res.status(200).json({
            status: 'ok',
            data: users
             })
           })
       } catch (error) {
           console.log(error),
           res.status(400).json({
               status: 'error',
               data: error
           })
       }
})

//Delete-Blog
router.delete('/del-blog/:id', (req, res) => {
    try {
        knex("blogs")
        .where('id', req.params.id)
        .delete()
        .then(() => {
            res.status(200).json({
                status: 'ok',
                data: 'Blog deleted'
             })
           })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            data: error
        })
    }
})
module.exports = router;