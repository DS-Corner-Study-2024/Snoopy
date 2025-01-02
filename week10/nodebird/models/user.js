/* 사용자 정보를 저장하는 모델 */

const Sequelize = require('sequelize');

class User extends Sequelize.Model {
    static initiate(sequelize) {
        User.init({
            email: {    // 이메일 
                type: Sequelize.STRING(40),
                allowNull: true,
                unique: true,
            },
            nick: {     // 닉네임 
                type: Sequelize.STRING(15),
                allowNull: false,
            },
            password: { // 비밀번호
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            // SNS 로그인을 했을 경우 provider와 snsId를 저장 
            provider: {
                // ENUM : 넣을 수 있는 값을 제한하는 데이터 형식 
                type: Sequelize.ENUM('local', 'kakao'), // 이메일, 비밀번호 로그인이나 카카오 로그인 둘 중 하나만 선택 가능 
                allowNull: false,
                defaultVaule: 'local',                  // 기본 이메일, 비밀번호 로그인 
            },
            snsId: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
        }, {
            // 테이블 옵션 timestamps, paranoid -> createdAt, updatedAt, deletedAt
            sequelize,
            timestapms: true, 
            unserscored: false, 
            modelName: 'User',
            tableName: 'users',
            paranoid: true, 
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }

    static associate(db) {  // 각 모델 간의 관계 정의 
        db.User.hasMany(db.Post);           // User 모델과 Post 모델은 1:N 관계
        
        db.User.belongsToMany(db.User, {    // User 모델 간 N:M 관계 - 팔로잉 기능 
            foreignKey: 'followingId',      // 컬럼 이름 설정하여 두 사용자 아이디 구별 
            as: 'Followers',                // as는 foreignKey와 반대되는 모델 
            through: 'Follow',              // 모델 이름 지정 
        });
        
        db.User.belongsToMany(db.User, {   
            foreignKey: 'followerId',
            as: 'Followings',
            through: 'Follow',
        });
    }
};

module.exports = User;