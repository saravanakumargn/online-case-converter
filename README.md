Steps for dist folder to gh-pages
-
### Step 1
Commit all codes in master branch
### Step 2
Use subtree push to send it to the gh-pages branch on GitHub.
```sh
git subtree push --prefix dist origin gh-pages
```