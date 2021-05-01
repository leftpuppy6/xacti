echo "Start setup"
rm -rf .gitignore
yarn
mkdir assets
touch assets/helpMessage
yarn createHelpMessage
echo "End setup"

echo "Start build"
yarn build
echo "End build"

echo "Start git"
git config --global user.name "xacti"
git config --global user.email "xacti@email.com"
git checkout --orphan heroku
git reset --hard
rm -rf node_modules
npm init -y
echo "worker: node dist/src/index.js" > Procfile
git add dist package.json Procfile
git commit -m "Push to heroku"
git push -f origin heroku
echo "End git"
