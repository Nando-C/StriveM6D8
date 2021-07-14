import { Router } from "express";
import { Author } from "../../db/index.js";
import sequelize from "sequelize";

const router = Router()

router.route('/')
    .get( async (req, res, next) => {
        try {
            
        } catch (error) {
            console.log(error)
            next(error)
        }
    })
    .post( async (req, res, next) => {
        try {
            
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