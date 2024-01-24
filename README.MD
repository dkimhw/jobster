# Jobster

#### Overview

A simple job application that allows users to add / apply to jobs.

#### Setup

- install dependencies
- SecretOrPrivateKey Must Have A Value

```sh
npm install
```

- create .env and provide correct values
- start the project

```sh
npm start
```

- you should see "Server is listening ...." text

#### Package.json

- add "dev" script with nodemon
- change engines to current version (in my case 16)

package.json

```js

"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },

"engines": {
    "node": "16.x"
  }
```

- restart server with "npm run dev"
