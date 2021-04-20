yarn createHelpMessage
rm tsconfig.json
npx tsc init
npx tsc --outDir ./dist
node dist/index.js