function addProduct() {
    const imgName = document.getElementById('img_Name').value;
    const prdName = document.getElementById('prd_Name').value;
    const nPrc = document.getElementById('n_Prc').value;
    const oPrc = document.getElementById('o_Prc').value;

    const productCard = 
        '<div class="card product-card">' +
            '<img class="card-img-top" src="' + imgName + '" alt="Product image">' +
            '<div class="card-body">' +
                '<h5 class="card-title">' + prdName + '</h5>' +
                '<p>' + nPrc + ' vnđ <s>' + oPrc + ' vnđ</s></p>' +
                '<button class="btn btn-success" onclick="orderProduct(\'' + prdName + '\')">Order</button>' +
            '</div>' +
        '</div>';

    document.getElementById('productContainer').innerHTML += productCard;
    document.getElementById('productForm').reset();
}

function orderProduct(productName) {
    alert('You have ordered: ' + productName);
}
