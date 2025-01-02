/* 게시글 내용과 이미지 경로를 저장하는 게시글 모델 */

// 게시글 등록자의 아이디를 담은 컬럼은 관계 설정 시 시퀄라이즈가 알아서 생성 

const Sequelize = require('sequelize');

class Post extends Sequelize.Model {
    static initiate(sequelize) {
        Post.init({
            content: {
                type: Sequelize.STRING(140),
                allowNull: false,
            },
            img: {
                type: Sequelize.STRING(200),
                allowNull: true,
            },
        }, {
            sequelize,
            timestapms: true, 
            unserscored: false, 
            modelName: 'Post',
            tableName: 'posts',
            paranoid: false, 
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }

    static associate(db) {
        db.Post.belongsTo(db.User); // User 모델과 Post 모델은 1:N 관계 
        db.Post.belongsToMany(db.Hashtag, {through: 'PostHashtag'});    // Post 모델과 Hahtag 모델은 N:M 관계 
    }
};

module.exports = Post;