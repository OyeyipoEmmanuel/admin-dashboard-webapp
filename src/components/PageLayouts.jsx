import React from "react";

const PageLayouts = (props) => {
  return (
    
      <section className="lg:grid grid-cols-3 lg:gap-6">
        {props.children}
      </section>
    
  );
};

export default PageLayouts;
