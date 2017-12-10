Timebot
=======
![Example output in Discord](https://cdn.glitch.com/e2c24270-97c5-4c23-9d94-6ca0054e4928%2Foutput.png?1511624557883)

With Timebot, you can type `!timebot` in Discord to get the current time in three Western timezones: CET, ET, and PT.

## Requirements ##

* A [Discord account](https://discordapp.com/register)
* Permission to add accounts to a server, or your own server

## Setup ##

Right now, I've only allowed the bot to let me invite it, but this is how it'd work if I made the bot public in the app settings:

1. Invite bot using this [invitation link][].
2. Make sure the bot is online.
    * If not, something that wasn't your fault bugged out.
3. Type `!timebot`.

If it's working, you should see "Ready!" in the Glitch logs.

## DIY bot ##

1. Remix [the project][]
2. [Register a Discord app][new-app]
3. Fill out the basics and ignore the redirect stuff
4. Click **Create a Bot User**
5. Copy your client secret and paste it to `.env` in your remix
6. Your bot's invitation link is `https://discordapp.com/oauth2/authorize?&client_id={{CLIENT_ID}}&scope=bot&permissions=0`

## Customization ##

* `.env`
    - Use your own client token
* `server.js`
    - Change the trigger command(s)
    - Change the bot reply
* `watch.json`
    - Include or exclude more files, file types or folders
    - Change update rate (`throttle`)

## Resources ##

* <https://glitch.com/~discord-bot-example>
* <https://abal.moe/Eris/>
    - <https://github.com/abalabahaha/eris/blob/master/examples/basicCommands.js>
* <https://anidiotsguide.gitbooks.io/discord-js-bot-guide/other-guides/hosting-on-glitchcom.html>
* <https://watch-json.glitch.me/>
* <https://momentjs.com/timezone/>

## Troubleshooting ##

### My bot is offline ###

It's probably asleep. Try waking it either by

* Typing a command in your server
* Updating some code in your Glitch project
    - Remember to check the logs
* Visiting its glitch.me page

Also check whether the Discord invitation link still works.

Check out "Hosting a Bot on Glitch.com" linked above in **Resources** for more on keeping your sleepy bot awake.

The tricky thing about hosted bots is finding the sweet spot between poking them enough to stay awake and overworking them to the point of exhaustion.

Be nice to your bots.


[invitation link]: https://discordapp.com/oauth2/authorize?&client_id=383941133564379136&scope=bot&permissions=0
[the project]: https://glitch.com/~plausible-caption
[new-app]: https://discordapp.com/developers/applications/me/create