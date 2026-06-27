import type { Core } from "@strapi/strapi";

const config = ({
  env,
}: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  "strapi-v5-plugin-populate-deep": {
    config: {
      defaultDepth: 5, // How many levels deep do you want it to go by default?
    },
  },
});

export default config;
