/* =====================================================
   TEAMFINDER - ADVANCED FRONTEND PROTOTYPE
   ===================================================== */


/* ================= STUDENT DATA ================= */

const students = [

    {
        id: 1,
        name: "Ananya Rao",
        college: "RVR & JC College of Engineering",
        role: "AI Engineer",
        skills: ["Python", "AI/ML", "TensorFlow", "Data Science"],
        bio: "Interested in AI healthcare, computer vision and intelligent systems.",
        initials: "AR",
        online: true
    },

    {
        id: 2,
        name: "Rahul Kumar",
        college: "VVIT",
        role: "Frontend Developer",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        bio: "Frontend developer interested in modern web applications.",
        initials: "RK",
        online: true
    },

    {
        id: 3,
        name: "Sneha Reddy",
        college: "KL University",
        role: "UI/UX Designer",
        skills: ["Figma", "UI/UX", "Prototyping", "Research"],
        bio: "I design simple and user-friendly digital experiences.",
        initials: "SR",
        online: false
    },

    {
        id: 4,
        name: "Arjun Varma",
        college: "IIT Hyderabad",
        role: "Backend Developer",
        skills: ["Java", "Spring Boot", "SQL", "Cloud"],
        bio: "Backend engineer focused on scalable applications.",
        initials: "AV",
        online: true
    },

    {
        id: 5,
        name: "Priya Sharma",
        college: "Andhra University",
        role: "Data Scientist",
        skills: ["Python", "Machine Learning", "Pandas", "Statistics"],
        bio: "Data science enthusiast building predictive systems.",
        initials: "PS",
        online: false
    },

    {
        id: 6,
        name: "Vikram Singh",
        college: "GITAM",
        role: "Cyber Security",
        skills: ["Cyber Security", "Ethical Hacking", "Networking", "Linux"],
        bio: "Interested in secure systems and cyber defence.",
        initials: "VS",
        online: true
    },

    {
        id: 7,
        name: "Meghana Devi",
        college: "Vignan University",
        role: "IoT Developer",
        skills: ["IoT", "Arduino", "Sensors", "Python"],
        bio: "Working on smart devices and connected systems.",
        initials: "MD",
        online: true
    },

    {
        id: 8,
        name: "Karthik R",
        college: "SRM University",
        role: "Cloud Engineer",
        skills: ["AWS", "Docker", "Cloud", "DevOps"],
        bio: "Cloud and DevOps enthusiast.",
        initials: "KR",
        online: false
    }

];


/* ================= HACKATHONS ================= */

const hackathons = [

    {
        id: 1,
        name: "Smart India Hackathon",
        organizer: "National Innovation Challenge",
        college: "Demo Engineering University",
        location: "Guntur",
        mode: "Offline",
        date: "15 Dec 2026",
        category: "AI / Innovation",
        distance: 4,
        icon: "🇮🇳",
        description:
            "Build technology solutions for real-world problems across healthcare, education, agriculture, transportation and governance.",
        problem:
            "Develop an intelligent system that can identify infrastructure problems and recommend optimized solutions.",
        winner:
            "AI-powered infrastructure monitoring platform",
        saved: false
    },

    {
        id: 2,
        name: "CodeSprint 2026",
        organizer: "Tech Innovation Club",
        college: "RVR & JC College",
        location: "Guntur",
        mode: "Offline",
        date: "20 Dec 2026",
        category: "Software",
        distance: 7,
        icon: "💻",
        description:
            "A software development hackathon focused on AI, cloud computing, web development and automation.",
        problem:
            "Create a platform that helps students discover internships based on skills and career interests.",
        winner:
            "AI career recommendation platform",
        saved: false
    },

    {
        id: 3,
        name: "AI Future Challenge",
        organizer: "AI Research Community",
        college: "Online",
        location: "Online",
        mode: "Online",
        date: "05 Jan 2027",
        category: "Artificial Intelligence",
        distance: 0,
        icon: "🤖",
        description:
            "Build innovative AI systems that solve meaningful social and industrial problems.",
        problem:
            "Build an AI assistant that can analyze large datasets and generate actionable recommendations.",
        winner:
            "Multimodal AI research assistant",
        saved: false
    },

    {
        id: 4,
        name: "GreenTech Challenge",
        organizer: "Future Earth Foundation",
        college: "Innovation Campus",
        location: "Vijayawada",
        mode: "Offline",
        date: "12 Jan 2027",
        category: "Environment",
        distance: 65,
        icon: "🌱",
        description:
            "Develop technology that can help reduce pollution and improve environmental sustainability.",
        problem:
            "Design an intelligent urban pollution monitoring and reduction system.",
        winner:
            "IoT-based air quality optimization network",
        saved: false
    },

    {
        id: 5,
        name: "Cyber Shield Hackathon",
        organizer: "Cyber Security Forum",
        college: "Tech University",
        location: "Hyderabad",
        mode: "Offline",
        date: "18 Jan 2027",
        category: "Cyber Security",
        distance: 280,
        icon: "🔐",
        description:
            "A cybersecurity challenge covering secure applications, threat detection and digital safety.",
        problem:
            "Create an AI-powered system for detecting suspicious network behaviour.",
        winner:
            "Machine-learning based threat detection system",
        saved: false
    },

    {
        id: 6,
        name: "HealthTech Innovation",
        organizer: "Digital Health Club",
        college: "Online",
        location: "Online",
        mode: "Online",
        date: "25 Jan 2027",
        category: "Healthcare",
        distance: 0,
        icon: "🏥",
        description:
            "Create digital solutions that improve healthcare accessibility and patient support.",
        problem:
            "Develop a system that predicts health risks using non-invasive data.",
        winner:
            "AI-assisted health monitoring platform",
        saved: false
    }

];


