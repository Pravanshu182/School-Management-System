// ─── DASHBOARD ────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Date
  document.getElementById('currentDate').textContent =
    new Date().toLocaleDateString('en-IN', { weekday:'long', year:'numeric', month:'long', day:'numeric' });

  // Stats counter animation
  const students = SMS.getStudents();
  const teachers = SMS.getTeachers();
  const courses  = SMS.getCourses();

  animateCount('totalStudents', students.length);
  animateCount('totalTeachers', teachers.length);
  animateCount('totalCourses',  courses.length);

  // Recent students table
  renderRecentStudents(students.slice(-5).reverse());
});

function animateCount(id, target) {
  const el = document.getElementById(id);
  let current = 0;
  const step = Math.ceil(target / 30);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current;
    if (current >= target) clearInterval(timer);
  }, 40);
}

function renderRecentStudents(students) {
  const tbody = document.getElementById('recentStudentsBody');
  if (!students.length) {
    tbody.innerHTML = '<tr><td colspan="3" class="empty-row">No students yet</td></tr>';
    return;
  }
  tbody.innerHTML = students.map(s => `
    <tr>
      <td>${s.name}</td>
      <td>${s.class}</td>
      <td><span class="badge badge-${s.status === 'Active' ? 'active' : 'inactive'}">${s.status}</span></td>
    </tr>
  `).join('');
}
