var newgame = document.getElementById("startGame");
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scis = document.getElementById("scissor");
var result = document.getElementById("result");
var playerpoint = document.getElementById("playerScore");
var botpoint = document.getElementById("computerScore");
var end = document.getElementById("end");
var content = document.getElementById("content");
var reset = document.getElementById("clear");
var computerPoints=0;
var playerPoints=0;
var cChoice="";
var pChoice="";
var score="";

function clear()
{
  computerPoints=0;
  playerPoints=0;
  playerpoint.innerHTML=playerPoints;
  botpoint.innerHTML=computerPoints;
  cChoice="";
  pChoice="";
  score="";

  end.style.display="none";
}

function startnewgame()
{
    newgame.style.display = "none";
    document.getElementById("game").style.display = "block";
}

newgame.onclick=startnewgame;
var playerChoice;

function fComputerChoice()
{
    var computerChoice = Math.random();
    if (computerChoice <0.34)
    {
        computerChoice = 1;
        cChoice="kamień";
        document.getElementById("enemyRock").setAttribute("class", "computerChoice");
        document.getElementById("enemyPaper").setAttribute("class", "");
        document.getElementById("enemyScissor").setAttribute("class", "");
    }
    else if(computerChoice <=0.67)
    {
        computerChoice = 2;
        cChoice="papier";
        document.getElementById("enemyRock").setAttribute("class", "");
        document.getElementById("enemyPaper").setAttribute("class", "computerChoice");
        document.getElementById("enemyScissor").setAttribute("class", "");
    }
    else
    {
        computerChoice = 3;
        cChoice="nożyce";
        document.getElementById("enemyRock").setAttribute("class", "");
        document.getElementById("enemyPaper").setAttribute("class", "");
        document.getElementById("enemyScissor").setAttribute("class", "computerChoice");

    }

	function fResult()
		{
		if(playerChoice == computerChoice)
			{
				score="remis";
			}
		else if(playerChoice == 1)
			{
				if (computerChoice == 2)
					{
						score="Punkt dla przeciwnika";
						computerPoints++;
					}
				else if (computerChoice == 3)
					{
						score="Punkt dla Ciebie";
						playerPoints++;
					}
			}
		else if(playerChoice == 2)
			{
				if (computerChoice == 3)
					{
						score="Punkt dla przeciwnika";
						computerPoints++;
					}
				else if (computerChoice == 1)
					{
						score="Punkt dla Ciebie";
						playerPoints++;
					}
			}
		else if(playerChoice == 3)
			{
				if (computerChoice == 1)
					{
						score="Punkt dla przeciwnika";
						computerPoints++;
					}
				else if (computerChoice == 2)
					{
						score="Punkt dla Ciebie";
						playerPoints++;
					}
			}
		}

    	fResult();

  	playerpoint.innerHTML=playerPoints;
  	botpoint.innerHTML=computerPoints;
    result.innerHTML="Twój wybór padł na "+pChoice+", a przeciwnika na "+cChoice+". "+score+".";

    if(playerPoints==10)
    {
      end.style.display="block";
      content.innerHTML="Gratulacje! Wygrałeś!";
      reset.onclick=clear;
    }

    if(computerPoints==10)
    {
      end.style.display="block";
      content.innerHTML="Przykro mi, następnym razem będzie lepiej";
      reset.onclick=clear;
    }
}
rock.onclick = function fRock() {playerChoice=1; pChoice="kamień"; fComputerChoice();};
paper.onclick = function fPaper() {playerChoice=2; pChoice="papier"; fComputerChoice();};
scis.onclick = function fScior() {playerChoice=3; pChoice="nożyce"; fComputerChoice();};
