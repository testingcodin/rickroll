
function rickroll() {
    document.getElementById('content').innerHTML = 'get rickrolled';
    var rickroll =  document.getElementById('rickroll');
    rickroll.hidden = false;
    var iframe = document.getElementById('iframe')
    var player = new Vimeo.Player(iframe);
    player.play()
    player.setMuted(false)
    player.setVolume(1);
}
var button = document.getElementById("reload-button");
button.addEventListener("click", rickroll)