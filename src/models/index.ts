import sequelize from '@config/db.config';
import Users from './Users.model';
import Alumnos from './Alumnos.model';
import Carreras from './Carreras.model';
import Categorias from './Categoria.model';
import Tesis from './Tesis.model';
import Opciones from './Opciones.model';

//Asociasiones

Categorias.hasMany(Tesis, { foreignKey: 'categoria' });
Tesis.belongsTo(Categorias, { foreignKey: 'categoria' });

Carreras.hasMany(Tesis, { foreignKey: 'carrera' });
Tesis.belongsTo(Carreras, { foreignKey: 'carrera' });

Carreras.hasMany(Alumnos, { foreignKey: 'carrera' });
Alumnos.belongsTo(Carreras, { foreignKey: 'carrera' });

Opciones.hasMany(Tesis, { foreignKey: 'opcion' });
Tesis.belongsTo(Opciones, { foreignKey: 'opcion' });

export default {
  Users,
  Alumnos,
  Carreras,
  Categorias,
  Tesis,
  Opciones
};

export const createTables = () => {
  sequelize
    .sync({ force: true })
    // .drop({})
    .then(() => console.log('Se crearon las tablas correctamente'))
    .catch((err) => console.log(err));
};
