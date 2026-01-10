// search.js - Enhanced Gigachad Network site search functionality

const searchIndex = [
    // --- SERVICES ---
    {
        title: "Jellyfin",
        url: "http://watch.gigachad.website",
        desc: "Media streaming server",
        type: "service",
        keywords: ["movies", "movie", "shows", "tv", "plex", "media", "stream", "streaming", "video", "watch", "series", "film", "films", "episodes", "entertainment", "jellyfin", "netflix"]
    },
    {
        title: "Setting up Jellyfin",
        url: "tutorials/media/jellyfin.html",
        desc: "Tutorial for Jellyfin media server",
        type: "tutorial",
        keywords: ["movies", "movie", "shows", "tv", "plex", "media", "stream", "video", "watch", "series", "film", "films", "episodes", "entertainment", "jellyfin", "setup", "tutorial", "install"]
    },
    {
        title: "Jellyseerr",
        url: "http://seer.gigachad.website",
        desc: "Content requests for Jellyfin",
        type: "service",
        keywords: ["jellyseerr", "request", "requests", "content", "jellyfin", "movies", "shows", "overseerr"]
    },
    {
        title: "AudiobookShelf",
        url: "http://listen.gigachad.website",
        desc: "Audiobook streaming",
        type: "service",
        keywords: ["audiobook", "audiobooks", "audible", "books", "audio", "listen", "reading", "library", "podcast", "podcasts", "story", "stories", "audiobookshelf"]
    },
    {
        title: "Setting up AudioBookShelf",
        url: "tutorials/media/audiobook.html",
        desc: "Tutorial for AudioBookShelf",
        type: "tutorial",
        keywords: ["audiobook", "audiobooks", "books", "audible", "audio", "listen", "reading", "library", "podcast", "podcasts", "story", "stories", "audiobookshelf", "setup", "tutorial", "install"]
    },
    {
        title: "Vaultwarden",
        url: "http://gigachad.website:30032",
        desc: "Password manager",
        type: "service",
        keywords: ["password", "passwords", "vault", "security", "login", "credentials", "safe", "manager", "bitwarden", "vaultwarden"]
    },
    {
        title: "VPN / WireGuard",
        url: "tutorials/networking/vpn.html",
        desc: "Secure VPN access",
        type: "service",
        keywords: ["vpn", "privacy", "wireguard", "secure", "network", "tunnel", "remote", "access"]
    },
    {
        title: "Setting up WireGuard VPN",
        url: "tutorials/networking/vpn.html",
        desc: "Tutorial for WireGuard VPN",
        type: "tutorial",
        keywords: ["vpn", "privacy", "wireguard", "secure", "network", "tunnel", "remote", "access", "setup", "tutorial", "install"]
    },
    {
        title: "NextCloud",
        url: "https://cloud.gigachad.website",
        desc: "Personal cloud storage",
        type: "service",
        keywords: ["cloud", "storage", "files", "nextcloud", "googledrive", "google", "drive", "documents", "sync", "backup", "dropbox"]
    },
    {
        title: "Gigachad AI",
        url: "http://ai.gigachad.website",
        desc: "AI chat and tools",
        type: "service",
        keywords: ["ai", "artificial intelligence", "tools", "chatbot", "chat", "gpt", "llm", "image", "generator", "gigachad ai", "openai"]
    },
    {
        title: "Toast Host",
        url: "https://toast-host.com",
        desc: "Game server hosting",
        type: "service",
        keywords: ["server", "hosting", "game", "games", "minecraft", "valheim", "factorio", "host", "toast", "panel", "dedicated"]
    },
    {
        title: "Toast Host Tutorial",
        url: "tutorials/hosting/toast-host.html",
        desc: "Tutorial for Toast Host game server panel",
        type: "tutorial",
        keywords: ["server", "hosting", "game", "games", "minecraft", "valheim", "factorio", "host", "toast", "panel", "setup", "tutorial", "install"]
    },
    {
        title: "Navidrome",
        url: "http://gigachad.website:30043",
        desc: "Music streaming server",
        type: "service",
        keywords: ["music", "audio", "stream", "streaming", "songs", "albums", "artist", "artists", "playlist", "playlists", "mp3", "flac", "jukebox", "subsonic", "navidrome", "spotify"]
    },
    // --- GAME SERVERS ---
    {
        title: "Minecraft Create Server",
        url: "games/minecraft/create.html",
        desc: "Modded Minecraft with Create mod",
        type: "gameserver",
        keywords: ["minecraft", "create", "mod", "modded", "server", "game", "multiplayer", "java"]
    },
    {
        title: "Minecraft Vanilla Server",
        url: "games/minecraft/vanilla.html",
        desc: "Vanilla Minecraft 1.21.11",
        type: "gameserver",
        keywords: ["minecraft", "vanilla", "server", "game", "multiplayer", "java", "bedrock", "crossplay"]
    },
    {
        title: "Minecraft Abyssal Ascent",
        url: "games/minecraft/abyssal-ascent.html",
        desc: "Abyssal Ascent modpack server",
        type: "gameserver",
        keywords: ["minecraft", "abyssal", "ascent", "modpack", "server", "game", "multiplayer"]
    },
    {
        title: "Valheim Server",
        url: "games/valheim.html",
        desc: "Valheim multiplayer server",
        type: "gameserver",
        keywords: ["valheim", "server", "game", "multiplayer", "viking", "survival"]
    },
    {
        title: "Factorio Space Age",
        url: "games/factorio.html",
        desc: "Factorio Space Age server",
        type: "gameserver",
        keywords: ["factorio", "space", "age", "server", "game", "multiplayer", "factory", "automation"]
    },
    // --- ARTICLES ---
    {
        title: "How to Torrent Like a Chad",
        url: "articles/torrenting.html",
        desc: "Complete torrenting guide",
        type: "article",
        keywords: ["pirate", "piracy", "torrent", "torrents", "qbittorrent", "bittorrent", "seed", "seeding", "leech", "leeching", "magnet", "tracker", "download", "downloads", "guide", "movie", "movies", "show", "shows", "music", "software", "p2p"]
    },
    {
        title: "Bypass CGNAT Like a Chad",
        url: "https://rentry.org/bypass-cgnat-like-a-chad",
        desc: "Guide to bypass CGNAT",
        type: "article",
        keywords: ["cgnat", "nat", "bypass", "network", "internet", "guide", "port", "forwarding", "hosting"]
    },
    {
        title: "Degoogle Your Life",
        url: "https://www.reddit.com/r/degoogle/comments/bsa6al/getting_started_why_you_should_degoogle/",
        desc: "Privacy and degoogling guide",
        type: "article",
        keywords: ["degoogle", "privacy", "security", "google", "alternatives", "selfhost", "cloud", "gmail", "photos", "calendar", "youtube", "android", "tracking", "data", "freedom", "guide"]
    },
    {
        title: "Secure Your Digital Life",
        url: "https://www.privacyguides.org",
        desc: "Privacy and security resources",
        type: "article",
        keywords: ["privacy", "security", "guide", "secure", "encryption", "vpn", "protection"]
    },
    {
        title: "The Dating Guide",
        url: "https://www.wikihow.com/Date",
        desc: "Dating advice for gigachads",
        type: "article",
        keywords: ["dating", "guide", "relationships", "social"]
    }
];

