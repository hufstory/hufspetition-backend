const { default: mongoose, mongo } = require("mongoose");

//Schema를 정의!
const Schema = mongoose.Schema;

const post = new Schema(
    {
        //_id로 키활용
        creatorID: String,    //글쓴이 AccountID(_id)
        Title: String,        //제목
        postDetail: String,   //글 내용
        AgreeCount: Number,   //동의
    }
)

const post_model = mongoose.model('post', post);

module.exports = post_model;