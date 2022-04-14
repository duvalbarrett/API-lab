const button = document.querySelector('button')

const buttonClicked = () => {
    alert('Button has been clicked')
}

button.addEventListener('click', buttonClicked)


let userInput = document.querySelector('input').value

const getResidents = event => {
    axios.get(`https://swapi.dev/api/planets?search=alderaan`)
        .then(res => {
            let residents = res.data.results[0].residents
            residents.forEach(url => {
                axios.get(url)
                    .then(resTwo => {
                        let body = document.querySelector('body')
                        let name = document.createElement('h2')
                        name.innerText = resTwo.data.name
                        body.appendChild(name)
                    })
            })
        })
}

document.querySelector('button').addEventListener('click', getResidents)