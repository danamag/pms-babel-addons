# PimpMyStremio Babel Addons

This repository is meant to transpile [PimpMyStremio](https://github.com/sungshon/PimpMyStremio) addons with Babel.


## How to use

- Add your addon (as you would to PimpMyStremio) to `addonsList.json`
- Add your addon to PimpMyStremio's `addonsList.json` too, here is an example: if your addon's repository is `myuser/myaddon`, then add it as `"repo": "danamag/pms-babel-addons"` and also set `"entry": "./myaddon/prebuilt.js"` (... in PimpMyStremio's `addonsList.json`)


## Using this project to build all addons

```
npm install
npm start
```
