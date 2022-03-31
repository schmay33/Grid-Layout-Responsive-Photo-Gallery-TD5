//on load of the document add event listener to the search input
document.addEventListener("DOMContentLoaded", () => {
    //Get search input element
    const search = document.getElementById("search");
    //Add Event Listener to the search input
    search.addEventListener("keyup", (e) => {
        //Get the search input value
        const term = e.target.value.trim();
        //if term is not empty search with term
        if (term) {
            //filter a tags based on search input
            const links = document.querySelectorAll("a");
            links.forEach((link) => {
                let caption = link.getAttribute("data-caption").toLowerCase();
                if (caption.includes(term.toLowerCase())) {
                    link.style.display = "block";
                } else {
                    link.style.display = "none";
                }
            });
        };
    });
});

