#!/bin/sh
git checkout -u master
git add .
git commit -am "fix"
git push
echo Press Enter...
read