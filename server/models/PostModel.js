import mongoose from "mongoose";

const {Schema} = mongoose;

const postSchema = new Schema({
    title: {type: String, required: true, trim: true},
    author: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    content: {type: String,  trim: true},     
    image: {type: String, }, 
    imagePublicId: { type: String },  
},

      
{timestamps: true}
)


const Post = mongoose.model('Post', postSchema);
export default  Post;