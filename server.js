const Eris = require("eris");
var moment = require("moment-timezone");

const bot = new Eris(process.env.DISCORD_BOT_TOKEN, {}, {
    "description": "Return the current time in three timezones.",
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
        bot.createMessage(msg.channel.id,
            moment().tz("Europe/Copenhagen").format("HH:mm z") + "\n" +
            moment().tz("America/New_York").format("HH:mm z") + "\n" +
            moment().tz("America/Los_Angeles").format("HH:mm z"));
    }
});

bot.connect(); // Connect to server (Discord)