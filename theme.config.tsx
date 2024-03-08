/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";

import { Footer } from "./src/components/Footer";

const config = {
  logo: (
    <div className="flex gap-2">
      <Image
        src="/img/guesstimate-logo.png"
        width={130}
        height={30}
        alt="Guesstimate logo"
      />
    </div>
  ),
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
  // squiggle components are not compatible with dark mode yet, see https://github.com/quantified-uncertainty/squiggle/issues/1192
  darkMode: false,
  nextThemes: {
    forcedTheme: "light",
  },
  primaryHue: 210,
  docsRepositoryBase:
    "https://github.com/quantified-uncertainty/squiggle/blob/main/packages/website",
} satisfies DocsThemeConfig;

export default config;
