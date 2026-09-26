
const ESPECIALIDADES_KEY = "especialidades";

const ESPECIALIDADES_INICIALES = [
  {
    id: 1,
    nombre: "Cardiología",
    descripcion: "Estudio y tratamiento de trastornos del corazón y del sistema circulatorio.",
    estado: "activo",
    icono: "cardiology.svg",
  },
  {
    id: 2,
    nombre: "Neurología",
    descripcion: "Diagnóstico y tratamiento de todas las categorías de afecciones cerebrales.",
    estado: "activo",
    icono: "neurology.svg",
  },
  {
    id: 3,
    nombre: "Dermatología",
    descripcion: "Atención integral de enfermedades de la piel, uñas y cabello.",
    estado: "inactivo",
    icono: "dermatology.svg",
  },
  {
    id: 4,
    nombre: "Pediatría",
    descripcion: "Cuidado médico de lactantes, niños y adolescentes.",
    estado: "activo",
    icono: "pediatrics.svg",
  },
];

// Devuelve el array de especialidades guardado en localStorage.
// Si todavía no existe, guarda los datos iniciales y los devuelve.
function obtenerEspecialidades() {
  const datos = localStorage.getItem(ESPECIALIDADES_KEY);

  if (datos === null) {
    guardarEspecialidades(ESPECIALIDADES_INICIALES);
    return [...ESPECIALIDADES_INICIALES];
  }

  return JSON.parse(datos);
}

// Guarda el array completo en localStorage 
function guardarEspecialidades(especialidades) {
  localStorage.setItem(ESPECIALIDADES_KEY, JSON.stringify(especialidades));
}


function agregarEspecialidad(especialidad) {
  const especialidades = obtenerEspecialidades();

  // id nuevo = id más alto que exista + 1
  const ultimoId = especialidades.reduce((max, esp) => Math.max(max, esp.id), 0);
  especialidad.id = ultimoId + 1;

  especialidades.push(especialidad);
  guardarEspecialidades(especialidades);
}