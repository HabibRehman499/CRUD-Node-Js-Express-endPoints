import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const crudSchema = new Schema(
    {
        name: {
            type: String,
            required : true,
        },
        email: {
            type: String,
            required : true,
        },
        contact: {
            type: String,
            required : true,
        },
        address: {
            type: String,
            required : true,
        },
    },
    {
        timestamps:true
    }
);

const crudModel = mongoose.model('CRUD',crudSchema);

export default crudModel;