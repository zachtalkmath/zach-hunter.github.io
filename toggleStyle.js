// Function to toggle the stylesheet
function toggleStyleSheet() {
    const mainStyle = document.getElementById('main-style');
    const alternateStyle = document.getElementById('alternate-style');
    const isChecked = document.getElementById('style-toggle').checked;

    if (isChecked) {
        mainStyle.disabled = true;
        alternateStyle.disabled = false;
    } else {
        mainStyle.disabled = false;
        alternateStyle.disabled = true;
    }

    // Save the preference in localStorage
    localStorage.setItem('styleToggle', isChecked);
}

// Event listener for the checkbox
document.getElementById('style-toggle').addEventListener('change', toggleStyleSheet);

// Apply the saved preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const isChecked = localStorage.getItem('styleToggle') === 'true';
    document.getElementById('style-toggle').checked = isChecked;
    toggleStyleSheet();
});
