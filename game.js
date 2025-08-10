// Инициализация
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
const startScreen = document.getElementById('startScreen');

// Размеры canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Кот
const cat = {
    x: 50,
    y: 50,
    width: 40,
    height: 40,
    color: '#FFA500',
    speed: 5,
    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
};

// Управление
const keys = {};
document.addEventListener('keydown', (e) => keys[e.key] = true);
document.addEventListener('keyup', (e) => keys[e.key] = false);

// Игровой цикл
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Движение кота
    if (keys['ArrowLeft']) cat.x -= cat.speed;
    if (keys['ArrowRight']) cat.x += cat.speed;
    if (keys['ArrowUp']) cat.y -= cat.speed;
    if (keys['ArrowDown']) cat.y += cat.speed;
    
    // Отрисовка
    cat.draw();
    requestAnimationFrame(gameLoop);
}

// Старт игры
startButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    gameLoop();
});