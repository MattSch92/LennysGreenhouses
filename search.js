// Plant Data Array (Common Name, Latin Name, HTML Page Link, and Image Path)
const plants = [
    // Category: Tropical Plants
    { name: 'Swiss Cheese Plant', latin: 'Monstera deliciosa', link: 'monstera.html', image: 'images/monstera.png', price: 25 },
    { name: 'Fiddle Leaf Fig', latin: 'Ficus lyrata', link: 'fiddle-leaf-fig.html', image: 'images/fiddleleaf.webp', price: 35 },
    { name: 'Bird of Paradise', latin: 'Strelitzia reginae', link: 'bird-of-paradise.html', image: 'images/bird-of-paradise.jpg', price: 45 },
    { name: 'Rubber Plant', latin: 'Ficus elastica', link: 'rubber-plant.html', image: 'images/rubber-plant.jpg', price: 30 },
    { name: 'Alocasia', latin: 'Alocasia amazonica', link: 'alocasia.html', image: 'images/alocasia.jpg', price: 40 },
    { name: 'Areca Palm', latin: 'Dypsis lutescens', link: 'areca-palm.html', image: 'images/areca-palm.jpg', price: 50 },
    { name: 'Philodendron', latin: 'Philodendron hederaceum', link: 'philodendron.html', image: 'images/philodendron.jpg', price: 20 },
    { name: 'Bamboo Palm', latin: 'Chamaedorea seifrizii', link: 'bamboo-palm.html', image: 'images/bamboo-palm.jpg', price: 28 },
    { name: 'Dwarf Date Palm', latin: 'Phoenix roebelenii', link: 'dwarf-date-palm.html', image: 'images/dwarf-date-palm.jpg', price: 55 },
    { name: 'Banana Plant', latin: 'Musa', link: 'banana-plant.html', image: 'images/banana-plant.jpg', price: 60 },
    { name: 'Azores Jasmine', latin: 'Jasminum azoricum', link: 'azores-jasmine.html', image: 'images/jasmine.jpg', price: 32 },
    { name: 'Elephant Ear', latin: 'Colocasia esculenta', link: 'elephant-ear.html', image: 'images/elephant-ear.jpg', price: 38 },
    { name: 'Croton', latin: 'Codiaeum variegatum', link: 'croton.html', image: 'images/croton.jpg', price: 25 },
    { name: 'Split-Leaf Philodendron', latin: 'Philodendron bipinnatifidum', link: 'split-leaf-philodendron.html', image: 'images/split-leaf-philodendron.jpg', price: 42 },
    { name: 'Bird’s Nest Fern', latin: 'Asplenium nidus', link: 'birds-nest-fern.html', image: 'birds-nest-fern.jpg', price: 35 }, // New
    { name: 'Majesty Palm', latin: 'Ravenea rivularis', link: 'majesty-palm.html', image: 'majesty-palm.jpg', price: 45 }, // New
    { name: 'Prayer Plant', latin: 'Maranta leuconeura', link: 'prayer-plant.html', image: 'prayer-plant.jpg', price: 25 }, // New
    { name: 'Chinese Evergreen', latin: 'Aglaonema commutatum', link: 'chinese-evergreen.html', image: 'chinese-evergreen.jpg', price: 28 }, // New
    { name: 'Kentia Palm', latin: 'Howea forsteriana', link: 'kentia-palm.html', image: 'kentia-palm.jpg', price: 60 }, // New
    { name: 'Cordyline', latin: 'Cordyline fruticosa', link: 'cordyline.html', image: 'cordyline.jpg', price: 30 }, // New

    // Category: Flowering Plants
    { name: 'Peace Lily', latin: 'Spathiphyllum wallisii', link: 'peace-lily.html', image: 'peace-lily.jpg', price: 32 },
    { name: 'African Violet', latin: 'Saintpaulia ionantha', link: 'african-violet.html', image: 'african-violet.jpg', price: 28 },
    { name: 'Hibiscus', latin: 'Hibiscus rosa-sinensis', link: 'hibiscus.html', image: 'hibiscus.jpg', price: 45 },
    { name: 'Orchid', latin: 'Phalaenopsis', link: 'orchid.html', image: 'orchid.jpg', price: 50 },
    { name: 'Anthurium', latin: 'Anthurium andraeanum', link: 'anthurium.html', image: 'anthurium.jpg', price: 38 },
    { name: 'Jasmine', latin: 'Jasminum polyanthum', link: 'jasmine.html', image: 'jasmine.jpg', price: 35 },
    { name: 'Bougainvillea', latin: 'Bougainvillea glabra', link: 'bougainvillea.html', image: 'bougainvillea.jpg', price: 40 },
    { name: 'Gardenia', latin: 'Gardenia jasminoides', link: 'gardenia.html', image: 'gardenia.jpg', price: 42 },
    { name: 'Lavender', latin: 'Lavandula angustifolia', link: 'lavender.html', image: 'lavender.jpg', price: 30 },
    { name: 'Begonia', latin: 'Begonia rex', link: 'begonia.html', image: 'begonia.jpg', price: 25 },
    { name: 'Camellia', latin: 'Camellia japonica', link: 'camellia.html', image: 'camellia.jpg', price: 55 },
    { name: 'Geranium', latin: 'Pelargonium graveolens', link: 'geranium.html', image: 'geranium.jpg', price: 20 },
    { name: 'Petunia', latin: 'Petunia hybrida', link: 'petunia.html', image: 'petunia.jpg', price: 18 },
    { name: 'Marigold', latin: 'Tagetes erecta', link: 'marigold.html', image: 'marigold.jpg', price: 15 },
    { name: 'Bird of Paradise (White)', latin: 'Strelitzia nicolai', link: 'white-bird-of-paradise.html', image: 'white-bird-of-paradise.jpg', price: 65 }, // New
    { name: 'Hibiscus (Yellow)', latin: 'Hibiscus rosa-sinensis', link: 'hibiscus-yellow.html', image: 'hibiscus-yellow.jpg', price: 20 }, // New
    { name: 'Clivia', latin: 'Clivia miniata', link: 'clivia.html', image: 'clivia.jpg', price: 45 }, // New
    { name: 'Oleander', latin: 'Nerium oleander', link: 'oleander.html', image: 'oleander.jpg', price: 30 }, // New
    { name: 'Kalanchoe', latin: 'Kalanchoe blossfeldiana', link: 'kalanchoe.html', image: 'kalanchoe.jpg', price: 15 }, // New
    { name: 'Impatiens', latin: 'Impatiens walleriana', link: 'impatiens.html', image: 'impatiens.jpg', price: 12 }, // New

    // Category: Succulents & Cacti
    { name: 'Snake Plant', latin: 'Sansevieria trifasciata', link: 'snake-plant.html', image: 'snake-plant.jpg', price: 20 },
    { name: 'String of Pearls', latin: 'Senecio rowleyanus', link: 'string-of-pearls.html', image: 'string-of-pearls.jpg', price: 18 },
    { name: 'Aloe Vera', latin: 'Aloe barbadensis miller', link: 'aloe-vera.html', image: 'aloe-vera.jpg', price: 15 },
    { name: 'Jade Plant', latin: 'Crassula ovata', link: 'jade-plant.html', image: 'jade-plant.jpg', price: 25 },
    { name: 'Echeveria', latin: 'Echeveria elegans', link: 'echeveria.html', image: 'echeveria.jpg', price: 12 },
    { name: 'Burro’s Tail', latin: 'Sedum morganianum', link: 'burros-tail.html', image: 'burros-tail.jpg', price: 22 },
    { name: 'Haworthia', latin: 'Haworthia fasciata', link: 'haworthia.html', image: 'haworthia.jpg', price: 14 },
    { name: 'Pincushion Cactus', latin: 'Mammillaria', link: 'pincushion-cactus.html', image: 'pincushion-cactus.jpg', price: 10 },
    { name: 'Zebra Plant', latin: 'Haworthiopsis attenuata', link: 'zebra-plant.html', image: 'zebra-plant.jpg', price: 16 },
    { name: 'Star Cactus', latin: 'Astrophytum asterias', link: 'star-cactus.html', image: 'starcactus.webp', price: 28 },
    { name: 'Blue Chalksticks', latin: 'Senecio serpens', link: 'blue-chalksticks.html', image: 'blue-chalksticks.jpg', price: 19 },
    { name: 'Barrel Cactus', latin: 'Ferocactus cylindraceus', link: 'barrel-cactus.html', image: 'barrel-cactus.jpg', price: 35 },
    { name: 'Lithops', latin: 'Lithops aucampiae', link: 'lithops.html', image: 'lithops.jpg', price: 30 },
    { name: 'Agave', latin: 'Agave americana', link: 'agave.html', image: 'agave.jpg', price: 40 }, // New
    { name: 'Christmas Cactus', latin: 'Schlumbergera bridgesii', link: 'christmas-cactus.html', image: 'christmas-cactus.jpg', price: 24 }, // New
    { name: 'String of Dolphins', latin: 'Senecio peregrinus', link: 'string-of-dolphins.html', image: 'string-of-dolphins.jpg', price: 22 }, // New
    { name: 'Fishbone Cactus', latin: 'Epiphyllum anguliger', link: 'fishbone-cactus.html', image: 'fishbone-cactus.jpg', price: 35 }, // New
    { name: 'Fairy Castle Cactus', latin: 'Acanthocereus tetragonus', link: 'fairy-castle-cactus.html', image: 'fairy-castle-cactus.jpg', price: 30 }, // New
    { name: 'Mistletoe Cactus', latin: 'Rhipsalis baccifera', link: 'mistletoe-cactus.html', image: 'mistletoe-cactus.jpg', price: 18 }, // New

    // Category: Edible & Herbal Plants
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
    { name: 'Bay Laurel', latin: 'Laurus nobilis', link: 'bay-laurel.html', image: '/bay-laurel.jpg', price: 18 }, // New
    { name: 'Dill', latin: 'Anethum graveolens', link: 'dill.html', image: '/dill.jpg', price: 8 }, // New
    { name: 'Peppermint', latin: 'Mentha × piperita', link: 'peppermint.html', image: 'peppermint.jpg', price: 10 }, // New
    { name: 'Lemon Balm', latin: 'Melissa officinalis', link: 'lemon-balm.html', image: '/lemon-balm.jpg', price: 12 }, // New
    { name: 'Stevia', latin: 'Stevia rebaudiana', link: 'stevia.html', image: 'stevia.jpg', price: 15 }, // New

    // Category: Air Purifying Plants
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
    { name: 'Dragon Tree', latin: 'Dracaena marginata', link: 'dragon-tree.html', image: 'dragon-tree.jpg', price: 38 }, // New
];


// Function to display search results
function searchPlants() {
    const input = document.getElementById('plant-search').value.toLowerCase();
    const resultsContainer = document.getElementById('results');

    // Clear previous results
    resultsContainer.innerHTML = '';

    // Hide dropdown if the input is empty
    if (input.trim() === '') {
        resultsContainer.style.display = 'none';
        return;
    }

    // Filter plants based on search input
    const filteredPlants = plants.filter(plant => {
        return plant.name.toLowerCase().includes(input) || plant.latin.toLowerCase().includes(input);
    });

    // Display matching plants
    filteredPlants.forEach(plant => {
        const resultItem = document.createElement('a');
        resultItem.href = plant.link;
        resultItem.className = 'result-item'; // Add a class for CSS styling

        // Create the HTML structure for each search result item
        resultItem.innerHTML = `
            <img src="${plant.image}" alt="${plant.name}" class="thumbnail">
            <div class="plant-details">
                <div class="common-name">${plant.name}</div>
                <div class="latin-name">${plant.latin}</div>
            </div>
        `;

        resultsContainer.appendChild(resultItem);
    });

    // Show the results container if there are results
    resultsContainer.style.display = filteredPlants.length ? 'block' : 'none';
}
