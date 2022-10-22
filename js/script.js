const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1

const cat = {
    //isComplaining: "complain",
    complain: function(){
        console.log("Meow!");
    }
};

cat.complain()

/*function isCat(complain){

console.log(complain);
}

isCat("Meow!");*/

// Question 2 

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

