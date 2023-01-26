const form = document.getElementById('form');
const submit = document.getElementById('submit');
const firstName = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const sinsTextArea = document.getElementById('sin');
const result = document.getElementById('result')
const row = document.getElementsByClassName('row');
const title = document.getElementById('title');
const checkbox = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');

const sins = ['lop', 'csal', 'boszorkány', 'gyilko', 'szíd', 'falánk', 'öl', 'alkohol', 'drog', 'ellenáll', 'erőszak', 'berki fék', 'bűn'];
let sinsCount = 0;

function checkSins() {
    if(firstName.value !== '' && lastname.value !== '' && sinsTextArea.value !== '' && checkbox.checked === true && checkbox2.checked === true) {
        for (let i = 0; i < sins.length; i++) {
            if(sinsTextArea.value.includes(sins[i])) {
                sinsCount = sinsCount + 1;
                result.style.display = 'block';
                row[0].style.display = "none"; 
                console.log(sinsCount);
                
            } else {
                result.style.display = 'block';
                row[0].style.display = "none";
                title.innerText = `A meghozott ítélet:\n${firstName.value} ${lastname.value} nem bűnös.\n\n A Paradicsom kapuja megnyílik...`;
            }
            //  break;
        
        }
        if(sinsCount >= 3) {
            title.innerText = `A meghozott ítélet:\n${firstName.value} ${lastname.value} bűnös.\n\n A Pokol kapuja megnyílik...`;
        } else if(sinsCount == 0) {
            result.style.display = 'block';
            row[0].style.display = "none";
            title.innerText = `A meghozott ítélet:\n${firstName.value} ${lastname.value} nem bűnös.\n\n A Paradicsom kapuja megnyílik...`;
        } else {
            title.innerText = `A meghozott ítélet:\n${firstName.value} ${lastname.value} bűnös.\n\n A Purgatórium tűzében megtisztulhat!`;
        }
    }
}