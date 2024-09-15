function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.subject = '';
	this.marks = [];
	this.excluded = '';
	this.subjects = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.hasOwnProperty(`marks`) === true) {
		this.marks.push(...marks);
	}
}

Student.prototype.getAverage = function() {
	if (!this.hasOwnProperty('marks') || !this.marks.length) {
	return 0;
	}
	let gradePointAverage = this.marks.reduce((acc, mark) => acc + mark, 0);
	gradePointAverage /= this.marks.length;
	return gradePointAverage;
   }
   
   Student.prototype.exclude = function(reason) {
	this.excluded = reason;
	delete this.subject;
	delete this.marks;
   }