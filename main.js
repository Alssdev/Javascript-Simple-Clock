const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');

// repeat every second
const deg = 6;
setInterval(() => {
	// Get current date
	let today = new Date();
	let hh = today.getHours() * 30;
	let mm = today.getMinutes() * deg;
	let ss = today.getSeconds() * deg;

	// move clock hands
	hourHand.style.transform = `rotateZ(${hh + mm / 12}deg)`;
	minuteHand.style.transform = `rotateZ(${mm}deg)`;
	secondHand.style.transform = `rotateZ(${ss}deg)`;
});
