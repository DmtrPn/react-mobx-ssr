module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "parser": "babel-eslint",
    "rules": {
    "comma-dangle": 1,
        "no-cond-assign": 1,
        "no-constant-condition": 2,
        "no-dupe-args": 2,
        "no-console": [1, {"allow": ["log", "warn", "error"]}],
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty": 1,
        "no-extra-boolean-cast": 1,
        "no-extra-semi": 1,
        "no-func-assign": 1,
        "no-inner-declarations": 1,
        "no-irregular-whitespace": 1,
        "no-obj-calls": 1,
        "no-sparse-arrays": 2,
        "no-unreachable": 1,
        "valid-typeof": 1,
        "block-scoped-var": 2,
        "default-case": 2,
        "no-caller": 1,
        "no-fallthrough": 1,
        "no-floating-decimal": 2,
        "no-invalid-this": 1,
        "no-loop-func": 2,
        "no-multi-spaces": 1,
        "no-octal": 1,
        "no-redeclare": 2,
        "no-self-compare": 1,
        "no-delete-var": 1,
        "no-shadow": [2,{"hoist":"functions"}],
        "no-undef": 0,
        "no-undefined": 1,
        "no-unused-vars": 0,
        "no-use-before-define": [1,"nofunc"],
        "array-bracket-spacing": 1,
        "comma-spacing": [1,{"before":false,"after":true}],
        "arrow-spacing": [1,{"before":true,"after":true}],
        "constructor-super": 1,
        "no-const-assign": 2,
        "no-this-before-super": 2,
        "no-var": 1,
        "indent": [
            "error",
            4
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};