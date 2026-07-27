document.addEventListener('DOMContentLoaded', () => {
	const images = [
		'Dining.png',
		'Guest.png',
		'Outside.png',
		'Stair.png',
		'Wildlife.png'
	];

	let currentIndex = 0;
	const viewer = document.getElementById('image-viewer');
	const nextBtn = document.getElementById('next-image-btn');
	const prevBtn = document.getElementById('prev-image-btn');

	const captions = {
		'Dining.png': { alt: 'Dining', title: 'Upstairs floor' },
		'Guest.png': { alt: 'Picture of our special guest withered kernel saunders', title: 'Our special guest, Withered kernel saunders.' },
		'Outside.png': { alt: 'Outside image', title: 'Outside view of the restaurant' },
		'Stair.png': { alt: '', title: '' },
		'Wildlife.png': { alt: 'Pond with tropical fishes.', title: 'Pond with tropical fishes.' }
	};

	function showImage(index) {
		if (!viewer) return;
		const filename = images[index % images.length];
		const name = filename.replace(/\.[^.]+$/, '').replace(/_/g, ' ');
		viewer.src = `IMAGES/${filename}`;
		const cfg = captions[filename];
		if (cfg) {
			viewer.alt = cfg.alt;
			viewer.title = cfg.title;
		} else {
			viewer.alt = `${name} image`;
			viewer.title = `Minecraft KFC — ${name}`;
		}
	}

	if (nextBtn) {
		nextBtn.addEventListener('click', () => {
			currentIndex = (currentIndex + 1) % images.length;
			showImage(currentIndex);
		});
	}

	if (prevBtn) {
		prevBtn.addEventListener('click', () => {
			currentIndex = (currentIndex - 1 + images.length) % images.length;
			showImage(currentIndex);
		});
	}

	showImage(currentIndex);
});
