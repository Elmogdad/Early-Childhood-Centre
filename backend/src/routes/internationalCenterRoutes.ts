// routes/internationalCenterRoutes.ts

import express from "express";
import * as controller from "../controllers/nationalCenterController";

const router = express.Router();

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);
router.get("/type/:type", controller.getByType);
router.get("/parent/:parentId", controller.getByParent);

export default router;
