function continueGame(){
    const alphabet=getRandomAlphabet();
    const currentAl=document.getElementById('currentAlphabet')
    currentAl.innerText=alphabet;
    setBackground(alphabet);
}

function  play(){

    hideElementId('home');
    showElementId('playground')
    continueGame()
}
 