
build: node_modules index.js
	mkdir -p build
	./node_modules/.bin/browserify --require assert --require ./index.js:css --outfile build/build.js

clean:
	rm -fr build node_modules

test: build
	open test/index.html

node_modules: package.json
	yarn && touch node_modules

.PHONY: clean test build
