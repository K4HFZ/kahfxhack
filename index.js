const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');


(async () => {

    console.log(`
Credit : ${chalk.yellow('||Eskey || Dkmpostor ||')} 
`);
console.log(`
Report To : ${chalk.red('⚠️Bug ? Dm Instagram @khfiar_⚠️')} 
Source Ori From : ${chalk.red('https://github.com/K4HFZ')} 

Note : ${chalk.blue(`JANGAN TERLALU BRUTAL DENGAN :
1. MENDIAMKAN CMD 
2. MENSPAM CMD DENGAN BANYAK CONTOH :
node index, pasang auth stop, node index, pasang auth stop
3. MENGKOREKSI SCRIPT SEHINGGA MENJADI BRUTAL

RESIKO : BANNED DARI KITKA
Trimakasih 🙏`)} 
`);

console.log(`
 SELECT ROUND
 ${chalk.white(`
1 Push Trophy
3 Push Crown

Pilih Pakai Nomor`)} 
`);
const round = rs.question('[+] Pilih Round : ');
    console.log('');

const GoStumble = (auth) => new Promise((resolve, reject) => {

    fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/'+round, {
        method: 'GET',
        headers: {
            'authorization': auth
        }
    })
    .then(res => res.text())
    .then(data=> {
        resolve(data);
    })
    .catch(err => {
        reject(err);
    });

});

    const auth = rs.question('[+] Masukan Token Anda : ');
    console.log('');

    while (true) {

        const result = await GoStumble(auth);
        if (!result) {

            console.log(chalk.red(`\r[ ${moment().format('HH:mm:ss')} ] ⚠️ Token Nya Dah Expired Bikin Lagi !`));
            break;

        } else if (result.includes('User')) {

            const data = JSON.parse(result);
            const username = data.User.Username;
            const country = data.User.Country;
            const trophy = data.User.SkillRating;
            const crown = data.User.Crowns;
            
            console.log(chalk.white(`\r[ ${moment().format('HH:mm:ss')} ] Nama User : ${username} | ${chalk.white(`Trophy User : ${trophy}`)} | ${chalk.white(`Mahkota User : ${crown}`)}`));
            
               new Promise(resolve => setTimeout(resolve, '50'));
            
           } else if (result.includes('User')) {

            const data = JSON.parse(result);
            const username = data.User.Username;
            const country = data.User.Country;
            const trophy = data.User.SkillRating;
            const crown = data.User.Crowns;
            
            console.log(chalk.white(`\r[ ${moment().format('HH:mm:ss')} ] Nama User : ${username} | ${chalk.white(`Trophy User : ${trophy}`)} | ${chalk.white(`Mahkota User : ${crown}`)}`));
            
        } else if (result == 'BANNED') {

            console.log(chalk.red(`\r[ ${moment().format('HH:mm:ss')} ] Akun Nya Udah Ke Banned Bang !`));
            break;
            
        } else if (result == 'SERVER_ERROR') {

            continue;
            
        }
    }
    

})();