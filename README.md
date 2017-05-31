@ngiapak-memory
===============

Memory component of ngiapak.

Usage
=====

```
import * as path from "path";
import * as Memory from "@ngiapak/memory";

let storageDir = path.resolve('./');
let memoryInstance = new Memory(storageDir);

memoryInstance.now("ate", "burger");
console.log(memoryInstance.when("ate", "burger"));
console.log(memoryInstance.recent("ate", "burger"));
```
