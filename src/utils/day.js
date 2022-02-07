export const getDay = () => {
    let day = new Date().getHours();

    if (day === 0 || day < 12) {
        day = 'Morning';
    } else if (day === 12 || day < 17) {
        day = 'Afternoon';
    } else if (day === 17 || day < 24) {
        day = 'Evening';
    }

    return day;
};