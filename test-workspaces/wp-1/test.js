const assert = require("assert").strict;
const { env } = require("process");

assert.equal(env.TEST_VARIABLE, "WORKSPACE1_VALUE");
assert.equal(env.DEFAULT_VARIABLE, 'DEFAULT_VALUE');
