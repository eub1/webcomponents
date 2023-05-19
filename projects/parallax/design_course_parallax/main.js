// we can change the style according to event listeners
// this is all one event listener, with the second param. being a function

window.addEventListener('scroll', function () {
  const target = document.querySelectorAll('.scroll')
  // console.log(target.style) -> we can access to the css styles
  // target.style.background = "#ffcc00"

  // console.log(window.pageYOffset)
  //* this is for one querySelector
  //only needs class attribute to the <li>
  // const scrolled = window.pageYOffset;
  // const rate = scrolled * -2;
  // target.style.transform = `translate3d(0px, ${rate}px, 0px)`

  //* script for querySelectorAll - we need to loop elements
  // add data-rate attribute to the <li>
  // console.log(target[0].dataset) // { c/el tiene rate y direction}
  // console.log(target[0].style)

  for (let i = 0; i < target.length; i++) {
    let pos = window.pageYOffset * target[i].dataset.rate
    // console.log(pos)

    if (pos >= 100) {
      pos = 300
    }

    if (target[i].dataset.direction === 'vertical') {
      target[i].style.transform = `translate3d(0px, ${pos}px, 0px)`
    } else {
      let posX = window.pageYOffset * target[i].dataset.ratex
      let posY = window.pageYOffset * target[i].dataset.ratey

      target[i].style.transform = `translate3d( ${posX}px, ${posY}px, 0px )`
    }
  }
})
