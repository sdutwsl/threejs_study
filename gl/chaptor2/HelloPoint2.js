const VSHADER_SOURCE = `
attribute vec4 a_Position;
attribute float a_PointSize;
void main(){
    gl_Position = a_Position;
    gl_PointSize = a_PointSize;
}
`

const FSHADER_SOURCE = `
void main(){
    gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
}
`
function main() {
    const gl = getWebGLContext(document.querySelector("#example"));
    initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE);
    console.log(gl);
    const a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    const a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize');
    gl.vertexAttrib4f(a_Position, 0.4, -0.3, 0.1, 1);
    gl.vertexAttrib1f(a_PointSize, 10);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.POINTS, 0, 1);
}