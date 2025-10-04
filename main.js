// Category tab switching (Beginner style)
var menTab = document.getElementById('menTab');
var womenTab = document.getElementById('womenTab');
var menCats = document.getElementById('menCats');
var womenCats = document.getElementById('womenCats');

menTab.onclick = function() {
    menCats.style.display = "flex";
    womenCats.style.display = "none";
    menTab.classList.add("active");
    womenTab.classList.remove("active");
    console.log('Showing Men categories');
}

womenTab.onclick = function() {
    menCats.style.display = "none";
    womenCats.style.display = "flex";
    womenTab.classList.add("active");
    menTab.classList.remove("active");
    console.log('Showing Women categories');
}

// Button alert as demo
var designBtn = document.getElementById('designBtn');
designBtn.onclick = function() {
    alert('Start designing your apparel!');
}

// Simple feedback form handling
var feedbackForm = document.getElementById('feedbackForm');

feedbackForm.onsubmit = function(event) {
    event.preventDefault();
    var name = document.getElementById('fbName').value;
    var email = document.getElementById('fbEmail').value;
    var msg = document.getElementById('fbMsg').value;
    if (name === "" || email === "" || msg === "") {
        alert('Please fill in all fields.');
        return;
    }
    // Add feedback to the list (for demo purposes; in real sites, this would require backend)
    var feedbackList = document.getElementById('feedback-list');
    var entry = document.createElement('div');
    entry.className = 'feedback-entry';
    entry.innerHTML = "<strong>" + name + ":</strong> <span>" + msg + "</span>";
    feedbackList.appendChild(entry);
    alert('Thank you for your feedback!');
    feedbackForm.reset();
}
