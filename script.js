function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let ciclosCompletados = 0;

// Función para mostrar texto en la pantalla
function escribir(texto) {
  const log = document.getElementById("log");
  log.textContent += `\n${texto}`;
}

async function obtenerClima() {
  try {
    const respuesta = await fetch("https://api.weatherapi.com/v1/current.json?key=tu_api_key&q=Barcelona");
    const datos = await respuesta.json();
    escribir(`🌤️ Clima actual en Barcelona: ${datos.current.condition.text}`);
  } catch (error) {
    escribir("⚠️ No se pudo obtener el clima: " + error.message);
  }
}

async function prepararDesayuno() {
  escribir("🥣 Preparando desayuno...");
  await esperar(2000);
  escribir("☕ Café listo, 🍞 pan tostado");
}

async function pasearAlPerro() {
  escribir("🐕 Buscando correa y bolsitas...");
  await esperar(1000);
  await obtenerClima();
  await esperar(2000);
  escribir("🚶‍♀️ Paseo terminado");
}

async function limpiarCasa() {
  escribir("🧹 Limpiando casa...");
  await esperar(3000);
  escribir("✨ Casa reluciente");
}

async function estudiar() {
  escribir("📚 Sentándome a estudiar...");
  await esperar(2500);
  escribir("🧠 Concentración máxima activada");
}

async function rutinaDiaria() {
  const log = document.getElementById("log");
  log.textContent = ""; // limpia contenido previo

  try {
    await prepararDesayuno();
    await pasearAlPerro();
    await limpiarCasa();
    await estudiar();
  } catch (error) {
    escribir("❌ Error durante la rutina: " + error.message);
  } finally {
    ciclosCompletados++;
    escribir("📅 Rutina completada por hoy");
    escribir(`🔢 Ciclos realizados: ${ciclosCompletados}`);
  }
}

