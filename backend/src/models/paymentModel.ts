import mongoose, {Document , Schema } from "mongoose";


interface PaymentDocument extends Document {
    student :  mongoose.Types.ObjectId;
    course : mongoose.Types.ObjectId;
    amount : number;
  paidAt : Date ;

}
const paymentSchema = new Schema<PaymentDocument>({
  student : {type : Schema.Types.ObjectId, ref : "User"},
  course : {type: Schema.Types.ObjectId, ref : "Course"},
  amount : {type : Number,  required : true},
  paidAt : {type : Date , default : Date.now()},
});


const PaymentModel = mongoose.model<PaymentDocument>("Payment", paymentSchema);


export default PaymentModel;

