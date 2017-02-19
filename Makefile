
build: node_modules index.js
	mkdir -p build
	@browserify --require assert --require ./index.js:css --outfile build/build.js

clean:
	rm -fr build node_modules

test: build
	open test/index.html

node_modules: package.json
	npm install

.PHONY: clean test build
