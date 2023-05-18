const assert = require("assert").strict;
const { env } = require("process");

assert.equal(env.TEST_VARIABLE, "TEST_VALUE");

if (process.env.MANUAL_OVERWRITE_TEST) {
    assert.equal(env.OVERRIDE_VARIABLE, 'OVERWRITTEN')
}