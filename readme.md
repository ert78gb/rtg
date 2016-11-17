Random token generator
======================

Use [bluebirdjs](http://bluebirdjs.com/docs/getting-started.html) promise and 
[random-token-generator](https://github.com/MusicMapIo/random-token-generator) js library to generate 
random token in promise style.


```
$ npm install --save @ert78gb/rtg
```

```javascript
const rtg = require('rtg');

rtg.generateToken()
    .then((token)=>{
      // do something with token
    })
    .catch((error)=>{
        // oops error
    });

```
