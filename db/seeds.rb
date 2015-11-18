User.destroy_all
ulysses = User.create!({username: "puglyfe", email: "puglyfe@dog.com", firstname: "Ulysses", lastname: "Sladkey", birthday: "2013-07-28", password_digest: "$2a$10$uIcBmoKgFJDRJKqYPlhWp.XliXIJABdnFmK9RyRC0xCb3BQWx2zLS", session_token: "LwLA_pmbNE2xqntyd1RCaQ", gender: "male"})
bailey = User.create!({username: "bprime", email: "bprime@dog.com", firstname: "Bailey", lastname: "Primero", birthday: "2014-01-01", password_digest: "$2a$10$jHoOjlUK0AIp4SFSyUEkOeOPCA4DgtfK33TuucR1sQiHRO0giAtRm", session_token: "wZWIbpMGyFpvVgvpa8oM7w", gender: "male"})
morty = User.create!({username: "morty", email: "morty@dog.com", firstname: "Morty", lastname: "Chase", birthday: "2014-01-01", password_digest: "$2a$10$jHoOjlUK0AIp4SFSyUEkOeOPCA4DgtfK33TuucR1sQiHRO0giAtRm", gender: "male"})
emma = User.create!({username: "emma", email: "emma@dog.com", firstname: "Emma", lastname: "Chase", birthday: "2014-01-01", password_digest: "$2a$10$jHoOjlUK0AIp4SFSyUEkOeOPCA4DgtfK33TuucR1sQiHRO0giAtRm", gender: "male"})


Album.create!({title: "Photos", user_id: ulysses.id})
Album.create!({title: "Photos", user_id: bailey.id})
Album.create!({title: "Photos", user_id: morty.id})
Album.create!({title: "Photos", user_id: emma.id})

Profile.create!([
  {breed: "Mutt", hometown: "Miami", bio: "I am a dog!", user_id: bailey.id},
  {breed: "Pug", hometown: "Arlington", bio: nil, user_id: ulysses.id},
  {breed: "Chihuahua", hometown: "NYC", bio: nil, user_id: morty.id},
  {breed: "Oodle", hometown: "NYC", bio: nil, user_id: emma.id}
])
