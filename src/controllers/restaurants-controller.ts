import { Request, Response } from "express"
import { Restaurant } from '../models/restaurant'

export const restaurantsController = {
    index: async (req: Request, res: Response) => {
        const restaurants = await Restaurant.findAll()
        return res.json(restaurants)
    },

    save: async (req: Request, res: Response) => {
        
        const { name, description, phone, address } = req.body

        try {
            const restaurant = await Restaurant.create({
                name,
                description,                
                phone,
                address
            })

            return res.status(201).json(restaurant)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message})
            }

        }
    },

    show: async (req: Request, res: Response) => {
        const { id } = req.params

        try {
            const restaurants = await Restaurant.findByPk(id)
            return res.json(restaurants)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message})
            }

        }
    },
    // PUT candidates/:id
    update: async (req: Request, res: Response) => {
        const { id } = req.params
        const { name, description, phone, address } = req.body

        try {
            const restaurants = await Restaurant.findByPk(id)

            if (restaurants === null) {
                return res.status(404).json({message: 'Restaurante não encontrado'})                
            }
            restaurants.name = name
            restaurants.description = description            
            restaurants.phone = phone
            restaurants.address = address
            

            await restaurants.save()
            return res.status(200).json(restaurants)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message})
            }

        }
    },

    //DELETE /candidates/:id
    delete: async (req: Request, res: Response) => {
        const { id } = req.params

        try {
            await Restaurant.destroy({ where: {id }})

            return res.status(204).send()
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message})
            }

        }
    }
}