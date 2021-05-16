import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav() {
  const categories = [
    {
      name: "Cats",
      description: "cats",
    },
    {
      name: "Dogs",
      description: "dogs",
    },
    {
      name: "Pandas",
      description: "pandas",
    },
    {
      name: "Monkeys",
      description: "monkeys",
    },
  ];

  const handleClick = (item) => {
    console.log(item);
    return item;
  };

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
            <a data-testid="about" href="#about" onClick={() => handleClick("About")}>
              About
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick('Contact')}>
              Contact
            </span>
          </li>
          {/* map over the category array to display each category in the Nav  */}
          {
            categories.map((category) => (
            <li
              className="mx-1"
              key={category.name}
            >
               {/* event listener for every time a category is clicked */}
              <span onClick={() => { handleClick(category.name); }}>
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