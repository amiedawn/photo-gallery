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

  return (
    <div>
      <Nav
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        ></Nav>
      <main>
        <ContactForm></ContactForm>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
