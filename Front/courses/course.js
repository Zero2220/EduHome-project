function loadProductById(id) {
    fetch(`http://localhost:5000/courses/${id}`)
        .then(response => response.json())
        .then(product => {
            document.getElementById("name").innerHTML = product.name;
            document.getElementById("starts").innerHTML = product.starts;
            document.getElementById("duration").innerHTML = `${product.duration} Month`;
            document.getElementById("cDuration").innerHTML = `${product.classDuration} Hours`;
            document.getElementById("language").innerHTML = product.language;
            document.getElementById("students").innerHTML = product.students;
            document.getElementById("fee").innerHTML = `COURSE FEE $${product.price}`;
            document.getElementById("bigImg").src = product.image;
            document.getElementById("bigImg").style.width = '821px';
            
        })
        .catch(error => {
            console.error('Error fetching product data:', error);
        });
}


let redirectedId = window.location.hash.substring(1);


loadProductById(redirectedId);


