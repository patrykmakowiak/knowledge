# No vendor lock-in

## In library context
You can create a facade for any library to avoid vendor lock-in. A great example is a library to format a date. After this, we will use only a prepared facade to format a date.

### 👍 Pros 
- Relatively fast and easy change libraries

### 👎 Cons
- Facade maintenance (tests, documentations)

### In what cases should you consider creating a facade?
- date formatter
- metrics
- logger 

### Examples of ready to use vendor-neutral facade
- https://micrometer.io/