## Usage
---

```es6
import Storage from '@derekalangilbert/Storage'

// or

Import { Get, Set, Update, Delete, Flush } from '@derekalangilbert/Storage'

const fooObject = {hello: 'world'}

  Storage.set('myStorage', foo, fooObject)
  Storage.set('myStorage', anotherFoo, 'cool new string')
 
 Storage.get() // returns the whole storage object already parsed
 
 // myStorage : {
 //    foo: {hello: 'world'},
 //    anotherFoo: 'cool new string'
 //     }
 
 Storage.get('anotherFoo') //returns 'cool new string'
```
