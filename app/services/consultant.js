import mongoose from "mongoose";
import Consultant from "../models/consultant";
class ConsultantService {
  getAll = async () => {
    /**
     * #swagger.tags = ['Consultant']
     * #swagger.description = "Get all my consultant"
     */
    try {
      return await Consultant.find({});
    } catch (error) {
      throw error;
    }
  };
  create = async (payload) => {
    try {
      /* #swagger.tags = ['Consultant']
     #swagger.security = [{
            "bearerAuth": []
    }] 
      #swagger.description = "Set profile"
   
      #swagger.parameters['data'] ={
    in: 'body', 
    required: true, 
   schema: {$ref: "#/definitions/Consultant"}, 
 }
 */
      //do a check whether it already exist or not
      return Consultant.create(payload).then((data, err) => {
        if (err) {
          throw err;
        } else {
          return { status: 201, message: "Profile created successfully", data };
        }
      });
    } catch (error) {
      throw error;
    }
  };

  getById = async (id) => {
    try {
       /**
     * #swagger.tags = ['Consultant']
     * #swagger.description = "Get consultant by id"
     */
      return await Consultant.findById(id).then((data, err) => {
        return { status: 200, data };
      });
    } catch (err) {
      throw err;
    }
  };

  getByDivision = async (subcategory) => {
    /**
     * #swagger.tags = ['Consultant']
     * #swagger.description = "Get consultant by division"
     */
    try {
      return await Consultant.find({ subcategory }).then((data, err) => {
        return { status: 200, data };
      });
    } catch (err) {
      throw err;
    }
  };
  update = async (payload) => {
    try {
       /**
     * #swagger.tags = ['Consultant']
     * #swagger.description = "Update consultant"
     */
      return await Consultant.findByIdAndUpdate(payload.id, payload).then(
        (data, err) => {
          if (data) {
            return { status: 200, message: "Record updated successfully" };
          }
        }
      );
    } catch (error) {
      throw error;
    }
  };

  setUpload = async (id, payload) => {
    try {
      /*  #swagger.parameters['id'] = {
            in: 'path',
            type: 'string',
            description: 'User ID.' } */
            /*
    #swagger.consumes = ['multipart/form-data']
    #swagger.parameters['image'] ={
      in: 'formData',
      type: 'file',
      required: true,
      description: 'Change or upload  picture'
    }
    */
      return await Consultant.findByIdAndUpdate(id, payload).then((data, err) => {
        if (data) {
           /*
        #swagger.responses[200] ={
          description: 'Upload completed  successfully'
        }
        */
          return { status: 200, message: `Upload completed successfully` };
        }
      });
    } catch (error) {
      throw error;
    }
  };
  remove = async (req, res) => {
    try {
       /**
     * #swagger.tags = ['Consultant']
     * #swagger.description = Delete consultant"
     */
      const id = req.params.id;
      await Consultant.findByIdAndDelete(id).then((dt, err) => {
        if (dt) {
          return { status: 200, message: "Consultant deleted successfully" };
        }
      });
    } catch (error) {
      throw error;
    }
  };
}
export default ConsultantService;
