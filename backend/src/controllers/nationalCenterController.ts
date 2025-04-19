import { Request, Response } from "express";
import * as centerService from "../services/internationalCenterService";

export const create = async (req: Request, res: Response) => {
  try {
    const center = await centerService.createCenter(req.body);
    res.status(201).json(center);
  } catch (error) {
    res.status(500).json({ message: "Error creating center", error });
  }
};

export const getAll = async (_req: Request, res: Response) => {
  try {
    const centers = await centerService.getAllCenters();
    res.status(200).json(centers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching centers", error });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const center = await centerService.getCenterById(req.params.id);
    if (!center) return res.status(404).json({ message: "Center not found" });
    res.status(200).json(center);
  } catch (error) {
    res.status(500).json({ message: "Error fetching center", error });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const updated = await centerService.updateCenter(req.params.id, req.body);
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Error updating center", error });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const deleted = await centerService.deleteCenter(req.params.id);
    res.status(200).json(deleted);
  } catch (error) {
    res.status(500).json({ message: "Error deleting center", error });
  }
};

export const getByType = async (req: Request, res: Response) => {
  try {
    const centers = await centerService.getCentersByType(req.params.type as any);
    res.status(200).json(centers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching centers by type", error });
  }
};

export const getByParent = async (req: Request, res: Response) => {
  try {
    const centers = await centerService.getCentersByParent(req.params.parentId);
    res.status(200).json(centers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching centers by parent", error });
  }
};