/* ================= PROJECT IDEAS ================= */

const ideas = [

    {
        title: "AI-Powered Disaster Response Network",
        category: "AI",
        description:
            "Use computer vision, satellite information and IoT sensors to identify disaster zones and recommend optimized emergency response routes."
    },

    {
        title: "Smart Urban Pollution Control",
        category: "Environment",
        description:
            "Build an IoT and AI platform that predicts pollution hotspots and recommends traffic and industrial interventions."
    },

    {
        title: "AI Cyber Attack Early Warning System",
        category: "Cyber Security",
        description:
            "Analyze network behaviour using machine learning to identify unusual activity before a major security incident occurs."
    },

    {
        title: "Intelligent Student Skill Graph",
        category: "AI",
        description:
            "Create a skill graph connecting students, technologies, projects and opportunities to automatically form high-performing teams."
    },

    {
        title: "Smart Hospital Queue Optimizer",
        category: "Health",
        description:
            "Use predictive analytics to optimize patient queues and reduce waiting times in hospitals."
    },

    {
        title: "AI Waste Segregation System",
        category: "Environment",
        description:
            "Use computer vision to classify waste and guide users toward correct disposal methods."
    },

    {
        title: "Fake News Verification Assistant",
        category: "AI",
        description:
            "Build an AI system that compares claims against trusted information sources and provides a credibility score."
    },

    {
        title: "Smart Campus Digital Twin",
        category: "Smart City",
        description:
            "Create a digital representation of a campus using IoT data to optimize energy, transport, security and resource usage."
    },

    {
        title: "Privacy-Preserving Student Identity",
        category: "Cyber Security",
        description:
            "Design a secure student identity system that minimizes unnecessary sharing of personal information."
    },
   
    {
        title: "AI Agriculture Decision Platform",
        category: "AI",
        description:
            "Combine weather, soil and crop information to recommend irrigation and crop management strategies."
    },

    {
        title: "Emergency Ambulance Route Optimizer",
        category: "Smart City",
        description:
            "Build a route optimization system that considers traffic and emergency priority to recommend faster routes."
    },

    {
        title: "Mental Wellness Support Platform",
        category: "Health",
        description:
            "Create a student wellness platform that provides educational resources, habit tracking and access to appropriate support."
    }

];


/* ================= TEAM ================= */

const teamMembers = [

    {
        name: "Lokesh",
        role: "Team Lead / Developer",
        initials: "LY"
    },

    {
        name: "Ananya Rao",
        role: "AI Engineer",
        initials: "AR"
    },

    {
        name: "Rahul Kumar",
        role: "Frontend Developer",
        initials: "RK"
    },

    {
        name: "Sneha Reddy",
        role: "UI/UX Designer",
        initials: "SR"
    }

];


/* ================= GLOBAL STATE ================= */

let selectedStudent = null;

let selectedChat = "Ananya Rao";

let messages = JSON.parse(
    localStorage.getItem("teamfinderMessages")
) || {

    "Ananya Rao": [
        {
            text: "Hi! I am interested in your project.",
            type: "received"
        },
        {
            text: "We are looking for an AI engineer.",
            type: "sent"
        }
    ],

    "Rahul Kumar": [
        {
            text: "Are you participating in the upcoming hackathon?",
            type: "received"
        }
    ]

};


