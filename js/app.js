console.log('loaded');
const URL_L = 'http://localhost:3000/api/onepiece/characters';
const MAX_PERS = 10;
let midapers = 0;
let guanyat = 0;
window.onload = async () => {
    const inputNom = document.getElementById('nom-personatges');
    const botoCercar = document.getElementById('boto-cercar');
    botoCercar.addEventListener('click', () => {
    const nom = inputNom.value.trim();
    if (nom === '') {
      document.getElementById('contingut-fitxa').textContent = 'Escriu un nom';
      return;
    }
    mostrarResultat(URL_L)
  )}
    inputNom.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      botoCercar.click()
    }
  });
    const llistaRecompenses = document.getElementById('llista-recompenses');
    const resposta = await fetch(URL_L);
    const dades = await resposta.json();
    console.log(dades);
    const personatges = dades;
      for (const personat of personatges) {
        const nouLi = document.createElement('li');
        nouLi.textContent = personat.name;  
        llistaRecompenses.appendChild(nouLi);
        nouLi.addEventListener('click', () => mostrarFitxa());
        const botoAfegir = document.createElement('button');
        botoAfegir.textContent = 'Afegir';
        nouLi.appendChild(botoAfegir);
        botoAfegir.addEventListener('click', (event) => {
        event.stopPropagation();
        afegirCapturats(URL_L.name[midapers]);
        });
        midapers++;
  }
};

async function mostrarFitxa(url) {
  const contingut = document.getElementById('contingut-fitxa');
  contingut.textContent = '';
  const resposta = await fetch(url);
  if (!resposta.ok) {
    contingut.textContent = `No hi ha cap personatge amb aquest nom`;
    return;
  }
  const personat = await resposta.json();
  console.log(personat);
  pintarPersonatge(personat, contingut);
  mostrarEdat(personat, contingut)
  mostrarEstat(personat, contingut)
}
function pintarPersonatge(personat, caixa) {
  const nom = document.createElement('h3');
  nom.textContent = personat.name[0];
  caixa.appendChild(nom);
  const bounties = document.createElement('p');
  if(personat.is_active){
  Edat.textContent = `Recomensa: ${personat.amount}`;
  }else{Edat.textContent = `No te recompensa activa`;}
  caixa.appendChild(Edat);
  const imatge = document.createElement('img');
  imatge.src = personat.image_url;
  imatge.alt = personat.name;
  imatge.width = 250;
  caixa.appendChild(imatge);
}
async function afegirCapturats(url) {
  const missatge = document.getElementById('missatge-capturats');
  missatge.textContent = '';
  const resposta = await fetch(url);
  const p = await resposta.json();
  guanyat += p.bounties;
  const llista = document.getElementById('llista-capturats');
  const nouLi = document.createElement('li');
  pintarPersonatge(p, nouLi);
  llista.appendChild(nouLi);
  const botoTreure = document.createElement('button');
  botoTreure.textContent = 'Treure';
  nouLi.appendChild(botoTreure);
  botoTreure.addEventListener('click', () => {
    llista.removeChild(nouLi);
     total -= producte.price;
    if (midaProductes === 0) {
      guanyat = 0;
    }
    missatge.textContent = '';
  });
}
}
function mostrarEstat(producte, caixa) {    

  let textTipus = 'Estat: ';
  for (const state of personat.status) {
    textTipus += ' ' + state.status.name;
  }
  const pEstat = document.createElement('p');
  pTipus.textContent = textTipus;
  caixa.appendChild(pEstat);
}

 function mostrarEdat(producte, caixa) {   
  let textTip = 'Edat:';
  for (const edat of personat.age) {
    textTip += ' ' + edat.age.name;
  }
  const pEdat = document.createElement('p');
  pTipus.textContent = textTipus;
  caixa.appendChild(pEdat);
}
async function mostrarResultat(url) {
  const missatge = document.getElementById('missatge-cerca');
  const llistaResultats = document.getElementById('resultats-cerca');
  missatge.textContent = '';
  llistaResultats.textContent = '';

  const resposta = await fetch(url);
  const dades = await resposta.json();
  console.log(dades);

  if (dades.length === 0) {
    missatge.textContent = 'No hi ha cap personatge amb aquest nom';
    return;
  }

  missatge.textContent = `${dades.length} resultats`;

  for (const personat of dades) {
    const nouLi = document.createElement('li');
    nouLi.textContent = personat.name + ' ' + personat.bounties + 'berries';
    llistaResultats.appendChild(nouLi);
    nouLi.addEventListener('click', () => mostrarFitxa(URL_L + personat.name));
  }
}