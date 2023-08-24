import { Router } from "express";

const router: Router = Router();

// Basic example of get "/test-router/" route
// Final endpoint would be "localhost/test-router/"
router.get("/", (req, res) => {
  res.send("Here's the response from server 👍");
});

// Add any other routes you want here

export default router;
