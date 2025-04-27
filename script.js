function getFormvalue() {
    //Write your code here
		event.preventDefault();
		const first = document.querySelector('input[name="fname"]').value.trim();
		const last = document.querySelector('input[name="lname"]').value.trim();

		if(first && last){
			alert(`${first} ${last}`);
		}else{
			alert('Please fill the name');
		}

}
