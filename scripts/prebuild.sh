#!/bin/bash

ASSETS="assets"
HELP_MESSAGE="helpMessage"

DIST="dist"
SRC="src"

NODE_ENV=`env | grep NODE_ENV`

# Create an assets folder.
if [ ! -e $ASSETS ]; then
  mkdir $ASSETS
  touch $ASSETS/$HELP_MESSAGE
fi

# Create the help message.
yarn ts-node-dev scripts/createHelpMessage.ts

# Move the assets folder to the dist/src folder.
if [ $CI = true ]; then
  mkdir $DIST
  rm -rf $DIST/$ASSETS
  mv $ASSETS $DIST/$ASSETS
else
  rm -rf $SRC/$ASSETS
  mv $ASSETS src
fi