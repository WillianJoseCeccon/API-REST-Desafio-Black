import express from 'express'
import { custumersController } from './controllers/custumers-controller'
import { restaurantsController } from './controllers/restaurants-controller'
import { restaurantsCustumersController } from './controllers/restaurants-custumers-controller'



const router = express.Router()

router.get('/', (req, res) => res.json({hello: "Hello, world"}))

router.get('/restaurants', restaurantsController.index)
router.get('/restaurants/:id', restaurantsController.show) /* rota nao necessaria*/
router.post('/restaurants', restaurantsController.save)
router.put('/restaurants/:id', restaurantsController.update)
router.delete('/restaurants/:id', restaurantsController.delete)


router.get('/custumers', custumersController.index)
router.get('/custumers/:id', custumersController.show) /* rota nao necessaria*/
router.post('/custumers', custumersController.save)
router.put('/custumers/:id', custumersController.update)
router.delete('/custumers/:id', custumersController.delete)


router.get('/restaurantsCustumers/addReview', restaurantsCustumersController.index)
router.post('/restaurantsCustumers/:restaurantId/reviews', restaurantsCustumersController.save)
router.put('/restaurantsCustumers/:restaurantId/reviews', restaurantsCustumersController.update)
router.get('/restaurantsCustumers/:custumerId/reviews', restaurantsCustumersController.todasAvaliacoesCliente)
router.get('/custumersRestaurants/:restaurantId/reviews', restaurantsCustumersController.todasAvaliacoesRestaurante)
router.get('/custumersRestaurants/restaurantesMaisBemAvaliados',restaurantsCustumersController.restaurantesMaisBemAvaliados)
export {router}