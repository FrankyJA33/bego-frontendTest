// utils.js
export const API = 'https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io'

export const getCityFromAddress = (address) => {
    const city = address?.split(',')[4]?.trim();
    return city || 'Unknown';
};

export const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
};

export const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours(); // get hours in 24-hour format
    const minutes = date.getMinutes(); // get minutes in 0-59 format
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    //padStart(2,'0'): para asegurarse de que los números tengan 2 dígitos
  }

export function formatDateComplete(timestamp) {
    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const date = new Date(timestamp);
    const day = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');

    return `${day} de ${month} ${year} ${hours}:${minutes}`;
}

