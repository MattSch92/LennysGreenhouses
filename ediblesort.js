// Category: Edible & Herbal Plants
const ediblePlants = [
    { name: 'Lemon Tree', latin: 'Citrus limon', link: '/lemon-tree.html', image: '/images/lemontree.jpg', price: 50 },
    { name: 'Strawberry Plant', latin: 'Fragaria x ananassa', link: '/strawberry-plant.html', image: '/images/strawberry-plant.jpg', price: 15 },
    { name: 'Basil', latin: 'Ocimum basilicum', link: '/basil.html', image: '/images/basil.jpg', price: 8 },
    { name: 'Rosemary', latin: 'Salvia rosmarinus', link: '/rosemary.html', image: '/images/rosemary.jpg', price: 12 },
    { name: 'Mint', latin: 'Mentha spicata', link: '/mint.html', image: '/images/mint.jpg', price: 10 },
    { name: 'Pepper Plant', latin: 'Capsicum annuum', link: '/pepper-plant.html', image: '/images/pepper-plant.jpg', price: 18 },
    { name: 'Tomato Plant', latin: 'Solanum lycopersicum', link: '/tomato-plant.html', image: '/images/tomato-plant.jpg', price: 20 },
    { name: 'Thyme', latin: 'Thymus vulgaris', link: '/thyme.html', image: '/images/thyme.jpg', price: 9 },
    { name: 'Chives', latin: 'Allium schoenoprasum', link: '/chives.html', image: '/images/chives.jpg', price: 7 },
    { name: 'Oregano', latin: 'Origanum vulgare', link: '/oregano.html', image: '/images/oregano.jpg', price: 8 },
    { name: 'Parsley', latin: 'Petroselinum crispum', link: '/parsley.html', image: '/images/parsley.jpg', price: 8 },
    { name: 'Cilantro', latin: 'Coriandrum sativum', link: '/cilantro.html', image: '/images/cilantro.jpg', price: 7 },
    { name: 'Lavender', latin: 'Lavandula angustifolia', link: '/lavender-herbal.html', image: '/images/lavender.jpg', price: 12 },
    { name: 'Sage', latin: 'Salvia officinalis', link: '/sage.html', image: '/images/sage.jpg', price: 10 },
    { name: 'Lemongrass', latin: 'Cymbopogon citratus', link: '/lemongrass.html', image: '/images/lemongrass.jpg', price: 15 }, // New
    { name: 'Bay Laurel', latin: 'Laurus nobilis', link: '/bay-laurel.html', image: '/images/bay-laurel.jpg', price: 18 }, // New
    { name: 'Dill', latin: 'Anethum graveolens', link: '/dill.html', image: '/images/dill.jpg', price: 8 }, // New
    { name: 'Peppermint', latin: 'Mentha × piperita', link: '/peppermint.html', image: '/images/peppermint.jpg', price: 10 }, // New
    { name: 'Lemon Balm', latin: 'Melissa officinalis', link: '/lemon-balm.html', image: '/images/lemon-balm.jpg', price: 12 }, // New
    { name: 'Stevia', latin: 'Stevia rebaudiana', link: '/stevia.html', image: '/images/stevia.jpg', price: 15 } // New
];

// Function to Display the List of Plants
function displayPlants(plants) {
    const plantListContainer = document.getElementById('plant-list');
    plantListContainer.innerHTML = ''; // Clear any existing content

    // Create a plant card for each plant and add it to the container
    plants.forEach(plant => {
        const plantCard = document.createElement('div');
        plantCard.classList.add('plant-card');

        // Plant card content with link to the plant page
        plantCard.innerHTML = `
            <a href="${plant.link}">
                <img src="${plant.image}" alt="${plant.name}">
                <h2>${plant.name}</h2>
                <h3>${plant.latin}</h3>
                <p>$${plant.price.toFixed(2)}</p>
            </a>
        `;

        // Append the card to the plant list container
        plantListContainer.appendChild(plantCard);
    });
}

// Initial display of plants
displayPlants(ediblePlants);

// Function to Sort Plants Based on Selected Option
function sortPlants() {
    const sortOption = document.getElementById('sort').value;
    let sortedPlants = [...ediblePlants]; // Create a copy of the tropicalPlants array

    // Sort by alphabetical order, low-to-high price, or high-to-low price
    if (sortOption === 'alphabetical') {
        sortedPlants.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'price-low-to-high') {
        sortedPlants.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-high-to-low') {
        sortedPlants.sort((a, b) => b.price - a.price);
    }

    // Display the sorted plants
    displayPlants(sortedPlants);
}