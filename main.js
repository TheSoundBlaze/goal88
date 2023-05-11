var canvas = new fabric.Canvas("myCanvas");

ball_x = 0;
ball_y = 0;
goal_x = 800;
goal_y = 400;

block_image_width = 5;
block_image_height = 5;

var goal_ob, ball_ob;

function new_image() {
	fabric.Image.fromURL("ball.png", function (Img) {
		ball_ob = Img;
		ball_ob.scaleToHeight(50);
		ball_ob.scaleToWidth(50);
		ball_ob.set({
			top: ball_x,
			left: ball_y
		});
		canvas.add(ball_ob);
	});
}

function load_img() {
	fabric.Image.fromURL("golf-h.png", function (Img) {
		goal_ob = Img;
		goal_ob.scaleToWidth(50);
		goal_ob.scaleToHeight(50);
		goal_ob.set({
			top: goal_x,
			left: goal_y
		});
		canvas.add(goal_ob);
	});
	new_image();
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if ((ball_x == goal_x) && (ball_y == goal_y)) {
		canvas.remove(ball_ob);

		document.getElementById("hd3").innerHTML = "You've hit the goal!";
		document.getElementById("myCanvas").style.borderColor = "green";
	}

	else {
		if (keyPressed == '38') {
			up();
			console.log("up");
		}
		if (keyPressed == '40') {
			down();
			console.log("down");
		}
		if (keyPressed == '37') {
			left();
			console.log("left");
		}
		if (keyPressed == '39') {
			right();
			console.log("right");
		}
	}

	function up() {
		if (ball_y >= 0) {
			ball_y = ball_y - block_image_height;
			console.log("height=" + block_image_height);
			console.log("x=" + ball_x + "y=" + ball_y);
			canvas.remove(ball_ob);
			new_image();
		}
	}

	function down() {
		if (ball_y <= 450) {
			ball_y = ball_y + block_image_height;
			console.log("height=" + block_image_height);
			console.log("x=" + ball_x + "y=" + ball_y);
			canvas.remove(ball_ob);
			new_image();
		}
	}

	function left() {
		if (ball_x > 5) {
			ball_x = ball_x - block_image_width;
			console.log('width='+block_image_width);
			console.log("x=" + ball_x + "y=" + ball_y);
			canvas.remove(ball_ob);
			new_image();
		}
	}

	function right() {
		if (ball_x <= 950) {
			ball_x = ball_x + block_image_width;
			console.log('width='+block_image_width);
			console.log("x=" + ball_x + "y=" + ball_y);
			canvas.remove(ball_ob);
			new_image();
		}
	}

}

