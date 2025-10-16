const { ObjectId } = require('mongodb');
const savePdfCollectionn = require('../models/savePdfModel');

// Get all savePdf
const getSavePdf = async (req, res) => {
  try {
    const { email } = req.params;
    if (!email) return res.status(400).send({ message: "Email is required" });

    const invoices = await savePdfCollectionn.find({ email }).toArray();
    res.send(invoices);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};


// Add new SavePdf
const addSavePdf = async (req, res) => {
  try {
    const pdf = req.body;

    if (!pdf?.email || !pdf?.invoiceNumber) {
      return res.status(400).send({ message: "Missing required fields" });
    }

    const result = await savePdfCollectionn.insertOne(pdf);

    res.status(201).send({
      message: "PDF data saved successfully",
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error("Error adding PDF:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

// delete 
const deleteSavePdf = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send({ message: "ID is required" });

    const result = await savePdfCollectionn.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).send({ message: "PDF not found" });
    }

    res.send({ message: "PDF deleted successfully" });
  } catch (error) {
    console.error("Error deleting PDF:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};


module.exports = { getSavePdf, addSavePdf, deleteSavePdf };
