function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
        .then((resp) => { return resp.json() })
        .then(states => {

            for (const state of states)
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        })
}


function getCities(events) {
    const citiesSelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")
    const indexSelectedState = event.target.selectedIndex
    const ufValue = event.target.value

    stateInput.value = event.target.options[indexSelectedState].text
    
    citiesSelect.innerHTML = ""
    citiesSelect.disabled = false
    //console.log(ufValue)
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`)
        .then( resp => resp.json() )
        .then(cities => {

            for (const city of cities){
                citiesSelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }                
            citiesSelect.disabled = false
            
        })

}
populateUFs()

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}

let selectedItems = []

const collectedItems = document.querySelector("input[name=items]")

function handleSelectedItem(event){
    const itemLi = event.target
    const itemId = itemLi.dataset.id

    console.log("Item Id: ", itemId)
     
    itemLi.classList.toggle("selected")

    const alreadySelected = selectedItems.findIndex(item => item == itemId)

    if(alreadySelected >= 0){
        selectedItems = selectedItems.filter(item => item!=itemId)
    }else{
        selectedItems.push(itemId)
    }

    collectedItems.value = selectedItems


    console.log(selectedItems)
}