import { Restaurant } from "./restaurant";
import { Custumer } from "./custumer";
import { RestaurantCustumer } from "./restaurant_custumer";

Restaurant.belongsToMany(Custumer, { through: 'restaurants_custumers'})

Custumer.belongsToMany(Restaurant, { through: 'restaurants_custumers'})

export {
    Restaurant,
    Custumer,
    RestaurantCustumer
}