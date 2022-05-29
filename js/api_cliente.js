$(document).ready(function() {
    $.get("https://fakestoreapi.com/products",
        function(data) {
            $.each(data, 
                function(i, item) {
                    var th1 = `<th scope="col">ID</th>`;
                    var th2 = `<th scope="col">Nombre</th>`;
                    var th3 = `<th scope="col">Precio</th>`;
                    var th4 = `<th scope="col">Descripcion</th>`;
                    var th5 = `<th scope="col">Categoria</th>`;
                    var th6 = `<th scope="col">Imagen</th>`;
                    var th7 = `<th scope="col">Comprar</th>`;
                    var td1 = `<td>${item.id}</td>`;
                    var td2 = `<td>${item.title}</td>`;
                    var td3 = `<td>${item.price}</td>`;
                    var td4 = `<td>${item.description}</td>`;
                    var td5 = `<td>${item.category}</td>`;
                    var td6 = `<td><img class="ropa" src="${item.image}"></td>`;
                    var td7 = `<td><a class="btn btn-sm btn-primary" href="../cliente/ficha_producto.html">COMPRAR</a></td>`
                    
                    var tr = `<tr>${td1}${td2}${td3}${td4}${td5}${td6}${td7}</tr>`;
                    var thead = `<thead><tr class="text-black">${th1}${th2}${th3}${th4}${th5}${th6}${th7}</tr></thead>`;
                    var tbody = `<tbody>${tr}</tbody>`;
                    var table = `<table class="table text-start align-middle table-bordered table-hover mb-0" >${thead}${tbody}</table>`;
                    $('#tblCategorias').append(table);
                });
        });
    
});