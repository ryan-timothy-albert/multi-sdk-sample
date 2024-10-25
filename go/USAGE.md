<!-- Start SDK Example Usage [usage] -->
```go
package main

import (
	"context"
	"log"
	openapi "openapi/v2"
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
<!-- End SDK Example Usage [usage] -->