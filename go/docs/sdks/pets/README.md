# Pets
(*Pets*)

## Overview

### Available Operations

* [ListPets](#listpets) - List all pets
* [CreatePets](#createpets) - Create a pet
* [ShowPetByID](#showpetbyid) - Info for a specific pet

## ListPets

List all pets

### Example Usage

```go
package main

import(
	openapi "openapi/v2"
	"context"
	"log"
)

func main() {
    s := openapi.New()

    ctx := context.Background()
    res, err := s.Pets.ListPets(ctx, nil)
    if err != nil {
        log.Fatal(err)
    }
    if res.Pets != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `ctx`                                                    | [context.Context](https://pkg.go.dev/context#Context)    | :heavy_check_mark:                                       | The context to use for the request.                      |
| `limit`                                                  | **int*                                                   | :heavy_minus_sign:                                       | How many items to return at one time (max 100)           |
| `opts`                                                   | [][operations.Option](../../models/operations/option.md) | :heavy_minus_sign:                                       | The options for this request.                            |

### Response

**[*operations.ListPetsResponse](../../models/operations/listpetsresponse.md), error**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| sdkerrors.SDKError | 4XX, 5XX           | \*/\*              |

## CreatePets

Create a pet

### Example Usage

```go
package main

import(
	openapi "openapi/v2"
	"context"
	"openapi/v2/models/components"
	"log"
)

func main() {
    s := openapi.New()

    ctx := context.Background()
    res, err := s.Pets.CreatePets(ctx, components.Pet{
        ID: 596804,
        Name: "<value>",
    })
    if err != nil {
        log.Fatal(err)
    }
    if res != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `ctx`                                                    | [context.Context](https://pkg.go.dev/context#Context)    | :heavy_check_mark:                                       | The context to use for the request.                      |
| `request`                                                | [components.Pet](../../models/components/pet.md)         | :heavy_check_mark:                                       | The request object to use for the request.               |
| `opts`                                                   | [][operations.Option](../../models/operations/option.md) | :heavy_minus_sign:                                       | The options for this request.                            |

### Response

**[*operations.CreatePetsResponse](../../models/operations/createpetsresponse.md), error**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| sdkerrors.SDKError | 4XX, 5XX           | \*/\*              |

## ShowPetByID

Info for a specific pet

### Example Usage

```go
package main

import(
	openapi "openapi/v2"
	"context"
	"log"
)

func main() {
    s := openapi.New()

    ctx := context.Background()
    res, err := s.Pets.ShowPetByID(ctx, "<id>")
    if err != nil {
        log.Fatal(err)
    }
    if res.Pet != nil {
        // handle response
    }
}
```

### Parameters

| Parameter                                                | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `ctx`                                                    | [context.Context](https://pkg.go.dev/context#Context)    | :heavy_check_mark:                                       | The context to use for the request.                      |
| `petID`                                                  | *string*                                                 | :heavy_check_mark:                                       | The id of the pet to retrieve                            |
| `opts`                                                   | [][operations.Option](../../models/operations/option.md) | :heavy_minus_sign:                                       | The options for this request.                            |

### Response

**[*operations.ShowPetByIDResponse](../../models/operations/showpetbyidresponse.md), error**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| sdkerrors.SDKError | 4XX, 5XX           | \*/\*              |