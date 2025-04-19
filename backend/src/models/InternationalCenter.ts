// models/NationalCenter.ts

import mongoose, { Document, Schema } from "mongoose";

// TypeScript Interface
export interface INationalCenter extends Document {
  name: string;
  code: string;
  type: "national"; // ثابت للمركز الرئيسي
  location: {
    country: string;
    city?: string;
    address?: string;
  };
  manager: {
    name: string;
    email: string;
    phone?: string;
    userId?: mongoose.Types.ObjectId; // إشارة إلى جدول المستخدمين (users)
  };
  createdAt: Date;
  updatedAt: Date;
}

// Mongoose Schema
const NationalCenterSchema: Schema<INationalCenter> = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    type: { type: String, enum: ["national"], default: "national" },
    location: {
      country: { type: String, required: true },
      city: { type: String },
      address: { type: String }
    },
    manager: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String },
      userId: { type: mongoose.Types.ObjectId, ref: "User" }
    }
  },
  {
    timestamps: true // adds createdAt and updatedAt
  }
);

export default mongoose.model<INationalCenter>("NationalCenter", NationalCenterSchema);
