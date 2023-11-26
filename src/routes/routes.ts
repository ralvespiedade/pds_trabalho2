import { Router } from 'express'
import { get } from '../controllers/veiculo'

const router = Router()

router.get('/veiculos:id?', get)

export default router