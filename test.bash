#!/usr/bin/env bash
set -euo pipefail

MANUAL_OVERWRITE_TEST=true OVERWRITE_VARIABLE=OVERWRITTEN yarn node ./test.js

pushd test1
yarn node ./test.js
popd

pushd test2
yarn node ./test.js
popd

yarn test-script

yarn test-inline-script

yarn test-inline-overwrite-script

yarn test-inline-overwrite-script-crossenv

yarn workspace wp-1 run test-script

yarn workspace wp-1 run test-inline-script

yarn workspace wp-nested-1 run test-script

yarn workspace wp-nested-1 run test-inline-script