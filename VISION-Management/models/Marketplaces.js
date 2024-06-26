import mongoose from 'mongoose';

const { Schema } = mongoose;

const marketSchema = new Schema({
  marketname: {
    type: String,
    required: true,
  },
  gstNo: {
    type: String,
    required: true,
    unique: true,
  },
  address: [{}],
  vendorcode: {
    type: String,
  },
  linkedcatlog: {
    type: String,
  },
});


const Markets = mongoose.model('Markets', marketSchema);

export default Markets;
