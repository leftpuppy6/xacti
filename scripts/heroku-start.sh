npx ts-node-dev scripts/createHelpMessage.ts
rm tsconfig.json
npx tsc init
npx tsc --outDir ./dist
node dist/index.js