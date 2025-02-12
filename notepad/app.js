const textarea = document.querySelector('#textarea');
const checkbox = document.querySelector('#saveNotes');

// setting intial value if old data is present
const intialText = localStorage.getItem('textarea');
if(intialText){
    textarea.value = intialText;
}


// checking for saving text every 1 second.
setInterval(() =>{
    
    if(checkbox.checked){
        localStorage.setItem('textarea', textarea.value);
        // console.log(textarea.value);
    }
    

}, 1000);
