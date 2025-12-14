import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";

const enabled =
  process.env.CLOUDINARY_NAME &&
  process.env.CLOUDINARY_API_KEY &&
  process.env.CLOUDINARY_SECRET_KEY;

if (!enabled) {
  console.warn("Cloudinary disabled (missing env vars)");
} else {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
    secure: true,
  });
}

export default cloudinary;
