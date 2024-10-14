// Flowering Plant Data Array with Prices
const floweringPlants = [
    { name: 'Peace Lily', latin: 'Spathiphyllum wallisii', link: '/peace-lily.html', image: '/images/peace-lily.jpg', price: 32 },
    { name: 'African Violet', latin: 'Saintpaulia ionantha', link: '/african-violet.html', image: '/images/african-violet.jpg', price: 28 },
    { name: 'Hibiscus', latin: 'Hibiscus rosa-sinensis', link: '/hibiscus.html', image: '/images/hibiscus.jpg', price: 45 },
    { name: 'Orchid', latin: 'Phalaenopsis', link: '/orchid.html', image: '/images/orchid.jpg', price: 50 },
    { name: 'Anthurium', latin: 'Anthurium andraeanum', link: '/anthurium.html', image: '/images/anthurium.jpg', price: 38 },
    { name: 'Jasmine', latin: 'Jasminum polyanthum', link: '/jasmine.html', image: '/images/jasmine.jpg', price: 35 },
    { name: 'Bougainvillea', latin: 'Bougainvillea glabra', link: '/bougainvillea.html', image: '/images/bougainvillea.jpg', price: 40 },
    { name: 'Gardenia', latin: 'Gardenia jasminoides', link: '/gardenia.html', image: '/images/gardenia.jpg', price: 42 },
    { name: 'Lavender', latin: 'Lavandula angustifolia', link: '/lavender.html', image: '/images/lavender.jpg', price: 30 },
    { name: 'Begonia', latin: 'Begonia rex', link: '/begonia.html', image: '/images/begonia.jpg', price: 25 },
    { name: 'Camellia', latin: 'Camellia japonica', link: '/camellia.html', image: '/images/camellia.jpg', price: 55 },
    { name: 'Geranium', latin: 'Pelargonium graveolens', link: '/geranium.html', image: '/images/geranium.jpg', price: 20 },
    { name: 'Petunia', latin: 'Petunia hybrida', link: '/petunia.html', image: '/images/petunia.jpg', price: 18 },
    { name: 'Marigold', latin: 'Tagetes erecta', link: '/marigold.html', image: '/images/marigold.jpg', price: 15 },
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
displayPlants(floweringPlants);

// Function to Sort Plants Based on Selected Option
function sortPlants() {
    const sortOption = document.getElementById('sort').value;
    let sortedPlants = [...floweringPlants]; // Create a copy of the floweringPlants array

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