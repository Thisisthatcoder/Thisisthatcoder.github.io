
document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Hide form and header
    document.getElementById('subscriptionForm').style.display = 'none';
    document.querySelector('.subscription h1').style.display = 'none';
    document.querySelector('.subscription h2').style.display = 'none';
  
    // Display thank you message
    document.getElementById('thankYouMessage').style.display = 'block';
  });