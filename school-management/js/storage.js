// ─── STORAGE UTILITY ──────────────────────────────────────────
// All data lives in localStorage so it persists across pages

const SMS = {

  // ── SEED DATA ──────────────────────────────────────────────
  seed() {
    if (localStorage.getItem('sms_seeded')) return;

    this.setStudents([
      { id: 1, name: 'Aarav Sharma',    email: 'aarav@school.com',   phone: '9876543210', class: '10-A', gender: 'Male',   dob: '2008-03-15', address: 'Bhubaneswar', status: 'Active',   rollNo: 'S001', joinDate: '2023-06-01' },
      { id: 2, name: 'Priya Patel',     email: 'priya@school.com',   phone: '9876543211', class: '10-B', gender: 'Female', dob: '2008-07-22', address: 'Cuttack',      status: 'Active',   rollNo: 'S002', joinDate: '2023-06-01' },
      { id: 3, name: 'Rohit Nayak',     email: 'rohit@school.com',   phone: '9876543212', class: '9-A',  gender: 'Male',   dob: '2009-01-10', address: 'Puri',         status: 'Active',   rollNo: 'S003', joinDate: '2023-06-01' },
      { id: 4, name: 'Sneha Das',       email: 'sneha@school.com',   phone: '9876543213', class: '11-A', gender: 'Female', dob: '2007-05-18', address: 'Sambalpur',    status: 'Inactive', rollNo: 'S004', joinDate: '2022-06-01' },
      { id: 5, name: 'Kiran Mohanty',   email: 'kiran@school.com',   phone: '9876543214', class: '12-B', gender: 'Male',   dob: '2006-11-30', address: 'Berhampur',    status: 'Active',   rollNo: 'S005', joinDate: '2022-06-01' },
      { id: 6, name: 'Ananya Biswal',   email: 'ananya@school.com',  phone: '9876543215', class: '9-B',  gender: 'Female', dob: '2009-09-05', address: 'Rourkela',     status: 'Active',   rollNo: 'S006', joinDate: '2023-06-01' },
    ]);

    this.setTeachers([
      { id: 1, name: 'Dr. Ramesh Kumar',   email: 'ramesh@school.com',  phone: '9000000001', subject: 'Mathematics',  qualification: 'PhD',  experience: '15 years', salary: 65000, status: 'Active', joinDate: '2010-07-01' },
      { id: 2, name: 'Mrs. Sunita Rao',    email: 'sunita@school.com',  phone: '9000000002', subject: 'Science',      qualification: 'M.Sc', experience: '10 years', salary: 55000, status: 'Active', joinDate: '2014-07-01' },
      { id: 3, name: 'Mr. Anil Tripathy',  email: 'anil@school.com',    phone: '9000000003', subject: 'English',      qualification: 'M.A',  experience: '8 years',  salary: 50000, status: 'Active', joinDate: '2016-07-01' },
      { id: 4, name: 'Ms. Deepa Mishra',   email: 'deepa@school.com',   phone: '9000000004', subject: 'History',      qualification: 'M.A',  experience: '6 years',  salary: 48000, status: 'Active', joinDate: '2018-07-01' },
    ]);

    this.setCourses([
      { id: 1, name: 'Mathematics',    code: 'MATH101', teacher: 'Dr. Ramesh Kumar',  class: '10-A', credits: 4, schedule: 'Mon/Wed 9AM',  status: 'Active', students: 35 },
      { id: 2, name: 'Physics',        code: 'PHY101',  teacher: 'Mrs. Sunita Rao',   class: '10-B', credits: 4, schedule: 'Tue/Thu 10AM', status: 'Active', students: 32 },
      { id: 3, name: 'English',        code: 'ENG101',  teacher: 'Mr. Anil Tripathy', class: '9-A',  credits: 3, schedule: 'Mon/Fri 11AM',  status: 'Active', students: 40 },
      { id: 4, name: 'History',        code: 'HIS101',  teacher: 'Ms. Deepa Mishra',  class: '11-A', credits: 3, schedule: 'Wed/Fri 2PM',  status: 'Active', students: 28 },
      { id: 5, name: 'Computer Sci',   code: 'CS101',   teacher: 'Dr. Ramesh Kumar',  class: '12-B', credits: 4, schedule: 'Tue/Thu 3PM',  status: 'Active', students: 25 },
    ]);

    this.setNotices([
      { id: 1, title: 'Annual Examination Schedule', body: 'The annual examination will commence from 15th July. All students must report by 8:30 AM.', type: 'Urgent',  date: new Date().toISOString(), author: 'Admin' },
      { id: 2, title: 'Sports Day Announcement',     body: 'Sports day event on 15th June. All students are required to participate in at least one sport.', type: 'Info',    date: new Date(Date.now() - 86400000).toISOString(), author: 'Admin' },
      { id: 3, title: 'School Holiday Notice',       body: 'School will remain closed on 20th June on account of local festival.', type: 'Holiday', date: new Date(Date.now() - 86400000*3).toISOString(), author: 'Admin' },
      { id: 4, title: 'Parent-Teacher Meeting',      body: 'PTM scheduled for 25th June from 9AM-12PM. Parents are requested to attend.', type: 'Info',    date: new Date(Date.now() - 86400000*5).toISOString(), author: 'Admin' },
    ]);

    this.setAttendance([]);
    this.setGrades([
      { id: 1, studentId: 1, studentName: 'Aarav Sharma',  course: 'Mathematics', examType: 'Midterm', marks: 88, total: 100, date: '2024-03-15' },
      { id: 2, studentId: 1, studentName: 'Aarav Sharma',  course: 'Physics',     examType: 'Midterm', marks: 76, total: 100, date: '2024-03-16' },
      { id: 3, studentId: 2, studentName: 'Priya Patel',   course: 'Mathematics', examType: 'Midterm', marks: 92, total: 100, date: '2024-03-15' },
      { id: 4, studentId: 2, studentName: 'Priya Patel',   course: 'English',     examType: 'Midterm', marks: 85, total: 100, date: '2024-03-17' },
      { id: 5, studentId: 3, studentName: 'Rohit Nayak',   course: 'Mathematics', examType: 'Midterm', marks: 65, total: 100, date: '2024-03-15' },
    ]);

    localStorage.setItem('sms_seeded', '1');
    localStorage.setItem('sms_nextId_students', '7');
    localStorage.setItem('sms_nextId_teachers', '5');
    localStorage.setItem('sms_nextId_courses',  '6');
    localStorage.setItem('sms_nextId_notices',  '5');
    localStorage.setItem('sms_nextId_grades',   '6');
  },

  // ── GENERIC HELPERS ────────────────────────────────────────
  nextId(key) {
    const id = parseInt(localStorage.getItem(`sms_nextId_${key}`) || '1');
    localStorage.setItem(`sms_nextId_${key}`, id + 1);
    return id;
  },

  // ── STUDENTS ───────────────────────────────────────────────
  getStudents()       { return JSON.parse(localStorage.getItem('sms_students') || '[]'); },
  setStudents(data)   { localStorage.setItem('sms_students', JSON.stringify(data)); },
  addStudent(s)       { s.id = this.nextId('students'); const d = this.getStudents(); d.push(s); this.setStudents(d); return s; },
  updateStudent(s)    { const d = this.getStudents().map(x => x.id === s.id ? s : x); this.setStudents(d); },
  deleteStudent(id)   { this.setStudents(this.getStudents().filter(x => x.id !== id)); },
  getStudent(id)      { return this.getStudents().find(x => x.id === id); },

  // ── TEACHERS ───────────────────────────────────────────────
  getTeachers()       { return JSON.parse(localStorage.getItem('sms_teachers') || '[]'); },
  setTeachers(data)   { localStorage.setItem('sms_teachers', JSON.stringify(data)); },
  addTeacher(t)       { t.id = this.nextId('teachers'); const d = this.getTeachers(); d.push(t); this.setTeachers(d); return t; },
  updateTeacher(t)    { const d = this.getTeachers().map(x => x.id === t.id ? t : x); this.setTeachers(d); },
  deleteTeacher(id)   { this.setTeachers(this.getTeachers().filter(x => x.id !== id)); },

  // ── COURSES ────────────────────────────────────────────────
  getCourses()        { return JSON.parse(localStorage.getItem('sms_courses') || '[]'); },
  setCourses(data)    { localStorage.setItem('sms_courses', JSON.stringify(data)); },
  addCourse(c)        { c.id = this.nextId('courses'); const d = this.getCourses(); d.push(c); this.setCourses(d); return c; },
  updateCourse(c)     { const d = this.getCourses().map(x => x.id === c.id ? c : x); this.setCourses(d); },
  deleteCourse(id)    { this.setCourses(this.getCourses().filter(x => x.id !== id)); },

  // ── NOTICES ────────────────────────────────────────────────
  getNotices()        { return JSON.parse(localStorage.getItem('sms_notices') || '[]'); },
  setNotices(data)    { localStorage.setItem('sms_notices', JSON.stringify(data)); },
  addNotice(n)        { n.id = this.nextId('notices'); const d = this.getNotices(); d.push(n); this.setNotices(d); return n; },
  deleteNotice(id)    { this.setNotices(this.getNotices().filter(x => x.id !== id)); },

  // ── ATTENDANCE ─────────────────────────────────────────────
  getAttendance()     { return JSON.parse(localStorage.getItem('sms_attendance') || '[]'); },
  setAttendance(data) { localStorage.setItem('sms_attendance', JSON.stringify(data)); },
  markAttendance(rec) { rec.id = this.nextId('attendance'); const d = this.getAttendance(); d.push(rec); this.setAttendance(d); return rec; },

  // ── GRADES ─────────────────────────────────────────────────
  getGrades()         { return JSON.parse(localStorage.getItem('sms_grades') || '[]'); },
  setGrades(data)     { localStorage.setItem('sms_grades', JSON.stringify(data)); },
  addGrade(g)         { g.id = this.nextId('grades'); const d = this.getGrades(); d.push(g); this.setGrades(d); return g; },
  deleteGrade(id)     { this.setGrades(this.getGrades().filter(x => x.id !== id)); },
};

// ── TOAST HELPER ─────────────────────────────────────────────
function showToast(msg, type = 'success') {
  let t = document.querySelector('.toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.className = `toast ${type === 'error' ? 'error' : ''}`;
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ── SIDEBAR TOGGLE ────────────────────────────────────────────
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// ── ACTIVE NAV ────────────────────────────────────────────────
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href')?.includes(path)) a.classList.add('active');
  });
}

// ── GRADE LETTER ─────────────────────────────────────────────
function getGradeLetter(pct) {
  if (pct >= 90) return 'A+';
  if (pct >= 80) return 'A';
  if (pct >= 70) return 'B';
  if (pct >= 60) return 'C';
  if (pct >= 50) return 'D';
  return 'F';
}

// Init
SMS.seed();
setActiveNav();