let savedHackathons =
    JSON.parse(
        localStorage.getItem("savedHackathons")
    ) || [];


/* ================= PAGE NAVIGATION ================= */

function showPage(pageId, clickedButton) {

    document.querySelectorAll(".page")
        .forEach(page => page.classList.remove("active-page"));

    const page = document.getElementById(pageId);

    if (page) {
        page.classList.add("active-page");
    }

    document.querySelectorAll(".nav-item")
        .forEach(btn => btn.classList.remove("active"));

    if (clickedButton) {
        clickedButton.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (pageId === "discover") {
        renderStudents(students);
    }

    if (pageId === "hackathons") {
        renderHackathons(hackathons);
    }

    if (pageId === "ideas") {
        renderIdeas(ideas);
    }

    if (pageId === "messages") {
        renderConversations();
        loadConversation(selectedChat);
    }

    if (pageId === "team") {
        renderTeamMembers();
    }
}


/* ================= STUDENT RENDER ================= */

function renderStudents(data) {

    const grid =
        document.getElementById("studentGrid");

    if (!grid) return;

    document.getElementById("studentCount").textContent =
        `${data.length} students found`;

    if (data.length === 0) {

        grid.innerHTML = `
            <div class="empty-state">
                <div>⌕</div>
                <h2>No students found</h2>
                <p>Try another skill or search term.</p>
            </div>
        `;

        return;
    }

    grid.innerHTML = data.map(student => `

        <div class="student-card">

            <div class="student-top">

                <div class="avatar">
                    ${student.initials}
                </div>

                <div>

                    <h3>${student.name}</h3>

                    <p>${student.role}</p>

                </div>

                ${
                    student.online
                    ? `<div class="online"></div>`
                    : ""
                }

            </div>

            <p class="student-bio">
                ${student.bio}
            </p>

            <div class="student-skills">

                ${student.skills
                    .map(skill => `<span>${skill}</span>`)
                    .join("")
                }

            </div>

            <div class="student-actions">

                <button onclick="viewStudent(${student.id})">
                    View Profile
                </button>

                <button
                    class="message-btn"
                    onclick="openMessage(${student.id})">
                    Message
                </button>

            </div>

        </div>

    `).join("");
}


/* ================= FILTER STUDENTS ================= */

function filterStudents() {

    const search =
        document.getElementById("studentSearch")
            .value
            .toLowerCase();

    const skill =
        document.getElementById("skillFilter")
            .value
            .toLowerCase();

    const role =
        document.getElementById("roleFilter")
            .value
            .toLowerCase();

    const filtered = students.filter(student => {

        const searchMatch =
            student.name.toLowerCase().includes(search) ||
            student.college.toLowerCase().includes(search) ||
            student.role.toLowerCase().includes(search) ||
            student.skills.join(" ").toLowerCase().includes(search);

        const skillMatch =
            !skill ||
            student.skills.some(
                s => s.toLowerCase().includes(skill)
            );

        const roleMatch =
            !role ||
            student.role.toLowerCase() === role;

        return searchMatch &&
               skillMatch &&
               roleMatch;
    });

    renderStudents(filtered);
}


/* ================= VIEW PROFILE ================= */

function viewStudent(id) {

    const student =
        students.find(s => s.id === id);

    if (!student) return;

    document.getElementById("messageProfile").innerHTML = `

        <div class="student-top">

            <div class="avatar">
                ${student.initials}
            </div>

            <div>

                <h2>${student.name}</h2>

                <p>${student.role}</p>

            </div>

        </div>

        <p class="student-bio">
            ${student.bio}
        </p>

        <p style="color:#8d99ad;font-size:11px;margin:10px 0;">
            🏫 ${student.college}
        </p>

        <div class="student-skills">

            ${student.skills
                .map(s => `<span>${s}</span>`)
                .join("")
            }

        </div>

    `;

    selectedStudent = student;

    document.getElementById("messageModal")
        .classList.add("show");
}


/* ================= MESSAGE PROFILE ================= */

function openMessage(id) {

    viewStudent(id);

    document.getElementById("initialMessage").value = "";

    document.getElementById("initialMessage").focus();
}


function sendInitialMessage() {

    if (!selectedStudent) return;

    const text =
        document.getElementById("initialMessage")
            .value
            .trim();

    if (!text) {

        showToast("Please write a message.");

        return;
    }

    if (!messages[selectedStudent.name]) {
        messages[selectedStudent.name] = [];
    }

    messages[selectedStudent.name].push({
        text,
        type: "sent"
    });

    localStorage.setItem(
        "teamfinderMessages",
        JSON.stringify(messages)
    );

    selectedChat = selectedStudent.name;

    closeModal("messageModal");

    showPage("messages");

    renderConversations();

    loadConversation(selectedChat);

    showToast(
        `Message sent to ${selectedStudent.name}`
    );
}


/* ================= MESSAGES ================= */

function renderConversations() {

    const container =
        document.getElementById("conversationList");

    if (!container) return;

    container.innerHTML =
        Object.keys(messages).map(name => {

            const student =
                students.find(s => s.name === name);

            const list =
                messages[name] || [];

            const last =
                list.length
                ? list[list.length - 1].text
                : "Start a conversation";

            return `

                <div
                    class="conversation ${
                        selectedChat === name
                        ? "active"
                        : ""
                    }"
                    onclick="loadConversation('${name}')"
                >

                    <div class="avatar small">
                        ${student?.initials || "U"}
                    </div>

                    <div class="conversation-info">

                        <strong>${name}</strong>

                        <p>${last}</p>

                    </div>

                </div>

            `;

        }).join("");
}


function loadConversation(name) {

    selectedChat = name;

    const student =
        students.find(s => s.name === name);

    document.getElementById("chatName").textContent =
        name;

    const container =
        document.getElementById("chatMessages");

    if (!messages[name]) {
        messages[name] = [];
    }

    container.innerHTML =
        messages[name].map(message => `

            <div class="
                chat-bubble
                ${message.type}
            ">
                ${escapeHTML(message.text)}
            </div>

        `).join("");

    container.scrollTop =
        container.scrollHeight;

    renderConversations();
}


function sendChatMessage() {

    const input =
        document.getElementById("chatInput");

    const text = input.value.trim();

    if (!text) return;

    if (!messages[selectedChat]) {
        messages[selectedChat] = [];
    }

    messages[selectedChat].push({
        text,
        type: "sent"
    });

    localStorage.setItem(
        "teamfinderMessages",
        JSON.stringify(messages)
    );

    input.value = "";

    loadConversation(selectedChat);

    showToast("Message sent.");
}


function handleChatKey(event) {

    if (event.key === "Enter") {
        sendChatMessage();
    }

}


function filterConversations() {

    const query =
        document.getElementById("messageSearch")
            .value
            .toLowerCase();

    document
        .querySelectorAll(".conversation")
        .forEach(item => {

            item.style.display =
                item.innerText
                    .toLowerCase()
                    .includes(query)
                    ? "flex"
                    : "none";

        });
}


/* ================= HACKATHONS ================= */

function renderHackathons(data) {

    const grid =
        document.getElementById("hackathonGrid");

    if (!grid) return;

    grid.innerHTML = data.map(hack => {

        const saved =
            savedHackathons.includes(hack.id);

        return `

            <div class="hackathon-card">

                <div class="hackathon-logo">
                    ${hack.icon}
                </div>

                <h3>${hack.name}</h3>

                <p>${hack.description}</p>

                <div class="hack-meta">

                    <span>📅 ${hack.date}</span>

                    <span>📍 ${hack.location}</span>

                    <span>🏷 ${hack.category}</span>

                    ${
                        hack.distance
                        ? `<span>📏 ${hack.distance} km</span>`
                        : ""
                    }

                </div>

                <div class="hackathon-actions">

                    <button
                        onclick="viewHackathon(${hack.id})">
                        Details
                    </button>

                    <button
                        onclick="toggleSaveHackathon(${hack.id})">

                        ${saved ? "★ Saved" : "☆ Save"}

                    </button>

                </div>

            </div>

        `;

    }).join("");
}


function viewHackathon(id) {

    const hack =
        hackathons.find(h => h.id === id);

    if (!hack) return;

    document.getElementById("hackathonDetails")
        .innerHTML = `

        <div class="hackathon-logo"
             style="font-size:30px;">
            ${hack.icon}
        </div>

        <span class="eyebrow">
            ${hack.category}
        </span>

        <h1>${hack.name}</h1>

        <p style="color:#8d99ad;margin:10px 0 25px;">
            Organized by ${hack.organizer}
        </p>

        <div class="hack-meta">

            <span>📅 ${hack.date}</span>
            <span>📍 ${hack.location}</span>
            <span>💻 ${hack.mode}</span>

        </div>

        <h3 style="margin-top:25px;">
            About the Hackathon
        </h3>

        <p style="color:#8d99ad;line-height:1.8;margin-top:10px;">
            ${hack.description}
        </p>

        <h3 style="margin-top:25px;">
            📋 Problem Statement
        </h3>

        <p style="color:#8d99ad;line-height:1.8;margin-top:10px;">
            ${hack.problem}
        </p>

        <h3 style="margin-top:25px;">
            🏆 Previous Winning Project
        </h3>

        <p style="color:#8d99ad;line-height:1.8;margin-top:10px;">
            ${hack.winner}
        </p>

        <button
            class="primary-btn"
            style="margin-top:25px;"
            onclick="showToast('Hackathon added to your opportunities')">

            Add to My Opportunities

        </button>
    `;

    document.getElementById("hackathonModal")
        .classList.add("show");
}


function toggleSaveHackathon(id) {

    if (savedHackathons.includes(id)) {

        savedHackathons =
            savedHackathons.filter(x => x !== id);

        showToast("Hackathon removed from saved list.");

    } else {

        savedHackathons.push(id);

        showToast("Hackathon saved.");

    }

    localStorage.setItem(
        "savedHackathons",
        JSON.stringify(savedHackathons)
    );

    renderHackathons(hackathons);
}


function filterHackathons(type, button) {

    document
        .querySelectorAll(".tab")
        .forEach(b => b.classList.remove("active"));

    button.classList.add("active");

    let data = hackathons;

    if (type === "nearby") {

        data =
            hackathons.filter(
                h => h.distance > 0 &&
                     h.distance <= 50
            );

    }

    if (type === "online") {

        data =
            hackathons.filter(
                h => h.mode === "Online"
            );

    }

    if (type === "saved") {

        data =
            hackathons.filter(
                h => savedHackathons.includes(h.id)
            );

    }

    renderHackathons(data);
}


/* ================= GEOLOCATION ================= */

function findNearbyHackathons() {

    const banner =
        document.getElementById("locationBanner");

    if (!navigator.geolocation) {

        banner.innerHTML = `
            <div>
                <strong>Location is not supported</strong>
                <p>Your browser does not support geolocation.</p>
            </div>
        `;

        return;
    }

    banner.innerHTML = `
        <div class="location-icon">⏳</div>

        <div>
            <strong>Finding nearby opportunities...</strong>

            <p>
                Requesting your approximate browser location.
            </p>
        </div>
    `;

    navigator.geolocation.getCurrentPosition(

        position => {

            /*
              Demo implementation.

              In a production system you would send
              latitude/longitude to your backend and
              query a real hackathon database/API.
            */

            const lat =
                position.coords.latitude;

            const lon =
                position.coords.longitude;

            banner.innerHTML = `

                <div class="location-icon">
                    📍
                </div>

                <div>

                    <strong>
                        Location detected
                    </strong>

                    <p>
                        Nearby hackathons are now prioritized.
                        (${lat.toFixed(2)}, ${lon.toFixed(2)})
                    </p>

                </div>
            `;

            renderHackathons(
                [...hackathons]
                    .sort(
                        (a,b) =>
                        a.distance - b.distance
                    )
            );

            showToast(
                "Nearby hackathons prioritized."
            );

        },

        error => {

            banner.innerHTML = `

                <div class="location-icon">
                    📍
                </div>

                <div>

                    <strong>
                        Location permission not granted
                    </strong>

                    <p>
                        You can still browse hackathons manually.
                    </p>

                </div>
            `;

            showToast(
                "Location permission was not granted."
            );

        }
    );
}


/* ================= AI TEAM BUILDER ================= */

function buildTeam() {

    const description =
        document.getElementById("projectDescription")
            .value
            .toLowerCase();

    if (!description) {

        showToast(
            "Please enter your project idea."
        );

        return;
    }

    let roles = [];

    if (
        description.includes("ai") ||
        description.includes("machine learning") ||
        description.includes("prediction")
    ) {

        roles.push({
            role: "AI / ML Engineer",
            skills: "Python, ML, TensorFlow"
        });

    }

    if (
        description.includes("website") ||
        description.includes("web") ||
        description.includes("platform")
    ) {

        roles.push({
            role: "Frontend Developer",
            skills: "HTML, CSS, JavaScript, React"
        });

        roles.push({
            role: "Backend Developer",
            skills: "Node.js, APIs, Database"
        });

    }

    if (
        description.includes("iot") ||
        description.includes("sensor") ||
        description.includes("smart")
    ) {

        roles.push({
            role: "IoT Engineer",
            skills: "Arduino, Sensors, Python"
        });

    }

    if (
        description.includes("security") ||
        description.includes("cyber")
    ) {

        roles.push({
            role: "Cyber Security Engineer",
            skills: "Networking, Linux, Security"
        });

    }

    if (
        description.includes("design") ||
        description.includes("user") ||
        description.includes("app")
    ) {

        roles.push({
            role: "UI/UX Designer",
            skills: "Figma, UX Research"
        });

    }

    roles.push({
        role: "Project Lead",
        skills: "Planning, Presentation, Communication"
    });

    roles =
        roles.filter(
            (role, index, array) =>
            index === array.findIndex(
                r => r.role === role.role
            )
        );

    const result =
        document.getElementById("teamResult");

    result.innerHTML = `

        <span class="eyebrow">
            AI ANALYSIS COMPLETE
        </span>

        <h2 style="margin-top:8px;">
            Recommended Team Structure
        </h2>

        <p style="color:#8d99ad;margin-top:8px;">
            Based on your project description,
            TeamFinder recommends ${roles.length}
            core roles.
        </p>

        <div class="role-result">

            ${roles.map((role,index) => `

                <div class="role-card">

                    <span style="color:#7185ff;">
                        ROLE ${index + 1}
                    </span>

                    <strong>
                        ${role.role}
                    </strong>

                    <span>
                        ${role.skills}
                    </span>

                </div>

            `).join("")}

        </div>

        <button
            class="primary-btn full"
            style="margin-top:20px;"
            onclick="findTeamMembers(${JSON.stringify(roles.map(r => r.role))})">

            Find Matching Students

        </button>
    `;
}


function loadIdea(type) {

    const examples = {

        "AI healthcare":
            "We want to build an AI healthcare platform that predicts health risks and helps users receive early alerts.",

        "Smart city":
            "We want to build a smart city system using IoT sensors and AI to monitor traffic, pollution and public infrastructure.",

        "Cyber security":
            "We want to create an AI-powered cyber security platform that detects suspicious network activity.",

        "Education":
            "We want to build an intelligent education platform that recommends learning paths based on student skills."
    };

    document.getElementById("projectDescription")
        .value = examples[type];
}


function findTeamMembers(roles) {

    showPage("discover");

    const keywords =
        roles.join(" ").toLowerCase();

    const matches =
        students.filter(student =>
            (
                student.role + " " +
                student.skills.join(" ")
            )
            .toLowerCase()
            .includes(
                keywords.split(" ")[0]
            )
        );

    renderStudents(
        matches.length
        ? matches
        : students.slice(0,4)
    );

    showToast(
        "Matching students displayed."
    );
}


/* ================= IDEAS ================= */

function renderIdeas(data) {

    const grid =
        document.getElementById("ideasGrid");

    if (!grid) return;

    grid.innerHTML =
        data.map((idea,index) => `

        <div class="idea-card">

            <span class="idea-number">
                IDEA ${(index + 1)
                    .toString()
                    .padStart(2,"0")}
            </span>

            <h3>${idea.title}</h3>

            <p>
                ${idea.description}
            </p>

            <span class="tag">
                ${idea.category}
            </span>

        </div>

    `).join("");
}


function filterIdeas(category, button) {

    document
        .querySelectorAll(".idea-filter")
        .forEach(btn =>
            btn.classList.remove("active")
        );

    button.classList.add("active");

    const data =
        category === "all"
        ? ideas
        : ideas.filter(
            idea => idea.category === category
        );

    renderIdeas(data);
}


function generateRandomIdea() {

    const random =
        ideas[
            Math.floor(
                Math.random() * ideas.length
            )
        ];

    showToast(
        `Try: ${random.title}`
    );

}


/* ================= TEAM ================= */

function renderTeamMembers() {

    const container =
        document.getElementById("teamMembers");

    if (!container) return;

    container.innerHTML =
        teamMembers.map(member => `

            <div class="team-member">

                <div class="avatar">
                    ${member.initials}
                </div>

                <strong>
                    ${member.name}
                </strong>

                <span>
                    ${member.role}
                </span>

            </div>

        `).join("");
}


function runSkillGapAnalysis() {

    const result =
        document.getElementById("skillGapResult");

    result.innerHTML = `

        <div class="panel">

            <span class="eyebrow">
                AI SKILL ANALYSIS
            </span>

            <h2 style="margin-top:7px;">
                Your team has 3 important skill gaps
            </h2>

            <div class="skills-container">

                <span>Business Strategy</span>

                <span>Cloud Architecture</span>

                <span>Marketing / Pitching</span>

            </div>

            <p style="
                color:#8d99ad;
                font-size:12px;
                margin-top:15px;
                line-height:1.7;
            ">

                TeamFinder recommends adding students
                with these capabilities to improve the
                overall project balance.

            </p>

            <button
                class="primary-btn"
                style="margin-top:15px;"
                onclick="showPage('discover')">

                Find Students For These Skills

            </button>

        </div>
    `;

    showToast(
        "Skill gap analysis completed."
    );
}


/* ================= PROFILE ================= */

function openProfileEditor() {

    document.getElementById("editName").value =
        "Lokesh Yandrapragada";

    document.getElementById("editCollege").value =
        "RVR & JC College of Engineering";

    document.getElementById("editRole").value =
        "Frontend Developer";

    document.getElementById("editSkills").value =
        "HTML, CSS, JavaScript, Python, AI/ML";

    document.getElementById("editBio").value =
        "Computer Science student interested in web development, AI and innovation.";

    document.getElementById("profileModal")
        .classList.add("show");
}


function saveProfile() {

    const name =
        document.getElementById("editName").value;

    const college =
        document.getElementById("editCollege").value;

    const role =
        document.getElementById("editRole").value;

    const skills =
        document.getElementById("editSkills").value;

    const bio =
        document.getElementById("editBio").value;

    if (!name || !role) {

        showToast(
            "Name and role are required."
        );

        return;
    }

    const profile = {
        name,
        college,
        role,
        skills,
        bio
    };

    localStorage.setItem(
        "teamfinderProfile",
        JSON.stringify(profile)
    );

    document.getElementById("profileBio")
        .textContent = bio;

    closeModal("profileModal");

    showToast(
        "Profile updated successfully."
    );
}


/* ================= GLOBAL SEARCH ================= */

function globalSearch() {

    const query =
        document.getElementById("globalSearch")
            .value
            .toLowerCase()
            .trim();

    if (!query) return;

    const studentMatch =
        students.filter(student =>
            (
                student.name + " " +
                student.role + " " +
                student.skills.join(" ")
            )
            .toLowerCase()
            .includes(query)
        );

    const hackathonMatch =
        hackathons.filter(hack =>
            (
                hack.name + " " +
                hack.category
            )
            .toLowerCase()
            .includes(query)
        );

    if (
        studentMatch.length &&
        query.length > 2
    ) {

        showPage("discover");

        renderStudents(studentMatch);
    }

    else if (
        hackathonMatch.length &&
        query.length > 2
    ) {

        showPage("hackathons");

        renderHackathons(hackathonMatch);
    }
}


/* ================= NOTIFICATIONS ================= */

function showNotifications() {

    document
        .getElementById("notificationPanel")
        .classList.add("show");
}


function hideNotifications() {

    document
        .getElementById("notificationPanel")
        .classList.remove("show");
}


/* ================= MODALS ================= */

function closeModal(id) {

    document
        .getElementById(id)
        .classList.remove("show");
}


/* ================= TOAST ================= */

let toastTimer;

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);
}


