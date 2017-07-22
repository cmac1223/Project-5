# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.destroy_all
Event.destroy_all
Uevent.destroy_all
Artwork.destroy_all
Gallery.destroy_all
# Artist.destroy_all


user1 = User.create!(name: 'Greg Gibson', password: 'password', nickname: 'Bam00zie', image: ' Bam00zieProfile.png', email: 'marcell@email.com')
user2 = User.create!(name: 'James Dickerson', password: 'default', nickname: 'dirtykics', image: 'dirtykics.png', email: 'bocandoit@gmail.com')
user3 = User.create!(name: 'Artist', password: 'default', nickname: 'defaultUser', image: 'http://s3.amazonaws.com/cdn.roosterteeth.com/default/original/user_profile_female.jpg', email: 'bocandoit1@gmail.com')
user4 = User.create!(name: 'Artist', password: 'default', nickname: 'defaultUser', image: 'https://vignette1.wikia.nocookie.net/parody/images/f/fa/Top_Cat.png/revision/latest?cb=20150818224245/200/200', email: 'bocandoit2@gmail.com')

gallery1 = user1.create_gallery
gallery2 = user2.create_gallery
gallery3 = user3.create_gallery
gallery4 = user4.create_gallery

event1 =  Event.create!(location: 'centennial park', name: 'Art Fest', time: '4:00pm', date: Date.new(2017, 7, 29))
event2 =  Event.create!(location: 'Piedmont Park', name: 'Trap Art', time: '3:30pm', date: Date.new(2017, 8, 12))
event3 =  Event.create!(location: 'Fox Theatre', name: 'Art Exhbit', time: '7:00pm', date: Date.new(2017, 8, 26))
event4 =  Event.create!(location: 'Hartsfield–Jackson Atlanta International Airport', name: 'Meet and Greet', time: '4:00pm', date: Date.new(2017, 9, 16))


uevent1 = Uevent.create!(user_id: user1.id, event_id: event1.id)
uevent2 = Uevent.create!(user_id: user2.id, event_id: event2.id)
uevent3 = Uevent.create!(user_id: user3.id, event_id: event3.id)
uevent4 = Uevent.create!(user_id: user4.id, event_id: event4.id)


artwork1 = gallery1.artworks.create!(paintings: ' bam00zieWorld.png', photo: ' bam1.png', demo: ' bam2.png', artwork_video_url: 'https://www.youtube.com/watch?v=vGgynTHEIx0')
artwork2 = gallery2.artworks.create!(paintings: ' dirtykicsFizzyFac.png', photo: ' dirtykicsNar.png', demo: ' dirtykicsWorkout.png')
artwork3 = gallery3.artworks.create!(paintings: ' ', photo: ' http://fillmurray.com/200/300', demo: ' http://fillmurray.com/200/300')
artwork4 = gallery4.artworks.create!(paintings: ' https://www.dalipaintings.com/images/paintings/the-melting-watch.jpg/200/300', photo: ' http://fillmurray.com/200/300', demo: ' http://fillmurray.com/200/300')




