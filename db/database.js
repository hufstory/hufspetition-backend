//mongoose 모듈을 불러오기
const mongoose = require('mongoose');

//데이터베이스 모델 리스트
const account = require('./models/account');
const community_post = require('./models/community_post');
const petition = require('./models/petition');
const notice = require('./models/notice');

//db connection
const mongoDB = 'mongodb://127.0.0.1/hufs_vote'; //hufs_vote 데이터베이스 불러오기
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => console.log('성공적으로 데이터베이스에게 연결되었습니다!'))
.catch((err) => console.log("오류가 생겼습니다. 오류:"+err));

//default connection 불러오기
const db = mongoose.connection;

module.exports = db;