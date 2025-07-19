function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function temporizadorPomodoro() {
  console.log("🍅 Empezamos la sesión de trabajo (25 min simulados en 5 segundos)");
  await esperar(5000); // simulamos 25 min

  console.log("⏸️ Tiempo de descanso (5 min simulados en 2 segundos)");
  await esperar(2000); // simulamos 5 min

  console.log("✅ ¡Pomodoro completado! ¿Listos para el siguiente?");
}
