import { createUser as cu, findUser as fu } from '@services/User';
import { sing } from '@middlewares/auth';

export const createUser = async (req, res) => {
  try {
    const usuario = await cu(req.body);
    return res.status(200).json({ success: true, response: usuario });
  } catch (err) {
    return res.status(400).json({ success: false, response: err });
  }
};

export const findUser = async (req, res) => {
  try {
    const usuario = await fu(req.body);
    const data = usuario.toJSON();
    delete data['password'];
    data['token'] = await sing(data);

    return res.status(200).json({ success: true, response: data });
  } catch (err) {
    return res.status(400).json({ success: false, response: err });
  }
};
