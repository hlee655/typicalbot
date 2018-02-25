const Command = require("../../structures/Command");
const Constants = require(`../../utility/Constants`);

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: "Displays the song currently streaming.",
            usage: "current",
            aliases: ["np", "song"],
            mode: Constants.Modes.LITE
        });
    }

    execute(message, parameters, permissionLevel) {
        const connection = message.guild.voiceConnection;
        if (!connection) return message.send(`Nothing is currently streaming.`);
        if (!connection.guildStream) {
            connection.disconnect();
            return message.error("An error occured while trying to complete this action, and requires me to leave the voice channel. Sorry!");
        }

        const short = text => this.client.functions.lengthen(-1, text, 45),
            time = len => this.client.functions.convertTime(len * 1000);

        const remaining = connection.guildStream.mode === "queue" ? connection.guildStream.current.length - Math.floor(connection.guildStream.dispatcher.time / 1000) : null;

        message.send(`**__Currently Streaming:__** **${short(connection.guildStream.current.title)}**${remaining ? ` (${time(remaining)} left)` : ""} | Requested by **${connection.guildStream.current.requester.author.username}**`);
    }
};