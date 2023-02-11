let count = 0;
changeColor = () => {
    let colors = ["blue", "red", "green", "violet", "purple"];
    document.getElementsByTagName("body")[0].style.background = colors[count++];
    if (count > colors.length - 1) {
        count = 0;
    }
}