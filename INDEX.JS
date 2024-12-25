function newchat() { location.reload(); }
const dict_api = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
async function dict(word) {
    const response = await fetch(`${dict_api}${word}`);
    var data = await response.json();
    let i = 0;
    data.forEach(element => {
        console.log(element);
        let img = document.createElement("img");
        img.alt = "miss";
        img.src =element;
        img.width="50vw";
        img.height="50vh";
        element.meanings.forEach(meaning => {
            meaning.definitions.forEach(definition => {
                i++;
                // console.log(`  Definition: ${definition.definition}`);
                let div = document.createElement("div");
                let define = document.createElement("p");
                // div.setAttribute("style", "display:flex; justify-content:space-around;");
                define.setAttribute("style", "font-size:1.5vmax;font-weight:bold;margin-top:1vmax;");
                define.textContent = i + ".)  " + `${definition.definition}`;
                // define.style.fontSize = "1.5vmax";
                // define.style.fontWeight = "bold";
                div.appendChild(img);
                div.appendChild(define);
                document.getElementById("main").appendChild(div);
            });
        });
    });
}
function word() {
    let word = document.getElementById("text").value.trim();
    console.log(word);
    document.getElementById("main").innerHTML = "";
    dict(word);
}
addEventListener("keydown", (event) => {
    if (event.keyCode == 13) {
        word();
    }
});