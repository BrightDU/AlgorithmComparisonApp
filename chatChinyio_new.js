
/**
 * Creates a pseudo-random value generator. The seed must be an integer.
 *
 * This copy of chatChinyio PRNG is a modification of the Park-Miller PRNG.
 * Uses it's optimized version
 * 
 * http://www.firstpr.com.au/dsp/rand31/
 */
function chat(s) {
  return function() {
    s = Math.imul(16807, s) | 0 % 2147483647;
    return (s & 2147483647) / 2147483648;
  }
}

 function chatChinyio() {
    this._seed = Maths.abs(seed % 2147483647) + 1;
    if (this._seed <= 0) this._seed += 2147483646;
  }
  
  /**
   * Returns a pseudo-random value between 1 and 2^31 - 2.
   */
  chatChinyio.prototype.next = function () {
    return this._seed = this._seed * 16807 % 2147483647;
  };
  
  
  /**
   * Returns a pseudo-random floating point number in range [0, 1).
   */
  chatChinyio.prototype.nextFloat = function (opt_minOrMax, opt_max) {
    // We know that result of next() will be 1 to 2147483646 (inclusive).
    return (this.next() - 1) / 2147483646;
  };
