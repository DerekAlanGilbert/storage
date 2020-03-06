## Usage
---

```js
import Storage from '@derekalangilbert/Storage'

// or

Import {Get, Set, Update, Delete, Flush} from '@derekalangilbert/Storage'

const fooObject = {hello: 'world'}

  Storage.set('myStorage', foo, fooObject)
  Storage.set('myStorage', anotherFoo, 'cool new string')
 
  // in localStorage you would now have 
  myStorage : {
     foo: {hello: 'world'},
     anotherFoo: 'cool new string'
      }
```
