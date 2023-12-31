const progress_bar = (function () {

	function init(app) {
		console.log('☕️');

		const url_params = new URLSearchParams(window.location.search);
		const is_coffee = url_params.get('coffee');
		const new_duration = url_params.get('duration');

		if (is_coffee) {
			new_duration && app.style.setProperty('--time-coffee-duration', new_duration);
			app.classList.add('app--coffee');
		}

		new_duration && app.style.setProperty('--time-duration', new_duration)

		app.classList.add('app--active');
	}

	return {
		init,
	}
})();

window.addEventListener('load', () => {
	const app = document.querySelector('.js__app');

	progress_bar.init(app);
});
