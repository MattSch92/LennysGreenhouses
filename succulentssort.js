// Succuelent Plant Data Array with Prices
const succulentPlants = [
    { name: 'Snake Plant', latin: 'Sansevieria trifasciata', link: 'snake-plant.html', image: 'images/snake-plant.jpg', price: 20 },
    { name: 'String of Pearls', latin: 'Senecio rowleyanus', link: 'string-of-pearls.html', image: 'images/string-of-pearls.jpg', price: 18 },
    { name: 'Aloe Vera', latin: 'Aloe barbadensis miller', link: 'aloe-vera.html', image: 'images/aloe-vera.jpg', price: 15 },
    { name: 'Jade Plant', latin: 'Crassula ovata', link: 'jade-plant.html', image: 'images/jade-plant.jpg', price: 25 },
    { name: 'Echeveria', latin: 'Echeveria elegans', link: 'echeveria.html', image: 'images/echeveria.jpg', price: 12 },
    { name: 'Burro’s Tail', latin: 'Sedum morganianum', link: 'burros-tail.html', image: 'images/burros-tail.jpg', price: 22 },
    { name: 'Haworthia', latin: 'Haworthia fasciata', link: 'haworthia.html', image: 'images/haworthia.jpg', price: 14 },
    { name: 'Pincushion Cactus', latin: 'Mammillaria', link: 'pincushion-cactus.html', image: 'images/pincushion-cactus.jpg', price: 10 },
    { name: 'Zebra Plant', latin: 'Haworthiopsis attenuata', link: 'zebra-plant.html', image: 'images/zebra-plant.jpg', price: 16 },
    { name: 'Star Cactus', latin: 'Astrophytum asterias', link: 'star-cactus.html', image: 'images/starcactus.jpg', price: 28 },
    { name: 'Blue Chalksticks', latin: 'Senecio serpens', link: 'blue-chalksticks.html', image: 'images/blue-chalksticks.jpg', price: 19 },
    { name: 'Barrel Cactus', latin: 'Ferocactus cylindraceus', link: 'barrel-cactus.html', image: '//barrel-cactus.jpg', price: 35 },
    { name: 'Christmas Cactus', latin: 'Schlumbergera bridgesii', link: 'christmas-cactus.html', image: 'images/christmas-cactus.jpg', price: 24 },
    { name: 'Lithops', latin: 'Lithops aucampiae', link: 'lithops.html', image: 'lithops.jpg', price: 30 },
    { name: 'Agave', latin: 'Agave americana', link: 'agave.html', image: 'agave.jpg', price: 40 }, // New
    { name: 'String of Dolphins', latin: 'Senecio peregrinus', link: 'string-of-dolphins.html', image: 'string-of-dolphins.jpg', price: 22 }, // New
    { name: 'Fishbone Cactus', latin: 'Epiphyllum anguliger', link: 'fishbone-cactus.html', image: 'fishbone-cactus.jpg', price: 35 }, // New
    { name: 'Fairy Castle Cactus', latin: 'Acanthocereus tetragonus', link: 'fairy-castle-cactus.html', image: 'fairy-castle-cactus.jpg', price: 30 }, // New
    { name: 'Mistletoe Cactus', latin: 'Rhipsalis baccifera', link: 'mistletoe-cactus.html', image: 'mistletoe-cactus.jpg', price: 18 } // New
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
displayPlants(succulentPlants);

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