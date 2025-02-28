import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import globals from "eslint-plugin-node/globals.json";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react/no-unescaped-entities": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "no-unused-vars": "error",
      "no-console":"error",
    },
  },
  {fileL: "src/**/*.ts", rules: {"@typescript-eslint/no-unused-vars": "off"}},
  {fileL: "src/**/*.tsx", rules: {"@typescript-eslint/no-unused-vars": "off"}},
  {
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  },
  {
    env: {
      browser: true,
      node: true,
    },
    globals,
  }
];

export default eslintConfig;
