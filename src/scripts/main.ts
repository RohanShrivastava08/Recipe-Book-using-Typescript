interface Recipe {
    id: number;
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    steps: string[];
}

class RecipeApp {
    private recipes: Recipe[] = [
        {
            id: 1,
            name: "Butter Chicken",
            description: "Creamy and rich curry with tender chicken pieces",
            image: "assets/images/butter-chicken.jpg",
            ingredients: ["Chicken", "Butter", "Cream", "Tomato puree", "Spices"],
            steps: ["Marinate chicken", "Cook chicken", "Prepare sauce", "Combine and simmer"]
        },
        {
            id: 2,
            name: "Palak Paneer",
            description: "Spinach curry with soft paneer cubes",
            image: "assets/images/palak-paneer.jpg",
            ingredients: ["Spinach", "Paneer", "Onion", "Garlic", "Spices"],
            steps: ["Blanch spinach", "Saute onions and garlic", "Blend spinach", "Cook with paneer"]
        },
        {
            id: 3,
            name: "Biryani",
            description: "Fragrant rice dish with meat and aromatic spices",
            image: "assets/images/biryani.jpg",
            ingredients: ["Basmati rice", "Meat", "Yogurt", "Saffron", "Spices"],
            steps: ["Marinate meat", "Par-boil rice", "Layer meat and rice", "Dum cook"]
        },
        {
            id: 4,
            name: "Chole Bhature",
            description: "Spicy chickpea curry with deep-fried bread",
            image: "assets/images/chole-bhature.jpg",
            ingredients: ["Chickpeas", "Onion", "Tomato", "Flour", "Spices"],
            steps: ["Cook chickpeas", "Prepare curry", "Make bhature dough", "Fry bhature"]
        },
        {
            id: 5,
            name: "Dosa",
            description: "Crispy fermented crepe served with chutney and sambar",
            image: "assets/images/dosa.jpg",
            ingredients: ["Rice", "Urad dal", "Fenugreek seeds", "Salt"],
            steps: ["Soak rice and dal", "Grind batter", "Ferment", "Cook on griddle"]
        },
        {
            id: 6,
            name: "Tandoori Chicken",
            description: "Spicy and tangy grilled chicken",
            image: "assets/images/tandoori-chicken.jpg",
            ingredients: ["Chicken", "Yogurt", "Lemon juice", "Tandoori masala"],
            steps: ["Marinate chicken", "Skewer", "Grill in tandoor"]
        },
        {
            id: 7,
            name: "Malai Kofta",
            description: "Fried dumplings in a creamy tomato sauce",
            image: "assets/images/malai-kofta.jpg",
            ingredients: ["Potatoes", "Paneer", "Cashews", "Cream", "Spices"],
            steps: ["Make kofta mixture", "Fry koftas", "Prepare sauce", "Combine and serve"]
        },
        {
            id: 8,
            name: "Aloo Gobi",
            description: "Potato and cauliflower curry",
            image: "assets/images/aloo-gobi.jpg",
            ingredients: ["Potatoes", "Cauliflower", "Onion", "Tomatoes", "Spices"],
            steps: ["Chop vegetables", "Saute onions", "Add spices", "Cook vegetables"]
        },
        {
            id: 9,
            name: "Samosa",
            description: "Crispy fried pastry with savory filling",
            image: "assets/images/samosa.jpg",
            ingredients: ["Flour", "Potatoes", "Peas", "Spices", "Oil"],
            steps: ["Prepare dough", "Make filling", "Shape samosas", "Deep fry"]
        },
        {
            id: 10,
            name: "Rogan Josh",
            description: "Aromatic lamb curry from Kashmir",
            image: "assets/images/rogan-josh.jpg",
            ingredients: ["Lamb", "Yogurt", "Kashmiri chilies", "Ginger", "Spices"],
            steps: ["Marinate lamb", "Prepare sauce", "Cook lamb", "Simmer until tender"]
        },
        {
            id: 11,
            name: "Matar Paneer",
            description: "Creamy curry with green peas and paneer",
            image: "assets/images/matar-paneer.jpg",
            ingredients: ["Paneer", "Green peas", "Onion", "Tomatoes", "Spices"],
            steps: ["Saute onions", "Add tomatoes and spices", "Cook peas", "Add paneer"]
        },
        {
            id: 12,
            name: "Dhokla",
            description: "Steamed savory cake from Gujarat",
            image: "assets/images/dhokla.jpg",
            ingredients: ["Gram flour", "Yogurt", "Eno fruit salt", "Green chilies", "Mustard seeds"],
            steps: ["Prepare batter", "Steam dhokla", "Prepare tempering", "Garnish and serve"]
        },
        {
            id: 13,
            name: "Vindaloo",
            description: "Spicy and tangy Goan curry",
            image: "assets/images/vindaloo.jpg",
            ingredients: ["Pork", "Vinegar", "Garlic", "Kashmiri chilies", "Spices"],
            steps: ["Marinate meat", "Prepare spice paste", "Cook meat", "Simmer until tender"]
        },
        {
            id: 14,
            name: "Rajma",
            description: "Red kidney bean curry",
            image: "assets/images/rajma.jpg",
            ingredients: ["Red kidney beans", "Onion", "Tomatoes", "Ginger", "Spices"],
            steps: ["Soak beans", "Pressure cook beans", "Prepare gravy", "Combine and simmer"]
        },
        {
            id: 15,
            name: "Gulab Jamun",
            description: "Deep-fried milk solids soaked in sugar syrup",
            image: "assets/images/gulab-jamun.jpg",
            ingredients: ["Milk powder", "Flour", "Cardamom", "Sugar", "Rose water"],
            steps: ["Make dough", "Shape into balls", "Deep fry", "Soak in syrup"]
        }
    ];

