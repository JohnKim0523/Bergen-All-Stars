import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: {
          50: '#e8f0fa',
          100: '#c5d9f2',
          200: '#9fbfe8',
          300: '#7aa5dd',
          400: '#5489cc',
          500: '#2e6db8',
          600: '#0a3a72',
          700: '#083060',
          800: '#06264d',
          900: '#041c3a',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
