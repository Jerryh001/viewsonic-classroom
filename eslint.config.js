import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
    { ignores: ["dist"] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            globals: globals.browser,
        },
        rules: {
            "@typescript-eslint/no-namespace": "off",
        },
    },
    {
        extends: [reactHooks.configs["recommended-latest"]],
        files: ["**/*.{ts,tsx}"],
    },
    {
        extends: [reactRefresh.configs.vite],
        files: ["**/*.{ts,tsx}"],
    }
);
