'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

const toJadenCase = str => {
    return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof toJadenCase, 'function')
assert.strictEqual(typeof toJadenCase("hi"), "string")
assert.strictEqual(toJadenCase("Hello this is my first test"), "Hello This Is My First Test")
assert.strictEqual(toJadenCase("hi"), "Hi")
// End of tests */
