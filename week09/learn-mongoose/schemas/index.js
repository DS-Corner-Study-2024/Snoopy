// const mongoose = require('mongoose');

// const connect = () => {

//     // 1. 개발 환경일 때만 콘솔을 통해 몽구스가 생성하는 쿼리 내용을 확인할 수 있게 하는 코드 
//     if (process.env.NODE_ENV !== 'production') {
//         mongoose.set('debug', true);
//     }
//     // 2. 몽구스와 몽고디비 연결 
//     mongoose.connect('mongodb://root:1234@localhost:27017/admin', { // 몽고디비 주소로 접속 시도 
//         dbName: 'nodejs',       // 실제로 사용할 데이터베이스 
//         useNewUrlParser: true,  
//     }, (error) => {             // 콜백함수를 통해 연결 여부를 확인 
//         if (error) {
//             console.log('몽고디비 연결 에러', error);
//         } else {
//             console.log('몽고디비 연결 성공');
//         }
//     });
// };

// // 3. 몽구스 커넥션에 이벤트 리스너 달기 
// mongoose.connection.on('error', (error) => {
//     console.error('몽고디비 연결 에러', error); // 에러 발생 시 에러 내용 기록 
// });

// mongoose.connection.on('disconnected', () => {
//     console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');  // 연결 종료 시 재연결 시도 
//     connect();
// });

// module.exports = connect;

const mongoose = require('mongoose');

const connect = async () => {
    try {
        // 1. 개발 환경일 때만 콘솔을 통해 몽구스가 생성하는 쿼리 내용을 확인
        if (process.env.NODE_ENV !== 'production') {
            mongoose.set('debug', true);
        }

        // 2. 몽구스와 몽고디비 연결
        await mongoose.connect('mongodb://inyeong:1234@localhost:27017/admin', {
            dbName: 'nodejs',  // 실제로 사용할 데이터베이스
            // useNewUrlParser: true,
        });

        console.log('몽고디비 연결 성공');
    } catch (error) {
        console.error('몽고디비 연결 에러', error);
    }
};

// 3. 몽구스 커넥션에 이벤트 리스너 달기
mongoose.connection.on('error', (error) => {
    console.error('몽고디비 연결 에러', error); // 에러 발생 시 에러 내용 기록
});

mongoose.connection.on('disconnected', () => {
    console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');  // 연결 종료 시 재연결 시도
    connect();
});

module.exports = connect;
