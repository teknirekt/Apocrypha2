require('../index.js');
const Discord = require('discord.js');

module.exports = async (client, oldMember, newMember) => { 

        const firstRole = newMember.guild.roles.cache.find(r => r.name === 'RΞDΛCTΞD');
        const secondRole = newMember.guild.roles.cache.find(r => r.name === 'IronWolves');
        const visitor = newMember.guild.roles.cache.find(r => r.name === 'Visitor');
        const intro = newMember.guild.roles.cache.find(r => r.name === 'Beginner');
        const platform = newMember.guild.roles.cache.find(r => r.name === '=====|[ Clan Rank/Platform ]|=====');
        const flairdiv = newMember.guild.roles.cache.find(r => r.name === '=====|[ Destiny2 Accolades ]|=====');
        const accessdiv = newMember.guild.roles.cache.find(r => r.name === '=====|[ Server Access Level ]|=====');
        const notification = newMember.guild.channels.cache.find(ch => ch.name === 'leadership');

       if (!newMember.roles.cache.has(firstRole.id) && oldMember.roles.cache.has(firstRole.id)) {
            newMember.roles.set([visitor.id, intro.id, platform.id, flairdiv.id, accessdiv.id], 'User has left the clan.');
            notification.send(`**Notice:** ${newMember.displayName} has left the clan - discord membership has been reset.`);
        return;
       }
   
   };