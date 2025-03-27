function calculateAge() {
    
    const dayInput = document.getElementById('date');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');

    
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    
    const birthday = new Date(year, month - 1, day);
    const today = new Date();

    
    if (isNaN(birthday.getTime()) || birthday > today) {
        alert('Please enter a valid past date');
        return;
    }

    
    let ageYears = today.getFullYear() - birthday.getFullYear();
    let ageMonths = today.getMonth() - birthday.getMonth();
    let ageDays = today.getDate() - birthday.getDate();

    
    if (ageDays < 0) {
        ageMonths--;
        
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += lastMonth.getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    
    document.getElementById('years').textContent = ageYears;
    document.getElementById('months').textContent = ageMonths;
    document.getElementById('days').textContent = ageDays;
}

document.querySelector('button').addEventListener('click', calculateAge);