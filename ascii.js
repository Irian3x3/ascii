const figlet = require('figlet'); // npm install figlet

module.exports = { /* This is the command handler that I use, if you don't use a command handler or use a different one, you'd have to change some of the code. */
    name: "ascii",
    description: "Convert normal text into ASCII.",
    execute(message, args) {
        let toAscii = args.join(" ")
        if (!toAscii) return message.channel.send("You didn't say any text!");
        
        figlet(toAscii, function (err, data) {
            message.channel.send(`\`\`\`${data}\`\`\``)
        })
    }
}
