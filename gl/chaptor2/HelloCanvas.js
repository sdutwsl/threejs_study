function main() {
    console.log("main entered");
    const gl = document.querySelector("#example").getContext("webgl");
    gl.clearColor(0.9, 0.9, 0.9, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}