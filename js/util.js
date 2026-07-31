// Extract ID for either YouTube or Medal.tv
export function getVideoIdFromUrl(url) {
    if (!url) return '';

    // Check if it's a Medal.tv URL
    if (url.includes('medal.tv')) {
        return url.match(/medal\.tv\/(?:games\/[^\/]+\/)?clips?\/([a-zA-Z0-9]+)/)?.[1] ?? '';
    }

    // Default to YouTube regex
    return url.match(
        /.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/,
    )?.[1] ?? '';
}

// Generate Embed URL for either platform
export function embed(url) {
    if (!url) return '';

    if (url.includes('medal.tv')) {
        const id = getVideoIdFromUrl(url);
        return id ? `https://medal.tv/clip/${id}` : '';
    }

    // YouTube Embed Format
    const id = getVideoIdFromUrl(url);
    return id ? `https://www.youtube.com/embed/${id}` : '';
}

export function localize(num) {
    return num.toLocaleString(undefined, { minimumFractionDigits: 3 });
}

// Get YouTube Thumbnail (Medal.tv requires API calls or oEmbed for dynamic thumbnails)
export function getThumbnailFromId(id) {
    return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
}

// Shuffle array helper
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
