import type { BuiltinAgentDefinition } from '../../types';
import { BUILTIN_AGENT_SLUGS } from '../../types';
import { systemRole } from './systemRole';

/**
 * Inbox Agent - the default assistant agent for general conversations
 *
 * Note: model and provider are intentionally undefined to use user's default settings
 * Note: GTD and Notebook tools are no longer hardcoded - they respect user's plugin settings
 */
export const INBOX: BuiltinAgentDefinition = {
  avatar: '/avatars/lobe-ai.png',
  runtime: (ctx) => ({
    // Use user's enabled plugins from ctx.plugins
    // Don't hardcode builtin tools - let user control which tools are enabled
    plugins: ctx.plugins || [],
    systemRole: systemRole,
  }),

  slug: BUILTIN_AGENT_SLUGS.inbox,
};
