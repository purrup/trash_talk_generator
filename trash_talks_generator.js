// 隨機陣列的index
function randomIndex(array) {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

function generateTrashTalk(target) {
  const task = {
    engineer: [
      '加個按鈕',
      '加新功能',
      '切個版',
      '改一點 code',
      '複製貼上而已',
      '這個明天給我',
    ],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢'],
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常', '應該做得到']
  let trashTalk = ''

  // 若使用者無點選就按btn
  if (target === undefined) {
    return (trashTalk = '請點選一個人才能產生幹話！')
  }

  // randomly choose a task depend on target
  let randomTask = randomIndex(task[target])

  // randomly choose a phrase
  let randomPhrase = randomIndex(phrase)

  // 轉換target為中文
  let job = ''
  switch (target) {
    case 'engineer':
      job = '工程師'
      break
    case 'designer':
      job = '設計師'
      break
    case 'entrepreneur':
      job = '創業家'
      break
  }

  trashTalk = `身為一個${job}，${randomTask}，${randomPhrase}吧！`

  return trashTalk
}

module.exports = generateTrashTalk
