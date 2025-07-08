// search.js - Gigachad Network site search functionality

const searchIndex = [
    // --- SERVICES & TUTORIALS FIRST ---
    {
        title: "Jellyfin",
        url: "http://gigachad.website:30013",
        desc: "Media streaming server",
        type: "service",
        keywords: ["movies", "movie", "shows", "tv", "plex", "media", "stream", "video", "watch", "series", "film", "films", "episodes", "entertainment", "jellyfin"]
    },
    {
        title: "Setting up Jellyfin",
        url: "tutorials/jellyfin.html",
        desc: "Tutorial for Jellyfin media server",
        type: "tutorial",
        keywords: ["movies", "movie", "shows", "tv", "plex", "media", "stream", "video", "watch", "series", "film", "films", "episodes", "entertainment", "jellyfin", "setup", "tutorial"]
    },
    {
        title: "AudiobookShelf",
        url: "http://gigachad.website:30067",
        desc: "Audiobook streaming",
        type: "service",
        keywords: ["audiobook", "audiobooks", "audible", "books", "audio", "listen", "reading", "library", "podcast", "podcasts", "story", "stories", "audiobookshelf"]
    },
    {
        title: "Setting up AudioBookShelf",
        url: "tutorials/audiobook.html",
        desc: "Tutorial for AudioBookShelf",
        type: "tutorial",
        keywords: ["audiobook", "audiobooks", "books", "audible", "audio", "listen", "reading", "library", "podcast", "podcasts", "story", "stories", "audiobookshelf", "setup", "tutorial"]
    },
    {
        title: "Immich",
        url: "http://gigachad.website:30041",
        desc: "Photo management",
        type: "service",
        keywords: ["photo", "photos", "picture", "pictures", "googlephotos", "googlephoto", "image", "images", "gallery", "backup", "album", "albums", "camera", "memories", "videos", "video", "immich"]
    },
    {
        title: "Setting up Immich",
        url: "tutorials/immich.html",
        desc: "Tutorial for Immich photo backup",
        type: "tutorial",
        keywords: ["photo", "photos", "picture", "pictures", "googlephotos", "googlephoto", "image", "images", "gallery", "backup", "album", "albums", "camera", "memories", "videos", "video", "immich", "setup", "tutorial"]
    },
    {
        title: "Vaultwarden",
        url: "http://gigachad.website:30032",
        desc: "Password manager",
        type: "service",
        keywords: ["password", "vault", "security", "login", "credentials", "safe", "manager", "bitwarden", "vaultwarden"]
    },
    {
        title: "Setting up Bitwarden/Vaultwarden",
        url: "tutorials/vaultwarden.html",
        desc: "Tutorial for Vaultwarden password manager",
        type: "tutorial",
        keywords: ["password", "vault", "security", "login", "credentials", "safe", "manager", "bitwarden", "vaultwarden", "setup", "tutorial"]
    },
    {
        title: "VPN",
        url: "vpn.html",
        desc: "Secure VPN access",
        type: "service",
        keywords: ["vpn", "privacy", "wireguard", "secure", "network", "tunnel", "remote", "access"]
    },
    {
        title: "Setting up WireGuard",
        url: "vpn.html",
        desc: "Tutorial for WireGuard VPN",
        type: "tutorial",
        keywords: ["vpn", "privacy", "wireguard", "secure", "network", "tunnel", "remote", "access", "setup", "tutorial"]
    },
    {
        title: "NextCloud",
        url: "https://cloud.gigachad.website",
        desc: "Personal cloud storage",
        type: "service",
        keywords: ["cloud", "storage", "files", "nextcloud", "googledrive", "google driver", "drive", "documents", "sync", "backup"]
    },
    {
        title: "Gigachad AI",
        url: "under-construction.html",
        desc: "AI tools (coming soon)",
        type: "service",
        keywords: ["ai", "artificial intelligence", "tools", "chatbot", "image", "generator", "gigachad ai"]
    },
    {
        title: "Setting up AI",
        url: "tutorials/gigachadai.html",
        desc: "Tutorial for Gigachad AI",
        type: "tutorial",
        keywords: ["ai", "artificial intelligence", "tools", "chatbot", "image", "generator", "gigachad ai", "setup", "tutorial"]
    },
    {
        title: "Server Hosting (Toast Host)",
        url: "https://toast-host.com",
        desc: "Rent a game server",
        type: "service",
        keywords: ["server", "hosting", "game", "games", "minecraft", "valheim", "factorio", "host", "toast", "panel"]
    },
    {
        title: "Toast Host Game Server Hosting",
        url: "tutorials/toast-host.html",
        desc: "Tutorial for Toast Host game server panel",
        type: "tutorial",
        keywords: ["server", "hosting", "game", "games", "minecraft", "valheim", "factorio", "host", "toast", "panel", "setup", "tutorial"]
    },
    {
        title: "Navidrome",
        url: "http://gigachad.website:30043",
        desc: "Music streaming server",
        type: "service",
        keywords: ["music", "audio", "stream", "streaming", "songs", "albums", "artist", "artists", "playlist", "playlists", "mp3", "flac", "jukebox", "subsonic", "navidrome"]
    },
    {
        title: "Setting up Navidrome",
        url: "tutorials/navidrome.html",
        desc: "Tutorial for Navidrome music server",
        type: "tutorial",
        keywords: ["music", "audio", "stream", "streaming", "songs", "albums", "artist", "artists", "playlist", "playlists", "mp3", "flac", "jukebox", "subsonic", "navidrome", "setup", "tutorial"]
    },
    // --- OTHER CONTENT (articles, etc) ---
    {
        title: "Bypass CGNAT Like a Chad",
        url: "https://rentry.org/bypass-cgnat-like-a-chad",
        desc: "Article",
        type: "article",
        keywords: ["cgnat", "nat", "bypass", "network", "internet", "guide"]
    },
    {
        title: "Harden Your Network With Wazuh",
        url: "under-construction.html",
        desc: "Article",
        type: "article",
        keywords: ["wazuh", "security", "network", "harden", "monitor", "article"]
    },
    {
        title: "Escape Any Network With DNS Tunneling",
        url: "under-construction.html",
        desc: "Article",
        type: "article",
        keywords: ["dns", "tunneling", "network", "escape", "article"]
    },
    {
        title: "The Dating Guide",
        url: "https://date.gigachad.website",
        desc: "Article",
        type: "article",
        keywords: ["dating", "guide", "relationships", "article"]
    },
    {
        title: "How to Prirate Like a Chad",
        url: "Torrenting.html",
        desc: "Article",
        type: "article",
        keywords: [
            "pirate", "piracy", "torrent", "torrents", "qbittorrent", "bit torrent", "bittorrent", "seed", "seeding", "leech", "leeching", "magnet", "magnet link", "tracker", "trackers", "download", "downloads", "guide", "how to", "article", "movie", "movies", "show", "shows", "music", "software", "crack", "cracked", "warez", "free", "filesharing", "file sharing", "p2p", "peer to peer"
        ]
    },
    {
        title: "Degoogle your Life",
        url: "https://www.reddit.com/r/degoogle/comments/bsa6al/getting_started_why_you_should_degoogle/",
        desc: "Article",
        type: "article",
        keywords: [
            "degoogle", "privacy", "security", "google", "alternatives", "open source", "self-host", "selfhost", "cloud", "drive", "gmail", "photos", "calendar", "maps", "youtube", "android", "apple", "ios", "big tech", "surveillance", "tracking", "data", "freedom", "independence", "guide", "article", "replace", "switch", "migration", "move", "account", "services", "tools"
        ]
    }
];

