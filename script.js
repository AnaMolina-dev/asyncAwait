// Esta función espera un tiempo antes de continuar.
// Es como contar hasta 5 antes de hacer lo siguiente.
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Esta función a veces funciona bien... pero a veces se "tropieza"
// Vamos a usarla para mostrar errores simples.
async function maybeBreak(taskName) {
  await wait(1000); // esperamos un momento

  // Aquí simulamos un error si el nombre de la tarea está vacío
  if (!taskName) {
    throw new Error("Oops! The task has no name.");
  }

  // Si el nombre está bien, mostramos que se completó
  console.log("✅ Finished task: " + taskName);
}

// Nuestro temporizador Pomodoro: trabajo + descanso
async function pomodoroTimer() {
  console.log("🍅 Let's start working! (simulated 5 seconds)");

  try {
    // Si olvidamos poner el nombre aquí, va a fallar
    await maybeBreak("Work session");

    console.log("⏸️ Now it's break time! (simulated 2 seconds)");
    await maybeBreak(""); // Aquí está el error: no hay nombre 😬
  } catch (error) {
    console.log("❌ We had a problem: " + error.message);
    console.log("💡 Tip: make sure your task has a name!");
  } finally {
    console.log("📅 Pomodoro round is done. Great job!");
  }
}
