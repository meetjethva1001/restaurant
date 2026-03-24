use("rest")
db.restaurants.createIndex({restaurant_name:1})
db.restaurants.dropIndex("restaurant_name_1")

