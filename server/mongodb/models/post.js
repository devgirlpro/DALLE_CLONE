import mongoose from "mongoose";

const Post = new mongoose.Schema({
    name: { type: Strinrg, required: true }
    prompt: { type: Strinrg, required: true }
    photo: { type: Strinrg, required: true }
})

const PostSchema = mongoose.model('Post', Post);

export default PostSchema;