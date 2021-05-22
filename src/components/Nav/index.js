
import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
	const {
		categories = [],
		setCurrentCategory,
		currentCategory,
		contactSelected,
		setContactSelected,
	} = props;

	useEffect(() => {
		document.title = capitalizeFirstLetter(currentCategory.name);
	}, [currentCategory]);

	return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 🦌</span> Animal Gallery
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            {/* when About is selected, contactSelected is set to false and the About component is rendered */}
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About
            </a>
          </li>
          {/* if contactSelected is true, add class navActive to illuminate the background */}
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            {/* set the value of contactSelected to true when selecting the Contact item in the menu */}
            <span onClick={() => setContactSelected(true)}>
              Contact
            </span>
          </li>
          {/* map over the category array to display each category in the Nav  */}
          {categories.map((category) => (
            <li
              className={`mx-1 ${currentCategory.name === category.name && !contactSelected && `navActive`
                }`}
              key={category.name}
            >
            
               {/* event listener for every time a category is clicked */}
              <span 
                onClick={() => { 
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)} 
              </span>
            </li>  
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;