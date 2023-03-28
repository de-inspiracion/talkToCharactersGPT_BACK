import express from 'express';
import cors from 'cors'
import conversationRouter from './conversation/infra/routes/conversation.route'

const app = express();

app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 3000;
app.use("/",conversationRouter)

app.listen(PORT, () => {
    console.log(`server running port ${PORT}`)
})