const stopwords = [
    "how", "to", "the", "a", "an", "and", "or", "of", "for", "on", "in", "with", "by", "is", "at", "from", "as", "it", "this", "that", "these", "those", "be", "are", "was", "were", "will", "can", "get", "do", "does", "did", "has", "have", "had"
];

function extractKeywords(query) {
    return query
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '') // remove punctuation
        .split(/\s+/)
        .filter(word => word && !stopwords.includes(word));
}

const searchInput = document.getElementById('search-input');
const resultsBox = document.getElementById('search-results');

searchInput.addEventListener('input', function() {
    const query = this.value.trim();
    if (!query) {
        resultsBox.style.display = 'none';
        resultsBox.innerHTML = '';
        return;
    }

    const keywords = extractKeywords(query);

    // --- Auto-suggestions: show up to 5 matching titles as you type ---
    if (query.length < 3) {
        // Show suggestions only for 3+ chars, or remove this check if you want always-on
        const suggestions = searchIndex
            .filter(item =>
                item.title.toLowerCase().startsWith(query.toLowerCase()) ||
                (item.keywords && item.keywords.some(k => k.startsWith(query.toLowerCase())))
            )
            .slice(0, 5);

        if (suggestions.length > 0) {
            resultsBox.innerHTML = suggestions.map(item =>
                `<a href="${item.url}" style="display:block; color:#ffc56d; padding:0.7em 1em; text-decoration:none; border-bottom:1px solid #444;">
                    <strong>${item.title}</strong><br>
                    <span style="font-size:0.95em; color:#bbb;">${item.desc}</span>
                </a>`
            ).join('');
            resultsBox.style.display = 'block';
            return;
        }
    }

    // --- Auto-suggestions: show up to 5 matching titles as you type ---
    if (query.length < 3) {
        // Show suggestions only for 3+ chars, or remove this check if you want always-on
        const suggestions = searchIndex
            .filter(item =>
                item.title.toLowerCase().startsWith(query.toLowerCase()) ||
                (item.keywords && item.keywords.some(k => k.startsWith(query.toLowerCase())))
            )
            .slice(0, 5);

        if (suggestions.length > 0) {
            resultsBox.innerHTML = suggestions.map(item =>
                `<a href="${item.url}" style="display:block; color:#ffc56d; padding:0.7em 1em; text-decoration:none; border-bottom:1px solid #444;">
                    <strong>${item.title}</strong><br>
                    <span style="font-size:0.95em; color:#bbb;">${item.desc}</span>
                </a>`
            ).join('');
            resultsBox.style.display = 'block';
            return;
        }
    }

    // --- Main search logic ---
    let results = searchIndex.map(item => {
        let score = 0;
        const allFields = [
            item.title.toLowerCase(),
            item.desc.toLowerCase(),
            ...(item.keywords || [])
        ];
        for (const kw of keywords) {
            if (allFields.some(field => field.includes(kw))) score++;
        }
        return {...item, score};
    }).filter(item => item.score > 0);

    // Sort: tutorials and services first, then by score descending
    results = results.sort((a, b) => {
        const order = {tutorial: 0, service: 1, article: 2};
        if ((order[a.type] ?? 99) !== (order[b.type] ?? 99)) {
            return (order[a.type] ?? 99) - (order[b.type] ?? 99);
        }
        return b.score - a.score;
    }).slice(0, 5);

    if (results.length === 0) {
        resultsBox.innerHTML = '<div style="padding:0.7em;">No results found.</div>';
    } else {
        resultsBox.innerHTML = results.map(item =>
            `<a href="${item.url}" style="display:block; color:#ffc56d; padding:0.7em 1em; text-decoration:none; border-bottom:1px solid #444;">
                <strong>${item.title}</strong><br>
                <span style="font-size:0.95em; color:#bbb;">${item.desc}</span>
            </a>`
        ).join('');
    }
    resultsBox.style.display = 'block';
});

// Hide results when clicking outside
    document.addEventListener('click', function(e) {
        if (!resultsBox.contains(e.target) && e.target !== searchInput) {
            resultsBox.style.display = 'none';
        }
    });
