
build:
	GOOS=js GOARCH=wasm go build -o static/main.wasm github.com/arr-ai/arrai/cmd/arrai 
test:
	node wasm_exec.js arrai eval '41 + 1'