# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
firstname       | string    | not null
lastname        | string    | not null
password_digest | string    | not null
birthday        | date      | not null
session_token   | string    | not null, indexed, unique
gender          | string    | not null



## profiles
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
user_id      | integer   | not null, foreign key (references users), indexed
breed        | string    |
hometown     | string    |
gender       | string    |
bio          | text      |


## friend_request
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
user_id        | integer   | not null, foreign key (references users), indexed
friend_id      | integer   | not null, foreign key (references users), indexed
accepted       | boolean   | not null, default: false

## friendship
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
user_id        | integer   | not null, foreign key (references users), indexed
friend_id      | integer   | not null, foreign key (references users), indexed


## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
profile_id  | integer   | not null, foreign key (references profiles), indexed

## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, foreign key (references users), indexed
commentable_id  | integer   | not null, foreign key (references commentable), indexed
commentable_type| string    | not null, foreign key (references commentable), indexed

## likes
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
body            | text      | not null
user_id         | integer   | not null, foreign key (references users), indexed
likeable_id     | integer   | not null, foreign key (references likeable), indexed
likeable_type   | string    | not null, foreign key (references likeable), indexed

## photos
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
attachment      | file      | not null
imageable_id    | integer   | not null, foreign key (references imageable), indexed
imageable_type  | string    | not null, foreign key (references imageable), indexed

## notifications
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
description     | string    | not null
notifiable_id   | integer   | not null foreign key (references notifiable), indexed
notifiable_type | string    | not null foreign key (references notifiable), indexed
viewed          | boolean   | not null

## conversations
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_1          | integer   | not null, foreign key
user_2          | integer   | not null, foreign key

## messages
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key
conversation_id | integer   | not null, foreign key
body            | text      | not null
