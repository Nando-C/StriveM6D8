import { Router } from "express"
import { Author } from "../../db/models/index.js"
import sequelize from "sequelize"

const { Op } = sequelize

const router = Router()

router.route('/')
    .get( async (req, res, next) => {
        try {
            const filters = []

            const keys = Object.keys(req.query)
            keys.forEach(key => {
                let element

                if(key === 'age') {
                    element = { [key]: {[Op.eq]: parseInt(req.query[key])} }
                } else {
                    element = { [key]: {[Op.substring]: req.query[key]} }
                }
                filters.push(element)
            })

            const data = await Author.findAll({
                // attributes: { exclude: ['createdAt', 'updatedAt']},
                where: filters.length > 0 
                    ? {[Op.or]: filters}
                    : {}
            })
            res.send(data)
        } catch (error) {
            console.log(error)
            next(error)
        }
    })
    .post( async (req, res, next) => {
        try {
            const data = await Author.create(req.body)
            res.send(data)
        } catch (error) {
            console.log(error)
            next(error)
        }
    })

router.route('/:authorId')
    .get( async (req, res, next) => {
        try {
            
        } catch (error) {
            console.log(error)
            next(error)
        }
    })
    .put( async (req, res, next) => {
        try {
            
        } catch (error) {
            console.log(error)
            next(error)
        }
    })
    .delete( async (req, res, next) => {
        try {
            
        } catch (error) {
            console.log(error)
            next(error)
        }
    })

    export default router