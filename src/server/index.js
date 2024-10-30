const express = require('express')

const app = express()

app.use(express.json())

const PORT = 9797

// 启动
app.listen(PORT, async () => {
  console.log(`App is running at http://localhost:${PORT}`)
})