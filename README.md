# hasProp

## check if property has existed, if didn't throw TypeError.

```javascript
import { hasProp } from 'ifhasprop';

const obj = hasProp({
  name: 'hi'
});

obj.name // undefined
obj.age // throw error
```
