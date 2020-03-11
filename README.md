# PimpMyStremio Babel Addons

This repository is meant to transpile [PimpMyStremio](https://github.com/sungshon/PimpMyStremio) addons with Babel.


## How to use

Add your addon (as you would to PimpMyStremio) to `addonsList.json`. Then add your addon to PimpMyStremio's `addonsList.json`, for an example, if your addon's repository is `myuser/myaddon`, then add it as `danamag/pms-babel-addons` in PimpMyStremio's `addonsList.json` and also set `entry: "./myaddon/prebuilt.js"`.


## Using this project to build all addons

```
npm install
npm start
```
