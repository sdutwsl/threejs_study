const VSHADER_SOURCE = `
    attribute vec4 a_Position;
    void main(){
        gl_Position = a_Position;
        gl_PointSize = 10.0;
    }
`
const FSHADER_SOURCE = `
    void main(){
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
`

let g_points = []

function main() {
    const canvas = document.querySelector("#example");
    const gl = getWebGLContext(canvas);
    initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE);
    let a_Position = gl.getAttribLocation(gl.program, "a_Position");
    canvas.addEventListener("mousedown", (ev) => {
        click(ev, gl, canvas, a_Position);
    });
    gl.clear(gl.COLOR_BUFFER_BIT);
}

function click(ev, gl, canvas, a_Position) {
    let x = ev.clientX;
    let y = ev.clientY;
    const rect = ev.target.getBoundingClientRect();
    x = ((x - rect.left) - canvas.height / 2) / canvas.height * 2
    y = (canvas.width / 2 - (y - rect.top)) / canvas.width * 2
    g_points.push(x);
    g_points.push(y);
    const len = g_points.length;
    gl.clear(gl.COLOR_BUFFER_BIT);
    for (let i = 0; i < len; i += 2) {
        gl.vertexAttrib3f(a_Position, g_points[i], g_points[i + 1], 0);
        gl.drawArrays(gl.POINTS, 0, 1);
    }

}