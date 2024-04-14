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
            <img src="${product.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">I must explain to you how all this a mistaken idea of denouncing great explorer of the rut the is lder of human happiness</p>
                <button class="readmore">READ MORE</button>
            </div>
        </div>
    `;
    
    
    let readMoreButton = productCol.querySelector('.readmore');
    readMoreButton.addEventListener('click', function() {
        
        window.location.href = `course.html#${product.id}`;
    });

    return productCol;
}


loadProducts();
