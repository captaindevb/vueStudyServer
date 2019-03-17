module.exports = (sequelize, DataTypes) => {//내가만든 디비, 시퀄라이즈 
    return sequelize.define('notice', {//테이블명, 복수형으로 만들어짐 
        tp: {//두번째 인자값들로는 컬럼 
            type: DataTypes.STRING(10),
            allowNull: false
        },
        subj: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        conts: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        init: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
    },
    {
        timestamps: true,
        paranoid: true
    })
}

//세번째 인자 테이블 설정 
//timestamps 글등록,수정시간
//paranoid 삭제시간