$(document).ready(function() {
    $.get("https://fakestoreapi.com/products",
        function(data) {
            $.each(data, 
                function(i, item) {
                    var th1 = `<th>ID</th>`;
                    var th2 = `<th>Nombre</th>`;
                    var th3 = `<th>Descripcion</th>`;
                    var th4 = `<th>Categoria</th>`;
                    var th5 = `<th>Imagen</th>`;
                    var td1 = `<td>${item.id}</td>`;
                    var td2 = `<td>${item.title}</td>`;
                    var td3 = `<td>${item.description}</td>`;
                    var td4 = `<td>${item.category}</td>`;
                    var td5 = `<td><img class="ropa" src="${item.image}"></td>`;
                    
                    var tr = `<tr>${td1}${td2}${td3}${td4}${td5}</tr>`;
                    var thead = `<thead><tr scope ="col">${th1}${th2}${th3}${th4}${th5}</tr></thead>`;
                    var tbody = `<tbody>${tr}</tbody>`;
                    var table = `<table class="table text-start align-middle table-bordered table-hover mb-0" >${thead}${tbody}</table>`;
                    $('#tblCategorias').append(table);
                });
        });
    
});