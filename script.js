const btn =  document.getElementById("btn");
let limit = parseInt(prompt("Type a limit"))
let team2Score= 0;
let team1Score= 0;
const score =  document.getElementById("score");
const notification= document.getElementById("alert");
let ftn= prompt("Type first team name");
let stn = prompt("Type second team name");
if (!limit||isNaN(limit)){
    limit=5
}
console.log(limit)
if (ftn){
    document.getElementById("1").innerText=ftn
}
else {
    ftn="Team 1"
}
btn.innerText=ftn.toUpperCase();
if (stn){
    document.getElementById("2").innerText=stn
}
else {
    stn="Team 2"
}
let team1Limit = limit;
let team2Limit = limit;
function play() {
    if (team1Limit>0&&team2Limit>0) {
        console.log(team2Limit+ " "+ team1Limit)
        if (team2Limit > team1Limit) {
            shoot(2, team2Limit)
        } else {
            shoot(1,team1Limit)
        }
    }
    else {
        btn.parentElement.innerText="OVER!"
        if (team2Score>team1Score){
            notification.innerText=`${stn} win with ${team2Score} score!`
        }
        else if (team1Score>team2Score){
            notification.innerText=`${ftn} win with ${team1Score} score!`
        }
        else {
            notification.innerText=`DRAW with ${team1Score} vs ${team2Score} score!`
        }
        setTimeout(()=>{location.reload()},3000)
    }
}
function shoot(team, limit) {
    eval(`team${team}Limit --;`);
    if (Math.round(Math.random())===0){
        notification.style.opacity="100%";
        notification.innerText=`MISS!`
    }
    else {
        notification.innerText=`GOAL!`;
        notification.style.opacity="100%";
        eval(`team${team}Score ++;`)
    }
    score.innerText=`${team1Score}:${team2Score}`;
    chekPreWin()
}
function chekPreWin() {
    if (team1Limit + team1Score < team2Score) {
        btn.parentElement.innerText="OVER!"
        setTimeout(()=>{location.reload()},3000)
        notification.innerText = `${stn} win with ${team2Score} score!`
    } else if (team2Limit + team2Score < team1Score) {
        btn.parentElement.innerText="OVER!"
        notification.innerText = `${ftn} win with ${team1Score} score!`
        setTimeout(()=>{location.reload()},3000)
    }
    else {
        if (team2Limit>team1Limit){
            btn.innerText=stn.toUpperCase()
        }
        else {
            btn.innerText=ftn.toUpperCase()
        }

    }
}
