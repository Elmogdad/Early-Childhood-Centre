import mongoose, {Document , Schema } from "mongoose";


interface AnswerDocument extends Document {
  
    user : mongoose.Types.ObjectId;
    questions : mongoose.Types.ObjectId;
    answerText : string;
    isCorrect : boolean

}


const answerSchema = new Schema<AnswerDocument>({
    user : {type : Schema.Types.ObjectId,  ref : "User"},
    questions : {type : Schema.Types.ObjectId,  ref : "Question"},
    answerText : {type : String, required : true},
    isCorrect : {type : Boolean}
});

const AnswerModel = mongoose.model<AnswerDocument>("Answer" , answerSchema);


export default AnswerModel;

