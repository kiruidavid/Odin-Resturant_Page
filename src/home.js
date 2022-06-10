function createHome(){
    const home = document.createElement("div") 
    home.classList.add("home") 
    
    home.appendChild(createParagraph("Best Tea, Coffee and Snacks Spot"))  
    home.appendChild(createParagraph("made in 2020")) 
    home.appendChild(createParagraph("Make an order with us and enjoy")) 

    return home;

} 
function createParagraph(text){
    const paragraph = document.createElement("p") 
    paragraph.textContent = text 
    return paragraph;
}
function loadHome(){
    const main = document.getElementById("main") 
    main.textContent = ""
    main.appendChild(createHome())
} 
export default loadHome;