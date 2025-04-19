import mongoose, {Document , Schema } from "mongoose";
import { string } from "zod";


interface CoursesDocument extends Document {
    title : string;
    description?: string;
    price : number;
    teacher : mongoose.Types.ObjectId;
    students : mongoose.Types.ObjectId[];
    modules : mongoose.Types.ObjectId[];
};

const courseSchema = new Schema<CoursesDocument>({
    title : {type : String , required : true },
    description : {type : String},
    price : {type : Number , default : 0},
    teacher : {type : Schema.Types.ObjectId, ref : 'Teacher'},
    students : [{type : Schema.Types.ObjectId, ref : 'Student'}],
    modules : [{type : Schema.Types.ObjectId, ref : 'Module'}],

} , {timestamps : true}

);


const CourseModel = mongoose.model<CoursesDocument>("Course" , courseSchema)

export default CourseModel;