const stopwords = [
    "how", "to", "the", "a", "an", "and", "or", "of", "for", "on", "in", "with", "by", "is", "at", "from", "as", "it", "this", "that", "these", "those", "be", "are", "was", "were", "will", "can", "get", "do", "does", "did", "has", "have", "had", "like"
];

// Levenshtein distance for fuzzy matching
function levenshteinDistance(str1, str2) {
    const matrix = [];
    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }
    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    return matrix[str2.length][str1.length];
}

// Fuzzy match with tolerance
function fuzzyMatch(word, target, tolerance = 2) {
    if (word.length < 4) return word === target; // Exact match for short words
    return levenshteinDistance(word.toLowerCase(), target.toLowerCase()) <= tolerance;
}

function extractKeywords(query) {
    return query
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .split(/\s+/)
        .filter(word => word && !stopwords.includes(word));
}

// Highlight matching keywords in text
function highlightText(text, keywords) {
    let highlighted = text;
    for (const kw of keywords) {
        const regex = new RegExp(`(${kw})`, 'gi');
        highlighted = highlighted.replace(regex, '<mark style="background:#ffc56d; color:#222; padding:0 2px; border-radius:2px;">$1</mark>');
    }
    return highlighted;
}

const searchInput = document.getElementById('search-input');
const resultsBox = document.getElementById('search-results');
let selectedIndex = -1;
let currentResults = [];

