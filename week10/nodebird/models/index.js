/* 생성한 모델들을 시퀄라이즈에 등록 */

// 1. 각각의 모델들을 시퀄라이즈 객체에 연결하는 방법 

// const Sequelize = require('sequelize');
// const User = require('./user');
// const Post = require('./post');
// const Hashtag = require('./hashtag');
// const env = process.env.NODE_ENV || 'development';
// const config = require('../config/config')[env];

// const db = {};
// const Sequelize = new Sequelize(
//   config.database, config.username, config.password, config,
// );

// db.sequelize = sequelize;

// db.User = User;
// db.Post = Post;
// db.Hashtag = Hashtag;

// User.initiate(sequelize);
// Post.initiate(sequelize);
// Hashtag.initiate(sequelize);

// User.associate(db);
// Post.associate(db);
// Hashtag.associate(db);

// module.exports = db;



// 2. 모델의 개수가 많은 경우 테이블 자동으로 생성되는 방식 이용
// 미완성인 모델도 읽어들이므로, 미완성 테이블이 생길 수 있음에 주의 
// models 폴더에 모델이 아닌 다른 파일 넣지 않도록 주의 

const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;

const basename = path.basename(__filename);

fs 
  .readdirSync(__dirname) // 현재 폴더의 모든 파일을 조회 
  .filter(file => { // 숨김 파일, index.js, js 확장자가 아닌 파일 필터링 
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {  // 해당 파일의 모델을 불러와서 init 
    const model = require(path.join(__dirname, file));
    console.log(file, model.name);
    db[model.name] = model;
    model.initiate(sequelize);
  })

Object.keys(db).forEach(modelName => {  // associate 호출 
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;