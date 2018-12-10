#!/bin/bash

set -e

SOURCE=$1
TARGET=$2

echo "You're inside $SOURCE now."

cd $SOURCE


npm pack

echo "Packing is complete."

tar -xvzf *.tgz

cp -r $SOURCE/package/dist/. $TARGET

echo "All files are successfully copied."

rm -rf $SOURCE/package

rm -rf $SOURCE/*.tgz
