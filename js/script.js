/*const cats = [
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
];*/

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

heading.className += ` subHeading`;

// Question 5

const paragraphs = document.querySelectorAll("p").forEach(e => e.style.color = "red");
//paragraphs.style.color = "red"

/*for(let i = 0; i <= paragraphs.length; i++){
    paragraphs[i].style.color = "red";
}*/

// Question 6

const resultsContainer = document.querySelector(".results")
resultsContainer.innerHTML = `<p> New paragraph </p>`;
resultsContainer.style.backgroundColor = "yellow";

// Question 7

const cats = [
    {
        name: "Blob",
        age: 10,
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21,
    }
];

function nameList(list){
    
    //var list = cats[i].name;
    for(let i = 0; i < nameList.length; i++) {
        console.log(list);
    }
}

nameList(cats[0].name);
nameList(cats[1].name);
nameList(cats[2].name);