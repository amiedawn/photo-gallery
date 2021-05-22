import React, { useState } from 'react';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import About from './components/About';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    {
      name: "Cats",
      description: "Cutest cats around",
    },
    {
      name: "Dogs",
      description: "Devilish dogs",
    },
    {
      name: "Pandas",
      description: "Pretty pandas",
    },
    {
      name: "Monkeys",
      description: "Marvelous monkeys",
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
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
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
