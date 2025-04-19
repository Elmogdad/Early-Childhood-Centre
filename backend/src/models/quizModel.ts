import mongoose, {Document , Schema } from "mongoose";


interface QuizDocument extends Document {
    title : string;
    course : mongoose.Types.ObjectId;
    questions : mongoose.Types.ObjectId[];

};

const quizSchema = new Schema<QuizDocument>({
title : {type : String, required : true},
course : {type : Schema.Types.ObjectId, ref : "Course"},
questions : [{type : Schema.Types.ObjectId, ref : "Question"}],

} , {timestamps : true});


const QuizModel = mongoose.model<QuizDocument>("Quiz" , quizSchema);

export default QuizModel;






















































