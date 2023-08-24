import { Router } from "express";

const router: Router = Router();

// Import routes from organized files:
import ExampleRoute from "./example-route";

// Define all your routes here:
router.use("/example-route", ExampleRoute);

export default router;
