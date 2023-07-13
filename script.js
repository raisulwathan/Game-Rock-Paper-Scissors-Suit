function getComputerChoice(){
    const comp = Math.random();

    if( comp < 0.34 )  return'batu';
    if( comp >= 0.34 && comp < 0.67 )  return 'gunting';
     return 'kertas';
    
}

function getResult(comp, player){
   
    if( player == comp ) return 'SERI!';
   if( player == 'batu' ) return ( comp == 'gunting' ) ? 'MENANG!' : 'KALAH!';
   if( player == 'gunting' ) return ( comp == 'batu' ) ? 'KALAH!' : 'MENANG!';
   if( player == 'kertas' ) return ( comp == 'gunting' ) ? 'KALAH' : 'MENANG!';

    
}

function turn(){
    const imgComputer = document.querySelector('.img-komputer');
    const image = ['batu', 'gunting', 'kertas'];
    let i = 0;

    const timeStart = new Date().getTime();

    setInterval(function() {
        if(new Date().getTime() - timeStart > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + image[i++] + '.png');
        if(i == image.length) i = 0;
    }, 100);
}

const choice = document.querySelectorAll('li img');
choice.forEach(function(choi) {
    choi.addEventListener('click', function() {
        const computerChoice = getComputerChoice();
        const userChoice = choi.className;
        const result = getResult(computerChoice, userChoice);
    
        turn();

        setTimeout(function() {
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'img/' + computerChoice + '.png');
        
            const info = document.querySelector('.info');
            info.innerHTML = result;
        }, 1000);
       
    });
});