function createMenu(){
    const menu = document.createElement("div") 
    menu.classList.add("menu") 
    menu.appendChild(
        createMenuItem("Tea and Cake", 
        "Tea with marble cake")
    ) 
    menu.appendChild(
        createMenuItem("Tea and Biscuits", 
        "Tea with biscuits")
    ) 
    menu.appendChild(
        createMenuItem("Tea and Samosas", 
        "Tea with hot samoas")
    ) 
    menu.appendChild(
        createMenuItem("Tea and MeatPies", 
        "Tea with meatpies")
    ) 
    return menu


} 

function createMenuItem(name, desc){
    const menuItem = document.createElement("div") 
    menuItem.classList.add("menu-item") 

    const snackName = document.createElement("h2") 
    snackName.textContent = name  
    const snackDesc = document.createElement("p") 
    snackDesc.textContent = desc 

    menuItem.appendChild(snackName) 
    menuItem.appendChild(snackDesc) 

    return menuItem


} 
function loadMenu(){
    const main = document.getElementById("main")  
    main.textContent = ""
    main.appendChild(createMenu())
} 
export default loadMenu;