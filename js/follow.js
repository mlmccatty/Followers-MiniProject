const followbtn = document.getElementById("follow_button");
const followval_display = document.getElementById("follow_value_display");
const original_follow_value = 5;
let follow_value = original_follow_value;

followbtn.addEventListener("click", add);

function add() {
  if (follow_value == original_follow_value) {
	  follow_value++;
	  followbtn.innerHTML = "Following";
  } else {
	  follow_value--;
	  followbtn.innerHTML = "Follow";
  }
  followval_display.innerHTML = follow_value;
}