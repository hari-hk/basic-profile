function changeBackground() {
    const body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = `url("https://picsum.photos/${window.innerWidth}/${window.innerHeight}")`;
}

changeBackground();