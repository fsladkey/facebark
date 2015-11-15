# Phase 6: Comments and likes (1 day)

## Rails
### Models
* Comment
* Like

### Controllers
* Api::CommentsController (create, destroy, index, update)
* Api::Likes (create, destroy, index, update)

### Views
* comments/index.json.jbuilder
* likes/index.json.jbuilder

## Flux
### Views (React Components)
* App
 - Main
   - Header
   - Feed
    - PostIndex
      - Post
        - Comment
        - Like

### Stores
* Comment
* Like

### Actions
* ApiActions.receiveAllComments
* ApiActions.receiveAllLikes
* ApiActions.editComment
* ApiActions.destroyComment
* ApiActions.destroyLike

### ApiUtil
* ApiUtil.fetchAllComments (maybe these should always be sent with a post, consider refactoring post fetching instead.)
* ApiUtil.fetchAllLikes (same deal)

## Gems/Libraries
