// Get Random Person
// =====================================
const getRandomPerson = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayPerson(data));
}

const displayPerson = person => {
    
    // Get person picture
    const personPic = document.getElementById('picture');
    // Show image 
    personPic.innerHTML = ` <img src="${person.results[0].picture.large}" /> `;
    
    // Get full name 
    const personName = document.getElementById('person-name');
    // Show full name 
    personName.innerText = person.results[0].name.first + ' ' + person.results[0].name.last;
    
    // Get full phone 
    const personPhone = document.getElementById('person-phone');
    // Show full phone 
    personPhone.innerText = person.results[0].phone;
    
    // Get full email 
    const personEmail = document.getElementById('person-email');
    // Show full email 
    personEmail.innerText = person.results[0].email;
    
    // Get full address 
    const personAddress = document.getElementById('person-address');
    // Show full address 
    personAddress.innerText = person.results[0].location.country;
}

// Display person data
getRandomPerson();


// Get Random Quotes
// =====================================

const getQuotes = () => {
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => displayQuotes(data));
}

const displayQuotes = quote => {
    const singleQuote = document.getElementById('single-quote');
    singleQuote.innerHTML = `
        <p>${quote.quote}</p>
    `;

}

// Display Quotes
getQuotes();