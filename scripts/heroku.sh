echo "Start setup"
rm -rf .gitignore
yarn
echo "End setup"

echo "Start build"
yarn build
echo "End build"

echo "Start git"
git config --global user.name "xacti"
git config --global user.email "xacti@email.com"
rm -rf .git
git init
git checkout -b heroku
git add dist
git add assets
git commit -m "Update files"
git push origin -f origin heroku
echo "End git"
