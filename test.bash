#!/usr/bin/env bash
set -uo pipefail

yarn node ./test.js

pushd test1
yarn node ./test.js
popd

pushd test2
yarn node ./test.js
popd
