//MILESTONE 0
//creo l'array con le informazioni sul team
const team = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }
]

//MILESTONE 1
//stampo a schermo le informazioni del team
//le informazioni saranno divise per persona
for (let i = 0; i < team.length; i++) {
    const curMem = team[i]; 
    console.log("nome ", curMem.nome);
    console.log("ruolo ", curMem.ruolo);
    console.log("foto ", curMem.foto);
}

//MILESTONE 2
//stamperó tutte le informazioni nel DOM 
const rowElem = document.querySelector(".row");
let memberElems = "";
for (let i = 0; i < team.length; i++) {
    const curMemb = team[i];
    memberElems += `
    <div class="col">
        <div class="card">
            <div class="card-body">
                <h2 class="card-title">${curMemb.nome}</h2>
                <h4 class="card-title">${curMemb.ruolo}</h4>
                <h6 class="card-title">${curMemb.foto}</h6>
            </div>
        </div>
    </div>
    `
    
}
rowElem.innerHTML = memberElems;