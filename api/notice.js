const { notice } = require('../models')

const create = async (req, res) => {
    console.log('===== NOTICE REGISTER =====')
    console.log('req.body = ', req.body)

    const form = req.body.form

    const register = await notice.create({//insert
        subj: form.subj,
        conts: form.conts,
        tp: form.dpTp,
        init: form.init + ''
    })

    console.log('register = ', register)

    res.status(201).json({noticeId:register.dataValues.id});
}

const detail = async (req, res) => {
    console.log('=========NOTICE DETAIL========')
    // console.log('req.params', req.params)//node에서 get 방식은 params

    //const noticeDetail = notice.findOne({ where: { id: req.params.noticeId }}) // 이렇게 쓰면 비동기

    const noticeDetail = await notice.findOne({ where: { id: req.params.noticeId }})
    
    // console.log('noticeDetail = ', noticeDetail)

    if ( !noticeDetail.dataValues ) res.status(401).end('NOT FOUND ID') //값 없으면. http 코드 상태 201정상 401에러

    res.status(201).json({ form: noticeDetail.dataValues });
}

const list = async (req, res) => {
    console.log('========== NOTICE LIST ============')
    
    const noticeList = await notice.findAll()

    // console.log('noticeList = ', noticeList);

   const noticeData = []
   
   noticeList.map(list => { //noticeList의 배열을 돌면서 배열의 내용이 list에 담겨서 list를 찍어줌 
       //console.log('=======list======', list)
       noticeData.push(list.dataValues); //필요한 데이터만 추출하여 새로운 변수에 담기.
       //중괄호 없애서 간결하게 한줄로 작성 가능 
       //굳이 push안해줘도됨. ppt참고해서 해보기
   })

//    console.log(noticeData)

   res.json({noticeData})
    
}

const modify = async (req, res) => {
    console.log('========NOTICE MODIFY=========')
    console.log('req.params = ', req.params)//get방식에서 헀던것처럼
    console.log('req.body = ', req.body)//form으로 보낸 부분 

    const noticeId = req.params.noticeId
    const form = req.body.form

    const { subj, conts, dpTp, init } = form
    
    const noticeIdYn = await notice.findOne({
        where : { id: noticeId }
    })

    if (!noticeIdYn) return res.status(404).json({error: 'no board deatail'})

   await notice.update(
       {subj, conts, tp:dpTp, init: init + ''}, //subj, conts 필드명 똑같으니까 축약가능 
       {where : { id : noticeId }}
   )

   res.json({noticeId})
}

const destroy = async (req, res) => {
    console.log('======delete======')
    console.log('req.params = ', req.params)

    await notice.destroy({ where: { id: req.params.noticeId }})

    res.json({})
}


module.exports = {
    create,
    detail,
    list,
    modify,
    destroy
}