function performSearch(query) {
    if (!query) {
        resultsBox.style.display = 'none';
        resultsBox.innerHTML = '';
        selectedIndex = -1;
        return;
    }

    const keywords = extractKeywords(query);

    // Main search logic with fuzzy matching
    let results = searchIndex.map(item => {
        let score = 0;
        let matchedFields = [];
        const allFields = [
            {text: item.title.toLowerCase(), weight: 3},
            {text: item.desc.toLowerCase(), weight: 2},
            ...((item.keywords || []).map(k => ({text: k, weight: 1})))
        ];

        // Exact title match bonus
        if (item.title.toLowerCase() === query.toLowerCase()) {
            score += 100;
        }

        for (const kw of keywords) {
            for (const field of allFields) {
                // Exact match
                if (field.text.includes(kw)) {
                    score += field.weight * 2;
                    matchedFields.push(kw);
                }
                // Fuzzy match
                else {
                    const words = field.text.split(/\s+/);
                    for (const word of words) {
                        if (fuzzyMatch(kw, word)) {
                            score += field.weight;
                            matchedFields.push(kw);
                            break;
                        }
                    }
                }
            }
        }

        return {...item, score, matchedFields: [...new Set(matchedFields)]};
    }).filter(item => item.score > 0);

    // Sort by score descending
    results = results.sort((a, b) => b.score - a.score).slice(0, 8);

    currentResults = results;
    selectedIndex = -1;
    displayResults(results, keywords);
}

function displayResults(results, keywords = []) {
    if (results.length === 0) {
        resultsBox.innerHTML = '<div style="padding:0.7em; color:#bbb;">No results found. Try different keywords or check spelling.</div>';
        resultsBox.style.display = 'block';
        return;
    }

    const typeIcons = {
        service: '🔧',
        tutorial: '📖',
        gameserver: '🎮',
        article: '📄'
    };

    resultsBox.innerHTML = results.map((item, index) => {
        const highlightedTitle = highlightText(item.title, keywords);
        const highlightedDesc = highlightText(item.desc, keywords);

        return `<a href="${item.url}" class="search-result-item" data-index="${index}" style="display:block; color:#ffc56d; padding:0.8em 1em; text-decoration:none; border-bottom:1px solid #444; transition: background 0.2s;">
            <div style="display:flex; justify-content:space-between; align-items:start;">
                <div style="flex:1;">
                    <strong>${highlightedTitle}</strong>
                    <span style="display:inline-block; margin-left:0.5em; padding:2px 6px; background:#333; border-radius:4px; font-size:0.75em;">${typeIcons[item.type] || ''} ${item.type}</span>
                    <br>
                    <span style="font-size:0.92em; color:#bbb;">${highlightedDesc}</span>
                </div>
                <div style="margin-left:1em; color:#888; font-size:0.85em;">Score: ${item.score}</div>
            </div>
        </a>`;
    }).join('');

    resultsBox.style.display = 'block';

    // Add hover effects
    resultsBox.querySelectorAll('.search-result-item').forEach((link, index) => {
        link.addEventListener('mouseenter', function() {
            clearSelection();
            selectedIndex = index;
            this.style.background = 'rgba(255,197,109,0.15)';
        });
        link.addEventListener('mouseleave', function() {
            if (selectedIndex !== index) {
                this.style.background = 'transparent';
            }
        });
    });
}

function clearSelection() {
    resultsBox.querySelectorAll('.search-result-item').forEach(item => {
        item.style.background = 'transparent';
    });
}

function updateSelection() {
    clearSelection();
    if (selectedIndex >= 0 && selectedIndex < currentResults.length) {
        const items = resultsBox.querySelectorAll('.search-result-item');
        items[selectedIndex].style.background = 'rgba(255,197,109,0.15)';
        items[selectedIndex].scrollIntoView({ block: 'nearest' });
    }
}

// Search input handler
searchInput.addEventListener('input', function() {
    performSearch(this.value.trim());
});

// Keyboard navigation
searchInput.addEventListener('keydown', function(e) {
    if (!resultsBox.style.display || resultsBox.style.display === 'none') return;

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = Math.min(selectedIndex + 1, currentResults.length - 1);
        updateSelection();
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = Math.max(selectedIndex - 1, -1);
        updateSelection();
    } else if (e.key === 'Enter') {
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < currentResults.length) {
            window.location.href = currentResults[selectedIndex].url;
        }
    } else if (e.key === 'Escape') {
        resultsBox.style.display = 'none';
        filterContainer.style.display = 'none';
        selectedIndex = -1;
    }
});

// Hide results when clicking outside
document.addEventListener('click', function(e) {
    if (!resultsBox.contains(e.target) && e.target !== searchInput) {
        resultsBox.style.display = 'none';
        selectedIndex = -1;
    }
});
