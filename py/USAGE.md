<!-- Start SDK Example Usage [usage] -->
```python
import sdk

s = sdk.SDK()

res = s.pets.list_pets(limit=21453)

if res.pets is not None:
    # handle response
    pass

```
<!-- End SDK Example Usage [usage] -->