const saveService = require('../services/scrap');
const Nightmare = require('nightmare');
const nightmare = Nightmare();
const fetch = require('node-fetch'),
      cheerio = require("cheerio");

function getUser(url) {
    return fetch(url, {
        headers: { 'cookie': 'hhtoken=rZ8D1R_fh9nZGGUFdA!jcP6Flqg9; hhuid=kVxWeRkRFemdZ15yOgkjhQ--; _xsrf=72f12ca2309037ede471a467ff538046; region_clarified=NOT_SET; display=desktop; GMT=3; _fbp=fb.1.1584544263912.1663550504; top100_id=t1.-1.1856254719.1584544264514; _ga=GA1.1.1504127222.1584544265; _gid=GA1.1.1010936651.1584544265; _ym_uid=1584544265309858234; _ym_d=1584544265; _ym_visorc_4876372=w; _ym_isad=2; __gfp_64b=wtvXoxCBHGMY7ESgyn7YxaF_Op6L_.h9vf3XBiB4FG..I7; crypted_id=9DB6CA09154F878F7E3D9665EB607E61A5471C6F722104504734B32F0D03E9F8; hhul=9144c50e4122f87aa4245135d1b7b8c0e59e3e7cc8afbb69a0ef1c8f7934a40e; hhrole=employer; _hi=89100261; gssc58=; last_visit=1584534650611::1584545450611; _gat_main=1; __zzatgib-w-hh=MDA0dC0pXB4IH04NIH5rL2R7RSRfHDx1ZS9DcHNecWgfZ09gUkgOVDNZHhIya1kMfw5gb0goLF08Z1BoUBYoRllNayELUTQ1ZhBKT01HDTdAXjdXYSAMFhFNVlIJKR4VfG8oUQwQYzkzPDRtc3hcJgoaVDVfGUNqTg1pN2wXPHVlL3kmPmEtOhlRCyBWfBt8OVZcSWl1bkFNPB8Kdl99G0NuHl9HWyVER0lrZU5TQixmG3EVJ38OKm8bfyZaHDljIEhdUX4pHhV8bShUEH9NDHo5Mzx6LFggfEspDx8aNiELVUgzWEERdSN5ci45bXA1YVEcLg==AndUMQ==; cfidsgib-w-hh=irKYwpYEE5/TX5n30SWgtHa5izppvqafPN4bCgN9Qd0xykyW/jU9/YLxWcuv/RiP+1OZOnfSAzTRKJCdYsFQguprXxOt+bByuCp0KqXcaK4+vMpdArHARsvZ5Zi7YY8sDbuzUGeKX0DrlPKpth+ZDdpjjmhNzEPeyRHl6VRt; gsscgib-w-hh=akW/Jk32t6aM74TPIVuoDWRc0kV67fnndgypqPWIBTydloTl8uWxYIDutGKtLiFVMu30wh+hsT73AEGj9iL/SeUE2uwtUn5Z77xQVWEJ3+FnkZKpKafsoHodfJYdxNYDZKg4roAcgDvV/ykO1knGhjVAG+gXtYzoK3F/99MisWw2ZZbF0D5kEch2AIfdnsc=; fgsscgib-w-hh=145cc4a0ac7732389972a6b762d70aebd2195afd; cfidsgib-w-hh=GnmTSC4EWLU7VJWYH176lbkeE7C6NiPX8NPsIMinx6YIWwOS8ejjIADpVY0At/Tb5Np4JgNJpnKTA02WSx/eVMfilj9vYR/88ggrU3L1AUiGyxz8ZCbSZCHFisStxKbmihfloC9rYESaDHOhFdWjRaP1eZZbvRfzkKHmVund' },
    })
        .then(response => response.text())
}

function getRandomArbitary(min = 1, max = 10) {
    const res = (Math.random() * (max - min) + min) * 2000;
    return res;
}

