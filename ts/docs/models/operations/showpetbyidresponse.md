# ShowPetByIdResponse

## Example Usage

```typescript
import { ShowPetByIdResponse } from "ryan-test-1/models/operations";

let value: ShowPetByIdResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `pet`                                                              | [components.Pet](../../models/components/pet.md)                   | :heavy_minus_sign:                                                 | Expected response to a valid request                               |
| `error`                                                            | [components.ErrorT](../../models/components/errort.md)             | :heavy_minus_sign:                                                 | unexpected error                                                   |