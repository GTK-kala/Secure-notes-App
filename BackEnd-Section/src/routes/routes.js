import express from "express";
// USER
import { AddUsers } from "../controllers/Users/AddUsers.js";
import { GetUsers } from "../controllers/Users/GetUsers.js";

// NOTES

const route = express.Router();

// USER ROUTES
route.get('/auth/register' , GetUsers)
route.post('/auth/register' , AddUsers)


// NOTES ROUTES

export default route;