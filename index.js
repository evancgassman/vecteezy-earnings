//   ___ ___ ___ ___   _   _____   _______ ___ 
//  / __|_ _| _ ) _ ) /_\ | _ ) \ / /_   _| __|
// | (_ || || _ \ _ \/ _ \| _ \\ V /  | | | _|  
//  \___|___|___/___/_/ \_\___/ |_|   |_| |___|
//  By Evan Gassman

let settingsOBJ = {show: true};

const NightTerror = require('nightterror');
const NightTerrorClient = new NightTerror(settingsOBJ);

exports.getEarnings = async function(username, password) {
    return new Promise(resolve => {
        NightTerrorClient
        .goto("https://contributors.vecteezy.com/users/sign_in")
        .wait(10000)
        .type("#cm-login-email", username)
        .wait((Math.floor(Math.random() * 3) + 1)* 1000)
        .type("#cm-login-password", password)
        .wait((Math.floor(Math.random() * 3) + 1)* 1000)
        .click("input[name='commit']")
        .wait((Math.floor(Math.random() * 7) + 3)* 1000)
        .goto("https://contributors.vecteezy.com/earnings")
        .wait((Math.floor(Math.random() * 7) + 3)* 1000)
        NightTerrorClient.xpath("//div[@data-testid='earning-details']/div[3]/h5", (text) => {
           return text.textContent;
          })
          .then((text) => {
            value = text[0];
            resolve(value);
          });     
    });
}