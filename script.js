// Add subtle interactive effects to enhance the manuscript experience
// And calculate background image height dynamically

document.addEventListener('DOMContentLoaded', function() {
    // Load footer from footer.html
    function loadFooter() {
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
            fetch('footer.html')
                .then(response => response.text())
                .then(html => {
                    footerContainer.innerHTML = html;
                })
                .catch(error => {
                    console.warn('Could not load footer:', error);
                });
        }
    }
    
    // Load footer
    loadFooter();
    
    // Calculate background image height to show full image
    // And size the content area based on image dimensions
    function setBackgroundHeight() {
        const img = new Image();
        img.src = 'background.png';
        
        img.onload = function() {
            const aspectRatio = img.height / img.width;
            const viewportWidth = window.innerWidth;
            const calculatedHeight = viewportWidth * aspectRatio;
            
            const manuscriptContent = document.querySelector('.manuscript-content');
            const borderFrame = document.querySelector('.ornate-border-frame');
            const manuscriptInner = document.querySelector('.manuscript-inner');
            
            if (manuscriptContent) {
                manuscriptContent.style.minHeight = calculatedHeight + 'px';
            }
            if (borderFrame) {
                borderFrame.style.minHeight = calculatedHeight + 'px';
            }
            
            // Size content area based on image dimensions: 65% width, 65% height
            // Positioned 10% from left and 10% down from top
            if (manuscriptInner) {
                const contentWidth = viewportWidth * 0.55; // 65% of viewport width
                const contentHeight = calculatedHeight * 0.60; // 65% of image height
                
                manuscriptInner.style.width = contentWidth + 'px';
                manuscriptInner.style.maxWidth = 'none';
                manuscriptInner.style.height = contentHeight + 'px';
                manuscriptInner.style.maxHeight = contentHeight + 'px';
                // Position 10% from left and 10% down from top
                manuscriptInner.style.marginLeft = (viewportWidth * 0.16) + 'px'; // 10% from left
                manuscriptInner.style.marginRight = 'auto';
                manuscriptInner.style.marginTop = (calculatedHeight * 0.125) + 'px'; // 10% from top
            }
            
            console.log('Background image dimensions:', img.width, 'x', img.height);
            console.log('Aspect ratio:', aspectRatio);
            console.log('Calculated height:', calculatedHeight + 'px');
            console.log('Content area:', (viewportWidth * 0.65) + 'px x ' + (calculatedHeight * 0.65) + 'px');
            console.log('Content position: 10% from left, 10% from top');
        };
        
        img.onerror = function() {
            console.warn('Could not load background image for height calculation');
        };
    }
    
    // Set background height on load and resize
    setBackgroundHeight();
    window.addEventListener('resize', setBackgroundHeight);
    
    // Simple approach: content is already sized at 80% via CSS
    // Just ensure it's visible and centered
    
    const manuscriptInner = document.querySelector('.manuscript-inner');
    if (manuscriptInner) {
        manuscriptInner.style.opacity = '1';
        manuscriptInner.style.visibility = 'visible';
    }
    
    // Add subtle animation to decorative elements
    const decorativeElements = document.querySelectorAll('.flourish-center, .ornate-initial');
    
    decorativeElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add parchment aging effect on scroll
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        const manuscriptContent = document.querySelector('.manuscript-content');
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(function() {
            manuscriptContent.style.filter = 'brightness(0.98)';
            setTimeout(function() {
                manuscriptContent.style.filter = 'brightness(1)';
                manuscriptContent.style.transition = 'filter 0.5s ease';
            }, 100);
        }, 150);
    });

    // Add subtle glow effect to initial letters
    const initialLetters = document.querySelectorAll('.initial-letter, .ornate-initial');
    
    setInterval(function() {
        initialLetters.forEach(letter => {
            const glow = Math.random() * 0.3 + 0.7;
            letter.style.opacity = glow;
            letter.style.transition = 'opacity 2s ease';
        });
    }, 3000);
});
