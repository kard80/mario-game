import background from '../assets/background.png';
import hills from '../assets/hills.png';
import platform from '../assets/platform.png';
import platformSmallTall from '../assets/platformSmallTall.png';
import spriteRunLeft from '../assets/spriteRunLeft.png';
import spriteRunRight from '../assets/spriteRunRight.png';
import spriteStandLeft from '../assets/spriteStandLeft.png';
import spriteStandRight from '../assets/spriteStandRight.png';

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

const velocity = 0.5;

class Player {
	constructor() {
		this.position = {
			x: 100,
			y: 100
		};
		this.velocity = {
			x: 0,
			y: 1
		}
		this.width = 66;
		this.height = 150;
		this.speed = 10;
		this.frames = 0;
		this.sprites = {
			stand: {
				right: createImage(spriteStandRight),
				left: createImage(spriteStandLeft),
				cropWidth: 177,
				width: 66
			},
			run: {
				right: createImage(spriteRunRight),
				left: createImage(spriteRunLeft),
				cropWidth: 340,
				width: 127.875
			}
		};
		this.currentSprite = this.sprites.stand.right;
		this.currentCropWidth = this.sprites.stand.cropWidth;
	}

	draw() {
		c.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 400, this.position.x, this.position.y, this.width, this.height);
	}

	update() {
		this.frames++;
		if (
			(this.currentSprite === this.sprites.stand.right ||
			this.currentSprite === this.sprites.stand.left)
		) {
			this.frames > 59
			? this.frames = 0
			: this.frames = this.frames;
		} else {
			this.frames > 28
			? this.frames = 0
			: this.frames = this.frames;
		}

		this.draw();
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;

		if (this.position.y + this.height + this.velocity.y <= canvas.height) {
			this.velocity.y += velocity;
		}
	}

}

class GenericObject {
	constructor({ x, y, image }) {
		this.image = image

		this.position = { x, y };
		this.width = this.image.width;
		this.height = this.image.height;
	}

	draw() {
		c.drawImage(this.image, this.position.x, this.position.y);
	}
}

const keys = {
	left: {
		pressed: false
	},
	right: {
		pressed: false
	},
	jump: {
		pressed: false
	}
}

function createImage(imageSrc) {
	const image = new Image();
	image.src = imageSrc;

	return image;
}

let player = new Player();
let scrollOffset = 0;

const platformImage = createImage(platform);
let genericObjects = [];

function init() {
	player = new Player();
	player.draw();
	genericObjects = [
		new GenericObject({ x: 0, y: 0, image: createImage(hills) }),
		new GenericObject({ x: platformImage.width * 3 + 100, y: 250, image: createImage(platformSmallTall)}),
		new GenericObject({ x: -1, y: 470, image: platformImage }),
		new GenericObject({ x: platformImage.width - 3, y: 470, image: platformImage}),
		new GenericObject({ x: platformImage.width * 2 + 100, y: 470, image: platformImage}),
		new GenericObject({ x: platformImage.width * 2 + 400, y: 470, image: platformImage}),
		new GenericObject({ x: platformImage.width * 4 + 500, y: 470, image: platformImage}),
	];
	scrollOffset = 0;
};



function animate() {
	requestAnimationFrame(animate);
	c.drawImage(createImage(background), 0, 0);
	genericObjects.forEach(object => {
		object.draw();
	});
	player.update();

	if (keys.right.pressed && player.position.x < 400) {
		player.velocity.x = player.speed;
	} else if (keys.left.pressed && (player.position.x > 100 || (scrollOffset === 0 && player.position.x > 50))) {
		player.velocity.x = -player.speed;
	} else {
		player.velocity.x = 0;

		genericObjects.forEach(object => {
			if (keys.right.pressed) {
				object.position.x -= player.speed;
				scrollOffset += player.speed;
			} else if (keys.left.pressed && scrollOffset > 0) {
				object.position.x += player.speed;
				scrollOffset -= player.speed;
			}
		});
	}

	const Yaxis = player.position.y + player.height;
	const Xaxis = player.position.x + player.width;
	genericObjects.forEach(object => {
		if (
			Yaxis <= object.position.y &&
			Yaxis + player.velocity.y >= object.position.y &&
			Xaxis >= object.position.x &&
			Xaxis - 90 <= object.position.x + object.width
		) {
			player.velocity.y = 0;
			if (keys.jump.pressed) {
				player.velocity.y = -15;
			}
		}
	});

	// win condition
	if (scrollOffset > 1000) {
		console.log('You Win');
	}

	// lose condition
	if (player.position.y >= canvas.height) {
		init();
	}

}

init();
animate();

addEventListener('keydown', ({ keyCode }) => {
	switch (keyCode) {
		case 65: // key A
			keys.left.pressed = true;
			player.currentSprite = player.sprites.run.left;
			player.currentCropWidth = player.sprites.run.cropWidth;
			player.width = player.sprites.run.width;
			break;
		case 87: // key W
			keys.jump.pressed = true;
			break;
		case 68: // key D
			keys.right.pressed = true;
			player.currentSprite = player.sprites.run.right;
			player.currentCropWidth = player.sprites.run.cropWidth;
			player.width = player.sprites.run.width;
			break;
		case 83: // key S
			break;
	}
})

addEventListener('keyup', ({ keyCode }) => {
	switch (keyCode) {
		case 65: // key A
			keys.left.pressed = false;
			player.currentSprite = player.sprites.stand.left;
			player.currentCropWidth = player.sprites.stand.cropWidth;
			player.width = player.sprites.stand.width;
			break;
		case 68: // key D
			keys.right.pressed = false;
			player.currentSprite = player.sprites.stand.right;
			player.currentCropWidth = player.sprites.stand.cropWidth;
			player.width = player.sprites.stand.width;
			break;
		case 87: // key W
			keys.jump.pressed = false;
			break;
		case 83: // key S
			break;
	}
})