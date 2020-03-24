const service = require('../services/scrap');
const cheerio = require("cheerio");
const Nightmare = require('nightmare');
const nightmare = Nightmare();
const url = 'https://gomel.jobs.tut.by/search/resume?area=1003&clusters=true&currency_code=BYR&no_magic=false&order_by=relevance&search_period=365&specialization=1&showClusters=true';
const fetch = require('node-fetch');
const user = require('../scrap/user')
const UserCV = require('../models/parser');

function getPage(url) {
    return fetch(url, {
        headers: { 'cookie': 'hhtoken=rZ8D1R_fh9nZGGUFdA!jcP6Flqg9; hhuid=kVxWeRkRFemdZ15yOgkjhQ--; _xsrf=72f12ca2309037ede471a467ff538046; region_clarified=NOT_SET; display=desktop; GMT=3; _fbp=fb.1.1584544263912.1663550504; top100_id=t1.-1.1856254719.1584544264514; _ga=GA1.1.1504127222.1584544265; _gid=GA1.1.1010936651.1584544265; _ym_uid=1584544265309858234; _ym_d=1584544265; _ym_visorc_4876372=w; _ym_isad=2; __gfp_64b=wtvXoxCBHGMY7ESgyn7YxaF_Op6L_.h9vf3XBiB4FG..I7; crypted_id=9DB6CA09154F878F7E3D9665EB607E61A5471C6F722104504734B32F0D03E9F8; hhul=9144c50e4122f87aa4245135d1b7b8c0e59e3e7cc8afbb69a0ef1c8f7934a40e; hhrole=employer; _hi=89100261; gssc58=; last_visit=1584534650611::1584545450611; _gat_main=1; __zzatgib-w-hh=MDA0dC0pXB4IH04NIH5rL2R7RSRfHDx1ZS9DcHNecWgfZ09gUkgOVDNZHhIya1kMfw5gb0goLF08Z1BoUBYoRllNayELUTQ1ZhBKT01HDTdAXjdXYSAMFhFNVlIJKR4VfG8oUQwQYzkzPDRtc3hcJgoaVDVfGUNqTg1pN2wXPHVlL3kmPmEtOhlRCyBWfBt8OVZcSWl1bkFNPB8Kdl99G0NuHl9HWyVER0lrZU5TQixmG3EVJ38OKm8bfyZaHDljIEhdUX4pHhV8bShUEH9NDHo5Mzx6LFggfEspDx8aNiELVUgzWEERdSN5ci45bXA1YVEcLg==AndUMQ==; cfidsgib-w-hh=irKYwpYEE5/TX5n30SWgtHa5izppvqafPN4bCgN9Qd0xykyW/jU9/YLxWcuv/RiP+1OZOnfSAzTRKJCdYsFQguprXxOt+bByuCp0KqXcaK4+vMpdArHARsvZ5Zi7YY8sDbuzUGeKX0DrlPKpth+ZDdpjjmhNzEPeyRHl6VRt; gsscgib-w-hh=akW/Jk32t6aM74TPIVuoDWRc0kV67fnndgypqPWIBTydloTl8uWxYIDutGKtLiFVMu30wh+hsT73AEGj9iL/SeUE2uwtUn5Z77xQVWEJ3+FnkZKpKafsoHodfJYdxNYDZKg4roAcgDvV/ykO1knGhjVAG+gXtYzoK3F/99MisWw2ZZbF0D5kEch2AIfdnsc=; fgsscgib-w-hh=145cc4a0ac7732389972a6b762d70aebd2195afd; cfidsgib-w-hh=GnmTSC4EWLU7VJWYH176lbkeE7C6NiPX8NPsIMinx6YIWwOS8ejjIADpVY0At/Tb5Np4JgNJpnKTA02WSx/eVMfilj9vYR/88ggrU3L1AUiGyxz8ZCbSZCHFisStxKbmihfloC9rYESaDHOhFdWjRaP1eZZbvRfzkKHmVund' },
    })
        .then(response => response.text())
}

function getRandomArbitary(min = 1, max = 10) {
    const res = (Math.random() * (max - min) + min) * 2000;
    return res;
}


