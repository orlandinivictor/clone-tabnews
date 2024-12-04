/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/*.{js,ts,jsx,tsx,mdx}",

    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        logoFont: ["var(--font-dancingScript)"],
      },
      colors: {
        background: "var(--background)",
        contentBg: "var(--content-background)",
        foreground: "var(--foreground)",
        detailBg: "var(--detail-background)",
      },
    },
  },
  plugins: [],
};
