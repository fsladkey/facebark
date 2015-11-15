# Phase 8: Chat (1 day)

## Rails
### Models
* Conversation
* Message

### Controllers
* Api::Conversation (create, show)

### Views
* conversation/index.json.jbuilder

## Flux
### Views (React Components)
* App
 - Main
   - Chat
     - Messages

### Stores
* Conversations
* Messages

### Actions
* ApiActions.receiveConversation
* ApiActions.receiveMessages

### ApiUtil
* ApiUtil.fetchConversation
* ApiUtil.fetchAllMessages

## Gems/Libraries
