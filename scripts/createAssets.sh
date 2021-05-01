#!/bin/bash
FOLDER="assets"
HELP_MESSAGE="helpMessage"

if [ ! -e $FOLDER ]; then
  mkdir assets
  touch assets/$HELP_MESSAGE
fi