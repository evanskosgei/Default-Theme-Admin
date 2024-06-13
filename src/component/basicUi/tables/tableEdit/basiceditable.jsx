import React, { Fragment, useEffect, useState } from 'react';
import { nanoid } from "nanoid";

const BasicEditTable = () => {

  const [contacts, setContacts] = useState([]);

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    position: "",
    salary: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);
 

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      position: editFormData.position,
      salary: editFormData.salary,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      position: contact.position,
      salary: contact.salary,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table
          id="delete-datatable"
          className="ti-custom-table ti-striped-table ti-custom-table-hover"
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>position</th>
              <th>Salary</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment key={contact.id}>
                {editContactId === contact.id ? (
                  <EditableRows
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRows
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

    </div>
  );
};
const EditableRows = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          className='ti-form-input'
          type="text"
          required
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className='ti-form-input'
          type="text"
          required
          placeholder="Enter an position..."
          name="position"
          value={editFormData.position}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className='ti-form-input'
          type="text"
          required
          placeholder="Enter a phone number..."
          name="salary"
          value={editFormData.salary}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          className='ti-form-input'
          type="email"
          required
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button variant="" className="ti-btn ti-btn-primary me-1" type="submit">
          Save
        </button>
        <button
          variant=""
          className="ti-btn ti-btn-danger me-1"

          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};
const ReadOnlyRows = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.position}</td>
      <td>{contact.salary}</td>
      <td>{contact.email}</td>
      <td>
        <button
          variant=""
          className="ti-btn ti-btn-primary me-1"
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button
          variant=""
          className="ti-btn ti-btn-danger me-1"
          type="button"
          onClick={() => handleDeleteClick(contact.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BasicEditTable;