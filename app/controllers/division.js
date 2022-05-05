import DivisionService from "../services/division";

class DivisionController {
  service = new DivisionService();
  getAll = async (req, res) => {
    const result = await this.service.getAll();
    res.json(result);
  };

  getById = async (req, res) => {
    const result = await this.service.getById(req.params.id);
    res.json(result);
  };
  getByCategory = async (req, res) => {
    const result = await this.service.getByCategory(req.params.id);
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
      const { id, division, category } = req.body;
      
      const result = await this.service.update(id, {division, category});
      return res.status(result.status).json({ ...result });
    } catch (error) {
      next(error);
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
export default DivisionController;
