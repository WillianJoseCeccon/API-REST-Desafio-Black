import { Request, Response } from "express"
import { sequelize } from "../database";
import { RestaurantCustumer } from '../models/restaurant_custumer'
const { Op } = require("sequelize");

export const restaurantsCustumersController = {
    index: async (req: Request, res: Response) => {
        const restaurantCustumer = await RestaurantCustumer.findAll()
        return res.json(restaurantCustumer)
    },

    save: async (req: Request, res: Response) => {
        const { restaurantId } = req.params
        const { custumerId, stars, comentes } = req.body
        if (typeof stars === "number") {
            if (stars > 5) {
                return res.status(400).json({ message: "Voto enviado não é maior que 5"})
            }
        } else {
            return res.status(400).json({ message: "Voto enviado não é um numero"})            
        }        
      /*  try{
            switch parseInt(stars) {
                case 1:
                    console.log('star - 1')
                    break;
                case 2:
                    console.log('star - 2')
                    break;
                case 3:
                    console.log('star - 3')
                    break;
                case 1:
                    console.log('star - 4')
                    break;
                case 1:
                    console.log('star - 5')
                    break;
                default:
                    console.log('invalido')
                    return res.status(400).json({ message: "Voto Aguardando valor de 1 a 5 estrelas"})
            }*/
                

          
        
          

        
        try {
            const restaurant_custumer = await RestaurantCustumer.create({
                restaurantId,
                custumerId,
                stars,                
                comentes
            })

            return res.status(201).json(restaurant_custumer)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message})
            }

        }
    },

    update: async (req: Request, res: Response) => {
        const { restaurantId } = req.params
        const { custumerId, stars, comentes } = req.body
        try {            
            const [affecteRows] = await RestaurantCustumer.update({ 
                stars,
                comentes
            }, {
                where: { [Op.and]: 
                    [{ restaurantId:restaurantId}, 
                     {custumerId:custumerId }] ,
                }
            })
            return res.status(201).json(affecteRows)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message})
            }
        }
    },

    todasAvaliacoesCliente: async (req: Request, res: Response) => {
        const { custumerId } = req.params

        const countAvaliacao = await RestaurantCustumer.count({            
            where: { custumerId }
        })
        console.log(countAvaliacao)

        const somaAvaliacao = await RestaurantCustumer.findAll({
            attributes: [ [sequelize.fn('sum', sequelize.col('stars')), 'sum']],
            group : ['restaurants_custumers.stars'],
            raw: true,
            where: { custumerId }
            
        })
        console.log(somaAvaliacao)

        /*Fazer um loop para somar a qtdade de stars */
        const averageStarsGiven = 12 / countAvaliacao
        console.log(averageStarsGiven)


        const restaurantCustumer = await RestaurantCustumer.findAll({
            attributes: ['restaurantId', 'stars', 'comentes'] ,
            where: { custumerId }
        })
        var resultadoFinal = { "customerId" : custumerId,
                    "averageStarsGiven"  : averageStarsGiven,
                    "reviews" :restaurantCustumer}
        return res.json(resultadoFinal)
    },

    todasAvaliacoesRestaurante: 
        async (req: Request, res: Response) => {
            const { restaurantId } = req.params

        const countAvaliacao = await RestaurantCustumer.count({            
            where: { restaurantId }
        })
        console.log(countAvaliacao)

        const somaAvaliacao = await RestaurantCustumer.findAll({
            attributes: [ [sequelize.fn('sum', sequelize.col('stars')), 'sum']],
            group : ['restaurants_custumers.stars'],
            raw: true,
            where: { restaurantId }
            
        })
        console.log(somaAvaliacao)

        /*Fazer um loop para somar a qtdade de stars */
        const averageStarsGiven = 12 / countAvaliacao
        console.log(averageStarsGiven)


        const restaurantCustumer = await RestaurantCustumer.findAll({
            attributes: ['custumerId', 'stars', 'comentes'] ,
            where: { restaurantId }
        })
        var resultadoFinal = { "restaurantId" : restaurantId,
                    "averageStarsReceived"  : averageStarsGiven,
                    "reviews" :restaurantCustumer}
        return res.json(resultadoFinal)
        },

        restaurantesMaisBemAvaliados: 
            async (req: Request, res: Response) => {
                
                const somaAvaliacao = await RestaurantCustumer.findAll({
                    attributes: ['restaurantId', [sequelize.fn('sum', sequelize.col('stars')), 'sum']],
                    group : ['restaurants_custumers.restaurantId'],
                    raw: true
                })
                console.log(somaAvaliacao)           
                return res.json(somaAvaliacao)
        }


}