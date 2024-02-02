import express from "express";
import { Team } from "../models/team.model.js";

export const router = express.Router();


router.post("/updatedb", async (req, res) => {
  const { id, name, rating, price, soldTo, img } = req.body;
  console.log(req.body);
  if (!id || !name || !rating || !price || !soldTo || !img) {
    return res.status(400).json({ error: "Please provide all details" });
  }
  const team = await Team.findOne({ _id: "65bbcce2a0854b3a03731c0b" });
  if (!team) {
    return res.status(400).json({ error: "Team not found" });
  }
  if (soldTo === "pbks") team.pbks = team.pbks.concat({ id, name, rating, price, img });
  else if (soldTo === "lsg") team.lsg = team.lsg.concat({ id, name, rating, price, img });
  else if (soldTo === "gt") team.gt = team.gt.concat({ id, name, rating, price, img });
  else if (soldTo === "rcb") team.rcb = team.rcb.concat({ id, name, rating, price, img });
  else if (soldTo === "dc") team.dc = team.dc.concat({ id, name, rating, price, img });
  else if (soldTo === "csk") team.csk = team.csk.concat({ id, name, rating, price, img });
  else if (soldTo === "mi") team.mi = team.mi.concat({ id, name, rating, price, img });
  else if (soldTo === "rr") team.rr = team.rr.concat({ id, name, rating, price, img });
  else if (soldTo === "srh") team.srh = team.srh.concat({ id, name, rating, price, img });
  else if (soldTo === "kkr") team.kkr = team.kkr.concat({ id, name, rating, price, img });
  // team.soldTo = team.soldTo.concat({ set, id, name, rating, price });
  // console.log(team);
  team.save();
  res.status(200).json({ message: "Team updated" });
})

router.get("/getdb", async (req, res) => {
  const team = await Team.findOne({ _id: "65bbcce2a0854b3a03731c0b" });
  if (!team) {
    return res.status(400).json({ error: "Team not found" });
  }
  res.status(200).json(team);
})