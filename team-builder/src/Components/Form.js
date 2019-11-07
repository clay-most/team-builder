import React, { useState } from "react";

function Form(props) {
  const [newMember, setNewMember] = useState({ name: "", email: "", role: "" });

  const changeHandler = event => {
    setNewMember({ ...newMember, [event.target.name]: event.target.value });
  };

  return (
    <div className="Form">
      <form
        onSubmit={event => {
          event.preventDefault();
          props.submitHandler(newMember);
          setNewMember({ name: "", email: "", role: "" });
        }}
      >
        <input
          placeholder="Name"
          name="name"
          value={newMember.name}
          onChange={changeHandler}
        ></input>
        <input
          placeholder="E-mail"
          name="email"
          value={newMember.email}
          onChange={changeHandler}
        ></input>
        <input
          placeholder="Role"
          name="role"
          value={newMember.role}
          onChange={changeHandler}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
