function showSurprise() {

    // Create main container
    const surpriseDiv = document.createElement("div");
    surpriseDiv.className = "surprise-container";

    // ===== First photo div =====
    const photoDiv1 = document.createElement("div");
    photoDiv1.className = "photo-div";

    const img1 = document.createElement("img");
    img1.src = "image5.jpeg";
    img1.alt = "Photo 1";

    photoDiv1.appendChild(img1);

    // ===== Second photo div =====
    const photoDiv2 = document.createElement("div");
    photoDiv2.className = "photo-div";

    const img2 = document.createElement("img");
    img2.src = "image6.jpeg";
    img2.alt = "Photo 2";

    photoDiv2.appendChild(img2);

    // Add both photo divs to main div
    surpriseDiv.appendChild(photoDiv1);
    surpriseDiv.appendChild(photoDiv2);

    // Add main div to body
    document.body.appendChild(surpriseDiv);
}

