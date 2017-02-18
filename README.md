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

## To Do
x Input for adding items
  Render items with checkbox
  Two sections - items to be done, and items done
  Checking an item moves it to the top of the done column
  Items should show a timestamp for when they are
    Added
    Updated
    Marked done
  Items that are done can be archived - these are not displayed unless requested
  
  Everything will be stored in a list under /loggers/:userid/todos
  Unless that makes filtering out the archived items harder, then they'll be split into two sections
  
  Issues with To Do's:
  All array operations are performed on the Vuex copy of the array. This means I cannot add, remove or
  update individual items from Firebase, I can only send it the entire list each time it changes. It
  would be good to figure out a solution for that without coupling the vue and firebase code too much.
