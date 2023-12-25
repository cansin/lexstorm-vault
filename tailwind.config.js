const {
  tailwindcssPaletteGenerator,
} = require("@bobthered/tailwindcss-palette-generator");

const colors = {
  "info": "#5243AA",      // A muted, sophisticated purple for informational elements.
    "failure": "#FF5630",   // A strong red for error messages or critical actions.
    "success": "#36B37E",   // A calming green for success indicators or confirmations.
    "warning": "#FFAB00",   // A bright yellow for warnings or attention-required elements.
    "blue": "#0052CC",      // A deep blue, conveying professionalism and trust.
    "cyan": "#00B8D9",      // A vibrant, tech-forward blue as the default/primary color.
    "dark": "#172B4D",      // A deep gray for dark themes or strong foreground elements.
    "gray": "#5E6C84",      // A neutral gray for secondary elements or backgrounds.
    "green": "#13CE66",     // A bright, lively green, more vibrant than the success green.
    "indigo": "#4C51BF",    // A deeper, more intense shade of blue-purple.
    "light": "#EBECF0",     // A light gray for background areas and subtle contrasts.
    "lime": "#A3E635",      // A vivid lime green for eye-catching or unique elements.
    "pink": "#FF49DB",      // A playful pink for less formal or unique interactions.
    "purple": "#7E5BEF",    // A standard purple, balancing vibrancy and professionalism.
    "red": "#E53E3E",       // A standard red, used for alerts or important warnings.
    "teal": "#319795",      // A teal, combining the calm of green and the depth of blue.
    "yellow": "#FFC82C"     // A standard yellow, suitable for highlights or cautions.
}

module.exports = {
  content: [
    'node_modules/flowbite-react/lib/esm/**/*.js',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [
    require('flowbite/plugin'),
  ],
  theme: {
    colors: tailwindcssPaletteGenerator({
colors: Object.values(colors),
      names: Object.keys(colors)
    }),
    "fontFamily": {
      "sans": ["Inter", "sans-serif"],
      "serif": ["Roboto Slab", "serif"]
    }
  },
}
