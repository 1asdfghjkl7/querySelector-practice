let articleHeader = document.querySelector(".article__header");

articleHeader.textContent = "Welcome to the YEET blog"

let allArticleHeaders = document.querySelectorAll(".article__header");

for (let i = 0; i < allArticleHeaders.length; i++) {
    allArticleHeaders[i].setAttribute("classList","article__header important");
    
}

