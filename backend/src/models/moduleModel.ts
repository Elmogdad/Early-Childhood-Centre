import mongoose, {Document , Schema } from "mongoose";


interface ModuleDocument extends Document {
    title : string;
    course : mongoose.Types.ObjectId;
    content : mongoose.Types.ObjectId[];
};


const moduleSchema = new Schema<ModuleDocument> ({
    title : {type : String , required : true},
    course : {type : Schema.Types.ObjectId , ref : 'Course'},
    content : [{type : Schema.Types.ObjectId , ref : 'Content'}],
} , {timestamps : true});

const ModuleModel = mongoose.model<ModuleDocument>("Module" , moduleSchema);


export default ModuleModel;