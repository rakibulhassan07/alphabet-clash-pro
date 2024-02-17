



function handleKeyboardPress(event){
    
    const playerPress=event.key;
    if(playerPress==='Escape')
    {
        gameOver();
    }
    const randomAlphabet=document.getElementById('currentAlphabet')
    const getAlphabet=randomAlphabet.innerText;
    const getLowerAlphabet= getAlphabet.toLowerCase(); 
    console.log(playerPress,getLowerAlphabet);

    if(playerPress===getLowerAlphabet)
    {   
        const getScore=document.getElementById('currentScore');
        const scoreText=getScore.innerText;
        const score=parseInt(scoreText);
        const increment=score+1;
        getScore.innerText=increment;
        
      
        
        removeBackground(getLowerAlphabet);  
        continueGame();
    }
    else {
        const getLife=document.getElementById('currentLife');
        const lifeText=getLife.innerText;
        const life=parseInt(lifeText);
        const discernment=life-1;
        getLife.innerText=discernment;
        if(discernment===0){
            gameOver();
          
        }

    }
    

    
}
document.addEventListener('keyup',handleKeyboardPress);

function continueGame(){
    const alphabet=getRandomAlphabet();
    const currentAl=document.getElementById('currentAlphabet')
    currentAl.innerText=alphabet;
    setBackground(alphabet);
}

function  play(){

    hideElementId('home');
    hideElementId('scorePanel')
    showElementId('playground')
    setGetLife('currentLife',5)
    setGetLife('currentScore',0)

    
    continueGame()
}
   
function gameOver(){
    hideElementId('playground');
    showElementId('scorePanel');
    const lastScore=document.getElementById('currentScore')
    const lastResult=lastScore.innerText
    setGetLife('result',lastResult)
    const lastText=getText('currentAlphabet')
    removeBackground(lastText)
     
    
    
}