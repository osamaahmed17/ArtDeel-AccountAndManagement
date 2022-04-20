
const mongoose = require("mongoose")
const { Schema } = require('mongoose')


class orderModel {
  constructor() {
    this.initSchema();
}
  initSchema() {
    const schema = new Schema({
      delivery_type: {
        type: String
      },
      parcel_weight: {
        type: Number
      },
      delivery_firstName: {
        type: String
      },
      delivery_lastName:{
        type:String
      },
      delivery_email:{
        type:String
      },
      delivery_street:{
        type:String
      },
      delivery_city:{
        type:String
      },
      delivery_postalCode:{
        type:Number
      },
      delivery_country:{
        type:String
      },
      product1_title:{
        type:String
      },
      product1_price:{
        type:Number
      },
      parcel_price:{
        type:Number
      },
      Device:{
        type:String
      }

    });
    schema.set('toJSON', {
      transform: function (doc, ret, options) {
          ret.id = ret._id;
          delete ret._id;
          delete ret.__v;
      }
 });
    mongoose.model("order", schema);
  }
  getInstance() {
    return mongoose.model("order");
  }
}

module.exports = new orderModel;


