import type { CloudflareOpenNextConfig } from "@opennextjs/cloudflare";

export default {
  imageOptimization: {
    loader: "passthrough",
  },
} satisfies CloudflareOpenNextConfig;
