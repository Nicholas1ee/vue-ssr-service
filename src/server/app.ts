import path from 'path'
import express from'express'
// import ejs from 'ejs'
import { getRouter } from './routes'

const app = express()

const resolve = (dir: string) => path.resolve(__dirname, '../../',dir)

app.use(express.static(resolve('dist')))

// app.engine('.ejs', ejs.renderFile)
// app.set('views', resolve('public'))
// app.set('view engine', 'ejs')

app.use(getRouter())

const PORT = 3000
const GREEN = '\x1b[32m'; // 绿色
const BLUE = '\x1b[34m';  // 蓝色
const BOLD = '\x1b[1m';   // 粗体
const RESET = '\x1b[0m';  // 重置颜色

app.listen(PORT, () => {
    console.log(`${GREEN}${BOLD}✔ Server is running on port ${PORT}${RESET}`);
    console.log(`${BLUE}👉 Open your browser and navigate to http://localhost:${PORT}${RESET}`);
})