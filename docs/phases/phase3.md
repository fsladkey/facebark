# Phase 3: Profiles and search (2 days)

## Rails
### Models
* Profile

### Controllers
* Api::ProfilesController (show, update)

### Views
* profile.json.jbuilder

## Flux
### Views (React Components)
* App
 - Main
   - Header
   - Profile
     - ProfilePhoto (cover photo)
     - UserPhoto (profile picture)
     - Content
       - Timeline
         - TimeLineInfo (light weight "about")
         - PostIndex (empty for now)
       - About
         - AboutInfo
           - Overview
           - Bio

### Stores
* Profile

### Actions
* ApiActions.receiveProfile

### ApiUtil
* ApiUtil.fetchProfile
* ApiUtil.editProfile
* ApiUtil.fetchPhoto
* ApiUtil.createPhoto

## Gems/Libraries
* React Router
* Paperclip
* imagemagick
