const assert = require("assert").strict;
const { env } = require("process");

assert.equal(env.TEST1_VARIABLE, "TEST_VALUE");
assert.equal(env.TEST_VARIABLE, 'TEST_VALUE');
assert.equal(env.DEFAULT_VARIABLE, 'DEFAULT_VALUE');
