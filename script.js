document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let valid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');
    document.getElementById('successMessage').style.display = 'none';

    // Validate Full Name
    const fullName = document.getElementById('fullName').value;
    if (!fullName) {
        document.getElementById('fullNameError').textContent = 'Full Name is required';
        document.getElementById('fullNameError').style.display = 'block';
        valid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('emailError').textContent = 'Email Address is required';
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }

    // Validate Password
    const password = document.getElementById('password').value;
    if (!password) {
        document.getElementById('passwordError').textContent = 'Password is required';
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    } else if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters';
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    }

    // Validate Confirm Password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (!confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Confirm Password is required';
        document.getElementById('confirmPasswordError').style.display = 'block';
        valid = false;
    } else if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        document.getElementById('confirmPasswordError').style.display = 'block';
        valid = false;
    }

    // Validate Date of Birth
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    if (!dateOfBirth) {
        document.getElementById('dateOfBirthError').textContent = 'Date of Birth is required';
        document.getElementById('dateOfBirthError').style.display = 'block';
        valid = false;
    }

    // Validate Gender
    const gender = document.getElementById('gender').value;
    if (!gender) {
        document.getElementById('genderError').textContent = 'Gender is required';
        document.getElementById('genderError').style.display = 'block';
        valid = false;
    }

    if (valid) {
        // Simulate form submission
        document.getElementById('successMessage').textContent = 'Registration successful';
        document.getElementById('successMessage').style.display = 'block';
    }
});
