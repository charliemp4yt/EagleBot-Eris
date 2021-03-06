'use strict';

let manager = require('../functions/blacklistManager');

module.exports = {
    name: 'help',

    exec: (client, msg, args) => {
        if (!manager.gblacklist.users.includes(msg.author.id)) {
            let command = '#command';
            if (Object.values(client.commands).filter(c => c.label === msg.content.split(' ').splice(1).join(' '))[0] !== undefined) {
                command = `#${msg.content.split(' ').splice(1).join(' ')}`
            }else if (Object.values(client.commands).filter(c => c.aliases.includes(msg.content.split(' ').splice(1).join(' ')))[0] !== undefined) {
                command = `#${Object.values(client.commands).filter(c => c.aliases.includes(msg.content.split(' ').splice(1).join(' ')))[0].label}`
            }
            msg.channel.createMessage(`goto https://alekeagle.com/eaglenugget/info/commands${command} for commands`);
        }else {
            msg.author.getDMChannel().then(chn => {
                chn.createMessage('You have been blacklisted from EagleNugget! If you think this is a mistake, please go here https://alekeagle.com/discord and ask AlekEagle#0001 about this issue.').catch(() => {
                    msg.channel.createMessage(`<@${msg.author.id}> You have been blacklisted from EagleNugget! If you think this is a mistake, please go here https://alekeagle.com/discord and ask AlekEagle#0001 about this issue.`)
                })
            })
        }
    },

    options: {
        fullDescription: 'this help text',
        aliases: [
            'hlep',
            'halp',
            'heIp'
        ]
    }
}