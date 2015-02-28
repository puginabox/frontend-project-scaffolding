# Gulp grunt work
Project scaffolding, including:

## Requirements

- Install Node
	- on OSX install [home brew](http://brew.sh/) and type `brew install node`
	- on Windows install [chocolatey](https://chocolatey.org/) 
    - Read here for some [tips on Windows](http://jpapa.me/winnode)
    - open command prompt as administrator
        - `choco install nodejs`
        - `choco install nodejs.install`
- Don't use sudo!!! (http://jpapa.me/nomoresudo).
- Open CTL (I use iTerm)
- `npm install -g node-inspector bower gulp`

## Quick Start
```bash
$ npm install
$ bower install
$ npm start
```

## Project Manifest
- dependencies
    - needed by project at runtime
        - express, angular, jquery, foundation, compass, modernizr
        
- devDependencies
    - needed for development
        - jshint, JSCS, uglify, compass, 