const navSetup = () => {
    todaysDate();
}

const screenSelect = (screenName) => {
    console.log(screenName);
    const screens = document.getElementsByClassName('screen');
    for (screen of screens) {
        screen.classList.add('hidden');
    }
    const activeScreen = document.querySelector(`.${screenName}`);
    activeScreen.classList.remove('hidden');
}

const todaysDate = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    document.addEventListener('DOMContentLoaded', () => {
        const dateInput = document.getElementById('dateSelection');
        if (dateInput) {
            dateInput.value = formattedDate;
        }
    });    

}


navSetup();
