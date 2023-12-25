import Values from "values.js";

const colors = Object.freeze({
  info: "#5243AA", // A muted, sophisticated purple for informational elements.
  failure: "#FF5630", // A strong red for error messages or critical actions.
  success: "#36B37E", // A calming green for success indicators or confirmations.
  warning: "#FFAB00", // A bright yellow for warnings or attention-required elements.
  blue: "#0052CC", // A deep blue, conveying professionalism and trust.
  cyan: "#007BFF", // A vibrant, tech-forward blue as the default/primary color.
  dark: "#172B4D", // A deep gray for dark themes or strong foreground elements.
  gray: "#5E6C84", // A neutral gray for secondary elements or backgrounds.
  green: "#13CE66", // A bright, lively green, more vibrant than the success green.
  indigo: "#4C51BF", // A deeper, more intense shade of blue-purple.
  light: "#EBECF0", // A light gray for background areas and subtle contrasts.
  lime: "#A3E635", // A vivid lime green for eye-catching or unique elements.
  pink: "#FF49DB", // A playful pink for less formal or unique interactions.
  purple: "#7E5BEF", // A standard purple, balancing vibrancy and professionalism.
  red: "#E53E3E", // A standard red, used for alerts or important warnings.
  teal: "#319795", // A teal, combining the calm of green and the depth of blue.
  yellow: "#FFC82C", // A standard yellow, suitable for highlights or cautions.
});

const shadeNames = Object.freeze([
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
]);

function shadesGenerator(color) {
  return new Values(color).all(19).reduce(
    (colors, color, index) => ({
      ...colors,
      [shadeNames[index]]: color.rgb.reduce(
        (hex, val) => `${hex}${val.toString(16).padStart(2, "0")}`,
        "#",
      ),
    }),
    {},
  );
}

function paletteGenerator(colors) {
  return Object.keys(colors).reduce(
    (palette, name) => ({ ...palette, [name]: shadesGenerator(colors[name]) }),
    {},
  );
}

module.exports = {
  content: [
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    colors: paletteGenerator(colors),
    fontFamily: {
      serif: [
        "Merriweather",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
      ],
      sans: [
        "Nunito Sans",
        "ui-sans",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans",
      ],
    },
  },
};
