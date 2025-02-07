export default {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:prettier-vue/recommended",
    "plugin:vue/essential",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  "settings": {
    "prettier-vue": {
      "SFCBlocks": {
        "template": false,
        "script": false,
        "style": true
      }
    }
  },
  "plugins": ["vue", "@typescript-eslint"],
  "rules": {
    "vue/no-v-model-argument": "off",
    "new-parens": "error",
    "lines-between-class-members": ["error", "always"],
    "no-multi-spaces": "error",
    "no-whitespace-before-property": "error",
    "object-property-newline": "error",
    "operator-linebreak": ["error", "after"],
    "padded-blocks": ["error", "never"],
    "newline-before-return": "error",
    "quotes": [2, "single", { "avoidEscape": true }],
    "linebreak-style": [
      "error", "unix"
    ],
    "comma-dangle": [
      "error", "never"
    ],
    "no-console": 0,
    "semi": ["error", "never"],
    "guard-for-in": 0,
    "class-methods-use-this": 0,
    "max-classes-per-file": 0,
    "no-multi-assign": 0,
    "camelcase": ["warn"],
    "eqeqeq": ["warn", "smart"],
    "no-confusing-arrow": 0,
    "no-nested-ternary": 0,
    "curly": ["warn", "multi", "consistent"],
    "vue/no-v-for-template-key-on-child": 0,
    "vue/no-v-for-template-key": 0,
    "vue/require-v-for-key": 0,
    "vue/valid-v-for": 0,
    "object-curly-newline": [
      "warn",
      {
        "multiline": true,
        "minProperties": 3,
        "consistent": true
      }
    ],
    "vue/no-v-html": 0,
    "prefer-destructuring": 0,
    "max-len": [
      "warn",
      {
        "code": 150,
        "comments": 300,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreRegExpLiterals": true
      }
    ],
    "no-plusplus": 0,
    "no-continue": 0,
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
    "vue/no-side-effects-in-computed-properties": ["warn"],
    "vue/no-unused-components": ["warn"],
    "no-param-reassign": ["warn", { "props": true, "ignorePropertyModificationsFor": ["state", "config"] }],
    "vue/multi-word-component-names": 0,
    "vue/no-setup-props-destructure": "warn",
    "space-before-blocks": "off",
    "@typescript-eslint/space-before-blocks": "error",
    "space-before-function-paren": [
      "error", "always"
    ],
    "@typescript-eslint/space-before-function-paren": "warn",
    "no-return-assign": 0,
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": ["warn", { "vars": "all", "args": "none", "ignoreRestSiblings": true }],
    "no-use-before-define": 0,
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/ban-types":"warn",
    "@typescript-eslint/no-explicit-any":"warn",
    "indent": "off",
    "@typescript-eslint/indent": ["warn", 2],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "no-trailing-spaces": "error",
    "key-spacing": "off",
    "@typescript-eslint/key-spacing": "error",
    "space-infix-ops": "off",
    "@typescript-eslint/space-infix-ops": "error",
    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": "error",
    "block-spacing": "off",
    "@typescript-eslint/block-spacing": "error",
    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": "error",
    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": ["error", "always"],
    "@typescript-eslint/type-annotation-spacing": "error",
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": ["warn", { "before": false, "after": true }],
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 3
      },
      "multiline": {
        "max": 1
      }
    }]
  }
}
