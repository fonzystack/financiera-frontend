// hash-password.js
const bcrypt = require('bcryptjs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Introduce la contraseña para el nuevo admin: ', password => {
  if (!password) {
    console.log('No se introdujo contraseña. Abortando.');
    readline.close();
    return;
  }

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.error('Error al generar el hash:', err);
    } else {
      console.log('\n✅ Hash generado con éxito. Cópialo completo:');
      console.log(hash);
    }
    readline.close();
  });
});