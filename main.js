// const x = document.getElementById('c');
// const y = document.getElementById('a');
// const z = document.getElementById('b');
// const x1 = document.getElementById('c1');
// const y1 = document.getElementById('a1');
// const z1 = document.getElementById('b1');
// const b = document.querySelector('body');
// const b1 = document.querySelector('body');

// let count = 0;
// let count1 = 1;

// z.addEventListener('click', function(){
//     if (count%2==0){
//         x.style.cssText="Background-color: #f5c0c0; left: 15px;";
//         z.style.cssText="Background-color: #efefef";
//         y.style.cssText="Background-color: black";
//         b.style.cssText="Background-color: #efefef";
//     }else{
//         x.style.cssText="Background-color: #efefef; left: 230px";
//         z.style.cssText="Background-color: #f5c0c0";
//         y.style.cssText="Background-color: Black";
//         b.style.cssText="Background-color: #f5c0c0";
//     }
//     count++;

   
// })
// z1.addEventListener('click', function(){
//     if (count1%2==0){
//         x1.style.cssText="Background-color: #f5c0c0; left: 15px;";
//         z1.style.cssText="Background-color: #efefef";
//         y1.style.cssText="Background-color: black";
//         b1.style.cssText="Background-color: #efefef";
//     }else{
//         x1.style.cssText="Background-color: #efefef; left: 230px";
//         z1.style.cssText="Background-color: #f5c0c0";
//         y1.style.cssText="Background-color: Black";
//         b1.style.cssText="Background-color: #f5c0c0";
//     }
//     count1++;

   
// })

// main.js


const button1 = {
    x: document.getElementById('c'),
    y: document.getElementById('a'),
    z: document.getElementById('b'),
    count: 1
};

const button2 = {
    x: document.getElementById('c1'),
    y: document.getElementById('a1'),
    z: document.getElementById('b1'),
    count: 1
};
const button3 = {
    x: document.getElementById('c2'),
    y: document.getElementById('a2'),
    z: document.getElementById('b2'),
    count: 1
};

function toggleButton(button) {
    if (button.count % 2 !== 0) {
        button.x.style.cssText = "Background-color: #f5c0c0; left: 15px;";
        button.z.style.cssText = "Background-color: #efefef";
        button.y.style.cssText = "Background-color: black";
        document.body.style.cssText = "Background-color: #efefef";
    } else {
        button.x.style.cssText = "Background-color: #efefef; left: 230px";
        button.z.style.cssText = "Background-color: #f5c0c0";
        button.y.style.cssText = "Background-color: Black";
        document.body.style.cssText = "Background-color: #f5c0c0";
    }
    button.count++;
}

button1.z.addEventListener('click', () => {
    toggleButton(button1);
    if (button2.count % 2 !== 0) {
        toggleButton(button2);
    }
});

button2.z.addEventListener('click', () => {
    toggleButton(button2);
    if (button1.count % 2 !== 0) {
        toggleButton(button1);
    }
});
button3.z.addEventListener('click', () => {
    toggleButton(button3);
    if (button1.count % 2 !== 0) {
        toggleButton(button1);
        toggleButton(button2);
    }
});
