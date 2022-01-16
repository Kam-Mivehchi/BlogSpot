const router = require('express').Router();


router.get('/', (res, req) => {
    res.render('homepage')
})



module.exports = router
