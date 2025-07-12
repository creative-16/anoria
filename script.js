function flipBook() {
    const book = document.getElementById("bookImage");
    if (book.src.includes("1.jpg")) {
        book.src = "2.jpg";
    } else {
        book.src = "1.jpg";
    }
}

function toggleProfileCard() {
    const card = document.getElementById("profileCard");
    card.classList.toggle("hidden");
}
