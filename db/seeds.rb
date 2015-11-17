User.create!([
  {username: "puglyfe", email: "puglyfe@dog.com", firstname: "Ulysses", lastname: "Sladkey", birthday: "2013-07-28", password_digest: "$2a$10$uIcBmoKgFJDRJKqYPlhWp.XliXIJABdnFmK9RyRC0xCb3BQWx2zLS", session_token: "LwLA_pmbNE2xqntyd1RCaQ", gender: "male"},
  {username: "bprime", email: "bprime@dog.com", firstname: "Bailey", lastname: "Primero", birthday: "2014-01-01", password_digest: "$2a$10$jHoOjlUK0AIp4SFSyUEkOeOPCA4DgtfK33TuucR1sQiHRO0giAtRm", session_token: "wZWIbpMGyFpvVgvpa8oM7w", gender: "male"}
])
Profile.create!([
  {breed: "Mutt", hometown: "Miami", bio: "I am a dog!", user_id: 1},
  {breed: "Pug", hometown: "Arlington", bio: nil, user_id: 2}
])
