$(document).ready(function() {
    $.get("https://fakestoreapi.com/products",
        function(data) {
            $.each(data, 
                function(i, item) {    
                    
                    var img = `<div align="center"><a href="ficha_producto.html"><img class="ropa" src="${item.image}"></a></div>`;
                    var titulo = `<h2>${item.title}</h2>`;
                    var precio = `<span>${item.price}</span>`;

                    var div2 = `<div>${titulo}${precio}</div>`;
                    var div1 = `<div class="col-md-4 mb-3" style="border: 1px solid #3a3a3b;">${img}${div2}</div>`;

                    $('#productos').append(div1);
                });
        });
    
});