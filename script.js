let drawingSection = document.querySelector(".drawing-section");
let firstTimeRun = true;
let boxSize;
let size = 16;
let currentColor = "black";
let drawing;
let color = document.getElementById("changeColor");

//кнопочки с размерами-----------------------------------------1
const small = document.getElementById("small");
const medium = document.getElementById("medium");
const large = document.getElementById("large");

small.addEventListener("click", () => {
    size = 16;
    createField(size);
});
medium.addEventListener("click", () => {
    size = 32;
    createField(size);
});
large.addEventListener("click", () => {
    size = 64;
    createField(size);
});
//кнопочки с размерами-----------------------------------------1


//задать класс для клеток-------------------------2
function getSize() { 
    if (size == 16) {
        boxSize = "box16";
    } else if (size == 32) {
        boxSize = "box32";
    } else if (size == 64) {
        boxSize = "box64";
    }
    return boxSize;
};
//задать класс для клеток-------------------------2


//рисование---------------------------3
const allScreen = document.querySelector("body");
allScreen.addEventListener("mousedown", () => {
    drawing = true;
});
allScreen.addEventListener("mouseup", () => {
    drawing = false;
});


function createBox() {
    const box = document.createElement("div");
    box.className = getSize();

    box.addEventListener("mouseover", () => {
        if (drawing) {
            box.style.backgroundColor = currentColor;
        }
    });

    box.addEventListener("mousedown", () => {
        box.style.backgroundColor = currentColor;
    });
    
    return box;
    
}

color.addEventListener("change", changeColor);
function changeColor() {
  currentColor = color.value;
}

//рисование---------------------------3



//создание поля----------------------4
function createField(size) {
    let boxContainer = document.createElement("div");
    boxContainer.className = "box-container";
    if (!firstTimeRun) {
        let el = document.querySelector(".box-container");
        el.remove();
    }

    drawingSection.append(boxContainer);
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.className = "row";
        boxContainer.appendChild(row);
        for (let z = 0; z < size; z++) {
            let box = createBox();
            row.appendChild(box);
        }
    }

    firstTimeRun = false;
}
//создание поля----------------------4



createField(16);