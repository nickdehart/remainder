/*!
 * remainder <https://github.com/nickdehart/remainder>
 *
 * Copyright (c) 2020, Nicholas DeHart.
 * Released under the MIT License.
 */

"use strict";

module.exports = function remainder(val1, val2) {
  if (!val1 || !val2) {
    throw new Error("expected two arguments");
  }
  if (!Number.isInteger(+val1)) {
    throw new Error("expected an integer");
  }
  if (!Number.isSafeInteger(+val1)) {
    throw new Error("value exceeds maximum safe integer");
  }
  if (!Number.isInteger(+val2)) {
    throw new Error("expected an integer");
  }
  if (!Number.isSafeInteger(+val2)) {
    throw new Error("value exceeds maximum safe integer");
  }
  return val1 % val2;
};
