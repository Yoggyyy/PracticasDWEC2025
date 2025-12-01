// Función principal para procesar el producto
async function procesarProducto() {
    const delay = document.getElementById("delay").value;
    const productId = document.getElementById("product-id").value;
    
    try {
        // Llamada GET a la API para obtener un producto
        const productResponse = await fetch(`https://fakestoreapi.com/products/${productId}`);
        
        // Verificamos si la respuesta es válida
        if (!productResponse.ok) {
            throw new Error(productResponse.status);
        }
        
        const product = await productResponse.json();
        
        // Mostramos los resultados de la primera llamada (GET)
        document.getElementById("product-id-result").textContent = product.id;
        document.getElementById("title-result").textContent = product.title;
        document.getElementById("price-result").textContent = `$${product.price}`;
        
        // Preparamos los datos para el POST (solo id, title y price)
        const postData = {
            id: product.id,
            title: product.title,
            price: product.price
        };
        
        // Llamada POST para enviar los datos del producto
        const postResponse = await fetch("https://httpbin.org/post", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(postData)
        });
        
        const responseData = await postResponse.json();
        
        // Mostramos el título devuelto por el POST
        document.getElementById("post-title-result").textContent = responseData.json.title;
        
        // Mostramos el status 200 (éxito)
        document.getElementById("status-result").textContent = postResponse.status;
        document.getElementById("status-result").style.color = "green";
        
    } catch (error) {
        // Manejamos errores en cualquier parte del proceso
        document.getElementById("status-result").textContent = error.message;
        document.getElementById("status-result").style.color = "red";
        
        // Limpiamos los demás campos en caso de error
        document.getElementById("product-id-result").textContent = "-";
        document.getElementById("title-result").textContent = "-";
        document.getElementById("price-result").textContent = "-";
        document.getElementById("post-title-result").textContent = "-";
        
        console.error("Error procesando producto:", error);
    }
}