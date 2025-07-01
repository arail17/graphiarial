document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);

    const imageUrl = params.get('image');
    const title = params.get('title');
    const description = params.get('description') || "No detailed description available for this project.";
    const category = params.get('category') || "General";
    const date = params.get('date') || "N.D."; // N.D. for No Date

    document.getElementById('detail-title').textContent = title;
    document.getElementById('detail-image').src = imageUrl;
    document.getElementById('detail-description').textContent = description;
    document.getElementById('detail-category').textContent = `Category: ${category}`;
    document.getElementById('detail-date').textContent = `Date: ${date}`;

    // Optional: Add some basic styling for the detail page content
    const detailSection = document.querySelector('.detail-section');
    if (detailSection) {
        detailSection.style.maxWidth = '900px';
        detailSection.style.margin = '120px auto 60px auto'; // Adjusted margin for header
        detailSection.style.padding = '30px';
        detailSection.style.backgroundColor = '#2a2a2a';
        detailSection.style.borderRadius = '10px';
        detailSection.style.boxShadow = '0 8px 20px rgba(0,0,0,0.6)';
        detailSection.style.textAlign = 'center';
    }

    const detailImageContainer = document.querySelector('.detail-image-container');
    if (detailImageContainer) {
        detailImageContainer.style.width = '100%';
        detailImageContainer.style.maxHeight = '500px'; // Limit image height
        detailImageContainer.style.overflow = 'hidden';
        detailImageContainer.style.borderRadius = '8px';
        detailImageContainer.style.marginBottom = '25px';
        detailImageContainer.style.display = 'flex';
        detailImageContainer.style.justifyContent = 'center';
        detailImageContainer.style.alignItems = 'center';
    }

    const detailImage = document.getElementById('detail-image');
    if (detailImage) {
        detailImage.style.width = '100%';
        detailImage.style.height = 'auto';
        detailImage.style.display = 'block';
        detailImage.style.objectFit = 'cover'; // Ensure image covers the container
    }

    const detailTitle = document.getElementById('detail-title');
    if (detailTitle) {
        detailTitle.style.fontSize = '48px';
        detailTitle.style.marginBottom = '20px';
        detailTitle.style.color = '#e50914';
        detailTitle.style.fontFamily = "'Bebas Neue', sans-serif";
    }

    const detailDescription = document.getElementById('detail-description');
    if (detailDescription) {
        detailDescription.style.fontSize = '18px';
        detailDescription.style.lineHeight = '1.7';
        detailDescription.style.color = '#e0e0e0';
        detailDescription.style.marginBottom = '25px';
    }

    const detailMeta = document.querySelector('.detail-meta');
    if (detailMeta) {
        detailMeta.style.fontSize = '16px';
        detailMeta.style.color = '#aaa';
        detailMeta.style.marginTop = '20px';
    }
});

// Header scroll effect (copy from main script if needed for this page)
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});