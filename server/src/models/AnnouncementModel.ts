import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
    teacherName: {
        type: String,
        required: [true, "Teacher's name is Required"],
        minLength: [3, 'Name Must be more than 3 Characters'],
        maxLength: [15, 'Name Must be less than 15 Characters'],
    },
    subject: {
        type: String,
        required: [true, " Subject is Required"],
        minLength: [3, 'Subject Must be more than 3 Characters'],
        maxLength: [15, 'Subject Must be less than 15 Characters'],
    },
    announcementText: {
        type: String,
        required: [true, "annoucementText is Required"],
        minLength: [3, 'announcementText Must be more than 3 Characters'],
        maxLength: [50, 'announcementText Must be Less than 15 Characters'],
    },

})

const Announcement = mongoose.model('Annoucement',announcementSchema);
export default Announcement;