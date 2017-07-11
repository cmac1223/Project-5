# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.destroy_all
# Artist.destroy_all


user1 = User.create!(name: 'Greg Gibson', password: 'password', nickname: 'Bamoozie', image: ' http://fillmurray.com/200/200', email: 'marcell@email.com')
gallery1 = user1.create_gallery
artwork1 = gallery1.artworks.create!(paintings: ' http://fillmurray.com/200/300', photo: ' http://fillmurray.com/200/300', demo: ' http://fillmurray.com/200/300')

puts user1