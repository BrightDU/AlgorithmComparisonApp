var mwc = (function() {
    // Set two seed values.
    var carry, x,
        // Value of modulus and multiplier are chosen together
        // 2^32 is chosen because it's similar to the others
        // but we don't use bitwise operations to take advantage of this
        max = Math.pow(2, 32),
        a = 3636507990;
    return {
      setSeed : function(arr) {
        var seed = arr || [].map(function() {
          return Math.round(Math.random() * max);
        });
        carry = seed[0];
        x = seed[1];
      },
      getSeed : function() {
        return [carry, x];
      },
      rand : function() {
        // Two multiplications
        // create carry with division, x with mod
        // The first part is the "carry" where we're
        // using both parts of the residue
        carry = ((a * x) + carry) / max;
        // subtracting from the max is what makes it the compliment
        x = (max - 1) - ((a * x) + carry) % max;
        return x / max;
      }
    };
  }());