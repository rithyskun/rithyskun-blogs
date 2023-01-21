import { Nitro } from "nitropack";
import mongoose from "mongoose";

export default async (_nitroApp: Nitro) => {
    const config = useRuntimeConfig();
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(config.mongodbUri);
        console.log("Database connected.");
    } catch (error) {
        console.error(error);
    }
};
