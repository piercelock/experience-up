function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(function () {
    $('#randomButton').on('click', function () {
        var randomPage = "";
        switch(getRandomInt(1,3)) {
            case 1:
                randomPage = "piano.html";
                break;
            case 2:
                randomPage = "cycling.html";
                break;
            case 3:
                randomPage = "building-blocks.html";
                break;
            default:
                randomPage = "index.html";
                break;
        }
        window.location.href = randomPage;
    });
});

