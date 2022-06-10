function createContact(){
    const contact = document.createElement("div") 
    contact.classList.add('contact-area') 

    const contactHeader = document.createElement("div") 
    contactHeader.classList.add("contact-header") 
    const contactText = document.createElement("h2") 
    contactText.classList.add('contact-header-text') 
    contactHeader.appendChild(contactText) 

    const contactCard = document.createElement("div") 
    contactCard.classList.add("contact-card") 
    const cardHeader = document.createElement("h3")  
    cardHeader.textContent = "Contact us" 
    const cardNumber = document.createElement("p") 
    cardNumber.textContent = "0090 789 567" 
    const cardEmail = document.createElement("p") 
    cardNumber.textContent = "chainess@chai.com" 
    const cardLocation = document.createElement("span") 
    cardNumber.textContent = "Nairobi, Kenya" 

    contactCard.appendChild(cardHeader) 
    contactCard.appendChild(cardNumber) 
    contactCard.appendChild(cardEmail) 
    contactCard.appendChild(cardLocation) 

    contact.appendChild(contactHeader) 
    contact.appendChild(contactCard) 

    return contact

} 
function loadContact(){
    const main = document.getElementById('main') 
    main.textContent = ""
    main.appendChild(createContact())
} 
export default loadContact