var elDays = document.getElementById('days');
var elHours = document.getElementById('hours');
var elMins = document.getElementById('minutes');
var elSecs = document.getElementById('seconds');

function countdownTimer() {
	const countDownDate = new Date('2024/01/23 08:00:00').getTime();

	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	const interval = setInterval(() => {
		const dtNow = new Date().getTime();
		const distance = countDownDate - dtNow;
	
		elDays.innerText = formatNumber(Math.floor(distance / day));
		elHours.innerText = formatNumber(Math.floor((distance % day) / hour));
		elMins.innerText = formatNumber(Math.floor((distance % hour) / minute));
		elSecs.innerText = formatNumber(Math.floor((distance % minute) / second));
		}, 1000);
}

function formatNumber(number) {
	if (number < 10) {
		return '0' + number;
	}
	return number;
}


// run function
countdownTimer()