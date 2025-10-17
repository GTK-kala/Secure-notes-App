import express from "express";


// USER
import { GetUser } from "../controllers/Users/GetUser.js";
import { GetUsers } from "../controllers/Users/GetUsers.js";
import { AddUsers } from "../controllers/Users/AddUsers.js";
import { SomeUsers } from "../controllers/Users/SomeUses.js";

// NOTES

const route = express.Router();

// USER ROUTES
route.get('/auth/register' , GetUsers);
route.get('/auth/register/:id' , GetUser);
route.get('/auth/register/some' , SomeUsers);
route.post('/auth/register' , AddUsers);


// NOTES ROUTES

export default route;