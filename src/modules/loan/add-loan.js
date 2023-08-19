const { ForbiddenError } = require("../../shared/errors");
const Loan = require("./Loan");

const addLoan = async (data) => {
  const loan = await Loan.find({borrower: data.borrower})

  if(loan.length >= 10) throw new ForbiddenError("Sorry you cannot get more than 10 books.")

  const due = {}
  const outDate = new Date();
  const dueDate = new Date(outDate);

  const returnedBook = loan.filter(item => item.due_date < outDate) 
  if(returnedBook.length) throw new ForbiddenError("Sorry, you have an overdue rental book")

  if(data.due_date) due.due_date = dueDate.setDate(outDate.getDate() + data .due_date);

  const result = await Loan.create({ ...data, ...due });
  
  const { is_deleted, ...rest } = result.toObject();
  return rest;
};

module.exports = addLoan;
