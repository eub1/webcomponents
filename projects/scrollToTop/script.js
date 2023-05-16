let calcScrollValue = () => {
  let scrollProgress = document.getElementById('progress')
  // let progressValue = document.getElementsById('progress-value')
  let pos = document.documentElement.scrollTop
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight
  let scrollValue = Math.round((pos * 100) / calcHeight)

  // console.log(scrollValue)

  if (pos > 100) {
    scrollProgress.style.display = 'grid'
  } else {
    scrollProgress.style.display = 'none'
  }

  scrollProgress.addEventListener('click', () => {
    document.documentElement.scrollTop = 0
  })
  scrollProgress.style.background = `conic-gradient(#85b99e ${scrollValue}%, #d7d7d7 ${scrollValue}%)`
}

window.onscroll = calcScrollValue
window.onload = calcScrollValue
