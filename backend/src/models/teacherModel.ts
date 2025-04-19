import mongoose, {Document , Schema } from "mongoose";
import { compareValue, hashValue } from "../utils/bcrypt";

interface TeacherDocument extends Document {
    name : string;
    email : string;
    password : string;
    verified: boolean;
    courses : mongoose.Types.ObjectId[];
    comparePassword: (val: string) => Promise<boolean>;
    creatwedAt: Date;
    updatedAt: Date;
}



const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true, },
  email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verified: { type: Boolean, default: false },
 }, {timestamps: true
});

teacherSchema.pre("save", async function (next) {

    if (!this.isModified("password")) {
        next();
    }

 this.password = await hashValue(this.password);
    next();
})

teacherSchema.methods.comparePassword = async function (val: string) {
    return compareValue(val, this.password);
};

const TeacherModle = mongoose.model<TeacherDocument>("Teacher", teacherSchema);

export default TeacherModle;