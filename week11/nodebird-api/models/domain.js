const Sequelize = require('sequelize');

class Domain extends Sequelize.Model {
    static initiate(sequelize) {
        Domain.init({
            host: { // 인터넷 주소 
                type: Sequelize.STRING(80),
                allowNull: false,
            },
            type: { // 도메인 종류 
                type: Sequelize.ENUM('free', 'premium'),
                // ENUM 속성 : free나 premium 중 하나만 값으로 입력할 수 있다. 
                allowNull: false,
            },
            clientSecret: { 
                // 클라이언트 비밀 키 : 다른 개발자들이 NodeBird의 API를 사용할 때 필요한 비밀 키
                // 유출되지 않도록 주의, 요청을 보낸 도메인까지 일치해야 요청 보낼 수 있게 제한한다. 
                type: Sequelize.UUID,   // UUID는 충돌 가능성이 매우 적은 랜덤한 문자열 
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: true,
            paranoid: true,
            modelName: 'Domain',
            tableName: 'domains',
        });
    }

    static associate(db) {
        db.Domain.belongsTo(db.User);   
        // 사용자 한 명이 여러 도메인을 소유할 수 있으므로 Domian 모델은 User 모델과 1:N 관계
    }
};

module.exports = Domain;