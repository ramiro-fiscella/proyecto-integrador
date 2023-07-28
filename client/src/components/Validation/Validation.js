const validation = (userData) => {
  const errors = {};
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexNumber = /\d/;
  const regexLength = /^.{7,9}$/;

  if (!regexEmail.test(userData.email)) {
    errors.email = "Ingresa un email válido";
  }
  if (!userData.email) {
    errors.email = "Este campo es obligatorio";
  }
  if (!userData.email.length > 35) {
    errors.email = "El email no puede tener mas de 35 caracteres";
  }
  if (!regexNumber.test(userData.password)) {
    errors.password = "La contraseña debe tener al menos un número";
  }
  if (!regexLength.test(userData.password)) {
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
  }

  return errors;
};

export default validation;
