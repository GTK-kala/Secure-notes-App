import express from "express";

// USER
import { Login } from "../controllers/Users/User/Login.js";
import { GetUser } from "../controllers/Users/GetUser.js";
import { GetUsers } from "../controllers/Users/GetUsers.js";
import { SomeUsers } from "../controllers/Users/SomeUses.js";
import { SigUpUser } from "../controllers/Users/SigUpUser.js";
import { UpDateUser } from "../controllers/Users/UpDateUser.js";
import { DeleteUser } from "../controllers/Users/DeleteUser.js";

// NOTES
import { GetNote } from "../controllers/Notes/GetNote.js";
import { AddNotes } from "../controllers/Notes/AddNotes.js";
import { GetNotes } from "../controllers/Notes/GetNotes.js";
import { SomeNotes } from "../controllers/Notes/SomeNotes.js";
import { UpDateNote } from "../controllers/Notes/UpDateNote.js";
import { DeleteNote } from "../controllers/Notes/DeleteNote.js";
import { NotesWithId } from "../controllers/Notes/NotesWithId.js";

const route = express.Router();

// CRUD ACTION ON USER ROUTES

// ADMIN ROUTES

// GET ALL USERS
route.get("/auth/register/all", GetUsers);
// GET ONE USER WITH IT'S ID
route.get("/auth/register/all/:id", GetUser);
// GET SOME USERS
route.get("/auth/register/some", SomeUsers);

// USER ROUTES

// LOGIN USERS
route.post("/auth/login", Login);
// ADD USERS
route.post("/auth/register", SigUpUser);
// UPDATE USER
route.patch("/auth/register/:id", UpDateUser);
// DELETE USER WITH IT'S ID
route.delete("/auth/register/:id", DeleteUser);

// CRUD ACTION ON NOTES ROUTES

// ADMIN ROUTES

// GET ALL NOTES
route.get("/notes/all", GetNotes);
// ADD NOTES
route.post("/notes/add", AddNotes);
// GET NOTE BY ID
route.get("/notes/all/:id", GetNote);
// UPDATE NOTES
route.put("/notes/all/:id", UpDateNote);
//GET SOME NOTES
route.get("/notes/some", SomeNotes);
// GET NOTES WITH USER ID
route.get("/notes/some/:id", NotesWithId);
// DELETE NOTE BY ID
route.delete("/notes/all/:id", DeleteNote);

export default route;
