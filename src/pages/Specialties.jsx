import { useOutletContext } from "react-router-dom";

export default function Specialties() {
  const { showToast } = useOutletContext();

  return (
    <>
      <h1>Directorio de Especialidades</h1>

      {/* Botones de prueba:*/}
      <button type="button" onClick={() => showToast("Especialidad guardada")}>
        Probar toast verde
      </button>
      <button type="button" onClick={() => showToast("Especialidad dada de baja", "warning")}>
        Probar toast de advertencia
      </button>
    </>
  );
}