/* ================= SECURITY ================= */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


/* ================= DASHBOARD ================= */

function renderRecommendedStudents() {

    const container =
        document.getElementById(
            "recommendedStudents"
        );

    container.innerHTML =
        students.slice(0,4).map(student => `

            <div class="student-row">

                <div class="avatar small">
                    ${student.initials}
                </div>

                <div class="student-row-info">

                    <strong>
                        ${student.name}
                    </strong>

                    <span>
                        ${student.role}
                    </span>

                </div>

                <button
                    class="text-button"
                    onclick="openMessage(${student.id})">

                    Message

                </button>

            </div>

        `).join("");
}


function renderDashboardHackathons() {

    const container =
        document.getElementById(
            "dashboardHackathons"
        );

    container.innerHTML =
        hackathons.slice(0,3).map(hack => `

            <div class="student-row">

                <div class="hackathon-logo">
                    ${hack.icon}
                </div>

                <div class="student-row-info">

                    <strong>
                        ${hack.name}
                    </strong>

                    <span>
                        ${hack.date} • ${hack.location}
                    </span>

                </div>

            </div>

        `).join("");
}


/* ================= START APP ================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderRecommendedStudents();

        renderDashboardHackathons();

        renderStudents(students);

        renderHackathons(hackathons);

        renderIdeas(ideas);

        renderTeamMembers();

        renderConversations();

        loadConversation("Ananya Rao");

    }
);
function login() {
    
}

function searchUsers() {
    
}

function createTeam() {
    
}
/* ================= TEAMFINDER CHATBOT ================= */

