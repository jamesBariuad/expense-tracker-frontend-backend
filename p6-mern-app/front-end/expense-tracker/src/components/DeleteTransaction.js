import React from "react";

const DeleteTransaction = ({
  id,
  closeDelete,
  deleteConfirmed,
  transactions,
}) => {
  const filterById = transactions?.filter(
    (transaction) => transaction._id === id
  );
  const handleDelete = () => {
    deleteConfirmed(filterById);
    closeDelete();
  };
  return (
    <div>
      Are you sure you want to delete transaction?
      <br></br>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={closeDelete}>Cancel</button>
    </div>
  );
};

export default DeleteTransaction;
