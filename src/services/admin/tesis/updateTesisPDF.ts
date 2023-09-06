import models from '@models/index';
const { Tesis } = models;

const updateTesisPDF = async ({ body, params }) => {
  try {
    const { tesis } = body;
    const { idTesis } = params;

    const tesisU = await Tesis.update({ tesis }, { where: { id: idTesis } });

    return tesisU;
  } catch (err) {
    throw err;
  }
};

export default updateTesisPDF;
