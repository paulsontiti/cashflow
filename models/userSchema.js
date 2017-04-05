var mongoose = require("./db");
var userShema = mongoose.Schema({
    fullname: {
        type: String,
        required:true
    },
    referral: {
        type: String,
        required: true,
        default:"none"

    },
    gender: {
        type: String,
        required:true
    },
    state: {
        type: String,
        required:true
    },
    mobile: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    username: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required:true
    },
    joined: {
        type: Date,
        required: true,
        default:Date()
    }

});
var User = module.exports = mongoose.model("User", userShema);
module.exports.createUser = function (user, callback) {
    user.save(callback);
}
module.exports.checkUsername = function (username, callback) {
    User.findOne({username:username},callback);
}