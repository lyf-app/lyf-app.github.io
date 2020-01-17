#! /bin/sh
mkdir ../../githubPages/lyf-app.github.io/new/img
mkdir ../../githubPages/lyf-app.github.io/new/img/team
mkdir ../../githubPages/lyf-app.github.io/new/css
mkdir ../../githubPages/lyf-app.github.io/new/js
mkdir ../../githubPages/lyf-app.github.io/new/vendor

cp ./* ../../githubPages/lyf-app.github.io/new
cp ./img/. ../../githubPages/lyf-app.github.io/new/img
cp ./img/team/. ../../githubPages/lyf-app.github.io/new/img/team
cp ./css/lyfapp.min.css ../../githubPages/lyf-app.github.io/new/css
cp ./js/. ../../githubPages/lyf-app.github.io/new/js
cp -R ./vendor/. ../../githubPages/lyf-app.github.io/new/vendor
