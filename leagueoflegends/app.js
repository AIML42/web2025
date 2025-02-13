//event bubbling

const btn = document.querySelector('button');
const div = document.querySelector('div');


//here when we click on button div message will also print because of event bubbling 
btn.addEventListener('click', () => {
    console.log("Button clicked !!!");
})

div.addEventListener('click', () => {
    console.log("div clicked");
})


//example of event handling

div.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON'){
        console.log("button is pressed")
    }
})


// use of this keyword in function

const person = {
    name:"Hola",
    age: 23,
    returnNameAge : function(){
        console.log(`My name is ${this.name} and age is ${this.age}`);
    }
    
}