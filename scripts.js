// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Functionality for expertise boxes
    const educationBox = document.getElementById('education');
    educationBox.addEventListener('click', function() {
      window.location.href = 'education.html';
    });
  
    const geoprocessingBox = document.getElementById('geoprocessing');
    geoprocessingBox.addEventListener('click', function() {
      window.location.href = 'geoprocessing.html';
    });

    const scrapingBox = document.getElementById('scraping');
    scrapingBox.addEventListener('click', function() {
      window.location.href = 'scraping.html';
    });

    const edaBox = document.getElementById('eda');
    edaBox.addEventListener('click', function() {
      window.location.href = 'eda.html';
    });

    const machine_learningBox = document.getElementById('machine_learning');
    machine_learningBox.addEventListener('click', function() {
      window.location.href = 'machine_learning.html';
    });
  
    // Add similar event listeners for other expertise boxes
  });
  