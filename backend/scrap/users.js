// const fetch = require('node-fetch');
// const Nightmare = require('nightmare');
// const url = 'https://gomel.jobs.tut.by/search/resume?area=1003&clusters=true&currency_code=BYR&no_magic=false&order_by=relevance&search_period=365&specialization=1.221&from=cluster_specialization&showClusters=true';
//
// const nightmare = Nightmare();
//
// function getUsers() {
//     return fetch(url)
//         .then(response => response.text())
// }
//
// const startURL = 'https://jobs.tut.by/account/login?backurl=%2F&state=mismatch';
// // const email = 'max.grinevich@brymonsoft.com';
// // const password = '6tFnKNs37vi34DX4';
//
//
// nightmare
//     .goto('https://gomel.jobs.tut.by/account/login')
//     .type('.bloko-input.HH-AuthForm-Login', 'max.grinevich@brymonsoft.com')
//     .type('.bloko-input.HH-AuthForm-Password', '6tFnKNs37vi34DX4')
//     .click('.bloko-button.bloko-button_primary.bloko-button_stretched')
//     .wait('.bloko-columns-wrapper')
//     .then(function () {
//         getUsers()
//     })
//     .catch(function (error) {
//         console.error('Authorization failed:', error);
//     })
//
//
// module.exports = getUsers;
//
//
