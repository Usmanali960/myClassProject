import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        //nav bar colors
        foreground: "var(--foreground)",
        NavBGColor: "#044E83",
        NavHeadingColor: "#B9D8F3",

        //main section colors
        mainH3Color: "#044E83",
        mainH2Color: "#2EB6E8",

        //footer section Colors
        footerBGColor: "#F4F4F5",
        LiColor: "#535356",
        instagramIcon:"#FCAF45",

        //Apply component colors
        buttonColor:"#4267B2",
        labelColor:"#334155"
      },
    },
  },
  plugins: [],
};
export default config;
