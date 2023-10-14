function validateForm() {
    // 입력값 가져오기
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // 유효성 검사
    if (username === "" || password === "") {
        alert("아이디와 비밀번호를 모두 입력해주세요.");
        return false;
    }
  
    return true;
  }
  
  
  
    function togglePasswordVisibility() {
      var passwordInput = document.getElementById("password");
      var passwordToggle = document.querySelector(".pw_toggle");
    
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordToggle.classList.add("visible");
      } else {
        passwordInput.type = "password";
        passwordToggle.classList.remove("visible");
      }
    }
    