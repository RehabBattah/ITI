//  Register 
function userRegister() {
    let name = document.getElementById('nameRe').value;
    let email = document.getElementById('emailRe').value;
    let password = document.getElementById('passwordRe').value;
    if (name && email && password) {
        let user = { name, email, password };
        localStorage.setItem("user", JSON.stringify(user))
        alert("Successfully Register ")
        document.getElementById("register").style.display = "none";
        document.getElementById("login").style.display = "block";
    } else {
        alert("Please try again");
    }
}
//login
function userLogin() {
    let email = document.getElementById('logEmail').value 
    let password = document.getElementById('logPassword').value;
    let oldUser = JSON.parse(localStorage.getItem("user"));
    if (oldUser && oldUser.email === email && oldUser.password === password) {
        alert("Login Successful");
        document.getElementById("login").style.display = "none";
        document.getElementById("home").style.display = "block";
        showHome();
        users()
    }else{
        alert("Invalid email or password \nPlease try again");
    }
}

function showHome() {
    let oldUser = JSON.parse(localStorage.getItem("user"));
    console.log(oldUser);
    let h1 = document.createElement("h1");
    let home = document.getElementById("home")
    h1.innerHTML = `Hello ${oldUser.name}`;
    home.appendChild(h1);
    h1.style.textAlign = "center";
}

function users() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/users");
    xhr.send()
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let res = JSON.parse(xhr.responseText);
            // console.log(res);
            res.data.forEach(e => {
                document.getElementById("home").innerHTML+= `
                <div id="card">
                <img src= "${e.avatar}"/>
                <h1>${e.first_name}</h1> 
                </div>
                `
            });
        }
    };
}

// let img=document.images
// console.log(img)
// for(let i=0;i<img.length;i++){
//     img[i].addEventListener("mouseover",function(e){
//         document.getElementsByClassName("res")[0].style.backgroundImage=`url(${e.target.src})`
//     })
//     img[i].addEventListener("mouseout",function(e){
//         document.getElementsByClassName("res")[0].style.backgroundImage="none"
//     })
// }
