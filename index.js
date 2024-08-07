const btnEl = document.getElementById('btn')
const memeContainerEl = document.querySelector('.meme-container')
const memeImgEl = document.querySelector('.meme-img')
const memeNameEl = document.querySelector('.meme-name')
const api = '1800197c285a45b599e6d944876f40e8'
const url = 'https://api.humorapi.com/memes/random'
const options = {
  method: 'GET',
  headers: {
    'x-api-key': '1800197c285a45b599e6d944876f40e8',
  },
}

btnEl.addEventListener('click', async function () {
  try {
    btnEl.disabled = true
    btnEl.innerText = 'Вызываю...'
    memeNameEl.innerText = 'Вызываю...'
    memeImgEl.src = 'spinner.svg'
    const response = await fetch(url, options)
    const data = await response.json()
    btnEl.disabled = false
    btnEl.innerText = 'Вызвать мем'
    memeContainerEl.style.display = 'block'
    memeImgEl.src = data.url
    memeNameEl.innerText = data.description
  } catch (error) {
    console.log(error)
    btnEl.disabled = false
    btnEl.innerText = 'Вызвать мем'
    memeNameEl.innerText = 'Ошибка случилась, попробуй ещё раз'
  }
})
