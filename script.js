let car1 = document.querySelector('.car1')
let car2 = document.querySelector('.car2')
let hasWon = false
let score = 100
let bet = 0
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
document.querySelector('.score').innerHTML = score
let whichCar = ''
//car1.style.marginLeft = '20%'
plus.onclick=()=>{
	if(bet>=score){
		plus.disabled = true 
	}
	else{
minus.disabled = false
bet += 10
document.querySelector('.bet').innerHTML = bet
	}
}
minus.onclick=()=>{
	if(bet<=0){
		minus.disabled = true 
	}
	else{
plus.disabled = false
bet -= 10
document.querySelector('.bet').innerHTML = bet
	}
}
let speedcar = (car,color) =>{
let margin = 0
let interval = setInterval(()=>{
	let speed = Math.random()*0.1
	margin=margin+0.1
	car1.style.marginLeft = margin + '%'
	if(margin>100){
		hasWon = true
		if(whichCar==color){
			score += bet*2
			document.querySelector('.score').innerHTML = score
			console.log('you win');
		}
		else{
			console.log('loser')
		}
}
	if(hasWon==true){
		clearInterval(interval)
	}	
}, 5
)
let margin2 = 0
let interval2 = setInterval(()=>{
	let speed = Math.random()*0.1
	margin2=margin2+0.1
	car2.style.marginLeft = margin2 + '%'
	if(margin2>100){
				hasWon = true
				if(whichCar==color){
			score += bet*2
			document.querySelector('.score').innerHTML = score
			console.log('you win');
		}
		else{
			console.log('loser')
		}
}
	if(hasWon==true){
		clearInterval(interval2)
	}	
}, 5
)
}
let properlyWinner = (color) =>{
	hasWon = false
speedcar(car1, 'white')
speedcar(car2, 'black')
whichCar = color
score -= bet
document.querySelector('.score').innerHTML = score
} 
/*function start(){
isTimeShowed=!isTimeShowed
timer() isTimeShowed ? enableTimer() : disableTimer()
}*/