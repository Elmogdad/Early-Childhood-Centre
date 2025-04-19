import InternationalCenterModel, { INationalCenter } from "../models/InternationalCenter";
import { Types } from "mongoose";

export const createCenter = async (data: Partial<INationalCenter>) => {
  const center = new InternationalCenterModel(data);
  return await center.save();
};

export const getAllCenters = async () => {
  return await InternationalCenterModel.find().populate("parentCenterId");
};

export const getCenterById = async (id: string) => {
  return await InternationalCenterModel.findById(id).populate("parentCenterId");
};

export const updateCenter = async (id: string, data: Partial<INationalCenter>) => {
  return await InternationalCenterModel.findByIdAndUpdate(id, data, { new: true });
};

export const deleteCenter = async (id: string) => {
  return await InternationalCenterModel.findByIdAndDelete(id);
};

export const getCentersByType = async (type: INationalCenter["type"]) => {
  return await InternationalCenterModel.find({ type });
};

export const getCentersByParent = async (parentId: Types.ObjectId | string) => {
  return await InternationalCenterModel.find({ parentCenterId: parentId });
};
