import express from 'express'

const app = express()

app.get('/api/v1/hello', (req, res) => {
  res.json({
    hello: 'world'
  })
})

app.listen(8000, () => {
  console.log('rum server')
})
