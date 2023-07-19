export const SmallPersonListItem = ({ person }) => {
  // descunstruct the person object
  const { name, age } = person;
  return (
    <p>
      Name: {name}, Age: {age}years
    </p>
  );
};
