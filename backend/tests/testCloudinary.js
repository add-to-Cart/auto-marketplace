import "dotenv/config";
import cloudinary from "../config/cloudinary.js";

(async () => {
  try {
    if (!process.env.CLOUDINARY_API_KEY) {
      console.log("Cloudinary not configured (env empty)");
      process.exit(0);
    }

    const result = await cloudinary.api.ping();

    console.log("☁️ Cloudinary connected");
    console.log(result); // { status: 'ok' }

    process.exit(0);
  } catch (err) {
    console.error("❌ Cloudinary connection failed");
    console.error(err.message);
    process.exit(1);
  }
})();
