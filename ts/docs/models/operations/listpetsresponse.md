# ListPetsResponse


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `pets`                                                             | [components.Pet](../../models/components/pet.md)[]                 | :heavy_minus_sign:                                                 | A paged array of pets                                              |
| `error`                                                            | [components.ErrorT](../../models/components/errort.md)             | :heavy_minus_sign:                                                 | unexpected error                                                   |
| `headers`                                                          | Record<string, *string*[]>                                         | :heavy_check_mark:                                                 | N/A                                                                |