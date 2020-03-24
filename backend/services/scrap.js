const add = function (req, resolve, reject) {
    const UserCV = require('../models/parser');
    const userCV = new UserCV(req.body);
    let timing = getRandomArbitary();
    userCV.save()
        .then(saved => {
            console.log("saved");
            setTimeout(() => {
                resolve();
            }, timing)
        })
        .catch(err => {
            console.log("err while saving", err)
            reject();
        });
    return 'success'

};

const get = async function(){
    const UserCV = require('../models/parser');
    return await UserCV.find({})
};

function getRandomArbitary(min = 1, max = 10) {
    const res = (Math.random() * (max - min) + min) * 200;
    return res;
}

module.exports = {
    add,
    get,
};