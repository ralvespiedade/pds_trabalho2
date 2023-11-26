import express from 'express'
import { json } from 'body-parser'

import router from './routes/routes'

const app = express()

app.use(json())

app.use('/fabrica', router)

const port = process.env.PORT || 3333

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
