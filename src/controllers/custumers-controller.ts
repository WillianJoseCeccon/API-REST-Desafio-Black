import { Request, Response } from 'express'
import { Custumer } from '../models/custumer'

export const custumersController = {
    index: async (req: Request, res: Response) => {
        const custumers = await Custumer.findAll()
        return res.json(custumers)
    },

    save: async (req: Request, res: Response) => {
        const { name, phone } = req.body

        try {
            const custumer = await Custumer.create({
                name,
                phone
            })

            return res.status(201).json(custumer)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message})
            }

        }
    },

    show: async (req: Request, res: Response) => {
        const { id } = req.params

        try {
            const custumer = await Custumer.findByPk(id)
            return res.json(custumer)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message})
            }

        }
    },
    // PUT candidates/:id
    update: async (req: Request, res: Response) => {
        const { id } = req.params
        const { name, phone } = req.body

        try {
            const custumer = await Custumer.findByPk(id)

            if (custumer === null) {
                return res.status(404).json({message: 'Restaurante não encontrado'})                
            }
            custumer.name = name          
            custumer.phone = phone
            
            

            await custumer.save()
            return res.status(200).json(custumer)
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
            await Custumer.destroy({ where: {id }})

            return res.status(204).send()
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message})
            }

        }
    }
}