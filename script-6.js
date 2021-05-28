function f(elem) {
    var a = elem.src.replace("small", "big");
    var b = document.getElementById("big");
    b.src = a;
}
function ImageNotFound() {
    document.querySelector('.container').innerHTML="нет большой картинки";
}