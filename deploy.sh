#!/bin/bash

# Build
npm run build

# Remove old static files
rm -rf ../ftm-platform/ftm/web/bundles/ftmfront/content/partijfinanciering/quiz/*

# Copy static files
cp -r build/static/* ../ftm-platform/ftm/web/bundles/ftmfront/content/partijfinanciering/quiz/

# Copy index.html
cp build/index.html ../ftm-platform/ftm/src/FTM/FrontBundle/Resources/views/Content/partijfinancieringQuiz.html.twig

# Adjust index.html asset paths
sed -i 's|/datvis-quiz-ftm/static/\([^"]*\)|{{asset("bundles/ftmfront/content/partijfinanciering/quiz/\1")}}|g' ../ftm-platform/ftm/src/FTM/FrontBundle/Resources/views/Content/partijfinancieringQuiz.html.twig
sed -i 's|"/datvis-quiz-ftm/"|"./"|g' ../ftm-platform/ftm/src/FTM/FrontBundle/Resources/views/Content/partijfinancieringQuiz.html.twig
 
# CSS paths
for i in ../ftm-platform/ftm/web/bundles/ftmfront/content/partijfinanciering/quiz/css/*; do
    sed -i 's|https://www.ftm.nl/assets/|../../../../../../assets/|g' $i
    sed -i 's|/datvis-quiz-ftm/static/media/|../media/|g' $i
done
 
# JS paths
for i in ../ftm-platform/ftm/web/bundles/ftmfront/content/partijfinanciering/quiz/js/*; do
    sed -i 's|static/media/|./bundles/ftmfront/content/partijfinanciering/quiz/media/|g' $i
    sed -i 's|"/datvis-quiz-ftm/"|"./"|g' $i
done