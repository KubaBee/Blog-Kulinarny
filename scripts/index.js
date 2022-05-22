// let image = document.getElementById("switch")


function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function changeTheme() {
    if (localStorage.getItem('theme') === 'dark'){
        setTheme('light')
    }
    else {
        setTheme('dark');
    }
}

(function () {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('dark');
    }
    else {
        setTheme('light')
    }
})();


const food_divs = document.getElementById('dashboard');

function searchFor(){
    let user_input = document.getElementById('search_input').value
    let text = ""
    for (let d of food_divs.children){

        if (d.innerHTML.includes(user_input) || d.innerHTML.includes(user_input[0].toUpperCase()+user_input.slice(1)) || d.innerHTML.includes(user_input[0].toLowerCase()+user_input.slice(1))){
            d.children[0].className = "single col-4"
            text += d.outerHTML
            console.log(text)
        }
    }
    if (text===""){
            text =  "<h1>Nie znaleziono</h1>"
        }
    document.getElementById('dashboard').innerHTML = ""

    document.getElementById('dashboard').innerHTML = text
}

