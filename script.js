function downloadVideo() {
    var videoUrl = document.getElementById('videoUrl').value;

    if (videoUrl !== "") {
        // You can implement the video download logic here
        // Note: Downloading YouTube videos may violate YouTube's terms of service.
        // Ensure compliance with YouTube's policies and copyright laws.

        // For demonstration purposes, you can show an alert message.
        alert('Downloading video: ' + videoUrl);
    } else {
        alert('Please enter a YouTube video URL.');
    }
}
