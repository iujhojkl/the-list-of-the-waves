// Keep the original name for existing imports, but support Medal URLs too
export function getYoutubeIdFromUrl(url) {
    if (!url) return '';

    // Handle Medal.tv clips
    if (url.includes('medal.tv')) {
        return url.match(/medal\.tv\/(?:games\/[^\/]+\/)?clips?\/([a-zA-Z0-9]+)/)?.[1] ?? '';
    }

    // Handle YouTube URLs
    return url.match(
        /.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/,
    )?.[1] ?? '';
}

// Alias in case you want to use the new name elsewhere
export const getVideoIdFromUrl = getYoutubeIdFromUrl;

export function embed(video) {
    if (!video) return '';

    // Check if it's a Medal URL/ID
    if (video.includes('medal.tv')) {
        const id = getYoutubeIdFromUrl(video);
        return id ? `https://medal.tv/clip/${id}` : '';
    }

    // YouTube handling (works whether 'video' is a full URL or already an ID)
    const id = video.includes('http') ? getYoutubeIdFromUrl(video) : video;
    return id ? `https://www.youtube.com/embed/${id}` : '';
}

export function localize(num) {
    return num.toLocaleString(undefined, { minimumFractionDigits: 3 });
}

export function getThumbnailFromId(id) {
    return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
}

export function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}
