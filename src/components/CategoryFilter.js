import React, {useState} from "react";

function CategoryFilter({categories, filterTasks, selectedCategory}) {

 



    const categoryBtn = categories.map((category) => 
      // const className = category ? "selected" : null
     ( 
        <button 
            key={category}
            category={category}
            className={selectedCategory === category ? "selected" : null}
            onClick={() => filterTasks(category)}
        >
        {category}
        </button>
     )
    )
     
      


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryBtn}
    </div>
  );

  }

export default CategoryFilter
