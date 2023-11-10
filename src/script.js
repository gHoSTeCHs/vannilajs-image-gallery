const displayImg = document.querySelector('.displayImg');
const nextaImages = document.querySelector('.nextImages');
const displaypic = document.querySelector('.displaypic');
const fullDispay = document.querySelector('.fullScreen');
const overLayImg = document.querySelector('.displayFull');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

// Image array
const images = [
	'images/shoe1.png',
	'images/shoe2.png',
	'images/shoe3.png',
	'images/shoe4.png',
	'images/shoe5.png',
	'images/shoe6.png',
];

// Display initial Image
const img1 = images[0];
displaypic.src = img1;

function addImage() {
	// Create image boxex and a border around them
	images.forEach((image) => {
		const img = document.createElement('img');
		img.classList.add('img');
		img.src = image;
		nextaImages.appendChild(img);

		const imgUrl = displaypic.src;
		const splice = imgUrl.split('00/')[1];
		if (splice === image) {
			img.style.border = '2px solid red';
		}

		img.addEventListener('click', () => {
			displaypic.src = image;
			document.querySelectorAll('.img').forEach((img) => {
				img.style.border = 'none';
			});
			img.style.border = '2px solid red';
		});
	});
	function fullImage() {
		displaypic.addEventListener('click', () => {
			const display = displaypic.src;
			const splice = display.split('00/')[1];
			fullDispay.style.display = 'block';
			overLayImg.src = splice;
		});

		document.querySelector('.fa-circle-xmark').addEventListener('click', () => {
			fullDispay.style.display = 'none';
		});
	}
	fullImage();
}

// Switch next image
next.addEventListener('click', () => {
	let display = overLayImg.src;
	let splice = display.split('00/')[1];
	let imgIndex = images.indexOf(splice);

	if (imgIndex < images.length - 1) {
		overLayImg.src = images[imgIndex + 1];
	} else {
		overLayImg.src = images[0];
	}
});

// Switch prev image
prev.addEventListener('click', () => {
	let display = overLayImg.src;
	let splice = display.split('00/')[1];
	let imgIndex = images.indexOf(splice);

	if (imgIndex > 0) {
		overLayImg.src = images[imgIndex - 1];
	} else if (imgIndex <= 0) {
		overLayImg.src = images[images.length - 1];
	}
});

addImage();
