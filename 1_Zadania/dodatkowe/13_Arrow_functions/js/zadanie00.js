document.addEventListener('DOMContentLoaded', function () {
	//zad0
	function Students(arr) {
		this.numberOfLetters = [],
		this.countLetters = () => {
			for (let i = 0; i < arr.length; i++) {
				this.numberOfLetters.push(arr[i].length);
			}
		}
	}
	var students = new Students(["Ania", "Kamil", "Mariusz"]);
	students.countLetters();
	console.log(students.numberOfLetters);


});