# procrastination
⏳ I'll describe it later

```js
const { wrap } = require('procrastination');

let count = 0;
const once = wrap(function() {
	return ++count;
});

once(); // 1
once(); // 1
```

`once` call count is 1
