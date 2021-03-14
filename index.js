let apiUrl = `https://cat-fact.herokuapp.com/facts`

document.getElementById('btn').addEventListener("click", () => {
  fetch(apiUrl)
    .then(response => response.json())
    .then(facts => {
      let newDiv = document.createElement('div')
      newDiv.innerHTML = `
        <div>
          ${`<p>
            ${facts.map(fact => fact.text).join("")}
          </p>`}
        </div>
      `
      document.body.append(newDiv)
    })
})