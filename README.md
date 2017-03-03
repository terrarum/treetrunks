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

## Showing AJAX status on components.
I need to be able to update some text on each module based on the Firebase query status in the
modules Actions. This means that code in the action needs to report to the component on the state
of the Firebase call.

I thought of making a Vue plugin but I'm not sure how that really solves the problem. I would need
to register a plugin instance and refer to that in the store and in the component, so it's basically
just a bridge. So basically just a wrapper around an event bus or something.

It might be possible to listen to the firebase object and see when calls to the database get made
and when they are responded to. That would allow me to listen for changes outside of the Store code,
but does mean that it's coupled to Firebase. I'm fine with that. Doesn't see possible.

SO.

Create an object that stores an event bus and will pass it between places that listen for it? How do
computed properties work when not referencing data?

Actually, if the store had a reference to its associated component, it could just update a data
property?

That works, but updating the {{ status }} text rerenders the entire component, so the old text
appears until Firebase completes and commits the new text. This seems wrong.
