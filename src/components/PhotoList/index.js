import React, { useState } from "react";
import Modal from "../Modal";

const PhotoList = ({ category }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const [photos] = useState([
    {
      name: 'Cat 1',
      category: 'cats',
      description: 'Boots',
    },
    {
      name: 'Cat 2',
      category: 'cats',
      description: 'Bobby',
    },
    {
      name: 'Cat 3',
      category: 'cats',
      description: 'Tiger',
    },
    {
      name: 'Cat 4',
      category: 'cats',
      description: 'Stripes',
    },
    {
      name: 'Cat 5',
      category: 'cats',
      description: 'Whisper',
    },
    {
      name: 'Dog 1',
      category: 'dogs',
      description: 'Buster',
    },
    {
      name: 'Dog 2',
      category: 'dogs',
      description: 'Lassie',
    },
    {
      name: 'Dog 3',
      category: 'dogs',
      description: 'Wrinkles',
    },
    {
      name: 'Dog 4',
      category: 'dogs',
      description: 'Slicker',
    },
    {
      name: 'Dog 5',
      category: 'dogs',
      description: 'Pooch',
    },
    {
      name: 'Panda 1',
      category: 'pandas',
      description: 'Su Lin',
    },
    {
      name: 'Panda 2',
      category: 'pandas',
      description: 'Zhen Zhen',
    },
    {
      name: 'Panda 3',
      category: 'pandas',
      description: 'Ling-Ling',
    },
    {
      name: 'Panda 4',
      category: 'pandas',
      description: 'Bao Bao',
    },
    {
      name: 'Panda 5',
      category: 'pandas',
      description: 'Mei Xang',
    },
    {
      name: 'Monkey 1',
      category: 'monkeys',
      description: 'Freedo',
    },
    {
      name: 'Monkey 2',
      category: 'monkeys',
      description: 'Chucky',
    },
    {
      name: 'Monkey 3',
      category: 'monkeys',
      description: 'Jasper',
    },
    {
      name: 'Monkey 4',
      category: 'monkeys',
      description: 'Beans',
    },
  ]);

  const [currentPhoto, setCurrentPhoto] = useState();

	const currentPhotos = photos.filter((photo) => photo.category === category);

	const toggleModal = (image, i) => {
		setCurrentPhoto({ ...image, index: i });
		setIsModalOpen(!isModalOpen);
	};

	return (
		<div>
			{isModalOpen && (
				<Modal currentPhoto={currentPhoto} onClose={toggleModal} />
			)}
			<div className="flex-row">
				{currentPhotos.map((image, i) => (
					<img
						src={require(`../../assets/small/${category}/${i}.jpg`)}
						alt={image.name}
						className="img-thumbnail mx-1"
						onClick={() => toggleModal(image, i)}
						key={image.name}
					/>
				))}
			</div>
		</div>
	);
};

export default PhotoList;