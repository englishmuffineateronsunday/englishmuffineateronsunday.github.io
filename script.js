function fullscreen() {
    const iframe = document.getElementById('filePresenter');
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { 
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { 
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { 
        iframe.msRequestFullscreen();
    }
}

function reload() {
    const iframe = document.getElementById('filePresenter');
    iframe.src = iframe.src;
}

document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = '/';
});
