User.destroy_all

ulysses = User.create!({username: "puglyfe", email: "puglyfe@dog.com", firstname: "Ulysses", lastname: "Sladkey", birthday: "2013-07-28", password_digest: "$2a$10$uIcBmoKgFJDRJKqYPlhWp.XliXIJABdnFmK9RyRC0xCb3BQWx2zLS", gender: "male"})
ulysses.set_up!
bailey = User.create!({username: "bprime", email: "bprime@dog.com", firstname: "Bailey", lastname: "Primero", birthday: "2014-01-01", password_digest: "$2a$10$jHoOjlUK0AIp4SFSyUEkOeOPCA4DgtfK33TuucR1sQiHRO0giAtRm", gender: "male"})
bailey.set_up!
morty = User.create!({username: "morty", email: "morty@dog.com", firstname: "Morty", lastname: "Chase", birthday: "2014-01-01", password_digest: "$2a$10$jHoOjlUK0AIp4SFSyUEkOeOPCA4DgtfK33TuucR1sQiHRO0giAtRm", gender: "male"})
morty.set_up!
emma = User.create!({username: "emma", email: "emma@dog.com", firstname: "Emma", lastname: "Chase", birthday: "2014-01-01", password_digest: "$2a$10$jHoOjlUK0AIp4SFSyUEkOeOPCA4DgtfK33TuucR1sQiHRO0giAtRm", gender: "male"})
emma.set_up!


bailey.profile.update!(breed: "Mutt", hometown: "Miami", bio: "I'm just a dog!")
ulysses.profile.update!(breed: "Pug", hometown: "Arlington", bio: nil,)
morty.profile.update!(breed: "Chihuahua", hometown: "NYC", bio: nil)
emma.profile.update!(breed: "Oodle", hometown: "NYC", bio: nil)
