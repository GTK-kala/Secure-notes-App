import express from "express";
// USER
import { AddUsers } from "../controllers/notesController.js";

// NOTES

const route = express.Router();

// USER ROUTES
route.post('/auth/register' , AddUsers)


// NOTES ROUTES

export default route;