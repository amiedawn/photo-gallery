import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    categories = [],
    currentCategory,
    setCurrentCategory,
  } = props;

  //hook to make category title appear on tab
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
            <a data-testid="about" href="#about">
              About
            </a>
          </li>
          <li className="mx-2">
            <span>
              Contact
            </span>
          </li>
          {/* map over the category array to display each category in the Nav  */}
          {
            categories.map((category) => (
            <li
              className={`mx-1 ${
              currentCategory.name === category.name && 'navActive'
              }`}
              key={category.name}
            >
            
               {/* event listener for every time a category is clicked */}
              <span onClick={() => { 
                setCurrentCategory(category);
              }}>
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