    constructor() {
        this.initializeApp();
    }

    private initializeApp(): void {
        this.renderRecipes();
        this.addEventListeners();
    }

    private renderRecipes(): void {
        const recipeGrid = document.querySelector('.recipe-grid');
        if (!recipeGrid) return;

        this.recipes.forEach(recipe => {
            const recipeCard = this.createRecipeCard(recipe);
            recipeGrid.appendChild(recipeCard);
        });
    }

    private createRecipeCard(recipe: Recipe): HTMLElement {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-card-content">
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
                <button class="btn btn-primary view-recipe" data-id="${recipe.id}">View Recipe</button>
            </div>
        `;
        return card;
    }

    private showRecipeDetails(recipe: Recipe): void {
        const modal = document.getElementById('recipe-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalImage = document.getElementById('modal-image') as HTMLImageElement;
        const modalIngredients = document.getElementById('modal-ingredients');
        const modalSteps = document.getElementById('modal-steps');

        if (modal && modalTitle && modalImage && modalIngredients && modalSteps) {
            modalTitle.textContent = recipe.name;
            modalImage.src = recipe.image;
            modalImage.alt = recipe.name;

            modalIngredients.innerHTML = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
            modalSteps.innerHTML = recipe.steps.map(step => `<li>${step}</li>`).join('');

            modal.style.display = 'block';
        }
    }

    private addEventListeners(): void {
        document.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            if (target.classList.contains('view-recipe')) {
                const recipeId = parseInt(target.getAttribute('data-id') || '0');
                const recipe = this.recipes.find(r => r.id === recipeId);
                if (recipe) {
                    this.showRecipeDetails(recipe);
                }
            }
        });

        const modal = document.getElementById('recipe-modal');
        const closeBtn = document.querySelector('.close');

        if (closeBtn && modal) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });

            window.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }

        const recipeForm = document.getElementById('recipe-form');
        if (recipeForm) {
            recipeForm.addEventListener('submit', this.handleAddRecipe.bind(this));
        }

        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', this.handleContact.bind(this));
        }
    }

    private handleAddRecipe(e: Event): void {
        e.preventDefault();
        // Implement the logic to add a new recipe
        console.log('New recipe submitted');
    }

    private handleContact(e: Event): void {
        e.preventDefault();
        // Implement the logic to handle contact form submission
        console.log('Contact form submitted');
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    new RecipeApp();
});