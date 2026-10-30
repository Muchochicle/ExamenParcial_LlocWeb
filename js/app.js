console.log('loaded');
const URL_LLISTA = 'https://www.onepieceapi.com/api/characters';
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
    const personatges = 
