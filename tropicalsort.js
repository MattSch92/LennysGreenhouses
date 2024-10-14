// Tropical Plant Data Array with Prices
const tropicalPlants = [
    { name: 'Swiss Cheese Plant', latin: 'Monstera deliciosa', link: 'monstera.html', image: 'monstera.png', price: 25 },
    { name: 'Fiddle Leaf Fig', latin: 'Ficus lyrata', link: 'fiddle-leaf-fig.html', image: 'fiddleleaf.webp', price: 35 },
    { name: 'Bird of Paradise', latin: 'Strelitzia reginae', link: 'bird-of-paradise.html', image: 'bird-of-paradise.jpg', price: 45 },
    { name: 'Rubber Plant', latin: 'Ficus elastica', link: 'rubber-plant.html', image: 'rubber-plant.jpg', price: 30 },
    { name: 'Alocasia', latin: 'Alocasia amazonica', link: 'alocasia.html', image: 'alocasia.jpg', price: 40 },
    { name: 'Areca Palm', latin: 'Dypsis lutescens', link: 'areca-palm.html', image: 'areca-palm.jpg', price: 50 },
    { name: 'Philodendron', latin: 'Philodendron hederaceum', link: 'philodendron.html', image: 'philodendron.jpg', price: 20 },
    { name: 'Bamboo Palm', latin: 'Chamaedorea seifrizii', link: 'bamboo-palm.html', image: 'bamboo-palm.jpg', price: 28 },
    { name: 'Dwarf Date Palm', latin: 'Phoenix roebelenii', link: 'dwarf-date-palm.html', image: 'dwarf-date-palm.jpg', price: 55 },
    { name: 'Banana Plant', latin: 'Musa', link: 'banana-plant.html', image: 'banana-plant.jpg', price: 60 },
    { name: 'Azores Jasmine', latin: 'Jasminum azoricum', link: 'azores-jasmine.html', image: 'jasmine.jpg', price: 32 },
    { name: 'Elephant Ear', latin: 'Colocasia esculenta', link: 'elephant-ear.html', image: 'elephant-ear.jpg', price: 38 },
    { name: 'Croton', latin: 'Codiaeum variegatum', link: 'croton.html', image: 'croton.jpg', price: 25 },
    { name: 'Split-Leaf Philodendron', latin: 'Philodendron bipinnatifidum', link: 'split-leaf-philodendron.html', image: 'split-leaf-philodendron.jpg', price: 42 },
    { name: 'Bird’s Nest Fern', latin: 'Asplenium nidus', link: 'birds-nest-fern.html', image: 'birds-nest-fern.jpg', price: 35 }, // New
    { name: 'Majesty Palm', latin: 'Ravenea rivularis', link: 'majesty-palm.html', image: 'majesty-palm.jpg', price: 45 }, // New
    { name: 'Prayer Plant', latin: 'Maranta leuconeura', link: 'prayer-plant.html', image: 'prayer-plant.jpg', price: 25 }, // New
    { name: 'Chinese Evergreen', latin: 'Aglaonema commutatum', link: 'chinese-evergreen.html', image: 'chinese-evergreen.jpg', price: 28 }, // New
    { name: 'Kentia Palm', latin: 'Howea forsteriana', link: 'kentia-palm.html', image: 'kentia-palm.jpg', price: 60 }, // New
    { name: 'Cordyline', latin: 'Cordyline fruticosa', link: 'cordyline.html', image: 'cordyline.jpg', price: 30 }, // New
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
displayPlants(tropicalPlants);

// Function to Sort Plants Based on Selected Option
function sortPlants() {
    const sortOption = document.getElementById('sort').value;
    let sortedPlants = [...tropicalPlants]; // Create a copy of the tropicalPlants array

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