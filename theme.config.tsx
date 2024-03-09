import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";

import { Footer } from "./src/components/Footer";

const config = {
  logo: <div className="font-bold">Guesstimate Documentation</div>,
  project: {
    link: "https://github.com/getguesstimate/guesstimate-app",
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    return {
      titleTemplate: asPath === "/" ? "Guesstimate" : "%s | Guesstimate",
    };
  },
  head: () => {
    const { asPath } = useRouter();
    const url = `https://docs.getguesstimate.com${asPath}`;

    // Nextra automatically injects og:title and og:description.
    // og:title is based on _meta.json; og:description comes from frontmatter.
    return (
      <>
        <meta property="og:url" content={url} />
      </>
    );
  },
  footer: {
    text: <Footer />,
  },
  darkMode: false,
  nextThemes: {
    forcedTheme: "light",
  },
  primaryHue: 210,
  docsRepositoryBase: "https://github.com/getguesstimate/guesstimate-docs",
} satisfies DocsThemeConfig;

export default config;
