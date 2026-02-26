import React from "react";

export const ShowHideText = () => {
  const [show, setShow] = React.useState(true);
  const handleShowAndHide = () => {
    setShow(!show);
  };
  return (
    <>
        {show && <h1>hello react learner</h1>}
      <button onClick={handleShowAndHide}>Toggle Text</button>
    </>
  );
};

