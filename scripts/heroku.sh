echo "Start setup"
yarn
echo "End setup"

echo "Start build"
yarn build
echo "End build"

echo "Start git"
FILES="package.json yarn.lock"

git config --global user.name "xacti"
git config --global user.email "xacti@email.com"
git checkout --orphan heroku
git reset --hard
rm -rf node_modules
git checkout master $FILES
git add dist $FILES
git commit -m "Push to heroku"
git push -f origin heroku
echo "End git"
