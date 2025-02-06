const colorParent = document.getElementById("colors");
const targetDiv = document.getElementById("target");
colorParent.addEventListener("click", (e) => {
    const selectColorByElement = event.target;
    const selectById = selectColorByElement.id;

    targetDiv.style.background = selectById;
    targetDiv.innerText = `selected color is`+ selectById

});