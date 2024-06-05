import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utlis/sendEmail.js";
import mongoose, { model, Schema } from 'mongoose';

const app = express();
const router = express.Router();

config({ path: "./config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.post("/send/mail", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }
  try {
    await sendEmail({
      email: "vaidehivaishnav07@gmail.com",
      subject: "GYM WEBSITE CONTACT",
      message,
      userEmail: email,
    });
    res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

app.use(router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});


<<<<<<< HEAD


app.use(cors());
app.use(express.json());
 

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://jainaashika1510:jainaashika@icp6.r7fworh.mongodb.net/feedbacks");
     console.log("Connected to Mongodb");
 }
 connectDB();

 const reviewSchema = new Schema({
    name: String,
    reviews: String,
    ratings: String
});

const Review = model("Review", reviewSchema);

app.get("/health",(req,res)=>{
    res.json({
        success:true,
        message:"server is running",
        data:null
    })
});

app.post("/feedbacks",async(req,res)=>{
    const {name,reviews,ratings}=req.body;
    const newReview = await Review.create({
        "name": name,
        "reviews": reviews,
        "ratings": ratings
    })
    res.json({
        sucess: true,
        message: "Review Added Successfully",
        data: newReview
    })
})
app.get("/feedbacks", async(req, res) => {
    const reviews = await reviewSchema.find();
    res.json({
        sucess: true,
        message: "Notes fetched Successfully",
        data: reviews
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`);
});

=======
>>>>>>> da05de506bce93020c9a0ca2a96df19b231a6b4c
