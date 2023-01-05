import express from 'express'

const router = express.Router() //get access to rounter

router.route('/').get((req,res)=> res.send('hello world first page'))

export default router
