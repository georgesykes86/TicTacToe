module.exports = {
    "extends": "airbnb-base",
    "env": {
    "jest": true
    },
    "rules": {
        "func-names": 0,
        "no-underscore-dangle": 0,
        "prefer-destructuring": 0,
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    }
};
