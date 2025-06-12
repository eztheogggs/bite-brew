const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: 'class',
  mode: "jit",
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // Typography
      fontFamily: {
        sans: ["Inter var", ...fontFamily.sans],
      },
      
      // Component Styling
      borderRadius: {
        DEFAULT: "8px",
        secondary: "4px",
        container: "12px",
      },
      boxShadow: {
        DEFAULT: "0 1px 4px rgba(0, 0, 0, 0.1)",
        hover: "0 2px 8px rgba(0, 0, 0, 0.12)",
      },

      // Color Palette
      colors: {
        primary: {
          DEFAULT: "#4F46E5",
          hover: "#4338CA",
          dark: "#6366F1",
        },
        secondary: {
          DEFAULT: "#6B7280",
          hover: "#4B5563",
          dark: "#9CA3AF",
        },
        accent: {
          DEFAULT: "#8B5CF6",
          hover: "#7C3AED",
          dark: "#A78BFA",
        },
        background: {
          light: "#FFFFFF",    // Pure white for light mode
          dark: "#0F172A",     // Deep blue for dark mode
        },
        text: {
          light: "#1F2937",    // Dark gray for light mode
          dark: "#F9FAFB",     // Off-white for dark mode
        },
        menu: {
          light: "#F3F4F6",    // Light gray for menu items
          dark: "#1E293B",     // Slate blue for dark mode
        },
        card: {
          light: "#FFFFFF",    // White cards in light mode
          dark: "#1F2937",     // Dark blue cards in dark mode
        }
      },

      // Spacing & Layout
      spacing: {
        "form-field": "16px",
        "section": "32px",
      },
    },
  },

  // Variant Modifiers
  variants: {
    extend: {
      boxShadow: ["hover", "active", "dark"],
      opacity: ["dark"],
      backgroundColor: ["dark", "hover", "active"],
      textColor: ["dark", "hover", "active"],
      borderColor: ["dark", "hover", "active"],
    },
  },

  // Additional Plugins
  plugins: [],
};