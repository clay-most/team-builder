import React from 'react';
import Member from './Member';

const List = props => {
  return (
    <div>
      <h3>Current Members</h3>
      <ul>
        {props.team.map(member => {
          return (
            <Member
              key={Date.now}
              name={member.name}
              email={member.email}
              role={member.role}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default List;
