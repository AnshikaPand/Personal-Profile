// Assuming the resume file is in the same ditory as the HTML file
document.getElementById('download-resume').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'path/to/Anshika_Resume.pdf'; // Update this path to the actual file location
    link.download = 'Anshika_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
