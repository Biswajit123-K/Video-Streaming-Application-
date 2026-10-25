/**
 * YTube - Video Streaming Platform
 * Complete interactive logic for Homepage, Watch Page, Dynamic Player, Search,
 * Modals, Comments, Likes, Subscriptions, and Voice Search.
 */

// ==========================================
// 1. Video Data Catalog
// ==========================================
const DEFAULT_VIDEOS = [
    {
        id: "gPvYox9JIYI",
        youtubeId: "gPvYox9JIYI",
        title: "Python Full Course For Beginners | Complete Job Ready Masterclass",
        channelName: "Coding With Sagar",
        channelImg: "https://yt3.googleusercontent.com/7Y9k8w3DSGCHHRmEQfvVr6-J86AE_7b-5wtYIBFeDjmqX8TeNI-AoXF-QFnLnES8VTkD6CWL0N8=s160-c-k-c0x00ffffff-no-rj",
        subscribers: "485K Subscribers",
        subscriberCount: 485000,
        views: "2.6M views",
        viewCount: 2600000,
        timestamp: "3 years ago",
        duration: "11:42:15",
        category: "Python",
        tags: ["#python", "#programming", "#coding", "#beginners"],
        thumbnail: "https://i.ytimg.com/vi/gPvYox9JIYI/hqdefault.jpg",
        likes: "125K",
        likeCount: 125000,
        description: `Welcome to this complete Python full course for beginners! In this comprehensive tutorial, we cover everything from the absolute basics of variables and data structures to advanced object-oriented programming, file handling, and real-world projects.\n\nTimestamps:\n00:00 - Introduction to Python\n15:30 - Setup & Installation\n45:00 - Variables & Data Types\n01:30:00 - Functions & Modules\n03:15:00 - Object Oriented Programming\n08:00:00 - Final Capstone Project`
    },
    {
        id: "1pcikNlDB-4",
        youtubeId: "1pcikNlDB-4",
        title: "Introduction to Web Development | Complete Roadmap & First HTML Page",
        channelName: "Coder Army",
        channelImg: "https://coderarmy.in/assets/images/rohit_negi.png",
        subscribers: "585K Subscribers",
        subscriberCount: 585000,
        views: "125K views",
        viewCount: 125000,
        timestamp: "8 months ago",
        duration: "48:20",
        category: "Web Development",
        tags: ["#webdev", "#html", "#coderarmy", "#frontend"],
        thumbnail: "https://i.ytimg.com/vi/1pcikNlDB-4/maxresdefault.jpg",
        likes: "18K",
        likeCount: 18000,
        description: `Kickstart your Full Stack Web Development journey with Rohit Negi in this comprehensive introduction. We discuss how the internet works, client-server architecture, and build our very first HTML webpage from scratch.`
    },
    {
        id: "M7n551ot8oQ",
        youtubeId: "M7n551ot8oQ",
        title: "New Complete AI / ML Batch Launch | Data Science Roadmap 2025",
        channelName: "Apna College",
        channelImg: "https://yt3.googleusercontent.com/FEcjRtez5od8UowDo6tTt9WlE-MrIFEmcwPMTORmK9Swk6KCklOmA3xfIG9WuLWfNYfNThQE=s160-c-k-c0x00ffffff-no-rj",
        subscribers: "5.2M Subscribers",
        subscriberCount: 5200000,
        views: "1.2M views",
        viewCount: 1200000,
        timestamp: "8 months ago",
        duration: "24:15",
        category: "AI & ML",
        tags: ["#ai", "#datascience", "#apnacollege", "#machinelearning"],
        thumbnail: "https://i.ytimg.com/vi/M7n551ot8oQ/hqdefault.jpg",
        likes: "94K",
        likeCount: 94000,
        description: `Complete syllabus breakdown, learning schedule, mathematics prerequisites, and project roadmap for mastering Artificial Intelligence and Machine Learning from beginner to advanced.`
    },
    {
        id: "sscX432bMZo",
        youtubeId: "sscX432bMZo",
        title: "JavaScript Basics & DOM Manipulation In Depth",
        channelName: "Chai aur Code",
        channelImg: "https://yt3.googleusercontent.com/6tLBV-DRVemxhmanuezR5HkHshX2g7Y46Rq8cysyO1V-nd2SaQ2Fi8cdgVM-n6v_8XZ5BEimxXI=s160-c-k-c0x00ffffff-no-rj",
        subscribers: "980K Subscribers",
        subscriberCount: 980000,
        views: "95K views",
        viewCount: 95000,
        timestamp: "4 months ago",
        duration: "32:10",
        category: "JavaScript",
        tags: ["#javascript", "#chaiaurcode", "#webdevelopment", "#dom"],
        thumbnail: "https://i.ytimg.com/vi/sscX432bMZo/hqdefault.jpg",
        likes: "12K",
        likeCount: 12000,
        description: `Explore the core concepts of JavaScript and how modern browsers render DOM elements. Learn event listeners, node traversal, and asynchronous JavaScript with chai!`
    },
    {
        id: "6mbwJ2xhgzM",
        youtubeId: "6mbwJ2xhgzM",
        title: "Profitable Web Developer Roadmap - Step by Step 2025",
        channelName: "CodeWithHarry",
        channelImg: "https://yt3.googleusercontent.com/ytc/AIdro_kX3sdbuu3KFmRPsmlu0R5Rx_BhpxwupjtvJmkEdNfla7w=s160-c-k-c0x00ffffff-no-rj",
        subscribers: "6.1M Subscribers",
        subscriberCount: 6100000,
        views: "965K views",
        viewCount: 965000,
        timestamp: "1 month ago",
        duration: "18:45",
        category: "Web Development",
        tags: ["#webdeveloper", "#codewithharry", "#roadmap", "#career"],
        thumbnail: "https://i.ytimg.com/vi/6mbwJ2xhgzM/hqdefault.jpg",
        likes: "78K",
        likeCount: 78000,
        description: `Want to become a high-earning web developer? In this video, we discuss front-end, back-end, database integration, modern frameworks (React, Next.js), freelancing, and landing tech jobs.`
    },
    {
        id: "w7ejDZ8SWv8",
        youtubeId: "w7ejDZ8SWv8",
        title: "React JS Crash Course 2025 - Build Real World Apps",
        channelName: "FreeCodeCamp",
        channelImg: "https://yt3.googleusercontent.com/ytc/AIdro_mZfqpNqtGLksLQfMbW7UVFgub_poGNE-YU_RAoV_NdUII=s160-c-k-c0x00ffffff-no-rj",
        subscribers: "9.8M Subscribers",
        subscriberCount: 9800000,
        views: "1.1M views",
        viewCount: 1100000,
        timestamp: "1 year ago",
        duration: "1:45:00",
        category: "JavaScript",
        tags: ["#react", "#javascript", "#frontend", "#freecodecamp"],
        thumbnail: "https://i.ytimg.com/vi/w7ejDZ8SWv8/hqdefault.jpg",
        likes: "110K",
        likeCount: 110000,
        description: `Master React.js fundamentals including hooks (useState, useEffect, useMemo), component lifecycle, state management, props drilling, and build a full responsive app.`
    },
    {
        id: "yfoY53QXEnI",
        youtubeId: "yfoY53QXEnI",
        title: "What is CSS | Inline + Internal + External Styles Explained",
        channelName: "Coder Army",
        channelImg: "https://coderarmy.in/assets/images/rohit_negi.png",
        subscribers: "585K Subscribers",
        subscriberCount: 585000,
        views: "225K views",
        viewCount: 225000,
        timestamp: "7 months ago",
        duration: "38:15",
        category: "Web Development",
        tags: ["#css", "#coderarmy", "#webdesign", "#beginners"],
        thumbnail: "https://i.ytimg.com/vi/yfoY53QXEnI/hqdefault.jpg",
        likes: "21K",
        likeCount: 21000,
        description: `Learn how cascading style sheets work! We dive into specificity, cascading rules, inline vs internal vs external CSS, box model, and responsive flexbox layout.`
    },
    {
        id: "RGOj5yH7evk",
        youtubeId: "RGOj5yH7evk",
        title: "Git and GitHub for Beginners - Complete Crash Course",
        channelName: "Chai aur Code",
        channelImg: "https://yt3.googleusercontent.com/6tLBV-DRVemxhmanuezR5HkHshX2g7Y46Rq8cysyO1V-nd2SaQ2Fi8cdgVM-n6v_8XZ5BEimxXI=s160-c-k-c0x00ffffff-no-rj",
        subscribers: "980K Subscribers",
        subscriberCount: 980000,
        views: "340K views",
        viewCount: 340000,
        timestamp: "5 months ago",
        duration: "52:40",
        category: "Git",
        tags: ["#git", "#github", "#versioncontrol", "#chaiaurcode"],
        thumbnail: "https://i.ytimg.com/vi/RGOj5yH7evk/hqdefault.jpg",
        likes: "42K",
        likeCount: 42000,
        description: `Version control made easy! Learn git init, commit, branching, merging, conflict resolution, GitHub pull requests, and collaborative open-source workflows.`
    },
    {
        id: "vLnPwxZdW4Y",
        youtubeId: "vLnPwxZdW4Y",
        title: "Master C++ Programming - Complete Zero to Hero Course",
        channelName: "Coding With Sagar",
        channelImg: "https://yt3.googleusercontent.com/7Y9k8w3DSGCHHRmEQfvVr6-J86AE_7b-5wtYIBFeDjmqX8TeNI-AoXF-QFnLnES8VTkD6CWL0N8=s160-c-k-c0x00ffffff-no-rj",
        subscribers: "485K Subscribers",
        subscriberCount: 485000,
        views: "2.4M views",
        viewCount: 2400000,
        timestamp: "1 year ago",
        duration: "9:15:30",
        category: "C++",
        tags: ["#cpp", "#programming", "#dsa", "#coding"],
        thumbnail: "https://i.ytimg.com/vi/vLnPwxZdW4Y/hqdefault.jpg",
        likes: "160K",
        likeCount: 160000,
        description: `A full C++ tutorial covering modern C++ features, pointers, memory allocation, standard template library (STL), data structures, algorithms, and practical competitive programming tips.`
    },
    {
        id: "_uQrJ0TkZlc",
        youtubeId: "_uQrJ0TkZlc",
        title: "Python Tutorial for Beginners [Full Course 2025]",
        channelName: "Programming with Mosh",
        channelImg: "https://yt3.googleusercontent.com/FEcjRtez5od8UowDo6tTt9WlE-MrIFEmcwPMTORmK9Swk6KCklOmA3xfIG9WuLWfNYfNThQE=s160-c-k-c0x00ffffff-no-rj",
        subscribers: "3.9M Subscribers",
        subscriberCount: 3900000,
        views: "32M views",
        viewCount: 32000000,
        timestamp: "4 years ago",
        duration: "6:14:07",
        category: "Python",
        tags: ["#python", "#mosh", "#programming", "#tutorial"],
        thumbnail: "https://i.ytimg.com/vi/_uQrJ0TkZlc/hqdefault.jpg",
        likes: "950K",
        likeCount: 950000,
        description: `Learn Python programming with Mosh. This hands-on, project-based tutorial covers core language features, package managers, PyLint, Django basics, and automation scripts.`
    },
    {
        id: "PkZNo7MFNFg",
        youtubeId: "PkZNo7MFNFg",
        title: "Learn JavaScript - Full Course for Beginners",
        channelName: "FreeCodeCamp",
        channelImg: "https://yt3.googleusercontent.com/ytc/AIdro_mZfqpNqtGLksLQfMbW7UVFgub_poGNE-YU_RAoV_NdUII=s160-c-k-c0x00ffffff-no-rj",
        subscribers: "9.8M Subscribers",
        subscriberCount: 9800000,
        views: "14M views",
        viewCount: 14000000,
        timestamp: "5 years ago",
        duration: "3:26:42",
        category: "JavaScript",
        tags: ["#javascript", "#freecodecamp", "#coding", "#beginners"],
        thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg",
        likes: "420K",
        likeCount: 420000,
        description: `This complete 134-part JavaScript course will take you through modern ES6+ syntax, arrays, objects, loops, closures, promises, and building browser-based mini games.`
    },
    {
        id: "Oe421EPjeBE",
        youtubeId: "Oe421EPjeBE",
        title: "Node.js and Express.js - Full Course for Beginners",
        channelName: "FreeCodeCamp",
        channelImg: "https://yt3.googleusercontent.com/ytc/AIdro_mZfqpNqtGLksLQfMbW7UVFgub_poGNE-YU_RAoV_NdUII=s160-c-k-c0x00ffffff-no-rj",
        subscribers: "9.8M Subscribers",
        subscriberCount: 9800000,
        views: "3.1M views",
        viewCount: 3100000,
        timestamp: "3 years ago",
        duration: "8:16:32",
        category: "Web Development",
        tags: ["#nodejs", "#express", "#backend", "#freecodecamp"],
        thumbnail: "https://i.ytimg.com/vi/Oe421EPjeBE/hqdefault.jpg",
        likes: "135K",
        likeCount: 135000,
        description: `Learn how to build RESTful APIs and server-side applications using Node.js, Express framework, middleware, MongoDB integration, authentication, and deployment.`
    }
];

