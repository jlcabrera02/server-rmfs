import generadornombre from './generarNombre';
import path from 'path';

/** Esta función tiene la particularidad de alogar las imagenes que le cliente requiere guardar.
 
 * @property {multipart/form-data} imagen - contenido de la imagen.
 * @property {string} nomenclatura - Dscripción incial que ira al iniciar el nombre del elemento.
 */

const guardarImagen = ({ imagen }) => {
  return new Promise((resolve, reject) => {
    const nombre =
      generadornombre() + '.' + imagen.mimetype.replace('image/', '');

    imagen.mv(
      path.join(__dirname, '../public/media/imagenes/', nombre),
      (err) => {
        if (err) {
          return reject({
            success: false,
            code: 400,
            msg: 'Error al guardar la imagen'
          });
        }
        return resolve(nombre);
      }
    );
  });
};

export default guardarImagen;
