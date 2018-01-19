function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const items = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < items.length; i++) {
    items[i].innerHTML = (parseInt(items[i].innerHTML) + n).toString()
  }
}
