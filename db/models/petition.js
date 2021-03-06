const { default: mongoose, mongo } = require("mongoose");

//Schema를 정의!
const Schema = mongoose.Schema;

const petition = new Schema(
    {
        //_id로 키활용
        creatorID: { //글쓴이 AccountID(_id)
            type: String, 
            maxLength: [25, '일어날수없는 오류! 해킹방지'],
            required: [true, "필수 항목입니다!"]
        },    
        creatorName: { //표시될 글쓴이 이름
            type: String,
            minLength: [2, '최소한 2자 이상 입력해주세여!'],
            maxLength: [12, '최대가 12자입니다!'],
            required: [true, "필수 항목입니다!"]
        },  
        Title: { //제목
            type: String,
            minLength: [4, '최소한 4자 이상 입력해주세여!'],
            maxLength: [50, '최대가 50자입니다!'],
            required: [true, "필수 항목입니다!"]
        },        
        postDetail: { //글 내용
            type: String,
            minLength: [50, '최소한 50자 이상 입력해주세여!'], 
            maxLength: [500, '최대가 500자입니다!'],
            required: [true, "필수 항목입니다!"]
        },   
        AgreeCount: { //동의
            type: Number,
            default: 1
        }   
    }
)

const petition_post_model = mongoose.model('petition_post', petition);

module.exports = petition_post_model;