// This script contains all the logic for the Study Gamifier application.
// It manages the state, handles user interactions, and updates the UI dynamically.

// --- Lecture Data ---
// This is the static list of all lectures, their titles, and URLs.
const LECTURE_DATA = [
    { title: "1. Installing VS Code & How Websites Work", url: "https://www.youtube.com/watch?v=tVzUXW6siu0" },
    { title: "2. Your First HTML Website", url: "https://www.youtube.com/watch?v=kJEsTjH5mVg" },
    { title: "3. Basic Structure of an HTML Website", url: "https://www.youtube.com/watch?v=BGeDBfCIqas" },
    { title: "4. Heading, Paragraphs and Links", url: "https://www.youtube.com/watch?v=nXba2-mgn1k" },
    { title: "5. Image, Lists, and Tables in HTML", url: "https://www.youtube.com/watch?v=1BsVhumGlNc" },
    { title: "6. SEO and Core Web Vitals in HTML", url: "https://www.youtube.com/watch?v=CyRlWlaJnTY" },
    { title: "7. Forms and input tags in HTML", url: "https://www.youtube.com/watch?v=tLBlhp0SA_0" },
    { title: "8. Inline & Block Elements in HTML", url: "https://www.youtube.com/watch?v=vnnlUCLfn6I" },
    { title: "9. Id & Classes in HTML", url: "https://www.youtube.com/watch?v=vlAWzsGd-Yk" },
    { title: "10. Video, Audio & Media in HTML", url: "https://www.youtube.com/watch?v=XZwBNDGuWGU" },
    { title: "11. Semantic Tags in HTML", url: "https://www.youtube.com/watch?v=fhoDRB53DwY" },
    { title: "12. Exercise 1 - Pure HTML Media Player", url: "https://www.youtube.com/watch?v=5xFRg_TzlAg" },
    { title: "13. Entities, Code tag and more on HTML", url: "https://www.youtube.com/watch?v=cvsbHZcDx8w" },
    { title: "14. Introduction to CSS", url: "https://www.youtube.com/watch?v=1dkfuga2_Ps" },
    { title: "15. Inline, Internal & External CSS", url: "https://www.youtube.com/watch?v=-XwZpYIyCEA" },
    { title: "16. Exercise 1 - Solution & Shoutouts", url: "https://www.youtube.com/watch?v=anGMeDGvZhw" },
    { title: "17. CSS Selectors MasterClass", url: "https://www.youtube.com/watch?v=1cEG1T8beO4" },
    { title: "18. CSS Box Model - Margin, Padding & Borders", url: "https://www.youtube.com/watch?v=Xrxd6cEajhM" },
    { title: "19. CSS Fonts, Text & Color Properties", url: "https://www.youtube.com/watch?v=aFicd4-YTfo" },
    { title: "20. Exercise 2 - CSS Challenge", url: "https://www.youtube.com/watch?v=4aBolpJoutw" },
    { title: "21. CSS Specificity & Cascade", url: "https://www.youtube.com/watch?v=uTcpbPMZlFE" },
    { title: "22. CSS Sizing Units - px, rem, em, vh, vw, % & more", url: "https://www.youtube.com/watch?v=nkaAJYfRDVk" },
    { title: "23. CSS Display Property", url: "https://www.youtube.com/watch?v=hRHV5cjEB1w" },
    { title: "24. CSS Shadows and Outlines", url: "https://www.youtube.com/watch?v=BZJcNU648Tc" },
    { title: "25. Styling Lists using CSS", url: "https://www.youtube.com/watch?v=ZIofkptpXO8" },
    { title: "26. CSS Overflow Property", url: "https://www.youtube.com/watch?v=ntlawluDB-c" },
    { title: "27. Exercise 2 - Solutions and Shoutouts", url: "https://www.youtube.com/watch?v=g1HJ65p5YdI" },
    { title: "28. CSS Position Property", url: "https://www.youtube.com/watch?v=cOw6tgH6P20" },
    { title: "29. Exercise 3 - Design this Card", url: "https://www.youtube.com/watch?v=nm3HrrUuz50" },
    { title: "30. CSS Variables", url: "https://www.youtube.com/watch?v=ovRU9xHfly4" },
    { title: "31. CSS Media Queries", url: "https://www.youtube.com/watch?v=eHye3PxH4jU" },
    { title: "32. Exercise 3 - Solution", url: "https://www.youtube.com/watch?v=2PWgbyL3ex8" },
    { title: "33. Exercise 4 - Multi Color Website", url: "https://www.youtube.com/watch?v=-WN74rN9OPI" },
    { title: "34. CSS Float & Clear", url: "https://www.youtube.com/watch?v=6_UoTF7njLM" },
    { title: "35. More on CSS Selectors", url: "https://www.youtube.com/watch?v=L8NfSewTfxY" },
    { title: "36. Exercise 4 - Solution & Shoutouts", url: "https://www.youtube.com/watch?v=n1T6Ve00j24" },
    { title: "37. CSS Exercise 5 - Design this Layout", url: "https://www.youtube.com/watch?v=8Hk4MmO9ZeQ" },
    { title: "38. CSS Flexbox - Ultimate MasterClass", url: "https://www.youtube.com/watch?v=DWk2mndNTHY" },
    { title: "39. CSS Grid - Ultimate MasterClass", url: "https://www.youtube.com/watch?v=7AgEjgUtho4" },
    { title: "40. Exercise 5 - Solution & Shoutouts", url: "https://www.youtube.com/watch?v=-uVJlSHueYQ" },
    { title: "41. Exercise 6 - Navbar using Flexbox", url: "https://www.youtube.com/watch?v=A5fK2Y8-if8" },
    { title: "42. CSS Transforms MasterClass", url: "https://www.youtube.com/watch?v=GGlzzLTLzxs" },
    { title: "43. Exercise 6 - Solution & Shoutouts", url: "https://www.youtube.com/watch?v=SC7GCk1OiVo" },
    { title: "44. Exercise 7 - Design the Grid", url: "https://www.youtube.com/watch?v=zJaiTrw-hu8" },
    { title: "45. CSS Transition Property", url: "https://www.youtube.com/watch?v=pHI4PBFM0wY" },
    { title: "46. CSS Animations", url: "https://www.youtube.com/watch?v=cDLVIoXW-OQ" },
    { title: "47. Exercise 7 - Solution & Shoutouts", url: "https://www.youtube.com/watch?v=yktqxOHOeR4" },
    { title: "48. Exercise 8 - Bounce Animation", url: "https://www.youtube.com/watch?v=PIC0Ps_Ci-s" },
    { title: "49. CSS Object-fit and Object-cover", url: "https://www.youtube.com/watch?v=ognrhoi0C-w" },
    { title: "50. CSS Filters", url: "https://www.youtube.com/watch?v=tSzDHVWG1hI" },
    { title: "51. Exercise 8: Solution & Shoutouts", url: "https://www.youtube.com/watch?v=chYx6vVzWVw" },
    { title: "52. Figma Basics in One Video", url: "https://www.youtube.com/watch?v=mpJb9GNxdYI" },
    { title: "53. Netflix Clone Using HTML & CSS", url: "https://www.youtube.com/watch?v=ovKVqo-L2EM" },
    { title: "54. Introduction to JavaScript & Installing Node.js", url: "https://www.youtube.com/watch?v=NrhP53Divco" },
    { title: "55. JavaScript Variables, Data Types & Objects", url: "https://www.youtube.com/watch?v=HGCDMJXS1cc" },
    { title: "56. JavaScript Conditionals: if, else if, else ladder", url: "https://www.youtube.com/watch?v=1R4NGtsj7hw" },
    { title: "57. JavaScript Loops", url: "https://www.youtube.com/watch?v=y32sWmu-RI4" },
    { title: "58. JavaScript Functions", url: "https://www.youtube.com/watch?v=Jtc3j4ZNZEQ" },
    { title: "59. Exercise 9 - Faulty Calculator", url: "https://www.youtube.com/watch?v=OrWmrQ2wrKU" },
    { title: "60. JavaScript Strings", url: "https://www.youtube.com/watch?v=uJbYqm7W_mA" },
    { title: "61. JavaScript Exercise 9 - Solution & Shoutouts", url: "https://www.youtube.com/watch?v=nQAUGxt2qoU" },
    { title: "62. JavaScript Exercise 10 - Business Name Generator", url: "https://www.youtube.com/watch?v=FkEbEfHQAZw" },
    { title: "63. JavaScript Arrays", url: "https://www.youtube.com/watch?v=IFZZAaiatcQ" },
    { title: "64. JavaScript Exercise 10 - Solution", url: "https://www.youtube.com/watch?v=wPWZqewZ4LA" },
    { title: "65. JavaScript Exercise 11 - Calculate the Factorial", url: "https://www.youtube.com/watch?v=ccfq9yW-dYU" },
    { title: "66. Document Object Model in JavaScript", url: "https://www.youtube.com/watch?v=oxO1Z5L5S4c" },
    { title: "67. JavaScript DOM - Children, Parent & Sibling Nodes", url: "https://www.youtube.com/watch?v=_8o_BiLAgQM" },
    { title: "68. JavaScript - Selecting by Ids, Classes, and More", url: "https://www.youtube.com/watch?v=uFbCTidM-xw" },
    { title: "69. JavaScript Exercise 11 - Solution & Shoutouts", url: "https://www.youtube.com/watch?v=Xoz_KYfaSkk" },
    { title: "70. JavaScript Exercise 12 - Color the Boxes", url: "https://www.youtube.com/watch?v=V4ohRrvu4Ok" },
    { title: "71. Inserting and Removing Elements using JavaScript", url: "https://www.youtube.com/watch?v=KB7GzBv5p4Q" },
    { title: "72. JavaScript Exercise 12 - Solution & Shoutouts", url: "https://www.youtube.com/watch?v=mCx5aSEK8YE" },
    { title: "73. JavaScript Exercise 13 - Dynamic Website Builder", url: "https://www.youtube.com/watch?v=KtL-SQ20Q0s" },
    { title: "74. Events, Event Bubbling, setInterval & setTimeout", url: "https://www.youtube.com/watch?v=CO_DAXswOrc" },
    { title: "75. JavaScript Callbacks & Promises", url: "https://www.youtube.com/watch?v=9JaDBYPmiJ0" },
    { title: "76. Async/Await & Fetch API in JavaScript with Examples", url: "https://www.youtube.com/watch?v=gRLdHSabW3o" },
    { title: "77. JavaScript Exercise 13 - Solution & Shoutouts", url: "https://www.youtube.com/watch?v=UzYRQURh_pY" },
    { title: "78. JavaScript Exercise 14 - Hacker's Terminal", url: "https://www.youtube.com/watch?v=WYazkpCQNQw" },
    { title: "79. JavaScript try catch & Error Handling", url: "https://www.youtube.com/watch?v=aQn7ssqHYp4" },
    { title: "80. Classes & Objects - Object Oriented Programming in Js", url: "https://www.youtube.com/watch?v=FeBbjzVOeRU" },
    { title: "81. JavaScript Exercise 14 - Solution & Shoutouts", url: "https://www.youtube.com/watch?v=9H-Ieq6zjIY" },
    { title: "82. Advanced JavaScript", url: "https://www.youtube.com/watch?v=tcQDnqRakxk" },
    { title: "83. JavaScript Interview Questions", url: "https://www.youtube.com/watch?v=Vwxs9YJWsx4" },
    { title: "84. Spotify Clone using HTML, CSS & JavaScript", url: "https://www.youtube.com/watch?v=CYwEq1GdU4E" },
    { title: "85. Backend, Node.js & npm", url: "https://www.youtube.com/watch?v=NoWRBo3Uf8E" },
    { title: "86. CommonJs Vs EcmaScript Modules", url: "https://www.youtube.com/watch?v=bU69doALJGU" },
    { title: "87. Working with Files: fs and path Modules", url: "https://www.youtube.com/watch?v=BTcmvrCTyNg" },
    { title: "88. Introduction to Express Js", url: "https://www.youtube.com/watch?v=R11tvGM3nDY" },
    { title: "89. Response, Request and Routers in Express", url: "https://www.youtube.com/watch?v=SksvlZM-5Sk" },
    { title: "90. Middlewares in Express Js", url: "https://www.youtube.com/watch?v=VELNPK0dK84" },
    { title: "91. Exercise 15 - Clear the Clutter", url: "https://www.youtube.com/watch?v=1YSVEW3i8OQ" },
    { title: "92. ejs Template Engine in Express", url: "https://www.youtube.com/watch?v=Kah88N8W5rs" },
    { title: "93. Exercise 15 - Solution & Shoutouts", url: "https://www.youtube.com/watch?v=bM7bmh955Gs" },
    { title: "94. Installing MongoDB & MongoDB Compass", url: "https://www.youtube.com/watch?v=oMrKVEedpHg" },
    { title: "95. CRUD Operations in MongoDB", url: "https://www.youtube.com/watch?v=9Om0FMBz1yU" },
    { title: "96. Installing Mongoose & Using it with Express", url: "https://www.youtube.com/watch?v=wgwo5hbY7SY" },
    { title: "97. Exercise 16 - Dummy Data Generator", url: "https://www.youtube.com/watch?v=yDnxgIRcnso" },
    { title: "98. Tailwind CSS in one Video", url: "https://www.youtube.com/watch?v=-g969furGik" },
    { title: "99. Exercise 16 - Solution & Shoutouts", url: "https://www.youtube.com/watch?v=15jN-KKoSCA" },
    { title: "100. Exercise 17 - Design This Layout", url: "https://www.youtube.com/watch?v=eGc35Qj0y4Q" },
    { title: "101. X.com (Twitter) Clone using Tailwind CSS", url: "https://www.youtube.com/watch?v=iegMqFnVocA" },
    { title: "102. Exercise 17 - Solution & Shoutouts", url: "https://www.youtube.com/watch?v=KAIGrGEDm78" },
    { title: "103. What is Hosting? Where to Host? Which Hosting?", url: "https://www.youtube.com/watch?v=c2A5XJidIDA" },
    { title: "104. Hosting an Express App on Ubuntu VPS using Hostinger", url: "https://www.youtube.com/watch?v=AgjdDXofJZ8" },
    { title: "105. Introduction to React & Why use React?", url: "https://www.youtube.com/watch?v=nhSZ4LhIii8" },
    { title: "106. Components, Props and JSX in React", url: "https://www.youtube.com/watch?v=S4VH8hddg8c" },
    { title: "107. Hooks & State in React", url: "https://www.youtube.com/watch?v=zHoWgJD0jw4" },
    { title: "108. The useEffect Hook in React", url: "https://www.youtube.com/watch?v=bio2eP5YXyw" },
    { title: "109. The useRef Hook in React", url: "https://www.youtube.com/watch?v=VlSNiL_x4mo" },
    { title: "110. Conditional Rendering & Rendering Lists in React", url: "https://www.youtube.com/watch?v=96DGjqlAIxs" },
    { title: "111. Exercise 18 - Display the Cards", url: "https://www.youtube.com/watch?v=KDpm8h8XzC4" },
    { title: "112. Handling Events in React", url: "https://www.youtube.com/watch?v=cXkwFjBrWfk" },
    { title: "113. Exercise 18 - Solution & Shoutouts", url: "https://www.youtube.com/watch?v=iZdOrqJuPrg" },
    { title: "114. TodoList App using React, Tailwind & React Icons", url: "https://www.youtube.com/watch?v=SBuZSalHLe0" },
    { title: "115. React Router: Routing in React", url: "https://www.youtube.com/watch?v=ZP8QyCIUeIA" },
    { title: "116. The useContext hook in React", url: "https://www.youtube.com/watch?v=jIbXtgL0qrg" },
    { title: "117. The useMemo hook in React", url: "https://www.youtube.com/watch?v=rRiBpNhFgoM" },
    { title: "118. The useCallback hook in React", url: "https://www.youtube.com/watch?v=M1ELG5Wgtdo" },
    { title: "119. Handling Forms + Connecting React to Express Backend", url: "https://www.youtube.com/watch?v=SdzMBWT2CDQ" },
    { title: "120. Learn Redux in One video", url: "https://www.youtube.com/watch?v=J5By-Q4ZhZs" },
    { title: "121. Introduction to Next.js & File based routing", url: "https://www.youtube.com/watch?v=6XVaVITFOgY" },
    { title: "122. Server Components in Next.js", url: "https://www.youtube.com/watch?v=YuX_R4RGdZw" },
    { title: "123. Script, Link & Image components in Next.js", url: "https://www.youtube.com/watch?v=tHTtOJl7ZlI" },
    { title: "124. Creating APIs in Next.js", url: "https://www.youtube.com/watch?v=0rC-3PyhNnI" },
    { title: "125. Server Actions in Next.js", url: "https://www.youtube.com/watch?v=lvU8fMNVivY" },
    { title: "126. Middleware in Next.js", url: "https://www.youtube.com/watch?v=nZ2heJVkawQ" },
    { title: "127. Auth.js - Authentication in Next.js", url: "https://www.youtube.com/watch?v=2JnEq3ZmLH0" },
    { title: "128. Dynamic Routes in Next.js", url: "https://www.youtube.com/watch?v=D7YuI6vOzdY" },
    { title: "129. Layouts in Next.js", url: "https://www.youtube.com/watch?v=jWi8d3SJYN0" },
    { title: "130. React Project: Password Manager using React, Tailwind, MongoDB & Express", url: "https://www.youtube.com/watch?v=sgNZcK8QIyc" },
    { title: "131. Project GetMeAChai - Patreon Clone in Next.js", url: "https://www.youtube.com/watch?v=QtaorVNAwbI" },
    { title: "132. Understanding next/navigation module in Next.js", url: "https://www.youtube.com/watch?v=K052tdPqa5U" },
    { title: "133. SSR, SSG & ISR in Next.js", url: "https://www.youtube.com/watch?v=O0UGlA1YVUI" },
    { title: "134. Environment Variables in Next.js", url: "https://www.youtube.com/watch?v=DbVI7QnDnjY" },
    { title: "135. Styled JSX and other ways to Style in Next.js", url: "https://www.youtube.com/watch?v=M6aXSV2HAHo" },
    { title: "136. [Project] Let's Build a Url Shortener in Next.js 15", url: "https://www.youtube.com/watch?v=Ojo_lo0djbQ" },
    { title: "137. [Project] Let's Build a LinkTree Clone in Next.js 15", url: "https://www.youtube.com/watch?v=izwkombjECA" },
    { title: "138. Deploying our Next.js App to Vercel", url: "https://www.youtube.com/watch?v=IW1hcRXK2yQ" },
    { title: "139. My Last Video", url: "https://www.youtube.com/watch?v=iZb0NsF3Xwg" }
];

