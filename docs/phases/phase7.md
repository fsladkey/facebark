# Phase 7: Notifications (1 day)

## Rails
### Models
* Notification

### Controllers
* Api::Notification (create, index, update)

### Views
* notification/index.json.jbuilder

## Flux
### Views (React Components)
* App
 - Main
   - Header
     - Notifications

### Stores
* Notifications

### Actions
* ApiActions.receiveAllNotifications

### ApiUtil
* ApiUtil.fetchAllNotifications
* ApiUtil.updateNotification

## Gems/Libraries
