'use strict';

const Promise = require('bluebird'),
  rtg = require('random-token-generator')
  ;

class Generator {
    /**
     * Generate random token.
     */
    static generateToken() {
        return new Promise((resolve, reject) => {
            rtg.generateKey({
                string: true, // Output keys as a hex string
                strong: true, // Use the crypographically secure randomBytes function
                retry: true // Retry once on error
            }, function (err, key) {
                if (err)
                    return reject(err);

                return resolve(key);
            });
        });
    }
}

module.exports = Generator;
