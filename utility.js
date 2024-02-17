function hideElementId(elementId)
{
    const element=document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementId(elementId)
{
    const element=document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getRandomAlphabet(){
    const alphabetString='abcdefghijklmnopqrstuvwxyz'
    const alphabets=alphabetString.split('');
    const randomNumber=Math.random()*25;
    const index=Math.round(randomNumber)
    const alphabet=alphabets[index]
    return alphabet;
}
function setBackground(elementId)
{
    const element =document.getElementById(elementId)
    element.classList.add('bg-orange-600')
}

function removeBackground(elementId)
{
    const element =document.getElementById(elementId)
    element.classList.remove('bg-orange-600')
}
function setGetLife(element,value){
    const getLife=document.getElementById(element);
       getLife.innerText=value;
}
function getText(elementId){
    const lastText=document.getElementById(elementId)
    const text=lastText.innerText;
    return text;
}