
var scores,roundScore,activePlayer,gameON;

init();
document.querySelector('.btn-roll').addEventListener('click',function(){
	if(gameON)
	{
		//Random Number
		var dice=Math.floor(Math.random() * 6)+1;
		//Display the result
		var diceDOM=document.querySelector('.dice');
		diceDOM.style.display='block';
		diceDOM.src='dice-'+dice+'.png';
		//Update the round score if the number was not equal to 1
		if (dice!==1) {
			roundScore+=dice;
			document.querySelector('#current-'+activePlayer).textContent=roundScore;
		}else{
			nextPlayer();
		}
	}
});

document.querySelector('.btn-hold').addEventListener('click',function(){
	if (gameON) 
	{
		//Add CURRENT score to GLOBAL score
		scores[activePlayer]+=roundScore;

		//Update the UI
		document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];

		//Check if the player won the game
		if (scores[activePlayer]>=50) {
			document.querySelector('#name-'+activePlayer).textContent='WINNER!';
			document.querySelector('.dice').style.display='none';
			document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
			document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
			gameON = false;
		}
		else{
		//Next Player
		nextPlayer();
		}
	}
	
});

function nextPlayer(){
		activePlayer===0?activePlayer=1:activePlayer=0;
		roundScore=0;

		document.getElementById('current-0').textContent='0';
		document.getElementById('current-1').textContent='0';

		//The mark to show the active player
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice').style.display='none';
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
	scores = [0,0];
	roundScore=0;
	activePlayer=0;
	gameON=true;

	document.querySelector('.dice').style.display='none';

	document.getElementById('score-0').textContent='0';
	document.getElementById('score-1').textContent='0';
	document.getElementById('current-0').textContent='0';
	document.getElementById('current-1').textContent='0';
	document.getElementById('name-0').textContent='Player 1';
	document.getElementById('name-1').textContent='Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}