// Helper to get all videos (including user uploads stored in localStorage)
function getAllVideos() {
    const saved = localStorage.getItem("ytube_custom_videos");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            return [...parsed, ...DEFAULT_VIDEOS];
        } catch (e) {
            console.error("Failed to parse custom videos:", e);
        }
    }
    return DEFAULT_VIDEOS;
}

// Active Filter State
let currentCategory = "All";
let currentSearchQuery = "";

// ==========================================
// 2. Global Toast Notification System
// ==========================================
function showToast(message, icon = "fa-circle-check") {
    let container = document.getElementById("toast-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "toast-container";
        container.className = "toast-container";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ==========================================
// 3. Navigation & Header Handlers
// ==========================================
function initHeaderNavigation() {
    const menuBtn = document.querySelector(".menu-bar");
    const sidebar = document.querySelector(".side-container");
    const mainContainer = document.querySelector(".container");
    const backdrop = document.querySelector(".drawer-backdrop");

    // Hamburger Menu Toggle
    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            const isWatchPage = document.body.classList.contains("watch-page");
            if (isWatchPage) {
                if (sidebar) sidebar.classList.toggle("open-drawer");
                if (backdrop) backdrop.classList.toggle("show");
            } else if (window.innerWidth <= 900) {
                // Mobile Drawer
                if (sidebar) sidebar.classList.toggle("open-mobile");
                if (backdrop) backdrop.classList.toggle("show");
            } else {
                // Desktop Collapse
                if (sidebar) sidebar.classList.toggle("small-sidebar");
                if (mainContainer) mainContainer.classList.toggle("large-container");
            }
        });
    }

    // Close Drawer inside button (Watch page)
    const closeDrawerBtn = document.querySelector(".close-drawer-btn");
    if (closeDrawerBtn) {
        closeDrawerBtn.addEventListener("click", () => {
            if (sidebar) sidebar.classList.remove("open-drawer");
            if (backdrop) backdrop.classList.remove("show");
        });
    }

    // Close Mobile Drawer on Backdrop Click
    if (backdrop) {
        backdrop.addEventListener("click", () => {
            if (sidebar) {
                sidebar.classList.remove("open-mobile");
                sidebar.classList.remove("open-drawer");
            }
            backdrop.classList.remove("show");
        });
    }

    // Search Box Logic
    const searchInput = document.querySelector(".search-box input");
    const searchBtn = document.querySelector(".search-icon-btn");
    const clearBtn = document.querySelector(".clear-search-btn");

    if (searchInput) {
        // Toggle Clear button visibility
        searchInput.addEventListener("input", () => {
            if (clearBtn) {
                clearBtn.style.display = searchInput.value.trim() ? "block" : "none";
            }
            // If on homepage, search instantly
            const listContainer = document.querySelector(".list-container");
            if (listContainer) {
                currentSearchQuery = searchInput.value.trim().toLowerCase();
                renderHomepageVideos();
            }
        });

        // Enter key to trigger search
        searchInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                triggerSearch(searchInput.value.trim());
            }
        });
    }

    if (searchBtn && searchInput) {
        searchBtn.addEventListener("click", () => {
            triggerSearch(searchInput.value.trim());
        });
    }

    if (clearBtn && searchInput) {
        clearBtn.addEventListener("click", () => {
            searchInput.value = "";
            clearBtn.style.display = "none";
            currentSearchQuery = "";
            const listContainer = document.querySelector(".list-container");
            if (listContainer) {
                renderHomepageVideos();
            }
            searchInput.focus();
        });
    }

    // Notification Dropdown Toggle
    const notifBtn = document.querySelector(".notification-icon-btn");
    const notifPanel = document.getElementById("notificationDropdown");
    if (notifBtn && notifPanel) {
        notifBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            notifPanel.classList.toggle("show");
            const profilePanel = document.getElementById("profileDropdown");
            if (profilePanel) profilePanel.classList.remove("show");

            // Clear badge once opened
            const badge = notifBtn.querySelector(".badge-count");
            if (badge) badge.style.display = "none";
        });
    }

    // Profile Dropdown Toggle
    const profileBtn = document.querySelector(".profile-avatar-btn");
    const profilePanel = document.getElementById("profileDropdown");
    if (profileBtn && profilePanel) {
        profileBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            profilePanel.classList.toggle("show");
            if (notifPanel) notifPanel.classList.remove("show");
        });
    }

    // Close Dropdowns on Click Outside
    document.addEventListener("click", () => {
        if (notifPanel) notifPanel.classList.remove("show");
        if (profilePanel) profilePanel.classList.remove("show");
    });

    // Voice Search Setup
    initVoiceSearch();

    // Upload Video Modal Setup
    initUploadModal();
}

