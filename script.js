document.addEventListener('DOMContentLoaded', () => {
    const yearPicker = document.getElementById('yearPicker');
    const monthPicker = document.getElementById('monthPicker');
    const dayPicker = document.getElementById('dayPicker');
    const showEventButton = document.getElementById('showEvent');
    const eventImage = document.getElementById('eventImage');

    // Populate year picker
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 2000; year--) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearPicker.appendChild(option);
    }

    // Populate month picker
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    months.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = index + 1;
        option.textContent = month;
        monthPicker.appendChild(option);
    });

    // Populate day picker
    function populateDays(year, month) {
        dayPicker.innerHTML = '';
        const daysInMonth = new Date(year, month, 0).getDate();
        for (let day = 1; day <= daysInMonth; day++) {
            const option = document.createElement('option');
            option.value = day;
            option.textContent = day;
            dayPicker.appendChild(option);
        }
    }

    // Update days when year or month changes
    yearPicker.addEventListener('change', () => {
        populateDays(yearPicker.value, monthPicker.value);
    });

    monthPicker.addEventListener('change', () => {
        populateDays(yearPicker.value, monthPicker.value);
    });

    // Initial population of days
    populateDays(currentYear, 1);

    // Event data
    const events = {
        '2019-7-14': 'england_wc.jpg', // You can add more events here
    };

    // Show event image on button click
    showEventButton.addEventListener('click', () => {
        const selectedDate = `${yearPicker.value}-${monthPicker.value}-${dayPicker.value}`;
        if (events[selectedDate]) {
            eventImage.src = events[selectedDate];
            eventImage.style.display = 'block';
        } else {
            eventImage.style.display = 'none';
        }
    });
});

