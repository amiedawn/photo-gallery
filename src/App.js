import React, { useState } from 'react';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import About from './components/About';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
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
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // condition what renders based on which menu item the user selects from the navbar
  // set the value to false to prevent the contact form from showing when a user initially goes to the homepage
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {/* if contactSelected is false, the Gallery and About components should be rendered
        if contactSelected is true, the ContactForm should be rendered */}
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
