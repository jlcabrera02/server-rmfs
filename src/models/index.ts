import sequelize from '@config/db.config';
import Blogs from './Blogs.model';
import Users from './Users.model';
import Banners from './Banners.model';

//Asociasiones

export default {
  Blogs,
  Users,
  Banners
};

export const createTables = () => {
  sequelize
    .sync({ force: true })
    // .drop({})
    .then(() => console.log('Se crearon las tablas correctamente'))
    .catch((err) => console.log(err));
};
