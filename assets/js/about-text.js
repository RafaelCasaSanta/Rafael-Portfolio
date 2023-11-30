var div = document.getElementById("about-info");
var text =
    "Olá, sou Rafael, desenvolvedor de software full stack. Gosto muito de criar novas soluções inovadoras e ágeis que possam agregar para a tecnologia. Possuo conhecimento sólido em PHP, Laravel, JavaScript, React, TypeScript, HTML, CSS, Docker e Git. Tenho comprometimento em desenvolver soluções de qualidade. Também possuo habilidades em MySQL, AdonisJS, Node.js, Bootstrap e Ant Design.";

function write(str, el) {
    var char = str.split("").reverse();
    var typer = setInterval(function () {
        if (!char.length) return clearInterval(typer);
        var next = char.pop();
        el.innerHTML += next;
    }, 40);
}

write(text, div);
