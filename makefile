
all: build-wasm test build-website 

serve: 
	cd _hugo && hugo serve

build-wasm:
	GOOS=js GOARCH=wasm go build -o _hugo/static/main.wasm github.com/arr-ai/arrai/cmd/arrai 

test:
	node _hugo/static/wasm_exec.js _hugo/static/main.wasm eval '41 + 1'

build-website:
	./deploy.sh
