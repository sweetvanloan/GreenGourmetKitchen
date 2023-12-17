document.addEventListener('DOMContentLoaded', function() {
    const recipes = [
        { title: 'Vegan Lasagna', description: 'A delicious layering of pasta, vegetables, and tofu cheese.' },
        { title: 'Quinoa Salad', description: 'A light, healthy salad with quinoa and fresh vegetables.' },
        { title: 'Vegan Burgers', description: 'Tasty and hearty burgers made from beans and spices.' }
        // Add more recipes here
    ];

    const recipeListElement = document.getElementById('recipe-list');

    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');
        recipeElement.innerHTML = `<h2>${recipe.title}</h2><p>${recipe.description}</p>`;
        recipeListElement.appendChild(recipeElement);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('file-input');
    const uploadedPhotosDiv = document.getElementById('uploaded-photos');

    fileInput.addEventListener('change', function(event) {
        const files = event.target.files;
        for (const file of files) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.classList.add('uploaded-photo');
                uploadedPhotosDiv.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    });
});
