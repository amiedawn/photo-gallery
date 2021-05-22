import React, { useState } from 'react';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import About from './components/About';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    {
      name: "Cats",
      description: "Cutest cats",
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