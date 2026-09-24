document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("specialities-body");

  // Hacemos un listado de las especialidades en la tabla y le damos un id 
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
});

function getSpecialityName(row) {
  return row.querySelector(".speciality-name span").textContent;
}

function editSpeciality(row) {
  const id = row.dataset.id;
  window.location.href = `specialtyCreate.html?id=${id}`;
}

function deleteSpeciality(row) {
  const name = getSpecialityName(row);
  const badge = row.querySelector(".badge");

  if (badge.classList.contains("badge-inactive")) {
    alert(`La especialidad ${name} ya está inactiva.`);
    return;
  }

  const confirmed = confirm(`¿Está seguro que desea eliminar la especialidad ${name}?`);
  if (!confirmed) return;

  // No tenemos que eliminar sino que damos la baja lógica, cambiando el estado de la especialidad a inactiva
  badge.classList.remove("badge-active");
  badge.classList.add("badge-inactive");
  badge.textContent = "Inactiva";
}