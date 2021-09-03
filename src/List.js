import React from 'react';
//using grid for the creation of each article in the list
const List = ({people}) => {
  return (
    <>
    {people.map((person) => {
      const {id,name,age,image} = person;
      return (
        <article key = {id} className = 'person'>
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{age}</p>
          </div>
        </article>
      );
    })}
    </>
  );
};

export default List;
