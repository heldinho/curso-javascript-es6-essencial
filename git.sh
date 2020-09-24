#!/bin/sh
git checkout dev
git add .
git commit -am "fix"
git push
echo Press Enter...
read