function triggerSearch(query) {
    if (!query) {
        showToast("Please enter a search query", "fa-circle-exclamation");
        return;
    }

    // If we are on video.html, redirect to index.html with query param
    const isWatchPage = window.location.pathname.includes("video.html");
    if (isWatchPage) {
        window.location.href = `index.html?search=${encodeURIComponent(query)}`;
    } else {
        currentSearchQuery = query.toLowerCase();
        renderHomepageVideos();
        showToast(`Showing results for "${query}"`, "fa-magnifying-glass");
    }
}

// ==========================================
// 4. Voice Search Integration (Web Speech API)
// ==========================================
function initVoiceSearch() {
    const micBtns = document.querySelectorAll(".mic-btn");
    const voiceModal = document.getElementById("voiceSearchModal");
    const voiceStatus = document.getElementById("voiceStatus");
    const voiceRecognized = document.getElementById("voiceRecognized");
    const closeVoiceBtn = document.getElementById("closeVoiceModal");

    if (!voiceModal) return;

    let recognition = null;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    micBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            voiceModal.classList.add("show");
            voiceStatus.textContent = "Listening... Speak into your microphone";
            voiceRecognized.textContent = "";

            if (SpeechRecognition) {
                try {
                    recognition = new SpeechRecognition();
                    recognition.continuous = false;
                    recognition.interimResults = true;
                    recognition.lang = "en-US";

                    recognition.onresult = (event) => {
                        const transcript = Array.from(event.results)
                            .map(result => result[0])
                            .map(result => result.transcript)
                            .join("");

                        voiceRecognized.textContent = `"${transcript}"`;

                        if (event.results[0].isFinal) {
                            setTimeout(() => {
                                voiceModal.classList.remove("show");
                                const searchInput = document.querySelector(".search-box input");
                                if (searchInput) {
                                    searchInput.value = transcript;
                                    triggerSearch(transcript);
                                }
                            }, 800);
                        }
                    };

                    recognition.onerror = (event) => {
                        voiceStatus.textContent = "Microphone error or permission denied.";
                    };

                    recognition.onend = () => {
                        btn.classList.remove("listening");
                    };

                    recognition.start();
                    btn.classList.add("listening");
                } catch (err) {
                    console.error("Speech Recognition Error:", err);
                    voiceStatus.textContent = "Could not start speech recognition.";
                }
            } else {
                voiceStatus.textContent = "Voice search is not supported in this browser.";
                voiceRecognized.innerHTML = `<small>Try typing in the search box!</small>`;
            }
        });
    });

    if (closeVoiceBtn) {
        closeVoiceBtn.addEventListener("click", () => {
            voiceModal.classList.remove("show");
            if (recognition) {
                try { recognition.stop(); } catch(e) {}
            }
        });
    }

    voiceModal.addEventListener("click", (e) => {
        if (e.target === voiceModal) {
            voiceModal.classList.remove("show");
            if (recognition) {
                try { recognition.stop(); } catch(e) {}
            }
        }
    });
}

