// Category: All plants
const allPlants = [
    // Category: Tropical Plants
    { name: 'Swiss Cheese Plant', latin: 'Monstera deliciosa', link: '/monstera.html', image: '/images/monstera.png', price: 25 },
    { name: 'Fiddle Leaf Fig', latin: 'Ficus lyrata', link: '/fiddle-leaf-fig.html', image: '/images/fiddleleaf.webp', price: 35 },
    { name: 'Bird of Paradise', latin: 'Strelitzia reginae', link: '/bird-of-paradise.html', image: '/images/bird-of-paradise.jpg', price: 45 },
    { name: 'Rubber Plant', latin: 'Ficus elastica', link: '/rubber-plant.html', image: '/images/rubber-plant.jpg', price: 30 },
    { name: 'Alocasia', latin: 'Alocasia amazonica', link: '/alocasia.html', image: '/images/alocasia.jpg', price: 40 },
    { name: 'Areca Palm', latin: 'Dypsis lutescens', link: '/areca-palm.html', image: '/images/areca-palm.jpg', price: 50 },
    { name: 'Philodendron', latin: 'Philodendron hederaceum', link: '/philodendron.html', image: '/images/philodendron.jpg', price: 20 },
    { name: 'Bamboo Palm', latin: 'Chamaedorea seifrizii', link: '/bamboo-palm.html', image: '/images/bamboo-palm.jpg', price: 28 },
    { name: 'Dwarf Date Palm', latin: 'Phoenix roebelenii', link: '/dwarf-date-palm.html', image: '/images/dwarf-date-palm.jpg', price: 55 },
    { name: 'Banana Plant', latin: 'Musa', link: '/banana-plant.html', image: '/images/banana-plant.jpg', price: 60 },
    { name: 'Azores Jasmine', latin: 'Jasminum azoricum', link: '/azores-jasmine.html', image: '/images/jasmine.jpg', price: 32 },
    { name: 'Elephant Ear', latin: 'Colocasia esculenta', link: '/elephant-ear.html', image: '/images/elephant-ear.jpg', price: 38 },
    { name: 'Croton', latin: 'Codiaeum variegatum', link: '/croton.html', image: '/images/croton.jpg', price: 25 },
    { name: 'Split-Leaf Philodendron', latin: 'Philodendron bipinnatifidum', link: '/split-leaf-philodendron.html', image: '/images/split-leaf-philodendron.jpg', price: 42 },
    { name: 'Bird’s Nest Fern', latin: 'Asplenium nidus', link: '/birds-nest-fern.html', image: '/images/birds-nest-fern.jpg', price: 35 }, // New
    { name: 'Majesty Palm', latin: 'Ravenea rivularis', link: '/majesty-palm.html', image: '/images/majesty-palm.jpg', price: 45 }, // New
    { name: 'Prayer Plant', latin: 'Maranta leuconeura', link: '/prayer-plant.html', image: '/images/prayer-plant.jpg', price: 25 }, // New
    { name: 'Chinese Evergreen', latin: 'Aglaonema commutatum', link: '/chinese-evergreen.html', image: '/images/chinese-evergreen.jpg', price: 28 }, // New
    { name: 'Kentia Palm', latin: 'Howea forsteriana', link: '/kentia-palm.html', image: '/images/kentia-palm.jpg', price: 60 }, // New
    { name: 'Cordyline', latin: 'Cordyline fruticosa', link: '/cordyline.html', image: '/images/cordyline.jpg', price: 30 }, // New

    // Category: Flowering Plants
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
    { name: 'Bird of Paradise (White)', latin: 'Strelitzia nicolai', link: '/white-bird-of-paradise.html', image: '/images/white-bird-of-paradise.jpg', price: 65 }, // New
    { name: 'Hibiscus (Yellow)', latin: 'Hibiscus rosa-sinensis', link: '/hibiscus-yellow.html', image: '/images/hibiscus-yellow.jpg', price: 20 }, // New
    { name: 'Clivia', latin: 'Clivia miniata', link: '/clivia.html', image: '/images/clivia.jpg', price: 45 }, // New
    { name: 'Oleander', latin: 'Nerium oleander', link: '/oleander.html', image: '/images/oleander.jpg', price: 30 }, // New
    { name: 'Kalanchoe', latin: 'Kalanchoe blossfeldiana', link: '/kalanchoe.html', image: '/images/kalanchoe.jpg', price: 15 }, // New
    { name: 'Impatiens', latin: 'Impatiens walleriana', link: '/impatiens.html', image: '/images/impatiens.jpg', price: 12 }, // New

    // Category: Succulents & Cacti
    { name: 'Snake Plant', latin: 'Sansevieria trifasciata', link: '/snake-plant.html', image: '/images/snake-plant.jpg', price: 20 },
    { name: 'String of Pearls', latin: 'Senecio rowleyanus', link: '/string-of-pearls.html', image: '/images/string-of-pearls.jpg', price: 18 },
    { name: 'Aloe Vera', latin: 'Aloe barbadensis miller', link: '/aloe-vera.html', image: '/images/aloe-vera.jpg', price: 15 },
    { name: 'Jade Plant', latin: 'Crassula ovata', link: '/jade-plant.html', image: '/images/jade-plant.jpg', price: 25 },
    { name: 'Echeveria', latin: 'Echeveria elegans', link: '/echeveria.html', image: '/images/echeveria.jpg', price: 12 },
    { name: 'Burro’s Tail', latin: 'Sedum morganianum', link: '/burros-tail.html', image: '/images/burros-tail.jpg', price: 22 },
    { name: 'Haworthia', latin: 'Haworthia fasciata', link: '/haworthia.html', image: '/images/haworthia.jpg', price: 14 },
    { name: 'Pincushion Cactus', latin: 'Mammillaria', link: '/pincushion-cactus.html', image: '/images/pincushion-cactus.jpg', price: 10 },
    { name: 'Zebra Plant', latin: 'Haworthiopsis attenuata', link: '/zebra-plant.html', image: '/images/zebra-plant.jpg', price: 16 },
    { name: 'Star Cactus', latin: 'Astrophytum asterias', link: '/star-cactus.html', image: '/images/starcactus.jpg', price: 28 },
    { name: 'Blue Chalksticks', latin: 'Senecio serpens', link: '/blue-chalksticks.html', image: '/images/blue-chalksticks.jpg', price: 19 },
    { name: 'Barrel Cactus', latin: 'Ferocactus cylindraceus', link: '/barrel-cactus.html', image: '/images/barrel-cactus.jpg', price: 35 },
    { name: 'Lithops', latin: 'Lithops aucampiae', link: '/lithops.html', image: '/images/lithops.jpg', price: 30 },
    { name: 'Agave', latin: 'Agave americana', link: '/agave.html', image: '/images/agave.jpg', price: 40 }, // New
    { name: 'Christmas Cactus', latin: 'Schlumbergera bridgesii', link: '/christmas-cactus.html', image: '/images/christmas-cactus.jpg', price: 24 }, // New
    { name: 'String of Dolphins', latin: 'Senecio peregrinus', link: '/string-of-dolphins.html', image: '/images/string-of-dolphins.jpg', price: 22 }, // New
    { name: 'Fishbone Cactus', latin: 'Epiphyllum anguliger', link: '/fishbone-cactus.html', image: '/images/fishbone-cactus.jpg', price: 35 }, // New
    { name: 'Fairy Castle Cactus', latin: 'Acanthocereus tetragonus', link: '/fairy-castle-cactus.html', image: '/images/fairy-castle-cactus.jpg', price: 30 }, // New
    { name: 'Mistletoe Cactus', latin: 'Rhipsalis baccifera', link: '/mistletoe-cactus.html', image: '/images/mistletoe-cactus.jpg', price: 18 }, // New

    // Category: Edible & Herbal Plants
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
    { name: 'Sage', latin: 'Salvia officinalis', link: '/sage.html', image: '/images/sage.jpg', price: 10 },
    { name: 'Lemongrass', latin: 'Cymbopogon citratus', link: '/lemongrass.html', image: '/images/lemongrass.jpg', price: 15 }, // New
    { name: 'Bay Laurel', latin: 'Laurus nobilis', link: '/bay-laurel.html', image: '/images/bay-laurel.jpg', price: 18 }, // New
    { name: 'Dill', latin: 'Anethum graveolens', link: '/dill.html', image: '/images/dill.jpg', price: 8 }, // New
    { name: 'Peppermint', latin: 'Mentha × piperita', link: '/peppermint.html', image: '/images/peppermint.jpg', price: 10 }, // New
    { name: 'Lemon Balm', latin: 'Melissa officinalis', link: '/lemon-balm.html', image: '/images/lemon-balm.jpg', price: 12 }, // New
    { name: 'Stevia', latin: 'Stevia rebaudiana', link: '/stevia.html', image: '/images/stevia.jpg', price: 15 }, // New

    // Category: Air Purifying Plants
    { name: 'ZZ Plant', latin: 'Zamioculcas zamiifolia', link: '/zz-plant.html', image: '/images/zz-plant.jpg', price: 30 },
    { name: 'Chinese Money Plant', latin: 'Pilea peperomioides', link: '/chinese-money-plant.html', image: '/images/chinese-money-plant.jpg', price: 25 },
    { name: 'Calathea', latin: 'Calathea orbifolia', link: '/calathea.html', image: '/images/calathea.jpg', price: 35 },
    { name: 'Spider Plant', latin: 'Chlorophytum comosum', link: '/spider-plant.html', image: '/images/spider-plant.jpg', price: 18 },
    { name: 'Boston Fern', latin: 'Nephrolepis exaltata', link: '/boston-fern.html', image: '/images/boston-fern.jpg', price: 22 },
    { name: 'English Ivy', latin: 'Hedera helix', link: '/english-ivy.html', image: '/images/english-ivy.jpg', price: 15 },
    { name: 'Golden Pothos', latin: 'Epipremnum aureum', link: '/golden-pothos.html', image: '/images/golden-pothos.jpg', price: 20 },
    { name: 'Philodendron', latin: 'Philodendron hederaceum', link: '/philodendron.html', image: '/images/philodendron.jpg', price: 24 },
    { name: 'Dwarf Date Palm', latin: 'Phoenix roebelenii', link: '/dwarf-date-palm.html', image: '/images/dwarf-date-palm.jpg', price: 55 },
    { name: 'Peace Lily (Variegated)', latin: 'Spathiphyllum sensation', link: '/peace-lily-variegated.html', image: '/images/peace-lily-variegated.jpg', price: 40 },
    { name: 'Fiddle Leaf Fig (Bambino)', latin: 'Ficus lyrata Bambino', link: '/fiddle-leaf-fig-bambino.html', image: '/images/fiddle-leaf-fig-bambino.jpg', price: 35 }, // New
    { name: 'Peperomia', latin: 'Peperomia obtusifolia', link: '/peperomia.html', image: '/images/peperomia.jpg', price: 18 }, // New
    { name: 'Cast Iron Plant', latin: 'Aspidistra elatior', link: '/cast-iron-plant.html', image: '/images/cast-iron-plant.jpg', price: 28 }, // New
    { name: 'Corn Plant', latin: 'Dracaena fragrans', link: '/corn-plant.html', image: '/images/corn-plant.jpg', price: 45 }, // New
    { name: 'Ponytail Palm', latin: 'Beaucarnea recurvata', link: '/ponytail-palm.html', image: '/images/ponytail-palm.jpg', price: 40 }, // New
    { name: 'Dragon Tree', latin: 'Dracaena marginata', link: '/dragon-tree.html', image: '/images/dragon-tree.jpg', price: 38 } // New
];

