// Category: New Plants
const newPlants = [
    { name: 'Bird’s Nest Fern', latin: 'Asplenium nidus', link: '/birds-nest-fern.html', image: '/images/birds-nest-fern.jpg', price: 35 }, // New
    { name: 'Majesty Palm', latin: 'Ravenea rivularis', link: '/majesty-palm.html', image: '/images/majesty-palm.jpg', price: 45 }, // New
    { name: 'Prayer Plant', latin: 'Maranta leuconeura', link: '/prayer-plant.html', image: '/images/prayer-plant.jpg', price: 25 }, // New
    { name: 'Chinese Evergreen', latin: 'Aglaonema commutatum', link: '/chinese-evergreen.html', image: '/images/chinese-evergreen.jpg', price: 28 }, // New
    { name: 'Kentia Palm', latin: 'Howea forsteriana', link: '/kentia-palm.html', image: '/images/kentia-palm.jpg', price: 60 }, // New
    { name: 'Cordyline', latin: 'Cordyline fruticosa', link: '/cordyline.html', image: '/images/cordyline.jpg', price: 30 }, // New
    { name: 'Bird of Paradise (White)', latin: 'Strelitzia nicolai', link: '/white-bird-of-paradise.html', image: '/images/white-bird-of-paradise.jpg', price: 65 }, // New
    { name: 'Hibiscus (Yellow)', latin: 'Hibiscus rosa-sinensis', link: '/hibiscus-yellow.html', image: '/images/hibiscus-yellow.jpg', price: 20 }, // New
    { name: 'String of Dolphins', latin: 'Senecio peregrinus', link: '/string-of-dolphins.html', image: '/images/string-of-dolphins.jpg', price: 22 }, // New
    { name: 'Fishbone Cactus', latin: 'Epiphyllum anguliger', link: '/fishbone-cactus.html', image: '/images/fishbone-cactus.jpg', price: 35 }, // New
    { name: 'Fairy Castle Cactus', latin: 'Acanthocereus tetragonus', link: '/fairy-castle-cactus.html', image: '/images/fairy-castle-cactus.jpg', price: 30 }, // New
    { name: 'Mistletoe Cactus', latin: 'Rhipsalis baccifera', link: '/mistletoe-cactus.html', image: '/images/mistletoe-cactus.jpg', price: 18 }, // New
    { name: 'Lemongrass', latin: 'Cymbopogon citratus', link: '/lemongrass.html', image: '/images/lemongrass.jpg', price: 15 }, // New
    { name: 'Corn Plant', latin: 'Dracaena fragrans', link: '/corn-plant.html', image: '/images/corn-plant.jpg', price: 45 }, // New
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
displayPlants(newPlants);

// Function to Sort Plants Based on Selected Option
function sortPlants() {
    const sortOption = document.getElementById('sort').value;
    let sortedPlants = [...newPlants]; // Create a copy of the tropicalPlants array

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