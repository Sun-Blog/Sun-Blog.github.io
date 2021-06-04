npm run build

cd dist

git init
git add .
git commit -m 'deploy'

git push -f https://github.com/sun-blog/sun-blog.github.io.git master

cd ../

rm -rf dist