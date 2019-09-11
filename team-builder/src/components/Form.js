import React, { useState } from 'react';

const Form = props => {
  const [input, setInput] = useState({ name: '', email: '', role: '' });

  const changeHandler = event => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const submitHandler = event => {
    event.preventDefault();
    const newMember = { ...input };
    props.addMember(newMember);
    setInput({ name: '', email: '', role: '' });
  };

  return (
    <form onSubmit={submitHandler}>
      <h3>Create New Member</h3>
      <input
        placeholder="name"
        type="text"
        name="name"
        value={input.name}
        onChange={changeHandler}
      />
      <input
        placeholder="email"
        type="text"
        name="email"
        value={input.email}
        onChange={changeHandler}
      />
      <input
        placeholder="role"
        type="text"
        name="role"
        value={input.role}
        onChange={changeHandler}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
