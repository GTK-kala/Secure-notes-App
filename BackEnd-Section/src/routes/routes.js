import express from "express";


// USER
import { GetUser } from "../controllers/Users/GetUser.js";
import { GetUsers } from "../controllers/Users/GetUsers.js";
import { AddUsers } from "../controllers/Users/AddUsers.js";
import { SomeUsers } from "../controllers/Users/SomeUses.js";
import { UpDateUser } from "../controllers/Users/UpDateUser.js";
import { DeleteUser } from "../controllers/Users/DeleteUser.js";


// NOTES
import { AddNotes } from "../controllers/Notes/AddNotes.js";
import { GetNotes } from "../controllers/Notes/GetNotes.js";
import { GetNote } from "../controllers/Notes/GetNote.js";
import { SomeNotes } from "../controllers/Notes/SomeNotes.js"
import { DeleteNote } from "../controllers/Notes/DeleteNote.js"



const route = express.Router();


// CRUD ACTION ON USER ROUTES

// GET ALL USERS
route.get('/auth/register/all' , GetUsers);

// GET ONE USER WITH IT'S ID
route.get('/auth/register/all/:id' , GetUser);

// GET SOME USERS
route.get('/auth/register/some' , SomeUsers);

// ADD USERS
route.post('/auth/register' , AddUsers);

// UPDATE USER
route.put('/auth/register/:id' , UpDateUser);

// DELETE USER WITH IT'S ID 
route.delete('/auth/register/:id' , DeleteUser);


// CRUD ACTION ON NOTES ROUTES

// GET ALL NOTES
route.get('/notes/all' , GetNotes);
// ADD NOTES
route.post('/notes/add' , AddNotes);
// GET NOTE BY ID
route.get('/notes/all/:id' , GetNote);
//GET SOME NOTES
route.get('/notes/some' , SomeNotes)
// DELETE NOTE BY ID
route.delete('/notes/all/:id' , DeleteNote)

export default route;