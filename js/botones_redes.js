
/**Botón de instagram */
let instagram = document.getElementById('instagram');
let defaultColor = instagram.style.color

instagram.onmouseenter = function (e) {
    e.target.style.color = '#6610f2';
}

instagram.onmouseleave = function (e) {
    e.target.style.color = defaultColor;
}

/**Botón de facebook */
let facebook = document.getElementById('facebook');
let defaultColor1 = facebook.style.color

facebook.onmouseenter = function (e) {
    e.target.style.color = '#0d6efd';
}

facebook.onmouseleave = function (e) {
    e.target.style.color = defaultColor1;
}

/**Boton de youtube */
let youtube = document.getElementById('youtube');
let defaultColor2 = youtube.style.color

youtube.onmouseenter = function (e) {
    e.target.style.color = '#dc3545';
}

youtube.onmouseleave = function (e) {
    e.target.style.color = defaultColor2;
}



