export const NumberedList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, i) => (
        <>
          <h3>{i + 1}</h3>
          <ItemComponent key={i} {...{ [resourceName]: item }} />
          {/* <ItemComponent key={i} person={item} /> this is going to change in this way. */}
        </>
      ))}
    </>
  );
};

// we are spreading an object with a key of resourceName and a value of item
