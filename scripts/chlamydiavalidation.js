document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    // Patient Name Input Event Listener
    const patientNameInput = document.getElementById('patient_name');
    patientNameInput.addEventListener('input', function () {
        const inputValue = patientNameInput.value;
        const lettersAndSpacesOnly = /^[A-Za-z\s]+$/;

    if (!lettersAndSpacesOnly.test(inputValue)) {
        patientNameInput.value = inputValue.replace(/[^A-Za-z\s]/g, '');
    }

    });

    // Form Submission Event Listener
    form.addEventListener('submit', function (event) {
        // Validate Patient Age
        const ageInput = document.getElementById('patient_age');
        if (isNaN(ageInput.value) || ageInput.value <= 0) {
            alert('Please enter a valid age.');
            event.preventDefault();
            return false;
        }

        //validate home address
        const addressInput = document.getElementById('home_address');
        if (!addressInput.value.trim()) {
            alert('Please enter the home address.');
            event.preventDefault();
            return false;
        }

        //phone numbe validation
        const phoneNumberInput = document.getElementById('phone_number');
        const phoneNumberRegex = /^\d{10}$/;
        if (!phoneNumberRegex.test(phoneNumberInput.value)) {
            alert('Please enter a valid 10-digit numeric phone number.');
            event.preventDefault();
            return false;
        }

        // Pregnancy Weeks Validation
        const pregnancyTestResult = document.getElementById('pregnancy_test_results').value;
        const pregnancyWeeksInput = document.getElementById('pregnancy_weeks');
        if (pregnancyTestResult === 'positive' && (isNaN(pregnancyWeeksInput.value) || pregnancyWeeksInput.value < 1)) {
            alert('Please enter a valid number of weeks for pregnancy.');
            event.preventDefault();
            return false;
        }

        // Validating at least one reason for the exam is checked
        const reasonsForExamCheckboxes = document.querySelectorAll('input[name="reason_for_exam"]:checked');
        if (reasonsForExamCheckboxes.length === 0) {
            alert('Please select at least one reason for the exam.');
            event.preventDefault();
            return false;
        }

        // Validating date of test
        const testDateInput = document.getElementById('test_date');
        if (!testDateInput.value) {
            alert('Please select the date of the test.');
            event.preventDefault();
            return false;
        }

        // Validate test result
        const testResultInput = document.getElementById('test_result').value;
        if (testResultInput === 'na') {
            alert('Please select a valid test result.');
            event.preventDefault();
            return false;
        }

        return true;
    });
});
