const formulario = document.querySelector(".form-create");
let contador = 0;
let editar = false;
let editando = false;

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const descripcion = document.querySelector("#descripcion").value;
  const contenedor = document.querySelector(".publicaciones");

  console.log(descripcion);

  contenedor.innerHTML += `    

    <div class="publicacion">
        <p id="id-publicacion">id: ${contador}</p>
        <p id="desc-p">[ ${descripcion} ]</p>
        <button id="editar-btn" onclick="editar_funt(this)">editar</button>
        <button id="eliminar-btn" onclick="eliminar_funt(this)">eliminar</button>
    </div>
    `;
  contador++;
});

function editar_funt(e) {
  
  if (editando == false) {
    editando = true;
    console.log("clickeado editar");

    e.parentElement.innerHTML += `

        <input type="text" id="guardar-cambios-input" required>
        <button id="guardar-cambios-btn" onclick="guardar_editar(this)">Realizar</button >

    `;
  }
}

function guardar_editar(e) {
  console.log("guardado");
  editando = false;

  e.parentElement.querySelector("p:nth-child(2)").textContent = "✍ [ "+document.querySelector("#guardar-cambios-input").value+" ]";


  if (document.querySelector("#guardar-cambios-input").value == ""){
    e.parentElement.querySelector("p:nth-child(2)").textContent = "❌[ CONTENIDO NO DISPONIBLE ]"
  }

  e.remove();
  document.querySelector("#guardar-cambios-input").remove();

  
}

function eliminar_funt(e) {
  if (editando == false){
      console.log("clickeado eliminar");
      e.parentElement.remove();
  }
}
