# Facebark

[Heroku link][heroku] facebark.herokuapp.com/

[heroku]: https://facebark.herokuapp.com/

## Minimum Viable Product

Facebark is a web application inspired by facebook built using Ruby on Rails
and React.js. Facebark allows users to:

- [√] Create an account
- [√] Log in / Log out
- [√] Create, and edit a profile
- [√] Search for other users
- [√] Upload a profile picture and cover photo to their profile
- [√] keep albums of uploaded photos
- [√] Make posts on their profile and the profile of their friends
- [√] Add friends and view content of their profiles
- [√] Approve or deny friend requests
- [√] View all friends recent posts in a "feed"
- [√] Comment on any visible post
- [√] "Like" (or lick) a posts.
- [√] "Like" (or lick) a comments.
- [√] Comment on photos.
- [√] "Like" photos.
- [√] Be notified when someone posts on, comments on, or likes their content.
- [ ] Send messages to friends. Sending a message starts a conversation. Users should be notified when they are messaged.
- [ ] Make messaging real time with pusher or other tool.
- [ ] infinite scroll feed

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, User/session JSON API push to Heroku (1 day)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). I will also construct a JSON API so that I can sign up, log in, and log out using an API utility. Also push to Heroku.
Create flux architecture. Create containing react components and necessary forms Users should be able to sign up, sign in, log out etc.
Add a users profile page. On sign in users should be redirected to their profile (until feed is implemented) and be able to edit their information from the profile.

[Details][phase-one]

### Phase 2: Search and photos (2 day)
Profiles should include an about page and profile picture. Users should be able to search for other users. Create photos model allow uploading of photos to an album.

[Details][phase-three]

### Phase 3: Create friend relationship (1 day)

Create friendship and friend request model. Users should be able to create a friendship by clicking add friend on another user. A user should be able to see pending friend requests and approve or deny them.

[Details][phase-four]

### Phase 4: Posts and feed (1 day)

Users should be able to post to their own wall and the walls of their friends. The root page should display a feed of the most recent posts by their friends.

[Details][phase-five]

### Phase 5: Comments and likes (1 day)

Users should be able to leave comments any post visible to them, as well as like the post. If time permits likeable and commentable should be separated into a concern.

[Details][phase-five]

### Phase 6: Notifications (1 day)

Users should be notified when certain actions are performed on their content. When anything is commented on liked etc, they notification should link to the appropriate post.

[Details][phase-six]

### Phase 7: Chat (1 day)

Users should be able to send messages to their friends. Users should be able to start conversations and send new messages, ideally messages will update in real time using Pusher or another tool.

[Details][phase-seven]

### Phase 8: Get fancy, seed database (1 day)

Add any additional eye candy that was put off from earlier, create a non trivial amount of interesting database seed data. Panic because there's so much more I wanted to do.

### Bonus Features (TBD)
- [ ] Multiple sessions
- [ ] auto-updating notifications (no refreshing the page)
- [ ] create events with time and location, users can rsvp an comment on event
- [ ] users can create alternate profiles that other users can follow (one way relationship of page having many followers)
- [ ] wow, facebook has a lot of content.

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
[phase-seven]: ./docs/phases/phase7.md
[phase-seven]: ./docs/phases/phase8.md
