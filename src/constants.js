import "dotenv/config";

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;
const ADMIN_INVITE_TOKEN = process.env.ADMIN_INVITE_TOKEN;
const CLIENT_URI = process.env.CLIENT_URI;
export {
    MONGO_URI,
    PORT,
    ADMIN_INVITE_TOKEN,
    CLIENT_URI,
}
