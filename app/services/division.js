
import Division from "../models/division";
class DivisionService {
  getAll = async () => {
    /**
     *  #swagger.tags = ['Division']
     * #swagger.description="Get all divisions"
     */
    try {
      return await Division.find({}).populate(
        "category",
        "-createdAt -updatedAt"
      );
    } catch (error) {
      throw error;
    }
  };
  create = async (payload) => {
      /* #swagger.tags = ['Division']
     #swagger.security = [{
            "bearerAuth": []
    }] 
      #swagger.description = "Create a Division"
   
      #swagger.parameters['data'] ={
    in: 'body', 
    required: true, 
   schema: {$ref: "#/definitions/Division"}, 
 }
 */
    try {
      //do a check whether it already exist or not
      return Division.create(payload).then((data, err) => {
        if (err) {
          throw err;
        } else {
          return { status: 201, message: "Record created successfully", data };
        }
      });
    } catch (error) {
      throw error;
    }
  };

  getById = async (id) => {
     /**
     * #swagger.tags = ['Division']
     * #swagger.description = "Get Division by id"
     */
    try {
      return await Division.findById(id)
        .populate("category", "-createdAt -updatedAt")
        .then((data, err) => {
          return { status: 200, data };
        });
    } catch (err) {
      throw err;
    }
  };

  getByCategory = async (category) => {
     /**
     * #swagger.tags = ['Division']
     * #swagger.description = "Get divisions by category"
     */
    try {
      return await Division.find({ category })
        .populate("category")
        .then((data, err) => {
          if (err) {
            throw err;
          }
          return { status: 200, data };
        });
    } catch (err) {
      throw err;
    }
  };
  update = async (id, payload) => {
    /**
  * #swagger.tags = ['Division']
  * #swagger.description = "Update Division"
  */
    try {
      return await Division.findByIdAndUpdate(id, payload).then((data, err) => {
        if (data) {
          return { status: 200, message: "Record updated successfully" };
        }
      });
    } catch (error) {
      throw error;
    }
  };

  remove = async (req, res) => {

       /**
     * #swagger.tags = ['Division']
     * #swagger.description = Delete Division"
     */
    try {
      const id = req.params.id;
      await Division.findByIdAndDelete(id).then((dt, err) => {
        if (dt) {
          return { status: 200, message: "Division deleted successfully" };
        }
      });
    } catch (error) {
      throw error;
    }
  };
}
export default DivisionService;
