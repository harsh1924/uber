import { model, Schema } from "mongoose";

const blacklistTokenSchema = new Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400
    }
})

const blacklistModel = model('BlacklistToken', blacklistTokenSchema);
export default blacklistModel;