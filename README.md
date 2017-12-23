# electron-template

# Getting Started
To install and run the application run
```
npm install
gulp
npm run electron
```

To package the contents into an executable run one of the following for the target system
```
gulp
npm run package-win32
npm run package-mac
npm run package-linux
``` 

To run unit tests run
```
gulp
npm run package-win32
npm test
```
Currently there needs to be a built target for unit tests to run against. The current target is the win32 executable. The target file is defined in test/test.js