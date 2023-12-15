document.addEventListener('DOMContentLoaded', function() {
    const recipes = [
        { title: 'Vegan Lasagna', description: 'A delicious layering of pasta, vegetables, and tofu cheese.' },
        { title: 'Quinoa Salad', description: 'A light, healthy salad with quinoa and fresh vegetables.' },
        { title: 'Vegan Burgers', description: 'Tasty and hearty burgers made from beans and spices.' }
        // Adding more below
    ];

    const recipeListElement = document.getElementById('recipe-list');

    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');
        recipeElement.innerHTML = `<h2>${recipe.title}</h2><p>${recipe.description}</p>`;
        recipeListElement.appendChild(recipeElement);
    });
});
