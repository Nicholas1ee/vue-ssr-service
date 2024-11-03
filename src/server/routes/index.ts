import express from 'express'
import { renderController } from '../controllers'

const router = express.Router()

export const getRouter = () => {
    router.get('*', renderController)
    return router
}