# Phase 5: Posts and Feed

## Rails
### Models
* Posts

### Controllers
* Api::PostsController (create, destroy, index, show, update)

### Views
* Posts/index.json.jbuilder

## Flux
### Views (React Components)
* App
 - Main
   - Header
   - Profile
     - Content
       - Timeline
         - PostIndex
          - Post
   - Feed
    - PostIndex
      - Post

### Stores
* Posts

### Actions
* ApiActions.receiveAllPosts
* ApiActions.receivePost
* ApiActions.editPost
* ApiActions.destroyPost

### ApiUtil
* ApiUtil.fetchAllPosts
* ApiUtil.fetchSinglePost
* ApiUtil.createPost
* ApiUtil.updatePost
* ApiUtil.destroyPost

## Gems/Libraries
