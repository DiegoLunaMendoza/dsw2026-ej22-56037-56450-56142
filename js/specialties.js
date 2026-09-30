document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("specialities-body");
  const searchInput = document.getElementById("search-specialty");

  // Al cargar la página, completamos la tabla desde localStorage
  renderizarEspecialidades();

  // Delegación de eventos: un solo listener para los botones de todas las filas,
  // incluso las que se crean dinámicamente
  tableBody.addEventListener("click", (e) => {
    const editButton = e.target.closest(".btn-edit");
    const deleteButton = e.target.closest(".btn-delete");

    if (editButton) {
      const row = editButton.closest("tr");
      editSpeciality(row);
    }

    if (deleteButton) {
      const row = deleteButton.closest("tr");
      deleteSpeciality(row);
    }
  });

  searchInput.addEventListener("input", () => {
    const texto = searchInput.value.toLowerCase().trim();
    const filtradas = obtenerEspecialidades().filter((e) => 
      e.nombre.toLowerCase().trim().includes(texto)
    );
    renderizarEspecialidades(filtradas);
  });

});

// Dibuja todas las filas de la tabla a partir del array guardado en localStorage
function renderizarEspecialidades(especialidades = obtenerEspecialidades()) {
  const tableBody = document.getElementById("specialities-body");

  tableBody.innerHTML = "";

  if(especialidades.length === 0){
    tableBody.innerHTML = `
      <tr>
        <td colspan="4">No se encontraron especialidades</td>
      </tr>
    `;
  }
  else{
    especialidades.forEach((especialidad) => {
    const activa = especialidad.estado === "activo";
    const icono = especialidad.icono || "briefcase-medical-solid-full.svg";

    const fila = document.createElement("tr");
    fila.dataset.id = especialidad.id;
    fila.innerHTML = `
      <td>
        <div class="speciality-name">
          <div class="speciality-icon">
            <img src="../icons/${icono}" alt="" class="speciality-icon-img">
          </div>
          <span>${especialidad.nombre}</span>
        </div>
      </td>
      <td>${especialidad.descripcion}</td>
      <td>
        <span class="badge ${activa ? "badge-active" : "badge-inactive"}">
          ${activa ? "Activa" : "Inactiva"}
        </span>
      </td>
      <td>
        <div class="actions">
          <button type="button" class="btn-edit" aria-label="Editar ${especialidad.nombre}">
            <img src="../icons/edit.svg" alt="" class="action-icon-img">
          </button>
          <button type="button" class="btn-delete" aria-label="Eliminar ${especialidad.nombre}">
            <img src="../icons/delete.svg" alt="" class="action-icon-img">
          </button>
        </div>
      </td>
    `;
    tableBody.appendChild(fila);
    });
  }




  // Actualizamos la tarjeta de total con la cantidad real de especialidades activas
  const activas = obtenerEspecialidades().filter((e) => e.estado === "activo");
  document.getElementById("total-especialidades").textContent = activas.length;
}

function editSpeciality(row) {
  const id = row.dataset.id;
  window.location.href = `specialtyCreate.html?id=${id}`;
}

function deleteSpeciality(row) {
  const id = Number(row.dataset.id);
  const especialidades = obtenerEspecialidades();
  const especialidad = especialidades.find((esp) => esp.id === id);

  if (especialidad.estado === "inactivo") {
    mostrarToast(`La especialidad ${especialidad.nombre} ya está inactiva`, "warning");
    return;
  }

  const confirmed = confirm(`¿Está seguro que desea poner inactiva la especialidad ${especialidad.nombre}?`);
  if (!confirmed) return;

  // Baja lógica: no se borra del array, se cambia el estado a inactivo y se guarda
  especialidad.estado = "inactivo";
  guardarEspecialidades(especialidades);
  renderizarEspecialidades();

  mostrarToast(`La especialidad ${especialidad.nombre} ha sido puesta inactiva correctamente`, "warning");
}

// busqueda de especialidades