// --- DOM Elements ---
const pointsDisplay = document.getElementById('points-display');
const completedDisplay = document.getElementById('completed-display');
const progressDisplay = document.getElementById('progress-display');
const todayTaskContainer = document.getElementById('today-task-container');
const todayTaskTitle = document.getElementById('today-task-title');
const startTodayTaskBtn = document.getElementById('start-today-task');
const lectureListElement = document.getElementById('lecture-list');
const videoPlayer = document.getElementById('video-player');
const videoPlaceholder = document.getElementById('video-placeholder');
const timerDisplay = document.getElementById('timer-display');
const startSessionBtn = document.getElementById('start-session');
const pauseSessionBtn = document.getElementById('pause-session');
const resetSessionBtn = document.getElementById('reset-session');
const pointsPopup = document.getElementById('points-popup');
const streakDisplay = document.getElementById('streak-display');

// --- State Variables ---
let points = parseInt(localStorage.getItem('points')) || 0;
let streak = parseInt(localStorage.getItem('streak')) || 0;
let lastSessionDate = localStorage.getItem('lastSessionDate') || '';
let timer = 1500; // 25 minutes
let isTimerActive = false;
let isSessionStarted = false;
let timerInterval;

// Load lecture data from local storage, or use default if none exists
let lectureData = JSON.parse(localStorage.getItem('lectureData')) || LECTURE_DATA.map(lecture => ({ ...lecture, completed: false }));

