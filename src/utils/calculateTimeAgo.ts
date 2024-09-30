export const calculateTimeAgo = (createdDate: number, createdTime: number) => {
    const year = createdDate.toString().slice(0, 4);
    const month = createdDate.toString().slice(4, 6);
    const day = createdDate.toString().slice(6, 8);
    const hour = createdTime.toString().slice(0, 2);
    const minute = createdTime.toString().slice(2, 4);
    const second = createdTime.toString().slice(4, 6);

    const createdDateTime = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`);
    const now = new Date();

    const difference = Math.abs(now.getTime() - createdDateTime.getTime()) / 1000;

    const years = Math.floor(difference / (365 * 24 * 3600));
    const months = Math.floor(difference / (30 * 24 * 3600));
    const weeks = Math.floor(difference / (7 * 24 * 3600));
    const days = Math.floor(difference / (24 * 3600));
    const hours = Math.floor((difference % (24 * 3600)) / 3600);
    const minutes = Math.floor((difference % 3600) / 60);
    const seconds = Math.floor(difference % 60);

    let timeAgo = '';

    if (years > 0 && !timeAgo) {
        timeAgo += `${years} il`;
    }
    if (months > 0 && !timeAgo) {
        timeAgo += `${months} ay`;
    }
    if (weeks > 0 && !timeAgo) {
        timeAgo += `${weeks} həftə`;
    }
    if (days > 0 && !timeAgo) {
        timeAgo += `${days} gün`;
    }
    if (hours > 0 && !timeAgo) {
        timeAgo += ` ${hours} saat`;
    }
    if (minutes > 0 && !timeAgo) {
        timeAgo += ` ${minutes} dəqiqə`;
    }
    if (seconds > 0 && !timeAgo) {
        timeAgo += `${seconds} saniyə`;
    }

    return timeAgo ? `${timeAgo} əvvəl` : 'indi';
};

export default function convertTimeFormat(timeStr : number) {
    const hours = timeStr.toString().slice(0, 2);
    const minutes = timeStr.toString().slice(2, 4);
    return `${hours}:${minutes}`;
}