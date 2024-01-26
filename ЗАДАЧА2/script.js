function getRandomNumber(min = 0, max = 100){
    return Math.round(Math.random() * (max - min) + min);
}

const wrapper = document.querySelector("#wrapper");

let cRed = getRandomNumber(0, 255),
    cGreen = getRandomNumber(0, 255),
    cBlue = getRandomNumber(0, 255),
    wColor = "#" + cRed.toString(16) + cGreen.toString(16) + cBlue.toString(16);

let hRed = cRed.toString(16),
    hGreen = cGreen.toString(16), 
    hBlue = cBlue.toString(16);

let tСolor = "";
switch (wColor){

    case "#000080":
        tСolor = "Темно-синий";
        break;
    case "#ff00ff":
        tColor = "розовый";
        break;
    case "#800080":
            tColor = "фиолетовый";
            break;
    case "#808080":
        tColor = "темно-серый";
        break;
    case "#00ffff":
        tColor = "голубой";
        break;
    default:
        tСolor = wColor;
        break;
        case "#ff0000": 
        tСolor = "красный";
        break;
    case "#000000": 
        tСolor = "черный";
        break;
        case "#ffffff": 
        tСolor = "белый";
        break;
    case "#00ff00":
        tСolor = "светло-зеленый";
        break;
    case "#008000":
        tСolor = "зеленый";
        break;
    case "#0000ff":
        tСolor = "синий";
        break;

}
let clr = cRed + cGreen + cBlue;
if (clr < 512){
    wrapper.style.color = "white";
} else {
    wrapper.style.color = "black";
}

wrapper.style.backgroundColor = wColor;
wrapper.innerText = `1. RGB: ${cRed}, ${cGreen}, ${cBlue} \n`;
wrapper.innerText += `2. HEX: ${wColor}\n`;
wrapper.innerText += `3. Цвет: ${tСolor}\n`;