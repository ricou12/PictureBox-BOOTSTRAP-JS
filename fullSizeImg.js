function fullSize() {
    // Get the modal
    var modal = document.getElementById("myModal");
    let $img = event.target;
    let imgPath = $img.getAttribute("src");
    // let imgtxt = $img.getAttribute("alt");/////////
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imgPath;
    // captionText.innerHTML = imgtxt;//////

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
}