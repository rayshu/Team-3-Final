const router = require('express').Router();
const userRouter = require('./users')
const requestRouter = require('./requests')
router.use('/users',userRouter)
router.use('/requests', requestRouter)
// router.use('/approvals',)
// router.use('/metrics,')




module.exports= router