function getUsers() {
    return fetch(url, {
        headers: { 'cookie': 'hhtoken=rZ8D1R_fh9nZGGUFdA!jcP6Flqg9; hhuid=kVxWeRkRFemdZ15yOgkjhQ--; _xsrf=72f12ca2309037ede471a467ff538046; region_clarified=NOT_SET; display=desktop; GMT=3; _fbp=fb.1.1584544263912.1663550504; top100_id=t1.-1.1856254719.1584544264514; _ga=GA1.1.1504127222.1584544265; _gid=GA1.1.1010936651.1584544265; _ym_uid=1584544265309858234; _ym_d=1584544265; _ym_visorc_4876372=w; _ym_isad=2; __gfp_64b=wtvXoxCBHGMY7ESgyn7YxaF_Op6L_.h9vf3XBiB4FG..I7; crypted_id=9DB6CA09154F878F7E3D9665EB607E61A5471C6F722104504734B32F0D03E9F8; hhul=9144c50e4122f87aa4245135d1b7b8c0e59e3e7cc8afbb69a0ef1c8f7934a40e; hhrole=employer; _hi=89100261; gssc58=; last_visit=1584534650611::1584545450611; _gat_main=1; __zzatgib-w-hh=MDA0dC0pXB4IH04NIH5rL2R7RSRfHDx1ZS9DcHNecWgfZ09gUkgOVDNZHhIya1kMfw5gb0goLF08Z1BoUBYoRllNayELUTQ1ZhBKT01HDTdAXjdXYSAMFhFNVlIJKR4VfG8oUQwQYzkzPDRtc3hcJgoaVDVfGUNqTg1pN2wXPHVlL3kmPmEtOhlRCyBWfBt8OVZcSWl1bkFNPB8Kdl99G0NuHl9HWyVER0lrZU5TQixmG3EVJ38OKm8bfyZaHDljIEhdUX4pHhV8bShUEH9NDHo5Mzx6LFggfEspDx8aNiELVUgzWEERdSN5ci45bXA1YVEcLg==AndUMQ==; cfidsgib-w-hh=irKYwpYEE5/TX5n30SWgtHa5izppvqafPN4bCgN9Qd0xykyW/jU9/YLxWcuv/RiP+1OZOnfSAzTRKJCdYsFQguprXxOt+bByuCp0KqXcaK4+vMpdArHARsvZ5Zi7YY8sDbuzUGeKX0DrlPKpth+ZDdpjjmhNzEPeyRHl6VRt; gsscgib-w-hh=akW/Jk32t6aM74TPIVuoDWRc0kV67fnndgypqPWIBTydloTl8uWxYIDutGKtLiFVMu30wh+hsT73AEGj9iL/SeUE2uwtUn5Z77xQVWEJ3+FnkZKpKafsoHodfJYdxNYDZKg4roAcgDvV/ykO1knGhjVAG+gXtYzoK3F/99MisWw2ZZbF0D5kEch2AIfdnsc=; fgsscgib-w-hh=145cc4a0ac7732389972a6b762d70aebd2195afd; cfidsgib-w-hh=GnmTSC4EWLU7VJWYH176lbkeE7C6NiPX8NPsIMinx6YIWwOS8ejjIADpVY0At/Tb5Np4JgNJpnKTA02WSx/eVMfilj9vYR/88ggrU3L1AUiGyxz8ZCbSZCHFisStxKbmihfloC9rYESaDHOhFdWjRaP1eZZbvRfzkKHmVund' },
    })
        .then(response => response.text())
}

class ScrapController {
    constructor(){}
    addScrap = async (req, res) => {
        try {
            nightmare
                .goto('https://gomel.jobs.tut.by/account/login')
                .click('.bloko-button.bloko-button_primary.bloko-button_stretched')
                .evaluate( function () {
                    return new Promise((resolve, reject) => {
                        // document.querySelector('.bloko-icon.bloko-icon_download.bloko-icon_initial-impact').click()
                        try {
                            resolve(document.querySelector('.validation-error').innerText);
                        } catch (exception) {
                            reject(exception);
                        }
                    });
                })
                .end()
                .then((functionTitle) => {
                    console.log(functionTitle);
                })
                .then(function () {
                        getUsers().then(body => {
                            console.log('yes');
                            const users = []
                            const $ = cheerio.load(body);
                            const pages = [];
                            const pagesLenght = $('[data-qa="pager-block"] > .pager-item-not-in-short-range > a.bloko-button.HH-Pager-Control').text();
                            // const pagesLenght = 1;
                            for(let i = 0; i < pagesLenght; i++) {
                                let pageItem = $('.bloko-button-group .bloko-button.HH-Pager-Control').attr('href');
                                let res = pageItem.slice(0, -1);
                                let result = 'https://gomel.jobs.tut.by' + res + i;
                                pages.push(result);
                            }
                            async function fPage(arr) {
                                let i = 0;
                                for (const item of arr) {
                                    i++
                                    console.time(`page ${i}`);
                                    console.log(`page =============start page==========================${i}`);
                                    await new Promise(function(resolve, reject) {
                                        let timing = getRandomArbitary();
                                            getPage(item)
                                                .then(async (body) => {
                                                    let $ = cheerio.load(body);
                                                    let element = $('.resume-search-item');
                                                    const userProfiles = [];
                                                    const usersList = await UserCV.aggregate([
                                                        {
                                                            $project: {
                                                                _id: 0,
                                                                link: 1
                                                            }
                                                        }
                                                    ]);
                                                    element.each(function (i, elem) {
                                                        const $elem = $(elem);
                                                        const $profile = $elem.find('.resume-search-item__name.HH-VisitedResume-Href.HH-LinkModifier').attr('href');
                                                        const user = usersList.find(user => user.link === `https://gomel.jobs.tut.by${$profile}`)
                                                        if (user === undefined) {
                                                            userProfiles.push($profile);
                                                        }
                                                    })
                                                    // userProfiles.push('/resume/10142e7500079ebdfa003d0e796b4e6d495661');
                                                    async function f(arr) {
                                                        let i = 0;
                                                        for (const item of arr) {
                                                            i++
                                                            console.log('resume' + i);
                                                            console.time('resume');
                                                            await new Promise(function(resolve, reject) {
                                                                let timing = getRandomArbitary();
                                                                user('https://gomel.jobs.tut.by' + item, resolve, reject);
                                                            });
                                                            console.log('resume end' + i);
                                                            console.timeEnd('resume');
                                                        }
                                                    }
                                                    await f(userProfiles);
                                                    setTimeout(() => {
                                                        resolve();
                                                    }, timing)
                                                })
                                                .catch((err) => {
                                                    console.log('reject', err)
                                                    reject()
                                                })
                                    });
                                    console.log(`page =============start end==========================${i}`);
                                    console.timeEnd(`page ${i}`);
                                }
                            }
                            fPage(pages);
                        })
                            .catch(function(err) {
                                console.log(err);
                            });
                })
                .catch(function (error) {
                    console.error('Authorization failed:', error);
                })
            res.status(201).send('result')
        } catch (e) {
            res.status(400).send({error: e.message})
        }
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
