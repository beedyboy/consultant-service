import mongoose from "mongoose";
import Category from '../models/category'; 
class CategoryService {
  getAll = async () => {
    /**
     * #swagger.tags = ['Category']
     * #swagger.description = "Get Category by id"
     */
    try {
      return await Category.find({});
    } catch (error) {
      throw error;
    }
  };
  getById = async (id) => {
    /**
     * #swagger.tags = ['Category']
     * #swagger.description = "Get Category by id"
     */
    try {
      return await Category.findById(id).then((data, err) => {
        if(err){
          throw "Category not found";
        }
        return { status: 200, data };
      });
    } catch (err) {
      throw err;
    }
  };

  create = async (name) => {

      /* #swagger.tags = ['Category']
     #swagger.security = [{
            "bearerAuth": []
    }] 
      #swagger.description = "Create a Category"
   
      #swagger.parameters['data'] ={
    in: 'body', 
    required: true, 
   schema: {$ref: "#/definitions/Category"}, 
 }
 */
    try {
      return Category.create(name).then((data, err) => { 
        if (err) {
          throw err;
        } else {
          return { status: 201, message: "Category created successfully", data };
        }
      });
    } catch (error) {
      throw error;
    }
  };
  update = async (id, payload) => {
    /** 
     *  #swagger.tags = ['Category']
     * #swagger.security = [{
            "bearerAuth": []
    }] 
     */
    try {
      return await Category.findByIdAndUpdate(id, payload).then((data, err) => {
        if (data) {
          return { status: 200, message: "Record updated successfully" };
        }
      });
    } catch (error) {
      throw error;
    }
  };

  remove = async (id) => {

       /**
     * #swagger.tags = ['Category']
     * #swagger.description = Delete a Category"
     */
    try { 
      await Category.findByIdAndDelete(id).then((dt, err) => {
        if (dt) {
          return  { status: 200, message: "Category deleted successfully" };
        }
      });
    } catch (error) {
      throw error;
    }
  };
}
export default CategoryService;
