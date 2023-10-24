import mongoose from "mongoose";

const quizzSchema = new mongoose.Schema({
    quizzTitle: {
        type: String,
        required: [true, "Quizz Title name is Required"],
        minLength: [3, 'Quizz Title Must be more than 3 Characters'],
        maxLength: [15, 'Quizz Must be less than 15 Characters'],
    },
    courseName: {
        type: String,
        required: [true, "Course Name is Required"],
        minLength: [3, 'Course name Must be more than 3 Characters'],
        maxLength: [15, 'Course name Must be less than 15 Characters'],
    },
    topic: {
        type: String,
        required: [true, "Topic is Required"],
        minLength: [3, 'Topic Must be more than 3 Characters'],
        maxLength: [15, 'Topic Must be Less than 15 Characters'],
    },
    dueDate: {
        type: Date,
        required: [true, "Due Date is Required"]
    },

})

const Quizz = mongoose.model('Quizz',quizzSchema);
export default Quizz;