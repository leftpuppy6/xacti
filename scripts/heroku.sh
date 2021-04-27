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
rm -rf .git
git init
git remote add origin https://github.com/leftpuppy6/xacti
git checkout -b heroku
git add dist
git add assets
git commit -m "Update files"
git push origin -f origin heroku
echo "End git"
