let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let id = document.querySelector('.identity');

const quotes = [ {
    quote:'"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time."', 
    person:"Thomas A. Edison",
    identity:"Inventor",
}, {
    quote:'"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."', 
    person:"Martin Luther King",
    identity:"American activist",
}, {
    quote:'"It is in our darkest moments that we must focus to see the light."', 
    person:"Aristotle",
    identity:"Greek philosopher",
}, {
    quote:'"You have power over your mind, not outside events. Realize this, and you will find strength"', 
    person:"Marcus Aurelius",
    identity:"Roman emperor and philosopher",
}, {
    quote:'"Be yourself, everyone else is already taken"', 
    person:"Oscar Wilde",
    identity:"Irish poet and playright",
}, {
    quote:'"You will face many defeats in life but never let yourself be defeated."', 
    person:"Maya Angelou",
    identity:"American poet and activist",
}, {
    quote:'"It does not matter how slowly you go as long as you do not stop."', 
    person:"Confucius",
    identity:"Chinese philosopher",
}, {
    quote:'"I didn\'t fail the test. I just found 100 way to do it wrong."', 
    person:"Ben Franklin",
    identity:"Founding Father of the United States",
}, {
    quote:'"If you want to live a happy life, tie it to a goal, not to people or things."', 
    person:"Albert Einstein",
    identity:"Theoretical physicist",
}, {
    quote:'"Your time is limited, so don\'t waste it living someone else\'s life. Dont be trapped by dogma - which is living with the results of other people\'s thinking."', 
    person:"Steve Jobs",
    identity:"Former CEO of Apple",
}, {
    quote:'"It always seems impossible until it is done."',
    person:"Nelson Mandela",
    identity:"Former South African president and activist",
}, ];

btn.addEventListener('click', function() {
    
    let random = Math.floor(Math.random() * quotes.length);
    
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
    id.innerText = quotes[random].identity;
})