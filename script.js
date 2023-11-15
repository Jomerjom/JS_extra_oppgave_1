const input_name = document.getElementById('input_name');
const output_name = document.getElementById('output_name');

const input_age = document.getElementById('input_age');
const output_age = document.getElementById('output_age');

const input_color = document.getElementById('input_color');



function updateName() {
    output_name.innerHTML = `Hei, <span style="color:${input_color.value}">${input_name.value}</span>!`;
}

function updateAge() {
    output_age.textContent = `Du er født i ${2023 - input_age.value}.`;
}