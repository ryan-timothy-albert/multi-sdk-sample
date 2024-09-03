<!-- Start SDK Example Usage [usage] -->
```typescript
import { RyTs } from "ryan-test-1";

const ryTs = new RyTs();

async function run() {
    const result = await ryTs.pets.listPets();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->