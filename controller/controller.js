import crudModel  from "../model/model.js";


export const getAllData = (req,res)=>{
    crudModel.find().sort({createdAt: -1})
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    });
  }

  const saveData = (req, res) => {
  const data = req.body;
  
  if (Array.isArray(data)) {
    // Array of objects
    crudModel.insertMany(data)
      .then(() => {
        res.send("Records Saved Successfully!");
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Failed to save records.");
      });
  } else {
    // Single object
    const record = new crudModel(data);
    record.save()
      .then(() => {
        res.send("Record Saved Successfully!");
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Failed to save record.");
      });
  }
};


const findDataById = (req, res) => {
  const id = req.body.id;

  if (Array.isArray(id)) {
    // Array of IDs
    crudModel
      .find({ _id: { $in: id } })
      .then((results) => {
        res.send(results);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Failed to retrieve data.");
      });
  } else {
    // Single ID
    crudModel
      .findById(id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send("Failed to retrieve data.");
      });
  }
};


const deleteDataById = (req, res) => {
  const id = req.body.id;
  crudModel
    .findByIdAndDelete(id)
    .then((result) => {
      res.send("Record Deleted Successfully!");
    })
    .catch((err) => {
      console.log(err);
    });
}



  export default {
    getAllData,
    saveData,
    findDataById,
    deleteDataById,
    
  }