const Eris = require("eris");
const moment = require("moment-timezone");
const clock = require("node-emoji-clock");

const bot = new Eris(process.env.DISCORD_BOT_TOKEN, {}, {
    "description": "Show the current time in three timezones.",
    "owner": "Cygnatus",
    "prefix": "!"
});

bot.on("ready", () => {                              
    console.log("Ready! The time is " +
        moment().tz("Europe/Copenhagen").format("HH:mm z") + ", " +
        moment().tz("America/New_York").format("HH:mm z") + ", and " +
        moment().tz("America/Los_Angeles").format("HH:mm z"));
});

// When a message is created
bot.on("messageCreate", (msg) => { 
    if(msg.content.includes("!timebot")) { // that reads "!timebot"
        var ct = moment().tz("Europe/Copenhagen");
        var et = moment().tz("America/New_York");
        var pt = moment().tz("America/Los_Angeles");

        bot.createMessage(msg.channel.id,
            clock.timeToEmoji(ct) + " \`" + ct.format("HH:mm z") + "\`\n" +
            clock.timeToEmoji(et) + " \`" + et.format("HH:mm z") + "\`\n" +
            clock.timeToEmoji(pt) + " \`" + pt.format("HH:mm z") + "\`" );
    }
});

bot.connect(); // Connect to server (Discord)