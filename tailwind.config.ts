import type { Config } from 'tailwindcss'

export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
} satisfies Config

