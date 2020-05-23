module.exports = {
    purge: [
    './src/**/*.html',
    './src/**/*.svelte',
    './src/**/*.jsx',
  ],
    theme: {
        extend: {
            colors: {
                "myBlack": "#111216",
                "myWhite": "#FFFAFF",
                "myBlue": "#30BCED",
                "myPink": "#D72483",
                "myGreen": "#23CE6B",
                "macGreen": "#52C22C",
                "macYellow": "#FFBE2D",
                "macRed": "#FF6058",
            },
        },
    },
    variants: {},
    plugins: [],
};
