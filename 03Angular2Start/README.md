

angular 2 start

1 . create index.html and 
	code index.html
	
2. npm init --yes

3. npm install --save-dev lite-server

4.  install the typings package
    `npm install --save-dev typescript typings`
	
5. create file tsconfig.json and typings.json
	 code tsconfig.json typings.json
	 
6. create some configuration in tsconfig.json
    {
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "moduleResolution": "node",
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "removeComments": false,
        "noImplicitAny": false
    }    
	}

7. `npm install -g typings'

8. typings install dt~core-js dt~jasmine dt~node --save --global

9. change in package.json
   
   "scripts": {
		"lite": "lite-server",
        "tsc": "tsc",
        "tsc:w": "tsc -w",
        "typings": "typings",
        "postinstall": "typings install"
  }
  
10. `npm install concurrently --save-dev`

11.  
	"scripts": {
        "start": "tsc && concurrently \"npm run tsc:w\" \"npm run lite\"",
        "lite": "lite-server",
        "tsc": "tsc",
        "tsc:w": "tsc -w",
        "typings": "typings",
        "postinstall": "typings install"
    }

11. Angular Dependencies
    `npm install core-js reflect-metadata zone.js rxjs@5.0.0-beta.12 systemjs --save`
12. Angular Packages
    `npm install @angular/core @angular/common @angular/compiler @angular/platform-browser @angular/platform-browser-dynamic --save`
	
    `npm install	@angular/forms @angular/http @angular/router @angular/upgrade --save`
	
	Main packages are following:

	@angular/core
	@angular/common
	@angular/compiler
	@angular/platform-browser
	@angular/platform-browser-dynamic
	
	 Optional packages are following:
	 @angular/router
	@angular/http
	@angular/forms