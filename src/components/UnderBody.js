import React from "react";

export const UnderBody = ({ person }) => {
  const { id, name, desig, city } = person;
  return (
    <div>
      <p>ID:{id}</p>
      <p>Name:{name}</p>
      <p>Desig:{desig}</p>
      <p>City:{city}</p>
    </div>
  );
};
