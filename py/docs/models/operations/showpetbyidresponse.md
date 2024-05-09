# ShowPetByIDResponse


## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `http_meta`                                                        | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `pet`                                                              | [Optional[components.Pet]](../../models/components/pet.md)         | :heavy_minus_sign:                                                 | Expected response to a valid request                               |
| `error`                                                            | [Optional[components.Error]](../../models/components/error.md)     | :heavy_minus_sign:                                                 | unexpected error                                                   |