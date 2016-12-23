User.destroy_all

ulysses = User.create!({username: "puglyfe", email: "puglyfe@dog.com", firstname: "Ulysses", lastname: "Sladkey", birthday: "2010-07-28", password: "puglyfepuglyfe", gender: "Male"})
ulysses.set_up!
bailey = User.create!({username: "bprime", email: "bprime@dog.com", firstname: "Bailey", lastname: "Primero", birthday: "2009-01-01", password: "bprimebprime", gender: "Male"})
bailey.set_up!
morty = User.create!({username: "morty", email: "morty@dog.com", firstname: "Morty", lastname: "Chase", birthday: "2011-01-01", password: "starwars", gender: "Male"})
morty.set_up!
emma = User.create!({username: "emma", email: "emma@dog.com", firstname: "Emma", lastname: "Chase", birthday: "2014-01-01", password: "starwars", gender: "Female"})
emma.set_up!
aske = User.create!({username: "snowdogsrule", email: "aske@dog.com", firstname: "Aske", lastname: "Sladkey", birthday: "1999-01-01", password: "starwars", gender: "Male"})
aske.set_up!
paul = User.create!({username: "paul", email: "paul@dog.com", firstname: "Paul", lastname: "Smith", birthday: "2008-01-01", password: "starwars", gender: "Male"})
paul.set_up!
stella = User.create!({username: "stellaluna", email: "stella@luna.com", firstname: "Stella", lastname: "Luna", birthday: "2016-07-14", password: "starwars", gender: "Female"})
stella.set_up!


bailey.profile.update!(breed: "Mutt", hometown: "Miami", bio: "I'm just a dog!")
ulysses.profile.update!(breed: "Pug", hometown: "Arlington", bio: "",)
morty.profile.update!(breed: "Chihuahua", hometown: "NYC", bio: "I'm some kind of chihuahua or something.")
emma.profile.update!(breed: "Oodle", hometown: "NYC", bio: "I'm a dog! In new york! That's it!")
aske.profile.update!(breed: "Norweigen Elkhound", hometown: "Arlington", bio: "I'm pretty much the best!")
paul.profile.update!(breed: "Golden", hometown: "NYC", bio: "Paul Smith? This doesn't even sound like a dog's name!")
stella.profile.update!(breed: "Italian Greyhound", hometown: "Worcester", bio: "I'm a lean mean, face lickin machine.")

bprof = bailey.albums.first.photos.create!(image: File.open("#{Rails.root}/app/assets/images/bailey_profile.jpg"))
bcov = bailey.albums[1].photos.create!(image: File.open("#{Rails.root}/app/assets/images/miami_cover.jpg"))

uprof = ulysses.albums.first.photos.create!(image: File.open("#{Rails.root}/app/assets/images/ulysses_profile.jpg"))
ucov = ulysses.albums[1].photos.create!(image: File.open("#{Rails.root}/app/assets/images/capecod_cover.jpg"))

eprof = emma.albums.first.photos.create!(image: File.open("#{Rails.root}/app/assets/images/emma_profile.jpg"))
ecov = emma.albums[1].photos.create!(image: File.open("#{Rails.root}/app/assets/images/nyc2_cover.jpg"))

mprof = morty.albums.first.photos.create!(image: File.open("#{Rails.root}/app/assets/images/morty_profile.jpg"))
mcov = morty.albums[1].photos.create!(image: File.open("#{Rails.root}/app/assets/images/nyc_cover.jpg"))

aprof = aske.albums.first.photos.create!(image: File.open("#{Rails.root}/app/assets/images/aske_profile.jpg"))
acov = aske.albums[1].photos.create!(image: File.open("#{Rails.root}/app/assets/images/norway_cover.jpg"))

pprof = paul.albums.first.photos.create!(image: File.open("#{Rails.root}/app/assets/images/paul_profile.jpg"))
pcov = paul.albums[1].photos.create!(image: File.open("#{Rails.root}/app/assets/images/la_cover.jpg"))

sprof = stella.albums.first.photos.create!(image: File.open("#{Rails.root}/app/assets/images/stella_profile.jpg"))
scov = stella.albums[1].photos.create!(image: File.open("#{Rails.root}/app/assets/images/stella_cover.jpg"))

bailey.update!(photo_id: bprof.id)
ulysses.update!(photo_id: uprof.id)
emma.update!(photo_id: eprof.id)
morty.update!(photo_id: mprof.id)
aske.update!(photo_id: aprof.id)
paul.update!(photo_id: pprof.id)
stella.update!(photo_id: sprof.id)

bailey.profile.update!(photo_id: bcov.id)
ulysses.profile.update!(photo_id: ucov.id)
emma.profile.update!(photo_id: ecov.id)
morty.profile.update!(photo_id: mcov.id)
aske.profile.update!(photo_id: acov.id)
paul.profile.update!(photo_id: pcov.id)
stella.profile.update!(photo_id: scov.id)

bailey.friend(ulysses.id)
bailey.friend(morty.id)
bailey.friend(aske.id)
bailey.friend(paul.id)
bailey.friend(stella.id)
ulysses.friend(morty.id)
ulysses.friend(aske.id)
ulysses.friend(emma.id)
ulysses.friend(stella.id)
morty.friend(emma.id)
morty.friend(aske.id)
paul.friend(morty.id)
paul.friend(emma.id)  

ulysses.friend_requests.create!(user_id: paul.id)
bailey.friend_requests.create!(user_id: emma.id)


ulysses.posts.create!(body: "Hey buddy! How's NY?", profile_id: bailey.profile.id)
ulysses.posts.create!(body: "Fine I admit it, my tail looks like a cinnabon.", profile_id: ulysses.profile.id)
ulysses.posts.create!(body: "Anyone got any tips for cleaning the wrinkles on your own face without thumbs?", profile_id: ulysses.profile.id)
bailey.posts.create!(body: "Can anyone explain how I'm typing this right now?", profile_id: bailey.profile.id)
bailey.posts.create!(body: "#dale #mr305", profile_id: bailey.profile.id)
bailey.posts.create!(body: "Hola hermano. How's it going?", profile_id: ulysses.profile.id)
morty.posts.create!(body: "Anyone else hungry?", profile_id: morty.profile.id)
morty.posts.create!(body: "Anyone?", profile_id: morty.profile.id)
emma.posts.create!(body: "Hey there sailor.", profile_id: morty.profile.id)
emma.posts.create!(body: "Guys! Facebark is changing it's policy, if you don't want to pay $7 a month you have to twirl around three times and take a nap. Someone posted it on Barkr it must be true.", profile_id: emma.profile.id)
emma.posts.create!(body: "Hey everybody!", profile_id: emma.profile.id)
emma.posts.create!(body: "Hey there!!", profile_id: aske.profile.id)
paul.posts.create!(body: "bacon bacon bacon bacon...", profile_id: paul.profile.id)
aske.posts.create!(body: "Anyone else wanna go hunt some elk?", profile_id: aske.profile.id)
