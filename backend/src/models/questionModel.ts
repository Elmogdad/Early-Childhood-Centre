import mongoose, {Document , Schema } from "mongoose";


interface QuestionDocument extends Document {
    questionText : string;
    type : "MCQ"| "True/False" | "Short Answer";
    quiz : mongoose.Types.ObjectId;
    answers : mongoose.Types.ObjectId[];

};


const questionSchema = new Schema<QuestionDocument>({
    questionText : {type : String, required : true },
    type : {type : String , enum : ["MCQ" , "True/False" , "Short Answer"]},
    quiz : {type : Schema.Types.ObjectId, ref: 'Quiz'},
    answers : [{

    }]
})


const QuestionModel = mongoose.model<QuestionDocument>("Question", questionSchema)

export default QuestionModel