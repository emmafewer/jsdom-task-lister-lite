document.addEventListener("DOMContentLoaded", () => {
  selectPriority()
});

const selectPriority = () => {
  const form = document.querySelector('form')
  form.addEventListener("submit", buildList)

  const priority = document.createElement("select")
  form.children[1].insertAdjacentElement('afterend', priority)

  const highOption = document.createElement('option')
  highOption.textContent = "high"
  
  const mediumOption = document.createElement('option')
  mediumOption.textContent = "medium"

  const lowOption = document.createElement('option')
  lowOption.textContent = "low"

  priority.append(highOption, mediumOption, lowOption)
}

const buildList = (e) => {
  e.preventDefault()

  let ul = document.getElementById('tasks')
  let li = document.createElement('li')
  let todo = document.getElementById('new-task-description').value
  let deleteBtn = document.createElement('button')

  li.innerHTML = todo
  deleteBtn.textContent = "x"

  if (e.currentTarget.elements[1].value === "high") {
    li.style.color = "red"
  } else if (e.currentTarget.elements[1].value === "medium") {
    li.style.color = "yellow"
  } else {
    li.style.color = "green"
  }
  
  li.appendChild(deleteBtn)
  ul.appendChild(li)

  deleteBtn.addEventListener("click", (e) => {
    li.remove()
  })
}




