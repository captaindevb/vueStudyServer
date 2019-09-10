const { popup } = require('../models')

const create = async (req, res) => {
   console.log('=====POPUP CREATE ======')
   console.log('req.body = ', req.body)
   console.log('req.file = ', req.file)

   const form = JSON.parse(req.body.form)

   const { subj, tp, conts, cnnt_url_yn, cnnt_url } = form

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

module.exports = {
   create,
   list
}