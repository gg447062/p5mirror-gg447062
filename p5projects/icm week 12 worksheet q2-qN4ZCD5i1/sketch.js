let words = []
let newString = []
function setup() {
  createCanvas(400, 400);
  background(22)
  fill(222)
  textSize(18)
  loadStrings('tongue_twister.txt', handleStrings)
}

function handleStrings(strings) {
  let ts = textSize()
  for (let string of strings) {
    let tokens = splitTokens(string)
    for (let token of tokens) {
      token.trim()
      words.push(token)
    }
  }

  for (let i = words.length; i >0; i--) {
    let index = floor(random(words.length))
    let word = words[index]
    newString.push(word)
    words.splice(index,1)
  }
  let sentence = newString.join(' ')
  textWrap(WORD)
  text(sentence,10,height/4,width)
}
