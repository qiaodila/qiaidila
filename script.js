const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Raindrop {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * 20 + 10;
        this.speed = Math.random() * 5 + 2;
        this.opacity = Math.random() * 0.5 + 0.5;
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = -this.length;
            this.x = Math.random() * canvas.width;
            this.speed = Math.random() * 5 + 2;
            this.length = Math.random() * 20 + 10;
            this.opacity = Math.random() * 0.5 + 0.5;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.strokeStyle = `rgba(174,194,224,${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.lineCap = 'round';
        ctx.stroke();
    }
}

const raindrops = [];
for (let i = 0; i < 500; i++) {
    raindrops.push(new Raindrop());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    raindrops.forEach(drop => {
        drop.update();
        drop.draw();
    });
    requestAnimationFrame(animate);
}

animate();
