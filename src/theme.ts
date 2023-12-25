import type { CustomFlowbiteTheme } from "flowbite-react";

const theme: CustomFlowbiteTheme = {
  footer: {
    root: {
      base: "w-full bg-white border-t border-gray-100 dark:bg-gray-800 md:flex md:items-center md:justify-between",
    },
  },
  sidebar: {
    logo: {
      base: "mb-5 flex",
      img: "mr-2 h-6 sm:h-7 min-h-10",
    },
  },
};
export default theme;
