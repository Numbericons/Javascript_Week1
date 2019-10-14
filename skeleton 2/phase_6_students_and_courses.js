function Student(first, last){
  this.first = first;
  this.last = last;
  this.courses = [];
}

Student.prototype.name = function(){
  return `${this.first} ${this.last}`;
}

Student.prototype.enroll = function(course){
  if (this.courses.includes(course)) return;
  this.courses = this.courses.concat(course);
  course.students.concat(this);
}

Student.prototype.courseLoad = function(){
  let load = {};
  this.courses.forEach(course => {
    load[course.department] = load[course.department] || 0;
    load[course.department] += course.credits;
  })
  return load;
}

function Course(name, department, credits) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
}

Course.prototype.addStudent = function(student) {
  student.enroll(this);
}