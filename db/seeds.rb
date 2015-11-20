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

bprof = bailey.albums.first.photos.create!(image: File.open("#{Rails.root}/app/assets/images/bailey_profile.jpg"))
bcov = bailey.albums[1].photos.create!(image: File.open("#{Rails.root}/app/assets/images/miami_cover.jpg"))

uprof = ulysses.albums.first.photos.create!(image: File.open("#{Rails.root}/app/assets/images/ulysses_profile.jpg"))
ucov = ulysses.albums[1].photos.create!(image: File.open("#{Rails.root}/app/assets/images/capecod_cover.jpg"))

eprof = emma.albums.first.photos.create!(image: File.open("#{Rails.root}/app/assets/images/emma_profile.jpg"))
ecov = emma.albums[1].photos.create!(image: File.open("#{Rails.root}/app/assets/images/nyc2_cover.jpg"))

mprof = morty.albums.first.photos.create!(image: File.open("#{Rails.root}/app/assets/images/morty_profile.jpg"))
mcov = morty.albums[1].photos.create!(image: File.open("#{Rails.root}/app/assets/images/nyc_cover.jpg"))

bailey.update!(photo_id: bprof.id)
ulysses.update!(photo_id: uprof.id)
emma.update!(photo_id: eprof.id)
morty.update!(photo_id: mprof.id)

bailey.profile.update!(photo_id: bcov.id)
ulysses.profile.update!(photo_id: ucov.id)
emma.profile.update!(photo_id: ecov.id)
morty.profile.update!(photo_id: mcov.id)

environment_seed_file = File.join(Rails.root, 'db', 'seeds', "#{Rails.env}.rb")

ulysses.posts.create!(body: "Hey buddy! How's NY?", profile_id: bailey.profile.id)
ulysses.posts.create!(body: "Anyone got any tips for cleaning the wrinkles in your own face without thumbs?", profile_id: ulysses.profile.id)
bailey.posts.create!(body: "Can anyone explain how I'm typing this right now?", profile_id: bailey.profile.id)
bailey.posts.create!(body: "Hola hermano. How's it going?", profile_id: ulysses.profile.id)
morty.posts.create!(body: "Anyone else hungry?", profile_id: morty.profile.id)
morty.posts.create!(body: "Anyone?", profile_id: morty.profile.id)
emma.posts.create!(body: "Hey there sailor.", profile_id: morty.profile.id)
emma.posts.create!(body: "Guys! Facebark is changing it's policy, if you don't want to pay $7 a month you have to twirl around three times and take a nap. Someone posted it on Barkr it must be true.", profile_id: emma.profile.id)
