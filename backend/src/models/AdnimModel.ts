import mongoose, {Document , Schema } from "mongoose";
import { compareValue, hashValue } from "../utils/bcrypt";
import { string } from "zod";

interface AdminDocument extends Document {
    name : string;
    email : string;
    password : string;
    verified: boolean;
    role : string;
    comparePassword: (val: string) => Promise<boolean>;
    creatwedAt: Date;
    updatedAt: Date;
}



const adminSchema = new mongoose.Schema({
    name: { type: String, required: true, },
  email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
     role : {type : string , required: true , default : "admin"},
 }, {timestamps: true
});

adminSchema.pre("save", async function (next) {

    if (!this.isModified("password")) {
        next();
    }

 this.password = await hashValue(this.password);
    next();
})

adminSchema.methods.comparePassword = async function (val: string) {
    return compareValue(val, this.password);
};

const AdminModel = mongoose.model<AdminDocument>("Admin", adminSchema);

export default AdminModel;