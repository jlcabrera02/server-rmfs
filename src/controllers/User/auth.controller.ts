import createUser from '@services/users/createUser';
import Login from '@services/users/login';

export const registerUser = async (req, res) => {
  try {
    const create = await createUser(req.body);

    res.status(200).json({ ok: true, response: create });
  } catch (err) {
    res.status(400).json({ ok: false, msg: 'Error al crear el usuario' });
  }
};

export const loginUser = async (req, res) => {
  try {
    const login = await Login(req.body);

    if (!login) {
      return res
        .status(400)
        .json({ ok: false, code: 403, msg: 'Usuario o contraseña invalida' });
    }

    res.status(200).json({ ok: true, response: login });
  } catch (err) {
    res.status(400).json({ ok: false, msg: 'Error al crear el usuario' });
  }
};