const user = async function(url, resolve, reject) {
    const contactUrl  = `https://gomel.jobs.tut.by/resume/contacts/${url.split('https://gomel.jobs.tut.by/resume/')[1]}?simHash=&goal=Contacts_Phone&topicId=undefined`
    const phoneNumberArr = []
    await new Promise(function(resolve, reject) {
        fetch(contactUrl, {
            headers: { 'cookie': 'hhtoken=rZ8D1R_fh9nZGGUFdA!jcP6Flqg9; hhuid=kVxWeRkRFemdZ15yOgkjhQ--; _xsrf=72f12ca2309037ede471a467ff538046; region_clarified=NOT_SET; display=desktop; GMT=3; _fbp=fb.1.1584544263912.1663550504; top100_id=t1.-1.1856254719.1584544264514; _ga=GA1.1.1504127222.1584544265; _gid=GA1.1.1010936651.1584544265; _ym_uid=1584544265309858234; _ym_d=1584544265; _ym_visorc_4876372=w; _ym_isad=2; __gfp_64b=wtvXoxCBHGMY7ESgyn7YxaF_Op6L_.h9vf3XBiB4FG..I7; crypted_id=9DB6CA09154F878F7E3D9665EB607E61A5471C6F722104504734B32F0D03E9F8; hhul=9144c50e4122f87aa4245135d1b7b8c0e59e3e7cc8afbb69a0ef1c8f7934a40e; hhrole=employer; _hi=89100261; gssc58=; last_visit=1584534650611::1584545450611; _gat_main=1; __zzatgib-w-hh=MDA0dC0pXB4IH04NIH5rL2R7RSRfHDx1ZS9DcHNecWgfZ09gUkgOVDNZHhIya1kMfw5gb0goLF08Z1BoUBYoRllNayELUTQ1ZhBKT01HDTdAXjdXYSAMFhFNVlIJKR4VfG8oUQwQYzkzPDRtc3hcJgoaVDVfGUNqTg1pN2wXPHVlL3kmPmEtOhlRCyBWfBt8OVZcSWl1bkFNPB8Kdl99G0NuHl9HWyVER0lrZU5TQixmG3EVJ38OKm8bfyZaHDljIEhdUX4pHhV8bShUEH9NDHo5Mzx6LFggfEspDx8aNiELVUgzWEERdSN5ci45bXA1YVEcLg==AndUMQ==; cfidsgib-w-hh=irKYwpYEE5/TX5n30SWgtHa5izppvqafPN4bCgN9Qd0xykyW/jU9/YLxWcuv/RiP+1OZOnfSAzTRKJCdYsFQguprXxOt+bByuCp0KqXcaK4+vMpdArHARsvZ5Zi7YY8sDbuzUGeKX0DrlPKpth+ZDdpjjmhNzEPeyRHl6VRt; gsscgib-w-hh=akW/Jk32t6aM74TPIVuoDWRc0kV67fnndgypqPWIBTydloTl8uWxYIDutGKtLiFVMu30wh+hsT73AEGj9iL/SeUE2uwtUn5Z77xQVWEJ3+FnkZKpKafsoHodfJYdxNYDZKg4roAcgDvV/ykO1knGhjVAG+gXtYzoK3F/99MisWw2ZZbF0D5kEch2AIfdnsc=; fgsscgib-w-hh=145cc4a0ac7732389972a6b762d70aebd2195afd; cfidsgib-w-hh=GnmTSC4EWLU7VJWYH176lbkeE7C6NiPX8NPsIMinx6YIWwOS8ejjIADpVY0At/Tb5Np4JgNJpnKTA02WSx/eVMfilj9vYR/88ggrU3L1AUiGyxz8ZCbSZCHFisStxKbmihfloC9rYESaDHOhFdWjRaP1eZZbvRfzkKHmVund' },
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const timing = getRandomArbitary()
                console.log('before' + timing)
                data.phones.map(phone => phoneNumberArr.push(phone.formatted))
                setTimeout(() => {
                    console.log('after')
                    resolve()
                }, timing)
            }).catch((error) => {
            console.log(error);
            reject();
        });
    });
    console.log('getUser');
    return getUser(url)
        .then(async (body) => {
            const $ = cheerio.load(body);
            const stack = []
            const langs = $('[data-qa="resume-block-language-item"]');
            const language = []
            const arr = $('.bloko-tag_countable');
            arr.each( function (i,element) {
                const $element = $(element)
                stack.push($element.text())
            })
            langs.each( function (i,element) {
                const $element = $(element)
                language.push($element.text())
            })
            const scrap = {
                body: {
                    fullname: $('[data-qa="resume-personal-name"]').text(),
                    gender: $('[data-qa="resume-personal-gender"]').text(),
                    age: $('[data-qa="resume-personal-age"]').text(),
                    tel: phoneNumberArr,
                    email: $('[itemprop="email"]').text(),
                    photo: $('img.resume-photo__image').attr('src'),
                    salary: $('.resume-block__salary.resume-block__title-text_salary').text(),
                    position: $('h1 .resume-block__title-text').text(),
                    experience: $('[data-qa="resume-block-experience"]').text(),
                    skills: stack,
                    aboutMe: $('[data-qa="resume-block-skills-content"]').text(),
                    languages: language,
                    link: url
                }
            };
            let timing = getRandomArbitary();
            setTimeout(() => {
                saveService.add(scrap, resolve, reject)
            }, timing)
        })
        .catch(function(err) {
            reject();
            console.log(err);
        });
    }

module.exports = user;