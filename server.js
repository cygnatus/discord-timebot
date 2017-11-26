const Eris = require("eris");
const moment = require("moment-timezone");
const clock = require("node-emoji-clock");

const bot = new Eris.CommandClient(process.env.DISCORD_BOT_TOKEN, {}, {
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

bot.registerCommand("timebot", (msg, args) => {
    if (args.length === 0) {
        var ct = moment().tz("Europe/Copenhagen");
        var et = moment().tz("America/New_York");
        var pt = moment().tz("America/Los_Angeles");

        var times = clock.timeToEmoji(ct) + " \`" + ct.format("HH:mm z") + "\`\n" +
            clock.timeToEmoji(et) + " \`" + et.format("HH:mm z") + "\`\n" +
            clock.timeToEmoji(pt) + " \`" + pt.format("HH:mm z") + "\`";

        return times
    } else {
        return "I only respond to \`!timebot\` for now.";
    }
}, {
    "argsRequired": false,
    "caseInsensitive": false,
    "cooldown": 5000,
    "cooldownMessage": "Please wait 5 seconds between invoking \`!timebot\`.",
    "deleteCommand": false,
    "description": "Show time in CET, ET, and PT.",
    "dmOnly": false,
    "fullDescription": "Timebot shows the current time in three Western timezones: CET, ET, and PT.",
    "usage": "!timebot"
});
bot.registerCommandAlias("timezones", "timebot");

bot.connect(); // Connect to server (Discord)