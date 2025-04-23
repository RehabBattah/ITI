let canvas;
let context;
let isDrawing;
window.onload = function () {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    canvas.width = 680;
    canvas.height = 490;
    context.strokeStyle = "blue";
    context.fillStyle = "red";
    context.lineWidth = 3;
    isDrawing = false;

    // 1.HAND SKETCH 
    canvas.addEventListener("mousedown", (e) => {
        isDrawing = true;
        context.beginPath();
    });
    canvas.addEventListener("mousemove", (e) => {
        if (isDrawing) {
            context.lineTo(e.offsetX, e.offsetY);
            context.stroke();
        };
    });
    canvas.addEventListener("mouseup", () => {
        isDrawing = false;
    });
    canvas.addEventListener("mouseleave", () => {
        isDrawing = false;
    });

    // 2.chart 
    context.font = "25px Sans-Serif";

    context.fillStyle= "#c1272d"; ;
    context.fillRect(100, 50, 50, canvas.height - 50)
    context.fillStyle="#FFF";
    context.fillText("1", 115, canvas.height - 15)

    context.fillStyle= "orange"; ;
    context.fillRect(190, 130, 50, canvas.height - 130)
    context.fillStyle="#FFF";
    context.fillText("2", 207, canvas.height - 15)

    context.fillStyle= "#58508d"; ;
    context.fillRect(280, 200, 50, canvas.height - 200)
    context.fillStyle="#FFF";
    context.fillText("3", 296, canvas.height - 15)

    context.fillStyle= "#1f6f6f"; ;
    context.fillRect(370, 270, 50, canvas.height - 270)
    context.fillStyle="#FFF";
    context.fillText("4", 389, canvas.height - 15)

    context.fillStyle= "#bc5090"; ;
    context.fillRect(460, 340, 50, canvas.height - 340)
    context.fillStyle="#FFF";
    context.fillText("5", 478, canvas.height - 15)

    context.fillStyle= "#003f5c"; ;
    context.fillRect(550, 410, 50, canvas.height - 410)
    context.fillStyle="#FFF";
    context.fillText("6", 568, canvas.height - 15)


    // 3.Gradiant 
    
    // context.font = "50px Sans-Serif";
    // context.textAlign = "center";
    // let gradient = context.createLinearGradient(0, 0, 300, 300);
    // gradient.addColorStop(0, "blue");
    // gradient.addColorStop(1, "red");

    // context.shadowColor = "rgba(0, 0, 0, 0.7)";
    // context.shadowBlur = 20;
    // context.shadowOffsetX = 15;
    // context.shadowOffsetY = 10;

    // context.fillStyle='rgba(0, 0, 0, 0.2';
    // context.fillText("Hello World", 309 , 305);
    // context.fillStyle=gradient;
    // context.fillText("Hello World", 300,300);

}

function reset() {
    context.clearRect(0, 0, canvas.width, canvas.height)
}


// // NO.4

// function show() {
//     let name = document.getElementById('name').value;
//     let email = document.getElementById('email').value;
//     if (name && email) {
//         let user = { name, email };
//         localStorage.setItem("user", JSON.stringify(user));
//         document.getElementById("result1").innerHTML = `<h1 style="text-align:center">Welcome ${name} </h1>

//                             <h4 style="text-align:center"> your email: ${email}</h4>`
//     } else {
//         document.getElementById("result1").innerHTML = `<h2 style="text-align:center">Invalid inputs</h2>`
//     }
// }

// // 5
// function counter() {
//     console.log("hi");
//     if (sessionStorage.counter) {
//         sessionStorage.counter = Number(sessionStorage.counter) + 1
//         console.log(sessionStorage.counter);
//     } else {
//         sessionStorage.counter = 1;
//     }
//     document.getElementById("result2").innerHTML = `<h3>You have clicked for ${sessionStorage.counter}  times</h3>`
// };