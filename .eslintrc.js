module.exports = {
    
    parser: "babel-eslint",
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb",
        "plugin:prettier/recommended",
        "prettier",
    ],
    plugins: ["prettier"],
    rules: {
        semi: 1,
        "react/prop-types": 1,
        "react/jsx-max-props-per-line": 1,
        "prettier/prettier": ['error'],
        "linebreak-style": 0,
        "import/no-extraneous-dependencies": 0,
        "class-method-use-this": 0,
        "react/jsx-filename-extension": 0,
        "react/jsx-one-expression-per-line": 0,
        "react/forbid-props-types": 0,
        "react/require-defaul-props": 0,
        "no-unused-vars":1,
        "import/extensions":0,
        "import/order":1,
        "import/no-useless-path-segments":0,
        "import/prefer-default-export":0,
        "react/prefer-stateless-function":0,
        
        "no-use-before-define":0,
        "no-param-reassign":0,

    },
    env:{
        "es6":true,
        "browser":true,
        "node": true
    }
};
