import "dotenv/config";

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;
export {
    MONGO_URI,
    PORT
}