// --- Core Functions ---

// Save progress to local storage
function saveProgress() {
    localStorage.setItem('points', points);
    localStorage.setItem('streak', streak);
    localStorage.setItem('lastSessionDate', lastSessionDate);
    localStorage.setItem('lectureData', JSON.stringify(lectureData));
    updateUI();
}

// Show a temporary points pop-up
function showPointsPopup(value) {
    pointsPopup.textContent = `+${value}`;
    pointsPopup.classList.remove('opacity-0', '-top-6');
    pointsPopup.classList.add('opacity-100', '-top-10');

    setTimeout(() => {
        pointsPopup.classList.remove('opacity-100', '-top-10');
        pointsPopup.classList.add('opacity-0', '-top-6');
    }, 1500);
}

// Update all UI elements based on current state
function updateUI() {
    pointsDisplay.textContent = points;
    streakDisplay.textContent = streak;
    const completedCount = lectureData.filter(l => l.completed).length;
    const totalCount = lectureData.length;
    completedDisplay.textContent = `${completedCount}/${totalCount}`;

    // Find and display Today's Task
    const firstUncompleted = lectureData.find(lecture => !lecture.completed);
    if (firstUncompleted) {
        todayTaskContainer.classList.remove('hidden');
        todayTaskTitle.textContent = firstUncompleted.title;
        startTodayTaskBtn.onclick = () => selectLecture(firstUncompleted.url);
    } else {
        todayTaskContainer.classList.add('hidden');
    }

    // Render the lecture list
    lectureListElement.innerHTML = '';
    lectureData.forEach(lecture => {
        const lectureItem = document.createElement('div');
        lectureItem.className = `p-3 rounded-lg flex items-center justify-between transition-colors duration-150 cursor-pointer ${
            lecture.completed ? 'bg-green-800 bg-opacity-50 text-slate-400' : 'bg-gray-700 hover:bg-gray-600'
        }`;
        
        lectureItem.innerHTML = `
            <span class="flex-1 text-lg font-medium ${lecture.completed ? 'line-through' : ''}">
                ${lecture.title}
            </span>
            <button
                class="py-1 px-3 rounded-full text-xs font-bold transition-transform transform ${
                    lecture.completed
                        ? 'bg-transparent text-green-400 border border-green-400'
                        : 'bg-green-500 text-white hover:scale-105'
                }"
                ${lecture.completed ? 'disabled' : ''}
                data-url="${lecture.url}"
            >
                ${lecture.completed ? 'Completed' : 'Mark as Done'}
            </button>
        `;
        
        // Add click listener to the list item to select the video
        lectureItem.addEventListener('click', () => selectLecture(lecture.url));
        
        // Add click listener to the button to mark as complete
        const markButton = lectureItem.querySelector('button');
        markButton.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents the parent div's click event
            markAsComplete(lecture.url);
        });

        lectureListElement.appendChild(lectureItem);
    });
}

