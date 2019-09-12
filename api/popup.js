const { popup } = require('../models')

const create = async (req, res) => {
   console.log('=====POPUP CREATE ======')
   console.log('req.body = ', req.body)
   console.log('req.file = ', req.file)

   const form = JSON.parse(req.body.form)

   const { subj, tp, conts, cnnt_url_yn, cnnt_url } = form
   
   console.log("=======등록을 할땐 어떻게 다른지 확인해보자", form)

    let filename     = '',
        originalname = ''

    if (req.file) {
        filename = req.file.filename
        originalname = req.file.originalname
    }

    const result = await popup.create({
        subj, tp, conts, cnnt_url_yn, cnnt_url, 
        filename, originalname
    })

    console.log(result.dataValues)

    if (result.dataValues) res.status(201).json( { popupId:result.dataValues.id } )
    else res.status(500).json( { error:'insert error'} )
    
}

const list = async (req, res) => {
    console.log('========== POPUP LIST ============')
    
    const popupList = await popup.findAll()

     console.log('popupList = ', popupList);

   const popupData = []
   
   popupList.map(list => { //noticeList의 배열을 돌면서 배열의 내용이 list에 담겨서 list를 찍어줌 
       //console.log('=======list======', list)
       popupData.push(list.dataValues); //필요한 데이터만 추출하여 새로운 변수에 담기.
       //중괄호 없애서 간결하게 한줄로 작성 가능 
       //굳이 push안해줘도됨. ppt참고해서 해보기
   })

//    console.log(popupData)

   res.json({popupData})
    
}

const detail = async (req, res) => {
    console.log('=========popup DETAIL========')

    const popupDetail = await popup.findOne({ where: { id: req.params.popupId }})
    
    // console.log('popupDetail = ', popupDetail)

    if ( !popupDetail.dataValues ) res.status(401).end('NOT FOUND ID') //값 없으면. http 코드 상태 201정상 401에러

    res.status(201).json({ form: popupDetail.dataValues });
}

const destroy = async (req, res) => {
    console.log('======delete======')
    console.log('req.params = ', req.params)

    await popup.destroy({ where: { id: req.params.popupId }})

    res.json({})
}

const modify = async (req, res) => {
    console.log('========POPUP MODIFY=========')
    console.log('req.params = ', req.params)//get방식에서 헀던것처럼
    console.log('req.body = ', req.body)//form으로 보낸 부분 
    console.log('req.file = ', req.file)

    const popupId = req.params.popupId
    // const form = req.body.form
    const form = JSON.parse(req.body.form)

    const { subj, tp, conts, cnnt_url_yn, cnnt_url } = form
    
    const popupIdYn = await popup.findOne({
        where : { id: popupId }
    })

    if (!popupIdYn) return res.status(404).json({error: 'no POPUP deatail'})

    if (req.file) { //파일이 새로 변경 되었을 경우에만.
        let filename     = '',
            originalname = ''
        filename = req.file.filename
        originalname = req.file.originalname
        await popup.update(
            {subj, tp, conts, cnnt_url_yn, cnnt_url, filename, originalname}, 
            {where : { id : popupId }}
        )
    }else{ // 파일 수정안되었는데 빈 값으로 수정되는것 방지.
        await popup.update(
            {subj, tp, conts, cnnt_url_yn, cnnt_url}, 
            {where : { id : popupId }}
        )
    }

  // const popupDetail = await popup.findOne({ where: { id: req.params.popupId }})
  // console.log("====업데이트 이후", popupDetail)

   res.json({popupId})
}

module.exports = {
   create,
   detail,
   destroy,
   modify,
   list
}