var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var lineX = canvas.width  * Math.random()
var lineY = 0
var pallete = [
    ['cyan', 'orange', 'gray', 'orange'],
    ['blue', 'gray', 'orange', 'orange'],
    ['pink', 'cyan', 'yellow'],
    ['#496B69', 'pink', 'gray'],
    ['#C9F2C7', '#52B788', '#00A5CF', '#4C5B61'],
    ['#FFD166', '#F7567C', '#0FA3B1', '#99E1D9', '#FE5F55'],
    ['#3066be','#119da4','#6d9dc5','#80ded9','#aeecef'],
    ['#a682ff','#715aff','#5887ff','#55c1ff'],
    ['#ffd07b','#fdb833','#296eb4','#1789fc']
]
var colors = pallete[Math.floor(Math.random() * pallete.length)]
console.log(colors)
var color = randomColor()
var thickness = Math.random() * 20
function randomColor() {
    // return '#'+(Math.random()*0xFFFFFF<<0).toString(16);    
    return colors[Math.floor(Math.random() * colors.length)]
}
loop();

function loop() {
    requestAnimationFrame(loop)
    if (lineY < canvas.height) {
        drawLine(color, lineX, lineY, thickness)
    } else {
        color = randomColor();
        lineY = 0
        lineX = Math.random() * canvas.width
        thickness = Math.random() * 20
    }

}
function drawLine(color, x, y, thickness) {
    ctx.beginPath();
    ctx.lineWidth = thickness;
    ctx.strokeStyle = color
    ctx.moveTo(x, y)
    ctx.lineTo(x, y + 3)
    ctx.stroke();
    lineY += 2
}