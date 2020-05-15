
import axios from 'axios';
export const Resource = {
    host : "http://candahar.tpm-logistics.com/api/api",
    getArtikel(cb){
      axios.get(`${this.host}/post`).then(response => {
        cb(null,response.data);
      })
      .catch(function (error) {
          cb(error,null)
      });
    },
    getCategory(cb){
      axios.get(`${this.host}/category`).then(response => {
        cb(null,response.data);
      })
      .catch(function (error) {
          cb(error,null)
      });
    },
    detailPost(slug,cb){
      axios.get(`${this.host}/post/${slug}`).then(response => {
        cb(null,response.data);
      })
      .catch(function (error) {
          cb(error,null)
      });
    }
}