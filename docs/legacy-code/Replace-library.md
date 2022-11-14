# Replace library
When you need to replace the library due to some kind of reason. It is deprecated or the bundle size is unacceptable for example.

## How to do it?
If you use the library to replace in a few places you can skip this point!

For large-scale operation you can use this tool https://github.com/facebook/jscodeshift.

## How to measure a progress?
As soon as we assume that refactorization (replace of the library) could take a long time we should start measuring progress. We can do this using Grafana and [need to find out]. The metric could be "Amount of usage".

## How to avoid this situation?
You can use the no-vendor lock-in approach creating a facade for a date library for example.

:::caution

This tip is not ready yet!

:::