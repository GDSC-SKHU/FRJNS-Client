module.exports = {
  plugins: ["@hyesungoh"],
  extends: ["plugin:@hyesungoh/base", "plugin:@hyesungoh/typescript", "next"],
  rules: {
    "no-undef": "off",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Packages. `react` and 'next' related packages come first.
          ["^react", "^next", "^@?\\w"],
          // Internal packages.
          ["@pay-stitches", "^(@/?$)(/.*|$)"],
          // Side effect imports.
          ["^\\u0000"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
        ],
      },
    ],
  },
};