// Checks and updates the daily streak
function updateStreak() {
    const today = new Date().toDateString();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayString = yesterday.toDateString();

    if (lastSessionDate === today) {
        // Streak continues, do nothing
    } else if (lastSessionDate === yesterdayString) {
        // Streak continues, increment
        streak++;
    } else {
        // Streak broken, reset
        streak = 1;
    }
    lastSessionDate = today;
    saveProgress();
}

// Formats time in seconds to MM:SS format
function formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Handles starting the study session
function startSession() {
    if (videoPlayer.src === '' || videoPlayer.src.includes('about:blank')) {
        alert('Please select a lecture to start!');
        return;
    }

    if (isTimerActive) return; // Prevent multiple intervals

    isTimerActive = true;
    isSessionStarted = true;
    startSessionBtn.classList.add('hidden');
    pauseSessionBtn.classList.remove('hidden');

    // Award bonus points for starting a session
    points += 100;
    showPointsPopup(100);

    timerInterval = setInterval(() => {
        timer--;
        points++;
        timerDisplay.textContent = formatTime(timer);
        pointsDisplay.textContent = points;

        if (timer <= 0) {
            // End of session
            clearInterval(timerInterval);
            isTimerActive = false;
            isSessionStarted = false;
            startSessionBtn.classList.remove('hidden');
            pauseSessionBtn.classList.add('hidden');
            
            // Award bonus points for completing the session
            points += 500;
            showPointsPopup(500);
            
            updateStreak(); // Update the streak upon completion
            saveProgress(); // Save all progress
            alert("Session complete! You earned a bonus for finishing!");
        }
    }, 1000);
}

