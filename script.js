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
  const profileImg = document.getElementById("profileImg");

  if (isDarkMode) {
    body.classList.add("dark-mode");
    themeIcon.className = "fas fa-sun";
    // Loại bỏ invert cho ảnh profile nếu có
    if (profileImg) profileImg.style.filter = "none";
  } else {
    body.classList.remove("dark-mode");
    themeIcon.className = "fas fa-moon";
    if (profileImg) profileImg.style.filter = "none";
  }
}

// Hiển thị/ẩn nút Back to Top khi cuộn trang
window.addEventListener("scroll", function () {
  const btn = document.getElementById("backToTopBtn");
  if (window.scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

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

// Particle Animation System
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 4 + 2; // Increased particle size
    this.baseSize = this.size;
    this.speedX = (Math.random() * 2 - 1) * 0.5; // Reduced speed
    this.speedY = (Math.random() * 2 - 1) * 0.5; // Reduced speed
    this.maxDistance = 150;
    this.glowStrength = Math.random() * 0.5 + 0.5; // Random glow strength
  }

  update(mouse) {
    this.x += this.speedX;
    this.y += this.speedY;

    // Mouse repulsion
    if (mouse.x && mouse.y) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const force = (this.maxDistance - distance) / this.maxDistance;

      if (distance < this.maxDistance) {
        this.speedX -= (dx / distance) * force * 0.3; // Reduced repulsion force
        this.speedY -= (dy / distance) * force * 0.3;
      }
    }

    // Add slight pulsing effect
    this.size = this.baseSize + Math.sin(Date.now() * 0.003) * 0.5;

    // Boundary check with smoother bounce
    if (this.x < 0 || this.x > window.innerWidth) {
      this.speedX *= -0.8; // Reduced bounce speed
      this.x = Math.max(0, Math.min(this.x, window.innerWidth));
    }
    if (this.y < 0 || this.y > window.innerHeight) {
      this.speedY *= -0.8; // Reduced bounce speed
      this.y = Math.max(0, Math.min(this.y, window.innerHeight));
    }

    // Add some randomness to movement
    this.speedX += (Math.random() - 0.5) * 0.01;
    this.speedY += (Math.random() - 0.5) * 0.01;

    // Limit maximum speed
    const maxSpeed = 0.8;
    const currentSpeed = Math.sqrt(
      this.speedX * this.speedX + this.speedY * this.speedY
    );
    if (currentSpeed > maxSpeed) {
      this.speedX = (this.speedX / currentSpeed) * maxSpeed;
      this.speedY = (this.speedY / currentSpeed) * maxSpeed;
    }
  }

  draw(ctx) {
    // Draw glow effect
    const gradient = ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      this.size * 2
    );
    gradient.addColorStop(0, `rgba(255, 255, 255, ${0.8 * this.glowStrength})`);
    gradient.addColorStop(
      0.4,
      `rgba(255, 255, 255, ${0.4 * this.glowStrength})`
    );
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
    ctx.fill();

    // Draw particle core
    ctx.fillStyle = `rgba(255, 255, 255, ${0.9 * this.glowStrength})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

class ParticleSystem {
  constructor() {
    this.canvas = document.getElementById("particleCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.mouse = { x: null, y: null };
    this.lastTime = 0;
    this.numParticles = window.innerWidth < 768 ? 30 : 50;

    this.init();
    this.animate();
    this.setupEventListeners();
  }

  init() {
    this.resize();
    this.createParticles();
  }

  resize() {
    const banner = document.querySelector(".banner");
    this.canvas.width = banner.offsetWidth;
    this.canvas.height = banner.offsetHeight;
  }

  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.numParticles; i++) {
      const x = Math.random() * this.canvas.width;
      const y = Math.random() * this.canvas.height;
      this.particles.push(new Particle(x, y));
    }
  }

  setupEventListeners() {
    window.addEventListener("resize", () => {
      this.resize();
      this.createParticles();
    });

    this.canvas.addEventListener("mousemove", (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    });

    this.canvas.addEventListener("mouseleave", () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });

    this.canvas.addEventListener("click", (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      for (let i = 0; i < 5; i++) {
        this.particles.push(new Particle(x, y));
      }
    });
  }
  drawConnections() {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          // Increased connection distance
          const opacity = (1 - distance / 120) * 0.2; // Increased base opacity
          this.ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
          this.ctx.beginPath();
          this.ctx.lineWidth = (1 - distance / 120) * 1.5; // Increased line width
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }
  }

  animate(timestamp) {
    const deltaTime = timestamp - this.lastTime;
    this.lastTime = timestamp;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.drawConnections();

    this.particles.forEach((particle) => {
      particle.update(this.mouse);
      particle.draw(this.ctx);
    });

    requestAnimationFrame(this.animate.bind(this));
  }
}

// Initialize particle system when window loads
window.addEventListener("load", () => {
  new ParticleSystem();
});

// Hamburger Menu
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navList = document.getElementById("navList");

// Create overlay element
const overlay = document.createElement("div");
overlay.className = "nav-overlay";
document.body.appendChild(overlay);

// Toggle menu
function toggleMenu() {
  hamburgerBtn.classList.toggle("active");
  navList.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.style.overflow = navList.classList.contains("active")
    ? "hidden"
    : "";
}

hamburgerBtn.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

// Close menu when clicking a nav link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (navList.classList.contains("active")) {
      toggleMenu();
    }
  });
});

// Close menu on window resize if open
window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && navList.classList.contains("active")) {
    toggleMenu();
  }
});
