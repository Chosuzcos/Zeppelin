import { BasePluginType, guildPluginEventListener, guildPluginMessageCommand, pluginUtils } from "knub";
import z from "zod/v4";
import { GuildAutoReactions } from "../../data/GuildAutoReactions.js";
import { GuildLogs } from "../../data/GuildLogs.js";
import { GuildSavedMessages } from "../../data/GuildSavedMessages.js";
import { AutoReaction } from "../../data/entities/AutoReaction.js";
import { CommonPlugin } from "../Common/CommonPlugin.js";

export const zAutoReactionsConfig = z.strictObject({
  can_manage: z.boolean().default(false),
});

export interface AutoReactionsPluginType extends BasePluginType {
  configSchema: typeof zAutoReactionsConfig;
  state: {
    logs: GuildLogs;
    savedMessages: GuildSavedMessages;
    autoReactions: GuildAutoReactions;
    cache: Map<string, AutoReaction | null>;
    common: pluginUtils.PluginPublicInterface<typeof CommonPlugin>;
  };
}

export const autoReactionsCmd = guildPluginMessageCommand<AutoReactionsPluginType>();
export const autoReactionsEvt = guildPluginEventListener<AutoReactionsPluginType>();