// ==========================================
// 5. Upload New Video Feature
// ==========================================
function initUploadModal() {
    const uploadBtn = document.querySelector(".upload-icon-btn");
    const uploadModal = document.getElementById("uploadVideoModal");
    const closeModalBtn = document.getElementById("closeUploadModal");
    const cancelModalBtn = document.getElementById("cancelUploadBtn");
    const uploadForm = document.getElementById("uploadVideoForm");

    if (!uploadBtn || !uploadModal) return;

    uploadBtn.addEventListener("click", () => {
        uploadModal.classList.add("show");
    });

    const closeModal = () => {
        uploadModal.classList.remove("show");
        if (uploadForm) uploadForm.reset();
    };

    if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
    if (cancelModalBtn) cancelModalBtn.addEventListener("click", closeModal);
    uploadModal.addEventListener("click", (e) => {
        if (e.target === uploadModal) closeModal();
    });

    if (uploadForm) {
        uploadForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const title = document.getElementById("newVidTitle").value.trim();
            const channel = document.getElementById("newVidChannel").value.trim() || "You";
            const category = document.getElementById("newVidCategory").value || "General";
            let youtubeUrl = document.getElementById("newVidUrl").value.trim();
            let thumbnail = document.getElementById("newVidThumbnail").value.trim();
            const duration = document.getElementById("newVidDuration").value.trim() || "10:00";

            // Extract YouTube ID from URL or code
            let youtubeId = "1pcikNlDB-4"; // safe default
            const match = youtubeUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
            if (match && match[1]) {
                youtubeId = match[1];
            } else if (youtubeUrl.length === 11) {
                youtubeId = youtubeUrl;
            }

            if (!thumbnail) {
                thumbnail = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
            }

            const newVideo = {
                id: "custom_" + Date.now(),
                youtubeId: youtubeId,
                title: title,
                channelName: channel,
                channelImg: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Virat_Kohli_in_New_Delhi_in_December_2018.jpg",
                subscribers: "1 Subscriber",
                subscriberCount: 1,
                views: "1 view",
                viewCount: 1,
                timestamp: "Just now",
                duration: duration,
                category: category,
                tags: [`#${category.toLowerCase().replace(/\s+/g, '')}`, "#ytube"],
                thumbnail: thumbnail,
                likes: "1",
                likeCount: 1,
                description: `Uploaded to YTube by ${channel}. Thanks for sharing your content!`
            };

            // Save to localStorage
            const saved = localStorage.getItem("ytube_custom_videos");
            let list = saved ? JSON.parse(saved) : [];
            list.unshift(newVideo);
            localStorage.setItem("ytube_custom_videos", JSON.stringify(list));

            closeModal();
            showToast("Video published successfully!", "fa-circle-check");

            // Refresh homepage list if on index.html
            renderHomepageVideos();
        });
    }
}

