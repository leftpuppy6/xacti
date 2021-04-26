module.exports = {
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json"
        }
    },
    moduleFileExtensions: [
        "js",
        "ts",
    ],
    preset: "ts-jest",
    rootDir: ".",
    roots: ["<rootDir>/src"],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    testMatch: ['<rootDir>/src/**/*.test.ts'],
}