// ===== AOS 초기화 =====
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
});

// ===== DOM 요소 =====
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const scrollTopBtn = document.getElementById('scrollTop');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const statNumbers = document.querySelectorAll('.stat-num');

// ===== 네비게이션 스크롤 효과 =====
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });

    if (scrollY > 500) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }

    animateStats();
});

// ===== 모바일 메뉴 토글 =====
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    icon.className = navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.querySelector('i').className = 'fas fa-bars';
    });
});

// ===== 스크롤 탑 =====
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== 숫자 카운트 =====
let statsAnimated = false;

function animateStats() {
    const statsSection = document.querySelector('.stats-section');
    if (!statsSection || statsAnimated) return;

    const rect = statsSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100 && rect.bottom > 0;

    if (isVisible) {
        statsAnimated = true;
        statNumbers.forEach(num => {
            const target = parseInt(num.getAttribute('data-target'));
            animateNumber(num, target);
        });
    }
}

function animateNumber(element, target) {
    let current = 0;
    const increment = Math.ceil(target / 60);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = current;
    }, 30);

// ===== 패럴랙스 효과 (마우스 움직임) =====
const heroEl = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

heroEl.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    heroContent.style.transform = `translate(${x}px, ${y}px)`;
});

heroEl.addEventListener('mouseleave', () => {
    heroContent.style.transform = 'translate(0, 0)';
});

// ===== 갤러리 라이트박스 =====
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const overlay = document.createElement('div');
        overlay.className = 'lightbox';
        overlay.innerHTML = `
            <div class="lightbox-content">
                <img src="${img.src}" alt="${img.alt}" />
                <span class="lightbox-close"><i class="fas fa-times"></i></span>
            </div>
        `;
        document.body.appendChild(overlay);

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay || e.target.closest('.lightbox-close')) {
                overlay.remove();
            }
        });
    });
});

// 라이트박스 스타일 추가
const ls = document.createElement('style');
ls.textContent = `
    .lightbox {
        position: fixed; top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex; align-items: center; justify-content: center;
        z-index: 10000; animation: fadeIn 0.3s ease;
    }
    .lightbox-content { max-width: 90%; max-height: 90%; position: relative; }
    .lightbox-content img { max-width: 100%; max-height: 85vh; border-radius: 10px; box-shadow: 0 10px 40px rgba(0,0,0,0.5); }
    .lightbox-close {
        position: absolute; top: -40px; right: 0;
        color: #fff; font-size: 1.8rem; cursor: pointer; transition: transform 0.3s;
    }
    .lightbox-close:hover { transform: scale(1.2); }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
`;
document.head.appendChild(ls);

}

// ===== 연락처 폼 =====
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 전송 중...';
    submitBtn.disabled = true;

    setTimeout(() => {
        formMessage.style.color = '#4caf50';
        formMessage.textContent = '✅ 소중한 의견 감사합니다! 빠른 시일 내에 답변드리겠습니다.';
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        setTimeout(() => { formMessage.textContent = ''; }, 5000);
    }, 1500);
});

