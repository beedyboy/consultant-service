import ConsultantService from "../services/consultant";
import helper from "../util/helper";

class ConsultantController {
  service = new ConsultantService();
  getAll = async (req, res) => {
    const result = await this.service.getAll();
    res.json(result);
  };

  getById = async (req, res) => {
    const result = await this.service.getById(req.params.id);
    res.json(result);
  };
  getByDivision = async (req, res) => {
    const result = await this.service.getByDivision(req.params.id);
    res.json(result);
  };
  create = async (req, res, next) => {
    try {
      const result = await this.service.create(req.body);
      return res.status(result.status).json({ ...result });
    } catch (error) {
      next(error);
    }
  };
  update = async (req, res, next) => {
    try {
      const result = await this.service.update(req.body);
      return res.status(result.status).json({ ...result });
    } catch (error) {
      next(error);
    }
  };

  setUpload = async (req, res, next) => {
    try {
      var image = req.file;
      const { body } = req;
      let images = "";
      await helper.uploader(image).then((newPath) => {
        images = newPath.url;
      });

      var payload = {};
      payload[body["type"]] = images;
      console.log({ payload });
      const result = await this.service.setUpload(body.id, payload);
      return res.status(result.status).json({ ...result });
    } catch (err) {
      next(err);
    }
  };
  remove = async (req, res, next) => {
    try {
      const result = await this.service.remove(req.params.id);
      return res.status(result.status).json({ ...result });
    } catch (error) {
      next(error);
    }
  };
}
export default ConsultantController;
