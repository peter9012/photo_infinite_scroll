const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');


let photosArray = [];

// Unsplash API
const count = 10;
const apiKey='QVs-E0Efxs6wXpL25kqWgyVTB6VQKNhJPB44RlBHkNE';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;


// Helper Function to Set Attributes on DOM Elements


// Create Elements For Links & Photos, Add to DOM
function displayPhotos() {
    photosArray.forEach((photo) => {
        // Create <a> to link to Unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // Create <img> for photo
        const img = document.createElement('img');
        img.setAttribute('src',photo.urls.regular);
        img.setAttribute('alt',photo.alt_description);
        img.setAttribute('title',photo.alt_description);
        imageContainer.appendChild(img);
    })
}

// Get photo from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {

    }
}

// On Load
getPhotos();
