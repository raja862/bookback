import express from "express";
import { createbook,getall,getallid,update,deleteid } from "./Controller.js";

const route=express.Router()

route.post("/" , createbook)
route.get("/", getall )
route.get("/:id", getallid)
route.put("/:id", update)
route.delete("/:id", deleteid)


export default route