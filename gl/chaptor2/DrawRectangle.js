function main() {
    console.log("main entered");
    const canvas = document.querySelector("#example");

    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "rgba(0,0,255,1.0)";
    ctx.fillRect(120, 10, 150, 150);
}