function tfToggleChat() {

    const chatbot =
        document.getElementById("tf-chatbot");

    if (chatbot.style.display === "flex") {

        chatbot.style.display = "none";

    } else {

        chatbot.style.display = "flex";

        document
            .getElementById("tf-user-input")
            .focus();
    }
}


function tfSendMessage() {

    const input =
        document.getElementById("tf-user-input");

    const message =
        input.value.trim();

    if (message === "") {
        return;
    }

    tfAddMessage(message, "user");

    input.value = "";

    setTimeout(function() {

        const reply =
            tfGetResponse(message);

        tfAddMessage(reply, "bot");

    }, 500);
}


function tfQuick(question) {

    document.getElementById(
        "tf-user-input"
    ).value = question;

    tfSendMessage();
}


function tfAddMessage(message, sender) {

    const chat =
        document.getElementById(
            "tf-chat-messages"
        );

    const div =
        document.createElement("div");

    div.className =
        "tf-message " +
        (sender === "user"
            ? "tf-user"
            : "tf-bot");

    div.innerHTML = message;

    chat.appendChild(div);

    chat.scrollTop =
        chat.scrollHeight;
}


function tfGetResponse(message) {

    const text =
        message.toLowerCase();


    if (
        text === "hi" ||
        text === "hlo" ||
        text === "hello" ||
        text === "hey"
    ) {

        return `
            👋 Hello! Welcome to TeamFinder!

            I can help you find teammates,
            explore hackathons and choose
            problem statements.
        `;
    }


    if (
        text.includes("find teammate") ||
        text.includes("teammate")
    ) {

        return `
            👥 <b>Finding Teammates</b>

            TeamFinder can match students
            based on skills, interests and
            project requirements.

            Try completing your profile
            with your technical skills.
        `;
    }


    if (
        text.includes("hackathon")
    ) {

        return `
            🏆 <b>Hackathons</b>

            TeamFinder can help you explore:

            • Hackathon names
            • Problem statements
            • Deadlines
            • Required skills
            • Team requirements
        `;
    }


    if (
        text.includes("problem statement")
    ) {

        return `
            📋 <b>Problem Statements</b>

            You can explore problems related to:

            • AI/ML
            • Healthcare
            • Agriculture
            • Education
            • Cybersecurity
            • Smart Cities
            • Transportation
        `;
    }


    if (
        text.includes("project idea")
    ) {

        return `
            💡 <b>Project Idea</b>

            Try building an AI-based
            Student Skill Matcher.

            Students enter their skills
            and TeamFinder recommends
            suitable teammates.
        `;
    }


    if (
        text.includes("what is ai")
    ) {

        return `
            🤖 <b>Artificial Intelligence</b>

            AI is the field of creating
            computer systems capable of
            performing tasks that normally
            require human intelligence.
        `;
    }


    if (
        text.includes("what is ml") ||
        text.includes("machine learning")
    ) {

        return `
            🧠 <b>Machine Learning</b>

            ML is a branch of AI where
            computers learn patterns from
            data to make predictions or
            decisions.
        `;
    }


    if (
        text.includes("thank")
    ) {

        return `
            😊 You're welcome!

            Good luck with your TeamFinder
            project!
        `;
    }


    if (
        text === "bye" ||
        text.includes("goodbye")
    ) {

        return `
            👋 Goodbye!

            See you on TeamFinder!
        `;
    }


    return `
        🤔 I don't have an answer for that yet.

        Try asking:

        👥 How can I find a teammate?

        🏆 What are hackathons?

        📋 What is a problem statement?

        💡 Give me a project idea

        🤖 What is AI?

        🧠 What is ML?
    `;
}


/* Enter key */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const input =
            document.getElementById(
                "tf-user-input"
            );

        input.addEventListener(
            "keydown",
            function(event) {

                if (event.key === "Enter") {

                    tfSendMessage();

                }

            }
        );

    }
);