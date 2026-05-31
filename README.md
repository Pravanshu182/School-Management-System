# 🎓 EduCore — School & College Management System

A complete, beautiful web-based School Management System built with **HTML, CSS, and JavaScript**.  
No backend needed — data is saved in your browser's localStorage.

---

## 📁 Project Structure

```
school-management/
├── index.html              ← Dashboard (Home Page)
├── css/
│   └── style.css           ← All styles
├── js/
│   ├── storage.js          ← Data management (localStorage)
│   └── dashboard.js        ← Dashboard logic
└── pages/
    ├── students.html       ← Student management
    ├── teachers.html       ← Teacher management
    ├── courses.html        ← Course management
    ├── attendance.html     ← Attendance tracking
    ├── grades.html         ← Grades & results
    └── notices.html        ← Notice board
```

---

## ✅ Features

- 📊 **Dashboard** — Stats, recent students, notice board, attendance chart
- 👤 **Students** — Add, edit, delete, search, filter by class/status
- 🎓 **Teachers** — Manage teacher profiles with subjects and salary
- 📚 **Courses** — Create and manage courses with schedules
- ✅ **Attendance** — Daily attendance marking with history
- 📊 **Grades** — Record and view exam grades with auto grade letter
- 📢 **Notices** — Post and manage school announcements

---

## 🚀 HOW TO RUN (Step by Step)

### Method 1: Open Directly (Easiest)
1. Download the project folder
2. Open `index.html` with any browser (Chrome / Firefox / Edge)
3. Done! The website works immediately

### Method 2: Using VS Code Live Server (Recommended)
1. Install **VS Code** from https://code.visualstudio.com
2. Open VS Code → File → Open Folder → select `school-management` folder
3. Install extension: **Live Server** (by Ritwick Dey)
4. Right-click `index.html` → click **"Open with Live Server"**
5. Browser opens at `http://127.0.0.1:5500`

---

## 📤 HOW TO PUSH TO GITHUB (Step by Step for Beginners)

### STEP 1 — Install Git
- Download Git: https://git-scm.com/downloads
- Install with default settings
- Open **Terminal** (Mac/Linux) or **Git Bash** (Windows)
- Verify: `git --version`

### STEP 2 — Create GitHub Account
- Go to https://github.com and sign up (free)

### STEP 3 — Create Repository on GitHub
1. Click the **"+"** button → **"New repository"**
2. Name it: `school-management-system`
3. Keep it **Public**
4. Do NOT check "Initialize with README" (we have one)
5. Click **"Create repository"**
6. Copy the URL shown (like `https://github.com/your-username/school-management-system.git`)

### STEP 4 — Push Code from Your Computer

Open Terminal / Git Bash and run these commands one by one:

```bash
# 1. Go into your project folder
cd path/to/school-management

# 2. Initialize git
git init

# 3. Add all files
git add .

# 4. First commit
git commit -m "Initial commit: Add School Management System"

# 5. Connect to GitHub (replace URL with your repo URL)
git remote add origin https://github.com/your-username/school-management-system.git

# 6. Push to GitHub
git branch -M main
git push -u origin main
```

### Done! Your project is live on GitHub! 🎉

---

## 📅 RECOMMENDED GITHUB COMMIT PLAN (Push Over Multiple Days)

To make it look like a real project built over time:

### Day 1 — Project Setup
```bash
git add index.html css/style.css
git commit -m "feat: Add dashboard layout and CSS design system"
git push
```

### Day 2 — Student Module
```bash
git add js/storage.js pages/students.html
git commit -m "feat: Add student management with add/edit/delete"
git push
```

### Day 3 — Teacher & Course Module
```bash
git add pages/teachers.html pages/courses.html
git commit -m "feat: Add teacher and course management modules"
git push
```

### Day 4 — Attendance Module
```bash
git add pages/attendance.html
git commit -m "feat: Add daily attendance marking and history"
git push
```

### Day 5 — Grades & Notices
```bash
git add pages/grades.html pages/notices.html
git commit -m "feat: Add grade tracking and notice board"
git push
```

### Day 6 — Dashboard Logic + README
```bash
git add js/dashboard.js README.md
git commit -m "feat: Add dashboard stats and finalize project"
git push
```

---

## 🛠️ How to Make Small Changes Later (to Push Again)

Example: Change the school name in sidebar
1. Open `index.html` in VS Code
2. Find `EduCore` and change it
3. Save the file
4. In terminal:
```bash
git add .
git commit -m "update: Change school name in sidebar"
git push
```

---

## 💡 Technologies Used
- HTML5
- CSS3 (CSS Variables, Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- localStorage (for data persistence)
- Google Fonts (DM Serif Display + DM Sans)

---

## 📸 Pages
| Page | Description |
|------|-------------|
| Dashboard | Overview stats, charts, notices |
| Students | Full CRUD with search & filters |
| Teachers | Teacher profiles and subjects |
| Courses | Course scheduling and management |
| Attendance | Daily class attendance tracking |
| Grades | Exam results with auto grade letters |
| Notices | School announcement board |