// ==========================================
// 6. Homepage Video Grid & Filter Chips
// ==========================================
function initFilterChips() {
    const chipsWrapper = document.querySelector(".filter-chips-wrapper");
    if (!chipsWrapper) return;

    const chips = chipsWrapper.querySelectorAll(".chip");
    chips.forEach(chip => {
        chip.addEventListener("click", () => {
            chips.forEach(c => c.classList.remove("active"));
            chip.classList.add("active");
            currentCategory = chip.getAttribute("data-category") || chip.textContent.trim();
            renderHomepageVideos();
        });
    });
}

function renderHomepageVideos() {
    const list = document.querySelector(".list-container");
    if (!list) return; // Exit if not on index.html

    const allVideos = getAllVideos();

    // Filter by Category and Search Query
    let filtered = allVideos.filter(video => {
        const matchesCategory = (currentCategory === "All") || 
            (video.category && video.category.toLowerCase() === currentCategory.toLowerCase());

        let matchesSearch = true;
        if (currentSearchQuery) {
            const haystack = `${video.title} ${video.channelName} ${video.category} ${video.tags.join(' ')}`.toLowerCase();
            matchesSearch = haystack.includes(currentSearchQuery);
        }

        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        list.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-magnifying-glass"></i>
                <h3>No results found</h3>
                <p>Try different keywords or browse our top categories.</p>
                <button class="reset-search-btn" id="resetSearchBtn">Reset Search & Filters</button>
            </div>
        `;

        const resetBtn = document.getElementById("resetSearchBtn");
        if (resetBtn) {
            resetBtn.addEventListener("click", () => {
                currentSearchQuery = "";
                currentCategory = "All";
                const searchInput = document.querySelector(".search-box input");
                if (searchInput) searchInput.value = "";
                const chips = document.querySelectorAll(".chip");
                chips.forEach(c => c.classList.toggle("active", c.textContent.trim() === "All"));
                renderHomepageVideos();
            });
        }
        return;
    }

    let cardsHtml = "";
    filtered.forEach(video => {
        cardsHtml += `
            <div class="vid-list" onclick="navigateToVideo('${video.id}')">
                <div class="thumbnail-wrapper">
                    <img src="${video.thumbnail}" alt="${video.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60'">
                    <span class="video-duration">${video.duration}</span>
                </div>
                <div class="flex-div">
                    <img src="${video.channelImg}" alt="${video.channelName}" class="channel-avatar" onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=60'">
                    <div class="vid-info">
                        <h4 class="vid-title" title="${video.title}">${video.title}</h4>
                        <p class="channel-name">
                            ${video.channelName} 
                            <i class="fa-solid fa-circle-check verified-icon" title="Verified"></i>
                        </p>
                        <p class="video-stats">${video.views} &bull; ${video.timestamp}</p>
                    </div>
                </div>
            </div>
        `;
    });

    list.innerHTML = cardsHtml;
}

function navigateToVideo(videoId) {
    window.location.href = `video.html?id=${videoId}`;
}

// Check URL query on homepage load (e.g. from search redirect)
function checkUrlSearchParam() {
    const params = new URLSearchParams(window.location.search);
    const searchParam = params.get("search");
    if (searchParam) {
        currentSearchQuery = searchParam.toLowerCase();
        const searchInput = document.querySelector(".search-box input");
        if (searchInput) searchInput.value = searchParam;
        const clearBtn = document.querySelector(".clear-search-btn");
        if (clearBtn) clearBtn.style.display = "block";
    }
}

// ==========================================
// 7. Watch / Video Player Page Logic
// ==========================================
function initWatchPage() {
    const playContainer = document.querySelector(".play-container");
    if (!playContainer) return; // Exit if not on video.html

    const params = new URLSearchParams(window.location.search);
    const videoId = params.get("id") || "gPvYox9JIYI";
    const allVideos = getAllVideos();

    let currentVideo = allVideos.find(v => v.id === videoId);
    if (!currentVideo) {
        currentVideo = allVideos[0];
    }

    // Set page title
    document.title = `${currentVideo.title} - YTube`;

    // 1. Populate Video Player Container
    const playerWrapper = document.getElementById("playerContainer");
    if (playerWrapper) {
        playerWrapper.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/${currentVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1" 
                title="${currentVideo.title}" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
        `;
    }

    // 2. Populate Tags & Title
    const tagsContainer = document.getElementById("videoTags");
    if (tagsContainer) {
        tagsContainer.innerHTML = currentVideo.tags.map(t => `<a href="index.html?search=${encodeURIComponent(t)}">${t}</a>`).join(" ");
    }

    const titleElem = document.getElementById("videoTitle");
    if (titleElem) {
        titleElem.textContent = currentVideo.title;
    }

    // 3. Publisher Info
    const channelAvatar = document.getElementById("channelAvatar");
    const channelTitle = document.getElementById("channelTitle");
    const channelSubs = document.getElementById("channelSubs");

    if (channelAvatar) channelAvatar.src = currentVideo.channelImg;
    if (channelTitle) channelTitle.innerHTML = `${currentVideo.channelName} <i class="fa-solid fa-circle-check verified-icon"></i>`;
    if (channelSubs) channelSubs.textContent = currentVideo.subscribers;

    // 4. Subscribe Button Interaction
    const subscribeBtn = document.getElementById("subscribeBtn");
    if (subscribeBtn) {
        const isSubscribed = localStorage.getItem(`ytube_sub_${currentVideo.channelName}`) === "true";
        updateSubscribeButton(subscribeBtn, isSubscribed);

        subscribeBtn.addEventListener("click", () => {
            const newState = !(localStorage.getItem(`ytube_sub_${currentVideo.channelName}`) === "true");
            localStorage.setItem(`ytube_sub_${currentVideo.channelName}`, newState);
            updateSubscribeButton(subscribeBtn, newState);

            if (newState) {
                showToast(`Subscribed to ${currentVideo.channelName}!`, "fa-bell");
            } else {
                showToast(`Unsubscribed from ${currentVideo.channelName}`, "fa-bell-slash");
            }
        });
    }

    // 5. Like / Dislike Interaction
    const likeBtn = document.getElementById("likeBtn");
    const dislikeBtn = document.getElementById("dislikeBtn");
    const likeCountSpan = document.getElementById("likeCount");

    if (likeBtn && likeCountSpan) {
        likeCountSpan.textContent = currentVideo.likes;
        let isLiked = localStorage.getItem(`ytube_liked_${currentVideo.id}`) === "true";
        let isDisliked = localStorage.getItem(`ytube_disliked_${currentVideo.id}`) === "true";

        if (isLiked) likeBtn.classList.add("active");
        if (isDisliked) dislikeBtn.classList.add("active");

        likeBtn.addEventListener("click", () => {
            isLiked = !isLiked;
            if (isLiked && isDisliked) {
                isDisliked = false;
                dislikeBtn.classList.remove("active");
                localStorage.setItem(`ytube_disliked_${currentVideo.id}`, "false");
            }

            likeBtn.classList.toggle("active", isLiked);
            localStorage.setItem(`ytube_liked_${currentVideo.id}`, isLiked);

            let count = currentVideo.likeCount;
            if (isLiked) count += 1;
            likeCountSpan.textContent = formatViews(count);
            showToast(isLiked ? "Added to Liked Videos" : "Removed like", "fa-thumbs-up");
        });

        if (dislikeBtn) {
            dislikeBtn.addEventListener("click", () => {
                isDisliked = !isDisliked;
                if (isDisliked && isLiked) {
                    isLiked = false;
                    likeBtn.classList.remove("active");
                    localStorage.setItem(`ytube_liked_${currentVideo.id}`, "false");
                    likeCountSpan.textContent = formatViews(currentVideo.likeCount);
                }

                dislikeBtn.classList.toggle("active", isDisliked);
                localStorage.setItem(`ytube_disliked_${currentVideo.id}`, isDisliked);
                showToast(isDisliked ? "Feedback recorded" : "Dislike removed", "fa-thumbs-down");
            });
        }
    }

    // 6. Save / Watch Later Interaction
    const saveBtn = document.getElementById("saveBtn");
    if (saveBtn) {
        let isSaved = localStorage.getItem(`ytube_saved_${currentVideo.id}`) === "true";
        if (isSaved) {
            saveBtn.classList.add("active");
            saveBtn.innerHTML = `<i class="fa-solid fa-bookmark"></i> Saved`;
        }

        saveBtn.addEventListener("click", () => {
            isSaved = !isSaved;
            localStorage.setItem(`ytube_saved_${currentVideo.id}`, isSaved);
            saveBtn.classList.toggle("active", isSaved);
            saveBtn.innerHTML = isSaved ? `<i class="fa-solid fa-bookmark"></i> Saved` : `<i class="fa-regular fa-bookmark"></i> Save`;
            showToast(isSaved ? "Saved to Watch Later" : "Removed from Watch Later", "fa-bookmark");
        });
    }

    // 7. Share Button & Modal
    const shareBtn = document.getElementById("shareBtn");
    const shareModal = document.getElementById("shareModal");
    const closeShareModal = document.getElementById("closeShareModal");
    const copyShareLinkBtn = document.getElementById("copyShareLinkBtn");
    const shareLinkInput = document.getElementById("shareLinkInput");

    if (shareBtn && shareModal) {
        shareBtn.addEventListener("click", () => {
            if (shareLinkInput) shareLinkInput.value = window.location.href;
            shareModal.classList.add("show");
        });

        if (closeShareModal) {
            closeShareModal.addEventListener("click", () => shareModal.classList.remove("show"));
        }
        shareModal.addEventListener("click", (e) => {
            if (e.target === shareModal) shareModal.classList.remove("show");
        });

        if (copyShareLinkBtn && shareLinkInput) {
            copyShareLinkBtn.addEventListener("click", () => {
                navigator.clipboard.writeText(shareLinkInput.value).then(() => {
                    showToast("Link copied to clipboard!", "fa-copy");
                    shareModal.classList.remove("show");
                }).catch(() => {
                    shareLinkInput.select();
                    document.execCommand("copy");
                    showToast("Link copied!", "fa-copy");
                });
            });
        }

        // Hook up social buttons
        const waBtn = document.getElementById("shareWhatsApp");
        const twBtn = document.getElementById("shareTwitter");
        const fbBtn = document.getElementById("shareFacebook");
        const liBtn = document.getElementById("shareLinkedIn");

        const curUrl = encodeURIComponent(window.location.href);
        const curText = encodeURIComponent(`Watch "${currentVideo.title}" on YTube!`);

        if (waBtn) waBtn.href = `https://api.whatsapp.com/send?text=${curText}%20${curUrl}`;
        if (twBtn) twBtn.href = `https://twitter.com/intent/tweet?url=${curUrl}&text=${curText}`;
        if (fbBtn) fbBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${curUrl}`;
        if (liBtn) liBtn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${curUrl}`;
    }

    // 8. Description Box Expand / Collapse
    const descStats = document.getElementById("descStats");
    const descText = document.getElementById("descText");
    const descToggle = document.getElementById("descToggle");
    const descContainer = document.querySelector(".vid-description");

    if (descStats) descStats.textContent = `${currentVideo.views} • Published ${currentVideo.timestamp}`;
    if (descText) descText.textContent = currentVideo.description;

    if (descContainer && descText && descToggle) {
        descContainer.addEventListener("click", () => {
            const isCollapsed = descText.classList.toggle("collapsed");
            descToggle.textContent = isCollapsed ? "...Show more" : "Show less";
        });
    }

    // 9. Comments Section
    initComments(currentVideo.id);

    // 10. Suggested Videos Playlist
    renderSuggestedVideos(currentVideo.id);
}

function updateSubscribeButton(btn, isSubscribed) {
    if (isSubscribed) {
        btn.classList.add("subscribed");
        btn.innerHTML = `<i class="fa-solid fa-bell"></i> Subscribed`;
    } else {
        btn.classList.remove("subscribed");
        btn.innerHTML = `Subscribe`;
    }
}

// Comments logic
function initComments(videoId) {
    const commentCountHeader = document.getElementById("commentCountHeader");
    const commentInput = document.getElementById("commentInputField");
    const commentButtons = document.getElementById("commentButtons");
    const commentCancelBtn = document.getElementById("commentCancelBtn");
    const commentSubmitBtn = document.getElementById("commentSubmitBtn");
    const commentListContainer = document.getElementById("commentList");

    if (!commentListContainer) return;

    // Load initial comments + custom comments
    const storageKey = `ytube_comments_${videoId}`;
    let savedComments = [];
    try {
        const stored = localStorage.getItem(storageKey);
        if (stored) savedComments = JSON.parse(stored);
    } catch(e) {}

    const defaultStarterComments = [
        {
            author: "Raj Dutta",
            time: "4 days ago",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ErtzvaIc5efZ8FAFV32IJtzJmw4zqWX08g&s",
            text: "Great video! Really helped me understand the concepts clearly. The explanation of core fundamentals was top-notch.",
            likes: 125
        },
        {
            author: "Priya Sharma",
            time: "1 week ago",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
            text: "Hands down the best tutorial for web development on YTube! Please make a follow-up video on full stack projects.",
            likes: 89
        },
        {
            author: "Alex Morgan",
            time: "2 weeks ago",
            avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=60",
            text: "Watching this in 2025 and it is still completely relevant. Thanks for providing this quality content for free!",
            likes: 42
        }
    ];

    const allComments = [...savedComments, ...defaultStarterComments];

    if (commentCountHeader) {
        commentCountHeader.textContent = `${allComments.length} Comments`;
    }

    // Render Comments
    function renderComments() {
        let html = "";
        allComments.forEach((c, idx) => {
            html += `
                <div class="comment-card">
                    <img src="${c.avatar}" alt="${c.author}" class="comment-author-avatar" onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=60'">
                    <div class="comment-body">
                        <div class="comment-meta">
                            <span class="comment-author">${c.author}</span>
                            <span class="comment-time">${c.time}</span>
                        </div>
                        <p class="comment-text">${c.text}</p>
                        <div class="comment-actions">
                            <button class="comment-action-btn like-comment-btn" onclick="toggleCommentLike(this, ${c.likes})">
                                <i class="fa-regular fa-thumbs-up"></i> <span>${c.likes}</span>
                            </button>
                            <button class="comment-action-btn dislike-comment-btn" onclick="toggleCommentDislike(this)">
                                <i class="fa-regular fa-thumbs-down"></i>
                            </button>
                            <button class="comment-action-btn reply-btn">REPLY</button>
                        </div>
                    </div>
                </div>
            `;
        });
        commentListContainer.innerHTML = html;
    }

    renderComments();

    // Input handlers
    if (commentInput && commentButtons && commentSubmitBtn) {
        commentInput.addEventListener("focus", () => {
            commentButtons.classList.add("active");
        });

        commentInput.addEventListener("input", () => {
            commentSubmitBtn.disabled = !commentInput.value.trim();
        });

        if (commentCancelBtn) {
            commentCancelBtn.addEventListener("click", () => {
                commentInput.value = "";
                commentSubmitBtn.disabled = true;
                commentButtons.classList.remove("active");
            });
        }

        commentSubmitBtn.addEventListener("click", () => {
            const text = commentInput.value.trim();
            if (!text) return;

            const newComment = {
                author: "You",
                time: "Just now",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Virat_Kohli_in_New_Delhi_in_December_2018.jpg",
                text: text,
                likes: 0
            };

            savedComments.unshift(newComment);
            localStorage.setItem(storageKey, JSON.stringify(savedComments));
            allComments.unshift(newComment);

            commentInput.value = "";
            commentSubmitBtn.disabled = true;
            commentButtons.classList.remove("active");

            if (commentCountHeader) {
                commentCountHeader.textContent = `${allComments.length} Comments`;
            }

            renderComments();
            showToast("Comment posted!", "fa-comment");
        });
    }
}

// Global helper for comment likes
window.toggleCommentLike = function(btn, initialCount) {
    const icon = btn.querySelector("i");
    const countSpan = btn.querySelector("span");
    const isLiked = btn.classList.toggle("active");

    if (isLiked) {
        icon.className = "fa-solid fa-thumbs-up";
        countSpan.textContent = initialCount + 1;
    } else {
        icon.className = "fa-regular fa-thumbs-up";
        countSpan.textContent = initialCount;
    }
};

window.toggleCommentDislike = function(btn) {
    const icon = btn.querySelector("i");
    const isDisliked = btn.classList.toggle("active");
    icon.className = isDisliked ? "fa-solid fa-thumbs-down" : "fa-regular fa-thumbs-down";
};

// Suggested Videos in Right Sidebar
function renderSuggestedVideos(currentId) {
    const sidebar = document.querySelector(".right-sidebar");
    if (!sidebar) return;

    const allVideos = getAllVideos();
    const suggestions = allVideos.filter(v => v.id !== currentId);

    let html = `
        <div class="suggested-filter-chips">
            <span class="chip active">All</span>
            <span class="chip">Related</span>
            <span class="chip">Recently uploaded</span>
        </div>
        <div class="suggested-list">
    `;

    suggestions.forEach(v => {
        html += `
            <div class="side-video-list" onclick="navigateToVideo('${v.id}')">
                <div class="side-thumbnail-wrapper">
                    <img src="${v.thumbnail}" alt="${v.title}" loading="lazy">
                    <span class="side-duration">${v.duration}</span>
                </div>
                <div class="side-vid-info">
                    <h5 class="side-vid-title" title="${v.title}">${v.title}</h5>
                    <p class="side-channel-name">
                        ${v.channelName} 
                        <i class="fa-solid fa-circle-check verified-icon"></i>
                    </p>
                    <p class="side-views">${v.views} &bull; ${v.timestamp}</p>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    sidebar.innerHTML = html;
}

// Formatting helper
function formatViews(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num;
}

// ==========================================
// 8. Initialization
// ==========================================
// document.addEventListener("DOMContentLoaded", () => {
//     initHeaderNavigation();
//     initFilterChips();
//     checkUrlSearchParam();
//     renderHomepageVideos();
//     initWatchPage();
// });

window.onload = ()=>{
     initHeaderNavigation();
    initFilterChips();
    checkUrlSearchParam();
    renderHomepageVideos();
    initWatchPage();
}