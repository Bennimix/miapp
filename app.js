const formulario = document.querySelector(".form-create");
let contador = 0;
let editar = false;


formulario.addEventListener("submit", (e) => {
    e.preventDefault();

   
    const descripcion = document.querySelector("#descripcion").value;
    const contenedor = document.querySelector(".publicaciones");

    console.log(descripcion);

    contenedor.innerHTML += `    

    <div class="publicacion">
        <p id="id-publicacion">id: ${contador}</p>
        <p>${descripcion}</p>
        <button id="editar-btn" onclick="editar-btn(this)">editar</button>
        <button id="eliminar-btn" onclick="eliminar_funt(this)">eliminar</button>
    </div>
    `;
    contador++   

});


function eliminar_funt(e){
    console.log("clickeado");
    e.parentElement.remove()

    
}

