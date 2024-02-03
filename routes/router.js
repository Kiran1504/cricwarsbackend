import express from "express";
import { Team } from "../models/team.model.js";
import { Player } from "../models/sold.model.js";

export const router = express.Router();


// router.post("/updatedb", async (req, res) => {
//   const { id, name, rating, price, soldTo, img } = req.body;
//   // console.log(req.body);
//   if (!id || !name || !rating || !price || !soldTo || !img) {
//     return res.status(400).json({ error: "Please provide all details" });
//   }
//   const team = await Team.findOne({ _id: "65bbcce2a0854b3a03731c0b" });
//   // console.log(team);
//   if (!team) {
//     return res.status(400).json({ error: "Team not found" });
//   }
//   // console.log(team.mi);
//   // console.log(Object.keys(team).includes(soldTo));
//   if (Object.keys(team).includes(soldTo)) {
//     return res.status(400).json({ error: "Team not found" });
//   }
//   const oldrcb = team.rcb;
//   const oldmi = team.mi;
//   const oldcsk = team.csk;
//   const oldkkr = team.kkr;
//   const oldpbks = team.pbks;
//   const oldlsg = team.lsg;
//   const oldgt = team.gt;
//   const olddc = team.dc;
//   const oldrr = team.rr;
//   const oldsrh = team.srh;
//   // console.log(oldcsk)

//   Object.keys(team).forEach((key) => {
//     // console.log(key);
//   })

//   for (const key in team) {
//     console.log(key);
//   }

//   if (soldTo === "pbks") team.pbks = team.pbks.concat({ id, name, rating, price, img });
//   else if (soldTo === "lsg") team.lsg = team.lsg.concat({ id, name, rating, price, img });
//   else if (soldTo === "gt") team.gt = team.gt.concat({ id, name, rating, price, img });
//   else if (soldTo === "rcb") team.rcb = team.rcb.concat({ id, name, rating, price, img });
//   else if (soldTo === "dc") team.dc = team.dc.concat({ id, name, rating, price, img });
//   else if (soldTo === "csk") team.csk = team.csk.concat({ id, name, rating, price, img });
//   else if (soldTo === "mi") team.mi = team.mi.concat({ id, name, rating, price, img });
//   else if (soldTo === "rr") team.rr = team.rr.concat({ id, name, rating, price, img });
//   else if (soldTo === "srh") team.srh = team.srh.concat({ id, name, rating, price, img });
//   else if (soldTo === "kkr") team.kkr = team.kkr.concat({ id, name, rating, price, img });
//   // team.soldTo = team.soldTo.concat({ set, id, name, rating, price });
//   // console.log(team);
//   team.save();
//   res.status(200).json({ message: "Team updated" });
// })

router.post("/updatedb", async (req, res) => {
  const { id, name, rating, price, soldTo, img } = req.body;

  if (!id || !name || !rating || !price || !soldTo || !img) {
    return res.status(400).json({ error: "Please provide all details" });
  }
  try {
    const allPlayers = await Player.findOne({ _id: "65bd31e9e07051a7ab909781" });
    const team = await Team.findOne({ teamName: soldTo });
    if (!team) {
      return res.status(400).json({ error: "Team not found" });
    }
    team.players.forEach((player) => {
      if (player.id === id) {
        throw new Error("Player is Sold already");
        // return res.status(400).json({ error: "Player already sold" });
      }
    })
    // team size constraint
    if (team.players.length === 17) {
      throw new Error("Team is full");
    }
    // console.log(allPlayers.players);
    allPlayers.players.forEach((player) => {
      if (player.id === id) {
        throw new Error("Player is Sold already");
        // return res.status(400).json({ error: "Player already sold" });
      }
    })
    // console.log();
    allPlayers.players = allPlayers.players.concat({ id, name, rating, price, img, team: soldTo });
    allPlayers.save();
    team.players = team.players.concat({ id, name, rating, price, img });
    team.save();
    res.status(200).json({ message: "Team updated" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})

router.get("/getdb", async (req, res) => {
  // const team = await Team.findOne({ _id: "65bbcce2a0854b3a03731c0b" });
  try {

    const team = await Team.find();
    console.log(team);
    if (!team) {
      return res.status(400).json({ error: "Team not found" });
    }
    res.status(200).json(team);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})