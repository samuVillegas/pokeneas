const { Router } = require('express')
const router = Router()
const {
    getRandom,
    getRandomWithImage
} = require('../controllers/pokenea')

router.get('/get_random', getRandom )
router.get('/get_random_with_image', getRandomWithImage )


module.exports = router;