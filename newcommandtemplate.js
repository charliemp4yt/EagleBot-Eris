'use strict';

let nums = require('./functions/numbers');
let manager = require('./functions/blacklistManager');
let owners = require('./functions/getOwners');
let guildCount = require('./functions/getGuilds');
let eco = require('./functions/economy');
let prefixes = require('./functions/getPrefixes');
let toHHMMSS = require('./functions/toReadableTime');
let genRanString = require('./functions/genRanString');
let stats = require('./functions/commandStatistics');
let music = require('./functions/musicUtils');

module.exports = {
    name: '',

    exec: (client, msg, args) => {
        if (!manager.gblacklist.users.includes(msg.author.id)) {
        
        }else {
            msg.author.getDMChannel().then(chn => {
                chn.createMessage('You have been blacklisted from EagleNugget! If you think this is a mistake, please go here https://alekeagle.com/discord and ask AlekEagle#0001 about this issue.').catch(() => {
                    msg.channel.createMessage(`<@${msg.author.id}> You have been blacklisted from EagleNugget! If you think this is a mistake, please go here https://alekeagle.com/discord and ask AlekEagle#0001 about this issue.`)
                })
            })
        }
    },

    options: {
        fullDescription: ''
    }
}