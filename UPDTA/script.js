let images = Array.from(document.
        getElementsByClassName("imgcarouse1"))

let mainphoto = document.getElementById("mainphoto")

function updateImage(event){
    let image = event.target

    mainphoto.src = image.src
}

images.forEach(function(image){
    image.addEventListener("click", updateImage)

});