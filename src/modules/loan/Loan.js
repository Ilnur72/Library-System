const mongoose = require("mongoose");

const outDate = new Date();
const dueDate = new Date(outDate);
dueDate.setDate(outDate.getDate() + 60);

const loanSchema = new mongoose.Schema(
  {
    book: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Book",
      required: true,
    },
    out_date: {
      type: mongoose.SchemaTypes.Date,
      default: outDate,
    },
    due_date: {
      type: mongoose.SchemaTypes.Date,
      default: dueDate,  
    },
    admin: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Admin",
      required: true,
    },
    borrower: {
      type: mongoose.SchemaTypes.String,
      ref: "Borrower",
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Loan = mongoose.model("Loan", loanSchema);

module.exports = Loan;
