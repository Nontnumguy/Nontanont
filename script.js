window.onload = function() {
    var adPopup = document.getElementById("ad-popup");
    var closeBtn = document.getElementById("close-btn");
  
    // แสดงโฆษณาทันทีที่โหลดหน้าเว็บ
    adPopup.style.display = "block";
  
    // เมื่อคลิกปุ่มปิด (X) ให้ซ่อนโฆษณา
    closeBtn.onclick = function() {
      adPopup.style.display = "none";
    }
  
    // เมื่อคลิกที่พื้นหลังของโฆษณาให้ปิดโฆษณา
    window.onclick = function(event) {
      if (event.target == adPopup) {
        adPopup.style.display = "none";
      }
    }
  }

  

  function openModal(imgElement) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = "flex";  // Show the modal
    modalImage.src = imgElement.src;  // Set the image source of the modal to the clicked image
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";  // Hide the modal when clicked outside or on the close button
}
