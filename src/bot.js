const tmi = require('tmi.js');
const configuration = require('./config');
const {spawn} = require("child_process");

const chatbot = new tmi.client(configuration);
chatbot.on("message", chatMessageHandler);
chatbot.connect();
console.log("Clip bot started! " +
    "Do not close this window until your stream is over or if you need to disable the !clip command.");

let clipCommandLastUsed = new Date();

function chatMessageHandler(channel, userState, message, self) {
    const wordArray = message.split(" ");

    if (wordArray[0].toLowerCase() === "!clip") {
        if (new Date() - clipCommandLastUsed > 0) {
            console.log("Attempting to make new clip");
            clipCommandLastUsed = new Date();
            clipCommandLastUsed.setMinutes(clipCommandLastUsed.getMinutes() + 1);

            setTimeout(async () => {
                const createClip = spawn("py", ["./src/scripts/createClips.py"]);
                createClip.stdout.on("data", (data) => {
                    console.log(data.toString());
                    chatbot.say(channel, "New clip created and saved to streamer's computer!");
                });
            }, 5000);
        }
    }
}