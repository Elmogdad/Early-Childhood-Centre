import mongoose, {Document , Schema } from "mongoose";


interface ContentDocument extends Document {
    type : "video" | "article" | "quiz";
    data : string;
    module : mongoose.Types.ObjectId;

};

const contentSchema = new Schema<ContentDocument> ({
    type : {type : String , enum : ["video" , "article" ,"quiz"] , required : true},
    data : {type : String , required : true},
    module : {type : Schema.Types.ObjectId , ref: "Module"},

} , {timestamps : true});


const ContentModel = mongoose.model<ContentDocument>("Content" , contentSchema);


export default ContentModel;