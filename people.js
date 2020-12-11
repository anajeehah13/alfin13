
function fullNameList() {
  let listNames = ' ';
  for(let i=0; i<6; i++) {
    listNames += i+1 + '-';
    for(let j=0; j<3; j++) {
      listNames += people[i].name[j] + ' ';
  }
  listNames += '<br/>';
 }
 document.getElementById('solution').innerHTML = listNames;
}

function getAgeFunction() {
  let fname = document.getElementById('name-input').value;
  for(let i=0; i<6; i++) {
    if(fname == people[i].name[0]) {
      document.getElementById('solution1').innerHTML = people[i].age;
      break;
    }
  }
}

var people = [
{name: ['Alyssa', 'P.', 'Hacker'], age: 26},
{name: ['Ben', 'L.','Bitdiddle'], age: 34},
{name: ['Eva','Lu', 'Ator'], age: 40},
{name: ['Lem', 'E.','Tweakit'], age: 45},
{name: ['Louis','M.','Reasoner'], age: 21},
{name: [ 'Shahan','Haig','Krakirian'], age: 26}
];

let btn1 = document.getElementById('all');
btn1.addEventListener("click", fullNameList());

let btn2 = document.getElementById('age-button');
btn2.addEventListener("click", getAgeFunction());
