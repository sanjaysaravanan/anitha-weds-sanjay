import express from "express";
import cors from "cors";
import { transporter, mailOptions } from "./mail-utils.js";

const server = express();
// middleware to process the body of the request
server.use(express.json()); // used to parse the body of the request
// middleware used to make our APIs cors compatible
server.use(cors());

// Logging middleware - used to log the request incoming at what time
const logger = (req, _res, next) => {
  console.log("##", new Date().toISOString(), "##", req.url, " ", req.method);
  next();
};

server.use(express.static('dist'))

server.use(logger);

server.post("/api/send-mail", async (req, res) => {
  const { body } = req; // this will use the info sent by the User
  const { fname, response } = body;

  try {
    await transporter.sendMail({
      ...mailOptions,
      cc: ['sanjaysaravanan38@gmail.com', 'anithavallir98@gmail.com'],
      subject: response === 'yes' ? `${fname} Coming` : `${fname} Not Coming`,
      text: response === 'yes' ? `${fname} is attending Our Marriage` : `${fname} seems occupied, so won't be attending our marriage`,
    });
    res.send({ msg: "Thanks for Your Response." });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Error Occured while Creating an user" });
  }
})

const port = 8000;

server.listen(port, () => {
  console.log("listening on port " + port);
});