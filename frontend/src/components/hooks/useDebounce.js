import { useState } from "react";
import { useEffect } from "react";

// Hook
export function useDebounce(value, delay) {
  // Estado y setters para el valor rebotado
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Actualizar el valor rebotado después del retraso
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancelar el tiempo de espera si el valor cambia (también en cambio de retraso o desmontaje)
      // Así es como evitamos que el valor rebotado se actualice si se cambia el valor...
      // .. dentro del período de retraso. El tiempo de espera se borra y se reinicia.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Solo efecto de recuperación si cambia el valor o el retraso
  );
  return debouncedValue;
}
