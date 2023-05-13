const os = require('os')
const {
    getDataFile,
    getRandomItem
} = require('../utilities/general_functions')

const {
    POKENEA_FILE_NAME
} = require('../utilities/constants')

module.exports = {
    getRandom(req, res) {
        try {
            const pokenea_list = getDataFile(POKENEA_FILE_NAME)
            const pokenea = getRandomItem(pokenea_list)
            const { id, name, height, ability } = pokenea
            res.send(
                {
                    id, 
                    name, 
                    height, 
                    ability,
                    container_id: os.hostname()
                }
            )
        } catch (err) {
            console.log(err)
            res.send('INTERNAL SERVER ERROR').status(500)
        }
    },
    getRandomWithImage(req, res){
        try {
            try {
                const pokenea_list = getDataFile(POKENEA_FILE_NAME)
                const pokenea = getRandomItem(pokenea_list)
                const { image, philosophical_phrase } = pokenea
                res.render('pokenea', { image, philosophical_phrase })
            } catch (err) {
                console.log(err)
                res.send('INTERNAL SERVER ERROR').status(500)
            }
        } catch (err) {
            res.send('INTERNAL SERVER ERROR').status(500)
        }
    }
}