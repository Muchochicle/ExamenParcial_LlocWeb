console.log('loaded');
const URL_LLISTA = 'http://localhost:3000/api/onepiece/characters';
const URL_BOUNTIES = 'https://www.onepieceapi.com/api/bounties';
const MAX_BOUNTIES = 10;
let midapers = 0;
window.onload = async () => {
    const inputNom = document.getElementById('nom-personatges');
    const botoCercar = document.getElementById('boto-cercar');
    botoCercar.addEventListener('click', () => {
    const nom = inputNom.value.trim();
    if (nom === '') {
      document.getElementById('contingut-fitxa').textContent = 'Escriu un nom';
      return;
    }
    //mostrarFitxa()
    

    inputNom.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      botoCercar.click()
    }
  });
    const llistaRecompenses = document.getElementById('llista-recompenses');
    const resposta = await fetch(URL_LLISTA);
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
        afegirCapturats(URL_LLISTA[midapers]);
        });
        midapers++;
  }
};
async function mostrarFitxa(url) {
  const contingut = document.getElementById('contingut-fitxa');
  contingut.textContent = '';
  const resposta = await fetch(url);
  if (!resposta.ok) {
    contingut.textContent = 'No hi ha cap personatge amb aquest nom';
    return;
  }
  const personat = await resposta.json();
  console.log(personat);
  pintarPersonatge(personat, contingut);
  mostrarDescripcio(personat, contingut);
}
function pintarPokemon(pokemon, caixa) {


