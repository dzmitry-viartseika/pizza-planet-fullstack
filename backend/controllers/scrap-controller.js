const service = require('../services/scrap');
const UserCV = require('../models/parser');
class ScrapController {
    constructor(){}
    addScrap = async (req, res) => {

    };
    getScrap = async (req, res) => {
        const data = await UserCV.find({});
        return res.json({
            data
        })
    };
    addScraps = async (req, res) => {
        const arr = [3000, 2000, 5000];
        async function f(arr) {
            for (const item of arr) {
                await new Promise(function(resolve, reject) {
                    let timing = Math.floor(Math.random() * (Math.random().toFixed(1) * 50000));
                    setTimeout(function() {
                        console.log('item')
                        console.log(timing)
                        resolve();
                    }, timing);
                });
            }
        }
        await f(arr);
        res.send('success')
    }
}

module.exports = ScrapController;
