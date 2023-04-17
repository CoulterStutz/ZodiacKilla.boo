let instagram = document.getElementById("instagram")
let soundcloud = document.getElementById("soundcloud")
let spotify = document.getElementById("spotify")

spotify.onmouseenter = function(){
    spotify.style = "animation: spotify_hover_in 1s ease 0s 1 normal forwards;"
}

spotify.onmouseleave = function(){
    spotify.style = "animation: spotify_hover_out 0.5s ease 0s 1 normal forwards"
}

soundcloud.onmouseenter = function(){
    soundcloud.style = "animation: soundcloud_hover_in 1s ease 0s 1 normal forwards;"
}

soundcloud.onmouseleave = function(){
    soundcloud.style = "animation: soundcloud_hover_out 0.5s ease 0s 1 normal forwards"
}

instagram.onmouseenter = function(){
    instagram.style = "animation: instagram_hover_in 0.5s ease 0s 1 normal forwards"
}

instagram.onmouseleave = function(){
    instagram.style = "animation: instagram_hover_out 0.5s ease 0s 1 normal forwards"
}