// Category: Edible & Herbal Plants
const ediblePlants = [
    { name: 'Lemon Tree', latin: 'Citrus limon', link: 'lemon-tree.html', image: 'lemontree.jpg', price: 50 },
    { name: 'Strawberry Plant', latin: 'Fragaria x ananassa', link: 'strawberry-plant.html', image: 'strawberry-plant.jpg', price: 15 },
    { name: 'Basil', latin: 'Ocimum basilicum', link: 'basil.html', image: 'basil.jpg', price: 8 },
    { name: 'Rosemary', latin: 'Salvia rosmarinus', link: 'rosemary.html', image: 'rosemary.jpg', price: 12 },
    { name: 'Mint', latin: 'Mentha spicata', link: 'mint.html', image: 'mint.jpg', price: 10 },
    { name: 'Pepper Plant', latin: 'Capsicum annuum', link: 'pepper-plant.html', image: 'pepper-plant.jpg', price: 18 },
    { name: 'Tomato Plant', latin: 'Solanum lycopersicum', link: 'tomato-plant.html', image: 'tomato-plant.jpg', price: 20 },
    { name: 'Thyme', latin: 'Thymus vulgaris', link: 'thyme.html', image: 'thyme.jpg', price: 9 },
    { name: 'Chives', latin: 'Allium schoenoprasum', link: 'chives.html', image: 'chives.jpg', price: 7 },
    { name: 'Oregano', latin: 'Origanum vulgare', link: 'oregano.html', image: 'oregano.jpg', price: 8 },
    { name: 'Parsley', latin: 'Petroselinum crispum', link: 'parsley.html', image: 'parsley.jpg', price: 8 },
    { name: 'Cilantro', latin: 'Coriandrum sativum', link: 'cilantro.html', image: 'cilantro.jpg', price: 7 },
    { name: 'Lavender', latin: 'Lavandula angustifolia', link: 'lavender-herbal.html', image: 'lavender.jpg', price: 12 },
    { name: 'Sage', latin: 'Salvia officinalis', link: 'sage.html', image: 'sage.jpg', price: 10 },
    { name: 'Lemongrass', latin: 'Cymbopogon citratus', link: 'lemongrass.html', image: 'lemongrass.jpg', price: 15 }, // New
    { name: 'Bay Laurel', latin: 'Laurus nobilis', link: 'bay-laurel.html', image: 'bay-laurel.jpg', price: 18 }, // New
    { name: 'Dill', latin: 'Anethum graveolens', link: 'dill.html', image: 'dill.jpg', price: 8 }, // New
    { name: 'Peppermint', latin: 'Mentha × piperita', link: 'peppermint.html', image: 'peppermint.jpg', price: 10 }, // New
    { name: 'Lemon Balm', latin: 'Melissa officinalis', link: 'lemon-balm.html', image: 'lemon-balm.jpg', price: 12 }, // New
    { name: 'Stevia', latin: 'Stevia rebaudiana', link: 'stevia.html', image: 'stevia.jpg', price: 15 } // New
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