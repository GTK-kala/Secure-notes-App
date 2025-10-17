import express from "express";


// USER
import { GetUser } from "../controllers/Users/GetUser.js";
import { GetUsers } from "../controllers/Users/GetUsers.js";
import { AddUsers } from "../controllers/Users/AddUsers.js";
import { SomeUsers } from "../controllers/Users/SomeUses.js";
import { UpDateUser } from "../controllers/Users/UpDateUser.js";

// NOTES

const route = express.Router();

// USER ROUTESs
route.get('/auth/register' , GetUsers);
route.get('/auth/register/:id' , GetUser);
route.get('/auth/register/some' , SomeUsers);
route.post('/auth/register' , AddUsers);
route.put('/auth/register/:id' , UpDateUser)


// NOTES ROUTES

export default route;