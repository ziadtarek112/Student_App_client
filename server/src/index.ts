import express from "express";
import mongoose from "mongoose";
import announcementRouter from "./routes/AnnouncementsRouter";
import quizRouter from "./routes/QuizzRouter";
import bodyParser from "body-parser";
import cors from 'cors';

const dbUri = "mongodb+srv://ziad:1234@cluster0.wbtsjwk.mongodb.net/School";
const port = 4000;
const app = express();
app.use(express.json());

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/Announcement', announcementRouter);
app.use('/api/Quiz', quizRouter);



mongoose.connect(dbUri)
    .then(() => {
        console.log("Database Connected Successfully");
    })

app.listen(port, () => {
    console.log("Server Started");

})