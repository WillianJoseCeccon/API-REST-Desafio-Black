import express from 'express'
import { custumersController } from './controllers/custumers-controller'
import { restaurantsController } from './controllers/restaurants-controller'



const router = express.Router()

router.get('/', (req, res) => res.json({hello: "Hello, world"}))

router.get('/restaurants', restaurantsController.index)
router.get('/restaurants/:id', restaurantsController.show) /* rota nao ecessaria*/
router.post('/restaurants', restaurantsController.save)
router.put('/restaurants/:id', restaurantsController.update)
router.delete('/restaurants/:id', restaurantsController.delete)


router.get('/custumers', custumersController.index)
router.get('/custumers/:id', custumersController.show) /* rota nao ecessaria*/
router.post('/custumers', custumersController.save)
router.put('/custumers/:id', custumersController.update)
router.delete('/custumers/:id', custumersController.delete)

export {router }