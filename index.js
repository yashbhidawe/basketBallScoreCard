document.getElementById("homeScore").textContent

document.getElementById("btn1")
document.getElementById("btn2")
document.getElementById("btn3")

document.getElementById("awayScore").textContent
document.getElementById("btn01")
document.getElementById("btn02")
document.getElementById("btn03")

document.getElementById("reset-btn").textContent


let homeScoreO = 0
let awayScoreO = 0


function plusOne() {
homeScoreO+=1
homeScore.textContent = homeScoreO


}

function plusTwo() {
    homeScoreO+=2
    homeScore.textContent = homeScoreO
    }

    function plusThree() {
        homeScoreO+=3
        homeScore.textContent = homeScoreO
        }

       

        function plusZeroOne() {
         awayScoreO+=1
         awayScore.textContent = awayScoreO
            }
            
            function plusZeroTwo() {
                awayScoreO+=2
                awayScore.textContent = awayScoreO           
             }
            
                function plusZeroThree() {
                    awayScoreO+=3
                    awayScore.textContent = awayScoreO
                    }


               function reset() {

             homeScoreO = 0
             homeScore.textContent = homeScoreO

             awayScoreO = 0
             awayScore.textContent = awayScoreO
               }
                    