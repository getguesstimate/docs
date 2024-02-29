import nextra from "nextra";
import { BUNDLED_LANGUAGES, getHighlighter } from "shiki";

// not documented in nextra yet, but explained here: https://github.com/shuding/nextra/issues/555
const rehypePrettyCodeOptions = {
  getHighlighter: (options) => {
    return getHighlighter({
      ...options,
      langs: [...BUNDLED_LANGUAGES],
    });
  },
};

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  mdxOptions: { rehypePrettyCodeOptions },
  latex: true,
});

export default withNextra({
  async redirects() {
    return [];
  },
});
