# arr-ai.github.io/website

website for arrai

## Requirements
 - Hugo "extended" (this was just something that the template used without me knowing, maybe going to change this so it works with any hugo version)
    - Go and install an "exteneded" hugo version https://github.com/gohugoio/hugo/releases
- node for testing wasm binary installation
- go 1.14

## Features
 - Running wasm version of arrai

## Build and Deploy locally
- run `make`
    - This will rebuild the wasm binary and test that it works
- run `make serve`
    - This will start a hugo server on `localhost:1313`

