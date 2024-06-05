import mongoose, {model, Schema} from 'mongoose';

const reviewSchema = new Schema({
    name:{
        type: String,
        required: true
    },

    reviews:{
        type: String,
        required: true,
    },
    
    ratings:{
        type: String,
        required: true
    }
})

const Review = model("Review", reviewSchema);

export default Review;