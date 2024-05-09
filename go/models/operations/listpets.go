// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"openapi/models/components"
)

type ListPetsRequest struct {
	// How many items to return at one time (max 100)
	Limit *int `queryParam:"style=form,explode=true,name=limit"`
}

func (o *ListPetsRequest) GetLimit() *int {
	if o == nil {
		return nil
	}
	return o.Limit
}

type ListPetsResponse struct {
	HTTPMeta components.HTTPMetadata
	// A paged array of pets
	Pets []components.Pet
	// unexpected error
	Error   *components.Error
	Headers map[string][]string
}

func (o *ListPetsResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *ListPetsResponse) GetPets() []components.Pet {
	if o == nil {
		return nil
	}
	return o.Pets
}

func (o *ListPetsResponse) GetError() *components.Error {
	if o == nil {
		return nil
	}
	return o.Error
}

func (o *ListPetsResponse) GetHeaders() map[string][]string {
	if o == nil {
		return map[string][]string{}
	}
	return o.Headers
}
