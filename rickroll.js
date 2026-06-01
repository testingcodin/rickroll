function rickroll() {
    document.getElementById('content').innerHTML = 'nothing';
    var rickroll =  document.getElementById('rickroll').innerHTML;
    rickroll.hidden = false;
    var iframe = document.getElementById('iframe').innerHTML;
    var player = new Vimeo.Player(iframe);
    player.play()
}