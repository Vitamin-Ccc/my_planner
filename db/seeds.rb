# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create(email: "hello@gmail.com", password: 857392)
u2 = User.create(email: "hi@gmail.com", password: 321321)
u3 = User.create(email: "good@gmail.com", password: 321312)
u4 = User.create(email: "notgood@gmail.com", password: 123423)

u1.posts.create([
  {content: "I love raining!"},
  {content: "I'm so excited! Can't wait to go to Seattle."},
  {content: "I love the suitcase I just bought!"}
])

u2.posts.create([
  {content: "This is the best planner app I've used."},
  {content: "I can't believe he did this to me!"}
])