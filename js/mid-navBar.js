var hexCode = document.querySelector('.hexCode');

function contrast(color) {
    /* ((Red value X 299) + (Green value X 587) + (Blue value X 114)) / 1000
    threshold = 130; /* about half of 256. Lower threshold equals more dark text on dark background  */

	if(color.length < 5) {
		color += color.slice(1);
	}
	return (color.replace('#','0x')) > (0xffffff/2) ? 'black' : 'white';
};
