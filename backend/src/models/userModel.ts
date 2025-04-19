import mongoose from "mongoose";
import { compareValue, hashValue } from "../utils/bcrypt";



export interface UserDocument extends mongoose.Document {
  username: string;
  email: string;
    password: string;
    verified: boolean;
    creatwedAt: Date;
    updatedAt: Date;
    comparePassword: (val: string) => Promise<boolean>;
    enrolledCources : mongoose.Types.ObjectId[];
    omitPassword: () => UserDocument;

}

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, },
  email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verified: { type: Boolean, default: false },
 }, {timestamps: true
});

userSchema.pre("save", async function (next) {

    if (!this.isModified("password")) {
        next();
    }

 this.password = await hashValue(this.password);
    next();
})

userSchema.methods.comparePassword = async function (val: string) {
    return compareValue(val, this.password);
};

userSchema.methods.omitPassword = function () {
    const user = this.toObject() ;
    delete user.password;
    return user;
};

const UserModle = mongoose.model<UserDocument>("User", userSchema);

export default UserModle;