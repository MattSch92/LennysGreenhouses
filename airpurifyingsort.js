// Category: Air purifying plants
const airpurifyingPlants = [
    { name: 'ZZ Plant', latin: 'Zamioculcas zamiifolia', link: 'zz-plant.html', image: 'zz-plant.jpg', price: 30 },
    { name: 'Chinese Money Plant', latin: 'Pilea peperomioides', link: 'chinese-money-plant.html', image: 'chinese-money-plant.jpg', price: 25 },
    { name: 'Calathea', latin: 'Calathea orbifolia', link: 'calathea.html', image: 'calathea.jpg', price: 35 },
    { name: 'Spider Plant', latin: 'Chlorophytum comosum', link: 'spider-plant.html', image: 'spider-plant.jpg', price: 18 },
    { name: 'Boston Fern', latin: 'Nephrolepis exaltata', link: 'boston-fern.html', image: 'boston-fern.jpg', price: 22 },
    { name: 'English Ivy', latin: 'Hedera helix', link: 'english-ivy.html', image: 'english-ivy.jpg', price: 15 },
    { name: 'Golden Pothos', latin: 'Epipremnum aureum', link: 'golden-pothos.html', image: 'golden-pothos.jpg', price: 20 },
    { name: 'Peace Lily', latin: 'Spathiphyllum wallisii', link: 'peace-lily.html', image: 'peace-lily.jpg', price: 32 },
    { name: 'Rubber Plant', latin: 'Ficus elastica', link: 'rubber-plant.html', image: 'rubber-plant.jpg', price: 28 },
    { name: 'Philodendron', latin: 'Philodendron hederaceum', link: 'philodendron.html', image: 'philodendron.jpg', price: 24 },
    { name: 'Areca Palm', latin: 'Dypsis lutescens', link: 'areca-palm.html', image: 'areca-palm.jpg', price: 45 },
    { name: 'Dwarf Date Palm', latin: 'Phoenix roebelenii', link: 'dwarf-date-palm.html', image: 'dwarf-date-palm.jpg', price: 55 },
    { name: 'Bamboo Palm', latin: 'Chamaedorea seifrizii', link: 'bamboo-palm.html', image: 'bamboo-palm.jpg', price: 38 },
    { name: 'Peace Lily (Variegated)', latin: 'Spathiphyllum sensation', link: 'peace-lily-variegated.html', image: 'peace-lily-variegated.jpg', price: 40 },
    { name: 'Fiddle Leaf Fig (Bambino)', latin: 'Ficus lyrata Bambino', link: 'fiddle-leaf-fig-bambino.html', image: 'fiddle-leaf-fig-bambino.jpg', price: 35 }, // New
    { name: 'Peperomia', latin: 'Peperomia obtusifolia', link: 'peperomia.html', image: 'peperomia.jpg', price: 18 }, // New
    { name: 'Cast Iron Plant', latin: 'Aspidistra elatior', link: 'cast-iron-plant.html', image: 'cast-iron-plant.jpg', price: 28 }, // New
    { name: 'Corn Plant', latin: 'Dracaena fragrans', link: 'corn-plant.html', image: 'corn-plant.jpg', price: 45 }, // New
    { name: 'Ponytail Palm', latin: 'Beaucarnea recurvata', link: 'ponytail-palm.html', image: 'ponytail-palm.jpg', price: 40 }, // New
    { name: 'Dragon Tree', latin: 'Dracaena marginata', link: 'dragon-tree.html', image: 'dragon-tree.jpg', price: 38 } // New
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
displayPlants(airpurifyingPlants);

// Function to Sort Plants Based on Selected Option
function sortPlants() {
    const sortOption = document.getElementById('sort').value;
    let sortedPlants = [...airpurifyingPlants]; // Create a copy of the tropicalPlants array

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