import admin from "../config/firebaseAdmin.js";

const testFirebase = async () => {
  try {
    // Test Auth service
    const listUsers = await admin.auth().listUsers(1);

    console.log("🔥 Firebase Admin connected");
    console.log("User fetch success:", listUsers.users.length);

    // Optional: Firestore test
    const db = admin.firestore();
    await db.collection("connection_tests").doc("ping").set({
      status: "ok",
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    console.log("🔥 Firestore write success");
    process.exit(0);
  } catch (err) {
    console.error("❌ Firebase Admin connection failed");
    console.error(err.message);
    process.exit(1);
  }
};

testFirebase();
