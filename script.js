// Dữ liệu cá nhân lưu trong bộ nhớ
let personalData = {
  fullName: "Nguyễn Thái Tuấn",
  birthDate: "22/09/2005",
  gender: "Nam",
  address: "TP. Hồ Chí Minh",
  phone: "0359426405",
  email: "nguyenthaituan205@gmail.com",
  careerGoal:
    "Trở thành một lập trình viên Full-stack chuyên nghiệp, có khả năng phát triển các ứng dụng web hiện đại và đóng góp vào các dự án công nghệ có tác động tích cực đến cộng đồng.",
};

// Hàm mở modal chỉnh sửa
function openEditModal() {
  const modal = document.getElementById("editModal");

  // Điền dữ liệu hiện tại vào form
  document.getElementById("editFullName").value = personalData.fullName;
  document.getElementById("editBirthDate").value = personalData.birthDate;
  document.getElementById("editGender").value = personalData.gender;
  document.getElementById("editAddress").value = personalData.address;
  document.getElementById("editPhone").value = personalData.phone;
  document.getElementById("editEmail").value = personalData.email;
  document.getElementById("editCareerGoal").value = personalData.careerGoal;

  modal.style.display = "block";

  // Thêm hiệu ứng fade in
  setTimeout(() => {
    modal.style.opacity = "1";
  }, 10);
}

// Hàm đóng modal
function closeEditModal() {
  const modal = document.getElementById("editModal");
  modal.style.display = "none";
}

// Đóng modal khi click bên ngoài
window.onclick = function (event) {
  const modal = document.getElementById("editModal");
  if (event.target == modal) {
    closeEditModal();
  }
};

// Xử lý form submit
document.getElementById("editForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Cập nhật dữ liệu
  personalData.fullName = document.getElementById("editFullName").value;
  personalData.birthDate = document.getElementById("editBirthDate").value;
  personalData.gender = document.getElementById("editGender").value;
  personalData.address = document.getElementById("editAddress").value;
  personalData.phone = document.getElementById("editPhone").value;
  personalData.email = document.getElementById("editEmail").value;
  personalData.careerGoal = document.getElementById("editCareerGoal").value;

  // Cập nhật giao diện
  updateDisplay();

  // Đóng modal
  closeEditModal();

  // Hiển thị thông báo thành công
  showNotification("Thông tin đã được cập nhật thành công!");
});

// Hàm cập nhật hiển thị
function updateDisplay() {
  document.getElementById("fullName").textContent = personalData.fullName;
  document.getElementById("birthDate").textContent = personalData.birthDate;
  document.getElementById("gender").textContent = personalData.gender;
  document.getElementById("address").textContent = personalData.address;
  document.getElementById("phone").textContent = personalData.phone;
  document.getElementById("email").textContent = personalData.email;
  document.getElementById("careerGoal").textContent = personalData.careerGoal;
}

// Hàm hiển thị thông báo
function showNotification(message) {
  // Tạo element thông báo
  const notification = document.createElement("div");
  notification.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: #28a745;
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            z-index: 3000;
            animation: slideInRight 0.3s ease;
        ">
            <i class="fas fa-check-circle"></i> ${message}
        </div>
    `;

  document.body.appendChild(notification);

  // Tự động xóa sau 3 giây
  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Smooth scrolling cho navigation
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 70; // Trừ height của navbar

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Hiệu ứng parallax cho banner
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const banner = document.querySelector(".banner");
  const rate = scrolled * -0.5;

  if (banner) {
    banner.style.transform = `translateY(${rate}px)`;
  }
});

// Animation khi scroll đến section
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.6s ease-out";
      entry.target.style.opacity = "1";
    }
  });
}, observerOptions);

// Quan sát tất cả các section
document.querySelectorAll(".section").forEach((section) => {
  observer.observe(section);
});

// Hiệu ứng typing cho tiêu đề
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.textContent = "";

  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

// Khởi động hiệu ứng typing khi load trang
window.addEventListener("load", function () {
  const nameElement = document.getElementById("fullName");
  const originalText = nameElement.textContent;
  typeWriter(nameElement, originalText, 100);

  // Animate skill bars
  setTimeout(() => {
    document.querySelectorAll(".skill-progress").forEach((bar) => {
      const width = bar.style.width;
      bar.style.width = "0";
      setTimeout(() => {
        bar.style.width = width;
      }, 500);
    });
  }, 1000);
});

// Thêm hiệu ứng hover cho các section
document.querySelectorAll(".section").forEach((section) => {
  section.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px) scale(1.02)";
  });

  section.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Console easter egg
console.log(`
╔════════════════════════════════════════════════╗
║           🚀 CV Cá Nhân v1.0 🚀              ║
║                                              ║
║   Tác giả: Nguyễn Thái Tuấn                  ║
║   Thiết kế: Hiện đại & Tương thích di động   ║
║   Công nghệ: HTML5, CSS3, JavaScript         ║
║                                              ║
║   💡 Mẹo sử dụng:                            ║
║   - Nhấn đúp vào ảnh đại diện để đổi ảnh     ║
║   - Nhấn nút "Chỉnh sửa thông tin" để cập nhật║
║   - Kéo xuống để xem hiệu ứng động           ║
╚════════════════════════════════════════════════╝
    `);

// Theme toggle functionality
let isDarkMode = false;

function toggleTheme() {
  isDarkMode = !isDarkMode;
  const body = document.body;
  const themeIcon = document.getElementById("themeIcon");

  if (isDarkMode) {
    body.style.filter = "invert(1) hue-rotate(180deg)";
    body.style.transition = "filter 0.3s ease";
    themeIcon.className = "fas fa-sun";
  } else {
    body.style.filter = "none";
    themeIcon.className = "fas fa-moon";
  }
}

// Highlight active navigation
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
