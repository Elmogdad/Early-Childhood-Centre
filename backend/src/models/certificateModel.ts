import mongoose, {Document , Schema } from "mongoose";


interface CertificateDocument extends Document {
    student :  mongoose.Types.ObjectId;
    course : mongoose.Types.ObjectId;
  issuedAt : Date ;

}


const certificateSchema = new Schema<CertificateDocument>({
  student: {type : Schema.Types.ObjectId, ref : 'User'},
  course : {type : Schema.Types.ObjectId, ref : 'Course' },
  issuedAt : {type : Date , default : Date.now() }
});


const CertificateModel = mongoose.model<CertificateDocument>("Cetificate" , certificateSchema);

export default CertificateModel;