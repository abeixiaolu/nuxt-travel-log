import antfu from "@antfu/eslint-config";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";

// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(antfu({
  type: "app",
  vue: true,
  typescript: true,
  formatters: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
  ignores: [".pnpm-store/**", "**/migrations/*"],
}, {
  rules: {
    "vue/max-attributes-per-line": ["error", {
      singleline: {
        max: 2,
      },
      multiline: {
        max: 1,
      },
    }],
    "ts/no-redeclare": "off",
    "ts/consistent-type-definitions": ["error", "type"],
    "no-console": ["warn"],
    "antfu/no-top-level-await": ["off"],
    "node/prefer-global/process": ["off"],
    "node/no-process-env": ["error"],
    "perfectionist/sort-imports": ["error", {
      tsconfigRootDir: ".",
    }],
    "unicorn/filename-case": ["error", {
      case: "kebabCase",
      ignore: ["README.md"],
    }],
  },
  settings: {
    "better-tailwindcss": {
      entryPoint: "assets/css/main.css",
    },
  },
}, {
  plugins: {
    "better-tailwindcss": eslintPluginBetterTailwindcss,
  },
  rules: {
    // enable all recommended rules to report a warning
    ...eslintPluginBetterTailwindcss.configs["recommended-warn"].rules,
    // enable all recommended rules to report an error
    ...eslintPluginBetterTailwindcss.configs["recommended-error"].rules,

    // or configure rules individually
    "better-tailwindcss/multiline": ["warn", { printWidth: 100 }],
    "better-tailwindcss/no-unregistered-classes": "off",
  },
}));