// Function to Display the List of Plants
function displayPlants(plants) {
    const plantListContainer = document.getElementById('plant-list');
    if (!plantListContainer) {
        console.error("Error: 'plant-list' container not found in HTML.");
        return;
    }
    plantListContainer.innerHTML = ''; // Clear any existing content

    // Create a plant card for each plant and add it to the container
    plants.forEach(plant => {
        if (plant.name && plant.link && plant.image) { // Check required properties
            const plantCard = document.createElement('div');
            plantCard.classList.add('plant-card');

            // Plant card content with link to the plant page
            plantCard.innerHTML = `
                <a href="${plant.link}">
                    <img src="${plant.image}" alt="${plant.name}">
                    <h2>${plant.name}</h2>
                    <h3>${plant.latin}</h3>
                    <p>$${plant.price ? plant.price.toFixed(2) : 'N/A'}</p> <!-- Handle missing price -->
                </a>
            `;

            // Append the card to the plant list container
            plantListContainer.appendChild(plantCard);
        } else {
            console.warn(`Missing information for plant: ${JSON.stringify(plant)}`);
        }
    });
}

// Sort and display plants alphabetically by default
const sortedAlphabetically = [...allPlants].sort((a, b) => a.name.localeCompare(b.name));
displayPlants(sortedAlphabetically);

// Function to Sort Plants Based on Selected Option
function sortPlants() {
    const sortOption = document.getElementById('sort').value;
    let sortedPlants = [...allPlants]; // Create a copy of the allPlants array

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