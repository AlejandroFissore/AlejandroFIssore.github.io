
/**Botón de instagram */
let instagram = document.getElementById('instagram');
let defaultColor = instagram.style.color;

instagram.onmouseenter = function (e) {
    e.target.style.color = '#6610f2';
    instagram.style.transitionDuration = '750ms'
}

instagram.onmouseleave = function (e) {
    e.target.style.color = defaultColor;
}

/**Botón de facebook */
let facebook = document.getElementById('facebook');
let defaultColor1 = facebook.style.color

facebook.onmouseenter = function (e) {
    e.target.style.color = '#0d6efd';
    facebook.style.transitionDuration = '750ms'
}

facebook.onmouseleave = function (e) {
    e.target.style.color = defaultColor1;
}

/**Boton de youtube */
let youtube = document.getElementById('youtube');
let defaultColor2 = youtube.style.color

youtube.onmouseenter = function (e) {
    e.target.style.color = '#dc3545';
    youtube.style.transitionDuration = '750ms'
}

youtube.onmouseleave = function (e) {
    e.target.style.color = defaultColor2;
}



