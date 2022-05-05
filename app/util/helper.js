import { dataUri } from '../config/multer'; 
import { cloudinary } from '../config/cloudinary';
const helper = {
  generateSlug: (data) => {
    let slug = data
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
    return slug;
  },  
  uploader: async (file) => {
    var reply = null;
    const image = dataUri(file).content;
    await cloudinary.uploader
      .upload(image)
      .then((data) => {
        reply = data;
      })
      .catch((err) => {
        console.log(err);
      });

    return reply;
  },
  imageArray: (data) => {
    return JSON.parse(data);
  },
};

module.exports = helper;
