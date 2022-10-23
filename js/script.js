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

// Question 8

const catContainer = document.querySelector(".cat-container");

let catName1 = cats[0].name;
let catAge1 = cats[0].age;
/*if(cats.age !== undefined){
    catAge = cats[0].age;
}*/
let catName2 = cats[1].name;
let catAge2 = "Age unknown";
let catName3 = cats[2].name;
let catAge3 = cats[2].age;




function createCats(cats){
    catContainer.innerHTML += `
    <div>
    <h5>${catName1}</h5>
    <p>${catAge1}</p>
    </div>
    <div>
    <h5>${catName2}</h5>
    <p>${catAge2}</p>
    </div>
    <div>
    <h5>${catName3}</h5>
    <p>${catAge3}</p>
    </div>
    `;
}

createCats(cats)