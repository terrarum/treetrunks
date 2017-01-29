# treetrunks

> A work logging tool.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Plan
Storing data - Everything will be stored under /loggers/:userid/loggertype, so Notes will be stored under /loggers/:userid/notes etc.

User types something.
This updates the Vuex store.
On commit, an update is sent to Firebase.
Receives from Firebase do not update Vuex except on initial load.

## Notes
* All auth/vuex interaction is handled by onAuthStateChanged, but might need to reinstate individual functions for login versus registration so that accurate feedback can be given to the user about successful/unsuccessful registration/login.

