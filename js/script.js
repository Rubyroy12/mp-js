var today = new Date()
var dd = String(today.getDate()).padStart(2, '0')
var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0
var yyyy = today.getFullYear()

datetoday = dd + '/' + mm + '/' + yyyy;

console.log(datetoday);
document.getElementById('date').innerHTML = datetoday;



document.getElementById("date2").innerHTML = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(); //




////////
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// Start file download.
document.getElementById("dwn-btn").addEventListener("click", function () {
    // Generate download of hello.txt file with some content
    var text = document.getElementById("text-val").value;
    var filename = "hello.txt";

    download(filename, text);
}, false);


//Changing background color 
// const colors = ["green", "blue", "red", "yellow", "maroon", "grey"]
// const btn = document.getElementById("btn");


// btn.addEventListener("click", function () {
//     var randomnumber = getrandomnumber();
//     console.log(randomnumber);
//     document.body.style.backgroundColor = colors[randomnumber]
// })

// function getrandomnumber() {
//     return Math.floor(Math.random() * colors.length);
// }



// let characters = "*" + 4;
// console.log(characters);

const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    let hexcolor = "#";

    for (let i = 0; i < 6; i++) {
        hexcolor += hex[getrandomNumber()];
        console.log(hexcolor)

    };
    document.body.style.backgroundColor = hexcolor;

})

function getrandomNumber(){
    return Math.floor(Math.random() * hex.length)
}

