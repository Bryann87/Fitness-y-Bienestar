// Validación de inicio de sesión
document.getElementById('loginForm')?.addEventListener('submit', function validarLogin(event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email || !password) {
    alert("Todos los campos son obligatorios.");
    return false; // Evitar el envío del formulario
  }

  if (!validarEmail(email)) {
    alert("Por favor, introduce un email válido.");
    return false; // Evitar el envío del formulario
  }

  // Alerta de inicio de sesión exitoso
  alert("Inicio de sesión exitoso");
  
  return false; // Permitir el envío si es necesario
});

// Función de validación de email
function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}


// Validación de registro de usuario
document.getElementById('signupForm')?.addEventListener('submit', function validarRegistro(event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value.trim();  // Eliminar espacios en blanco
  const confirmPassword = document.getElementById('confirmPassword').value.trim();  // Eliminar espacios en blanco

  // Verificar que todos los campos estén completos
  if (!name || !email || !password || !confirmPassword) {
    alert("Todos los campos son obligatorios.");
    return false; // Evitar el envío del formulario
  }

  // Validar que el correo electrónico sea válido
  if (!validarEmail(email)) {
    alert("Por favor, introduce un email válido.");
    return false; // Evitar el envío del formulario
  }

  // Validar que las contraseñas coincidan
  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden.");
    return false; // Evitar el envío del formulario
  }

  

  // Si todo está correcto, mostrar la alerta de registro exitoso
  alert("Registro exitoso");
  return true; // Permitir el envío del formulario
});

// Función para validar el formato de un correo electrónico
function validarEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Función para validar que la contraseña cumpla los criterios: 
// mínimo 8 caracteres, al menos una letra mayúscula, una letra minúscula, y un número.
function validarContrasena(password) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return re.test(password);
}


// Validación de progreso de ejercicio
document.getElementById('progresoForm')?.addEventListener('submit', function validarRegistroProgreso(event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

  const fecha = document.getElementById('fecha').value;
  const ejercicio = document.getElementById('ejercicio').value;
  const duracion = document.getElementById('duracion').value;
  const calorias = document.getElementById('calorias').value;
  const alimentos = document.getElementById('alimentos').value || 'No registrado';

  if (!fecha || !ejercicio || !duracion || !calorias) {
    alert("Todos los campos obligatorios deben estar llenos.");
    return false; // Evitar el envío del formulario
  }

  alert("Progreso registrado con éxito");
  return true; // Permitir el envío si es necesario
});

// Función para validar la contraseña
function validarContrasena(password) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return re.test(password);
}
