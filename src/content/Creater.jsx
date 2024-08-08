import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Creater({ setData, editedTodo }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");

  useEffect(() => {
    if (editedTodo) {
      setIsEditMode(true);
      setName(editedTodo.Name);
      setDescription(editedTodo.Description);
    } else {
      setIsEditMode(false);
      setName("");
      setDescription("");
    }
  }, [editedTodo]);

  const handleSubmit = () => {
    if (!Name.trim() || !Description.trim()) {
      alert("Please enter both todo name and description.");
      return;
    }

    const newTodo = { Name: Name.trim(), Description: Description.trim(), Status: "Not Completed" };
    setData(prevData => {
      if (isEditMode) {
        const newData = prevData.map(todo => (todo === editedTodo ? newTodo : todo));
        return newData;
      } else {
        return [...prevData, newTodo];
      }
    });

    // Reset fields and toggle back to add mode
    setName("");
    setDescription("");
    setIsEditMode(false);
  };

  return (
    <div className="mt-4">
      <div className="container">
        <div className="row">
          <h1 className="h3 mb-3" style={{fontSize:"30px", textAlign :"center", color: "#1CFF87" }}>My Todo</h1>
          <Form>
            <div className="row">
              <div className="col">
                <Form.Control style={{ borderColor: "#1CFF87" }} type="text" placeholder="Enter Todo Name" value={Name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="col">
                <Form.Control style={{ borderColor: "#1CFF87" }} type="text" placeholder="Enter Todo Description" value={Description} onChange={(e) => setDescription(e.target.value)} />
              </div>
              <div className="col-auto">
                <Button style={{ backgroundColor: "#00D21C", borderColor: "#00D21C" }} onClick={handleSubmit}>
                  {isEditMode ? 'Update Todo' : 'Add Todo'}
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Creater;