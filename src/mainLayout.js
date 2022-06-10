import loadHome from "./home"; 
import loadMenu from "./menu"; 
import loadContact from "./contact"
function createNav(){ 
    const nav = document.createElement("nav") 
    nav.classList.add("navbar")
    const navHeaderText = document.createElement("h2") 
    navHeaderText.classList.add('nav-logo')
    navHeaderText.innerHTML = "<h3><i class='fa fa-coffee' aria-hidden='true'></i> Chainess </h3>"
    
    const navList = document.createElement("ul") 
    navList.classList.add("nav-list") 
    

    const homeButton = document.createElement("button") 
    homeButton.classList.add("home-button") 
    homeButton.textContent = "HOME" 
    const homeTag = () => {
        const anchor = document.createElement("a") 
        const li = document.createElement("li") 
        li.classList.add('nav-list-item')
        anchor.onclick = loadHome() 
        anchor.innerText = 'Home' 
        li.appendChild(anchor) 
        navList.appendChild(li)

    } 
    
    homeButton.onclick = homeTag; 
    navList.appendChild(homeButton)
    
    const menuButton = document.createElement("button") 
    menuButton.classList.add("menu-button") 
    menuButton.innerText = "MENU"
    const menuTag = () => { 
        const anchor = document.createElement("a") 
        const li = document.createElement("li") 
        li.classList.add('nav-list-item')
        anchor.onclick = loadMenu()
        anchor.innerText = 'MENU' 
        li.appendChild(anchor) 
        navList.appendChild(li)

    } 
    menuButton.onclick = menuTag; 
    navList.appendChild(menuButton)

    const contactButton = document.createElement("button") 
    contactButton.classList.add("contact-button") 
    contactButton.textContent = "CONTACT"
    const contactTag = () => {
        const anchor = document.createElement("a") 
        const li = document.createElement("li") 
        li.classList.add('nav-list-item')
        anchor.onclick = loadContact() 
        anchor.innerText = 'CONTACT' 
        li.appendChild(anchor) 
        navList.appendChild(li)
    } 
    contactButton.onclick = contactTag; 
    navList.appendChild(contactButton)

    
   


    
    nav.appendChild(navHeaderText) 
    nav.appendChild(homeButton) 
    nav.appendChild(menuButton) 
    nav.appendChild(contactButton)
    return nav

    
   


}  

function createMain(){
    const main = document.createElement("main") 
    main.classList.add("main") 
    main.setAttribute("id", "main") 
    return main
} 
function createFooter(){
    const footer = document.createElement("footer") 
    footer.classList.add("footer")
    const footerDetails = document.createElement("p") 
    footerDetails.classList.add("footer-details") 
    footerDetails.textContent = 'Chainess @ 2020' 

    footer.appendChild(footerDetails)
    return footer
}

function startWebpage(){
    const content = document.getElementById("content") 

    content.appendChild(createNav()) 
    content.appendChild(createMain()) 
    content.appendChild(createFooter())

    //setActiveButton(document.querySelector(".button-nav"))
} 
export default startWebpage
