function loadProducts() {
    let tableBody = document.getElementById("cards");

    fetch("http://localhost:5000/courses")
        .then(response => response.json())
        .then(data => {
            data.forEach((product, index) => {
                if (index % 3 === 0) {
                    let productElem = createPrudoctItem();
                    tableBody.appendChild(productElem);
                }
                let productCol = createProductRow(product);
                tableBody.lastChild.appendChild(productCol);
            });
        });
}

function createPrudoctItem() {
    let productDiv = document.createElement('div');
    productDiv.classList.add('row');
    productDiv.style.cssText = "padding-left: 150px; padding-right: 150px; overflow: hidden; margin-top:50px";
    productDiv.id = "cards";
    return productDiv;
}

function createProductRow(product) {
    let productCol = document.createElement('div');
    productCol.classList.add('col');
    productCol.innerHTML = `
        <div class="card">
        <div class="image-container" style="background-image: url(${product.image});">
        <a class="fillOpr" href="${product.id}"><span class="link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-link-45deg" viewBox="0 0 16 16">
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
            </svg>
        </span></a>
    </div>
            <div class="card-body">
                <a class="engList" href="${product.id}"><h5 class="card-title">${product.name}</h5></a>
                <p class="card-text">I must explain to you how all this a mistaken idea of denouncing great explorer of the rut the is lder of human happiness</p>
                <button class="readmore">READ MORE</button>
            </div>
        </div>
    `;
    
    
    let readMoreButton = productCol.querySelector('.readmore');
    readMoreButton.addEventListener('click', function() {
        
        window.location.href = `course.html#${product.id}`;
    });

    let engListLink = productCol.querySelector('.engList');
    engListLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = `course.html#${product.id}`;
    });
    let fillOprLink = productCol.querySelector('.fillOpr');
    fillOprLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = `course.html#${product.id}`;
    });

    return productCol;
}



loadProducts();
