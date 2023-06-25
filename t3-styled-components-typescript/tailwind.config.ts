import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        electric: "#db00ff",
        ribbon: "#0047ff",
      },
    },
  },
  plugins: [],
} satisfies Config;
