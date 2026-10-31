# 🌆 대전광역시 홈페이지

대전광역시를 소개하는 반응형 원페이지 웹사이트입니다. 과학·행정·교통의 중심지인 대전의 매력을 한눈에 보여줍니다.

---

## 📋 목차

- [프로젝트 개요](#-프로젝트-개요)
- [페이지 섹션](#-페이지-섹션)
- [기술 스택](#-기술-스택)
- [파일 구조](#-파일-구조)
- [실행 방법](#-실행-방법)
- [SEO 설정](#-seo-설정)
- [Git 브랜치 전략](#-git-브랜치-전략)
- [라이선스](#-라이선스)

---

## 📋 프로젝트 개요

대전광역시의 다양한 매력을 소개하는 원페이지 웹사이트로, 다음 정보를 제공합니다:

| 구분 | 내용 |
|------|------|
| **목적** | 대전광역시 홍보 및 정보 제공 |
| **타겟** | 대전 방문객, 신규 주민, 관광객 |
| **특징** | 반응형 디자인, 스크롤 애니메이션, 라이트박스 갤러리 |
| **상태** | 🟢 운영 중 |

---

## 📋 페이지 섹션

| # | 섹션 | 설명 |
|:---:|:---|:---|
| 🏠 | **Hero (홈)** | 대전광역시 소개 타이틀, 과학·교육·휴양 도시 뱃지, 스크롤 인디케이터 |
| ℹ️ | **대전 소개** | 위치, 인구, 과학·연구, 행정, 스포츠, 자매도시 정보 카드 (6개) |
| 📊 | **Stats** | 국책연구기관(30), 대학교(18), KTX 역사(3), 공원·박물관(12) 숫자 카운터 애니메이션 |
| 🏞️ | **명소** | 계족산 황톳길, 국립중앙과학관, 대전 오월드, 보문산성, 둔산동·은행동, 식장산 전망대 |
| 🍽️ | **맛집** | 성심당, 대전 칼국수, 떡볶이 골목, 대청호 회 |
| 🖼️ | **갤러리** | 대전 명소 이미지 그리드 (클릭 시 라이트박스 확대) |
| 📬 | **문의** | 이름/이메일/내용 연락처 폼 (전송 시뮬레이션) |
| 📄 | **Footer** | 바로가기 링크, SNS 아이콘, 연락처 정보 |

---

## 🛠 기술 스택

| 기술 | 용도 |
|:-----|:-----|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | 웹 페이지 구조 |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | 스타일링 및 반응형 레이아웃 (Flexbox, Grid) |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | 인터랙션 (Vanilla JS) |
| ![AOS](https://img.shields.io/badge/AOS-8A2BE2?style=flat) | 스크롤 애니메이션 (Animate On Scroll) |
| ![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=flat&logo=fontawesome&logoColor=white) | 아이콘 |
| ![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat&logo=googlefonts&logoColor=white) | 웹 폰트 (Noto Sans KR) |

---

## 📂 파일 구조

```
📁 daejeon-website/
│
├── 📄 index.html          # 메인 페이지 (SEO 메타 태그 포함)
├── 📄 style.css           # 스타일시트 (반응형 3단계: 992px / 768px)
├── 📄 script.js           # 자바스크립트 (AOS, 카운터, 라이트박스, 폼)
│
├── 📄 robots.txt          # 검색 엔진 크롤링 설정
├── 📄 sitemap.xml         # 사이트맵 (검색 엔진 제출용)
├── 📄 README.md           # 프로젝트 설명 (현재 문서)
│
└── 📄 .gitignore          # Git 제외 파일 설정
```

---

## 🚀 실행 방법

### 로컬 실행

```bash
# 저장소 클론
git clone https://github.com/cndudwls11-maker/daejeon-website.git

# 브라우저로 열기
cd daejeon-website
start index.html
```

### GitHub Pages 배포 (선택 사항)

1. GitHub 레포지토리 → **Settings** → **Pages**
2. **Deploy from a branch** → `main` / `/ (root)` 선택
3. **Save** 클릭
4. `https://cndudwls11-maker.github.io/daejeon-website/` 에서 접속 가능

---

## 🔍 SEO 설정

| 파일 | 설명 |
|:-----|:------|
| **robots.txt** | 모든 검색 엔진에 `index.html` 접근 허용, 나머지 차단 |
| **sitemap.xml** | 사이트맵 등록으로 검색 엔진 인덱싱 지원 |
| **meta description** | 검색 결과에 표시되는 페이지 설명 |
| **meta keywords** | 대전 관련 검색 키워드 (11개) |
| **OG tags** | SNS 공유 시 표시되는 제목/설명 |

---

## 🌿 Git 브랜치 전략

```
main          ──────●──────●──────●──────●  (배포 브랜치)
                      \    /
image-layout           ──●──                  (이미지 레이아웃 작업 브랜치)
```

| 브랜치 | 설명 |
|:-------|:-----|
| **main** | 안정적인 배포 브랜치 |
| **image-layout** | 이미지 및 레이아웃 개선 작업 브랜치 |

---

## 📄 라이선스

© 2026 대전광역시. All Rights Reserved.

---

> 🌟 **대한민국 과학의 중심, 행복한 도시 대전**
