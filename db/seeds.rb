# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.destroy_all
# Event.destroy_all
# Uevent.destroy_all
Artwork.destroy_all
Gallery.destroy_all
# Artist.destroy_all


user1 = User.create!(name: 'Greg Gibson', password: 'password', nickname: 'Bamoozie', image: ' http://fillmurray.com/200/200', email: 'marcell@email.com')
user2 = User.create!(name: 'Bo Jackson', password: 'default', nickname: 'defaultUser', image: 'http://vignette3.wikia.nocookie.net/pinkpanther/images/5/5f/Pink_panther.jpg/revision/latest?cb=20091215221235/200/200', email: 'bocandoit@gmail.com')
user3 = User.create!(name: 'Tommy Jackson', password: 'default', nickname: 'defaultUser', image: 'https://static.comicvine.com/uploads/square_small/6/62058/2013735-59654_bugs_bunny.jpg/200/200', email: 'bocandoit1@gmail.com')
user4 = User.create!(name: 'Suszie Tiffany', password: 'default', nickname: 'defaultUser', image: 'https://vignette1.wikia.nocookie.net/parody/images/f/fa/Top_Cat.png/revision/latest?cb=20150818224245/200/200', email: 'bocandoit2@gmail.com')

gallery1 = user1.create_gallery
gallery2 = user2.create_gallery
gallery3 = user3.create_gallery
gallery4 = user4.create_gallery

event1 =  Event.create!(location: 'Dog Park', time: DateTime.new(2017,2,3,4,5,6))
event2 =  Event.create!(location: 'Piedmont Park', time: DateTime.new(2017,6,3,4,5,6))
event3 =  Event.create!(location: 'Fox Theatre', time: DateTime.new(2017,2,3,6,5,6))
event4 =  Event.create!(location: 'Ponce City Market', time: DateTime.new(2017,3,5,4,5,6))


uevent1 = Uevent.create!(user_id: user1.id, event_id: event1.id)
uevent2 = Uevent.create!(user_id: user2.id, event_id: event2.id)
uevent3 = Uevent.create!(user_id: user3.id, event_id: event3.id)
uevent4 = Uevent.create!(user_id: user4.id, event_id: event4.id)

# gallery1 = Gallery.create(user_id: user1.id)
# gallery2 = Gallery.create(user_id: user2.id)
# gallery3 = Gallery.create(user_id: user3.id)
# gallery4 = Gallery.create(user_id: user4.id)

artwork1 = gallery1.artworks.create!(paintings: ' http://fillmurray.com/200/300', photo: ' http://fillmurray.com/200/300', demo: ' http://fillmurray.com/200/300')
artwork2 = gallery2.artworks.create!(paintings: ' https://www.dalipaintings.com/images/paintings/the-melting-watch.jpg/200/300', photo: ' http://fillmurray.com/200/300', demo: ' http://fillmurray.com/200/300')
artwork3 = gallery3.artworks.create!(paintings: ' https://www.dalipaintings.com/images/paintings/the-melting-watch.jpg/200/300', photo: ' http://fillmurray.com/200/300', demo: ' http://fillmurray.com/200/300')
artwork4 = gallery4.artworks.create!(paintings: ' https://www.dalipaintings.com/images/paintings/the-melting-watch.jpg/200/300', photo: ' http://fillmurray.com/200/300', demo: ' http://fillmurray.com/200/300')




# user1 = User.create!(name: 'Greg Gibson', password: 'password', nickname: 'Bamoozie', image: ' http://fillmurray.com/200/200', email: 'marcell@email.com')
# gallery1 = user1.create_gallery
# artwork1 = gallery1.artworks.create!(paintings: ' http://fillmurray.com/200/300', photo: ' http://fillmurray.com/200/300', demo: ' http://fillmurray.com/200/300')

# puts user1