# ListPetsResponse


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `http_meta`                                                        | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `headers`                                                          | Dict[str, List[*str*]]                                             | :heavy_check_mark:                                                 | N/A                                                                |
| `pets`                                                             | List[[components.Pet](../../models/components/pet.md)]             | :heavy_minus_sign:                                                 | A paged array of pets                                              |
| `error`                                                            | [Optional[components.Error]](../../models/components/error.md)     | :heavy_minus_sign:                                                 | unexpected error                                                   |