// Handles pausing the study session
function pauseSession() {
    if (!isTimerActive) return;
    clearInterval(timerInterval);
    isTimerActive = false;
    startSessionBtn.classList.remove('hidden');
    pauseSessionBtn.classList.add('hidden');
}

// Handles resetting the timer and saving progress
function resetSession() {
    clearInterval(timerInterval);
    isTimerActive = false;
    isSessionStarted = false;
    timer = 1500;
    timerDisplay.textContent = formatTime(timer);
    startSessionBtn.classList.remove('hidden');
    pauseSessionBtn.classList.add('hidden');
    saveProgress();
}

// Marks a lecture as complete and updates points
function markAsComplete(url) {
    const lecture = lectureData.find(l => l.url === url);
    if (lecture && !lecture.completed) {
        lecture.completed = true;
        points += 500; // Bonus points for completing a lecture
        showPointsPopup(500);
        saveProgress();
    }
}

// Selects a lecture and loads the video player
function selectLecture(url) {
    const videoId = url.split('v=')[1]?.split('&')[0];
    if (videoId) {
        videoPlayer.src = `https://www.youtube.com/embed/${videoId}?controls=1&modestbranding=1&rel=0`;
        videoPlayer.classList.remove('hidden');
        videoPlaceholder.classList.add('hidden');
    }
}

// --- Event Listeners and Initial Load ---
window.onload = () => {
    // Initial UI render
    updateUI();

    // Add event listeners
    startSessionBtn.addEventListener('click', startSession);
    pauseSessionBtn.addEventListener('click', pauseSession);
    resetSessionBtn.addEventListener('click', resetSession);
};
