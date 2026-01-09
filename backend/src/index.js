// a shortcut way to load environment variables from a .env file when using ES Modules in Node.js.
// import "dotenv/config";

//Imports the dotenv package.
//dotenv is used to load environment variables from a .env file into process.env.
import dotenv from "dotenv";

// Imports a custom function called connectDB.
// This function is responsible for connecting to MongoDB.
import connectDB from "./config/database.js";

import app from "./app.js";

dotenv.config({
    path:'./.env'
});

const startServer = async () => {
    try {
        await connectDB();

        // Event listener (on)
        // Arrow function ((error) => { ... })
        app.on("error", (error) => {
            console.log("ERROR", error);
            // throw = “stop everything and report a failure”
            throw error;
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port:
                ${process.env.PORT}`)
            });
    
    } catch (error) {
        console.log("MongoDB connection failed!!", error);
    }
}

// Calls the function.
// This kicks off:
// 1. Load .env
// 2. Connect to MongoDB
// 3. Start Express server
startServer();