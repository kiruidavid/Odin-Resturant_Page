function createMenu(){
    const menu = document.createElement("div") 
    menu.classList.add("menu") 
    const menuItem = document.createElement("div") 
    menuItem.classList.add("menu-item") 

    const itemOne = document.createElement("h4") 
     itemOne.textContent = 'Tea and Cookies @ 260' 
    

    const itemTwo = document.createElement("h4") 
    itemTwo.textContent = 'Tea and Biscuits @ 240' 
    

    const itemThree = document.createElement("h4") 
    itemThree.textContent = 'Tea and Samosas @ 300' 
    

    const itemFour = document.createElement("h4") 
    itemFour.textContent = 'Tea and MeatPie @ 360' 
    

    menuItem.appendChild(itemOne) 
    menuItem.appendChild(itemTwo) 
    menuItem.appendChild(itemThree) 
    menuItem.appendChild(itemFour)
     

    menu.appendChild(menuItem)



    return menu;
    
   


} 


function loadMenu(){
    const main = document.getElementById("main")  
    main.textContent = ""
    main.appendChild(createMenu())
} 
export default loadMenu;