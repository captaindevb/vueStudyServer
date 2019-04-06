const crypto = require('crypto')

const cryptoPassword = (password, salt) => {
    return new Promise((reslove, reject) => {
        // 랜덤 바이트 64바이트 생성
        crypto.randomBytes(64, (err, buf) => {
            // 버퍼 문자열 변환
            if(!salt) salt = buf.toString('base64') //salt없을때만 랜덤으로 만듬. 회원가입시에만 만든다. 
            console.log('salt = ', salt)
            // pbkdf2 메서드에 ( 비밀번호, 위의salt, 10만번 반복, 출력바이트, 해시알고리즘)
            crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, key) => { //결과값 key callback
                // 결과값 변환
                console.log('password = ', key.toString('base64'))
                password = key.toString('base64')

                // 리턴을 위해 객체 생성
                const pwdInfo = {}

                // 리턴 객체 암호화 된 비밀번호 및 salt
                pwdInfo.password = password
                pwdInfo.salt = salt
                
                reslove(pwdInfo) // promise then. await로 바로 쓸 수 있음.
            })
        })
    })
}

module.exports = cryptoPassword