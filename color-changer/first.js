const body = document.querySelector('body');
const bg_colors = ['red','green','blue','yellow','purple','orange'];

function changeColor()
{
    let num = Math.random();
    console.log("random number", num);

    let len = bg_colors.length;
    console.log("Colors list length", len);

    let index = num * len;
    console.log("Multiply random number and color length", index);

    let int_index = parseInt(index);
    console.log("Integer rounded", int_index);

    body.style.backgroundColor = bg_colors[int_index];

}

const text_color = ['white', 'black', 'pink', 'aqua'];

function changeTextColor()
{
    const text = document.getElementById('text');
    const color_index = parseInt(Math.random() * text_color.length);
    text.style.color = text_color[color_index];
}