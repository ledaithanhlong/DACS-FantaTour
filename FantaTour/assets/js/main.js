const menuInput = document.getElementById('navbar__menu-input');
  const menu = document.querySelector('.navbar__menu');

  // Click ra ngoài thì tự đóng menu
  document.addEventListener('click', function(e) {
    if (menuInput.checked && !menu.contains(e.target) && e.target.id !== 'navbar__menu-input') {
      menuInput.checked = false;
    }
  });

  // Di chuột ra ngoài menu thì tự đóng
  menu.addEventListener('mouseleave', function() {
    if (menuInput.checked) {
      menuInput.checked = false;
    }
  });

  

  function showMessage(text, color = "green") {
    message.textContent = text;
    message.style.color = color;
    message.style.opacity = "1";

    setTimeout(() => {
        message.style.opacity = "0";
    }, 3000);
}

showMessage("Đã gửi yêu cầu thành công!");


