const Command = require("../../structures/Command");

module.exports = class extends Command {
    constructor(client, name) {
        super(client, name, {
            description: "Sends a help embed in regards to logs.",
            mode: "strict"
        });
    }

    execute(message, response, permissionLevel) {
        response.buildEmbed()
            .setColor(0x00adff)
            .setTitle("Possible logs").setURL(this.client.config.urls.website)
            .setDescription(`You can set your server full of logs! Including activity and moderation.\n\n[Click here for more information on settings.](${this.client.config.urls.settings})`)
            .addField("**__Setting Up Activity Logs__**", "To set up activity logs, use the settings edit command for the logs setting. `$settings edit logs <#channel>`", false)
            .addField("**__Changing Join Logs__**", "**Enabled** By Default\n**Setting:** logs-join\n**Options:**\n- 'disable'\n- 'default'\n- 'embed'\n- desired-message", true)
            .addField("**__Changing Leave Logs__**", "**Enabled** By Default\n**Setting:** logs-leave\n**Options:**\n- 'disable'\n- 'default'\n- 'embed'\n- desired-message", true)
            .addField("**__Changing Ban Logs__**", "**Enabled** By Default\n**Setting:** logs-ban\n**Options:**\n- 'disable'\n- 'default'\n- 'embed'\n- desired-message", true)
            .addField("**__Changing Unban Logs__**", "**Disabled** By Default\n**Setting:** logs-unban\n**Options:**\n- 'disable'\n- 'default'\n- 'embed'\n- desired-message", true)
            .addField("**__Changing Nickname Logs__**", "**Disabled** By Default\n**Setting:** logs-nick\n**Options:**\n- 'disable'\n- 'enable'\n- 'default'\n- desired-message", true)
            .addField("**__Changing Invite Sent Logs__**", "**Disabled** By Default\n**Setting:** logs-invite\n**Options:**\n- 'disable'\n- 'enable'\n- 'default'\n- desired-message", true)
            .addField("**__Setting Up Moderation Logs__**", "To set up moderation logs, use the settings edit command for the modlogs setting. `$settings edit modlogs <#channel>`", false)
            .setFooter("TypicalBot", "https://typicalbot.com/images/icon.png")
            .setTimestamp()
            .send();
    }
};