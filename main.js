<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NeuraForge — AI That Actually Slaps</title>
  <style>
    /* ===== RESET & BASE ===== */
    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --color-bg: #fff5f7;
      --color-bg-elevated: #ffffff;
      --color-surface: #ffffff;
      --color-surface-hover: #fff0f5;
      --color-primary: #ec4899;
      --color-primary-light: #f472b6;
      --color-primary-dark: #db2777;
      --color-secondary: #f9a8d4;
      --color-accent: #fdf2f8;
      --color-text: #1f1f1f;
      --color-text-muted: #6b7280;
      --color-text-dim: #9ca3af;
      --color-border: #fce7f3;
      --color-border-strong: #fbcfe8;
      --radius: 16px;
      --radius-sm: 10px;
      --radius-full: 9999px;
      --shadow: 0 4px 20px rgba(236, 72, 153, 0.1);
      --shadow-lg: 0 20px 50px rgba(236, 72, 153, 0.15);
      --shadow-pink: 0 4px 30px rgba(236, 72, 153, 0.25);
      --transition: 0.3s ease;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      background: linear-gradient(180deg, #fff5f7 0%, #ffffff 50%, #fdf2f8 100%);
      color: var(--color-text);
      line-height: 1.6;
      overflow-x: hidden;
    }

    /* ===== VIDEO BACKGROUND ===== */
    .video-bg {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      overflow: hidden;
    }

    .video-bg::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background:
        radial-gradient(ellipse at 20% 30%, rgba(251, 207, 232, 0.4) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 70%, rgba(244, 114, 182, 0.3) 0%, transparent 50%),
        radial-gradient(ellipse at 50% 50%, rgba(253, 242, 248, 0.5) 0%, transparent 70%);
      animation: gradientMove 20s ease-in-out infinite;
    }

    @keyframes gradientMove {
      0%, 100% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(-5%, 5%) rotate(5deg); }
      50% { transform: translate(5%, -5%) rotate(-5deg); }
      75% { transform: translate(-3%, -3%) rotate(3deg); }
    }

    /* ===== TYPOGRAPHY ===== */
    h1, h2, h3, h4 {
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -0.03em;
    }

    h1 { font-size: clamp(2.8rem, 6vw, 4.5rem); }
    h2 { font-size: clamp(2rem, 4vw, 3rem); }
    h3 { font-size: clamp(1.2rem, 2vw, 1.5rem); }
    p { font-size: clamp(1rem, 1.2vw, 1.125rem); color: var(--color-text-muted); }

    /* ===== PARALLAX CONTAINER ===== */
    .parallax-section {
      transform: translateZ(0);
      will-change: transform;
    }

    /* ===== LAYOUT ===== */
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    /* ===== NAV ===== */
    nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 100;
      padding: 16px 0;
      transition: var(--transition);
      background: transparent;
    }

    nav.scrolled {
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(20px);
      box-shadow: 0 1px 0 var(--color-border);
    }

    .nav-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--color-primary);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .logo-icon {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
      border-radius: var(--radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--shadow-pink);
    }

    .logo-icon svg {
      width: 22px;
      height: 22px;
    }

    .nav-links {
      display: flex;
      gap: 40px;
      list-style: none;
    }

    .nav-links a {
      color: var(--color-text-muted);
      text-decoration: none;
      font-size: 0.95rem;
      font-weight: 500;
      transition: var(--transition);
      position: relative;
    }

    .nav-links a:hover {
      color: var(--color-primary);
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--color-primary), var(--color-primary-light));
      border-radius: var(--radius-full);
      transition: var(--transition);
    }

    .nav-links a:hover::after {
      width: 100%;
    }

    .mobile-toggle {
      display: none;
      background: none;
      border: none;
      color: var(--color-text);
      cursor: pointer;
    }

    /* ===== BUTTONS ===== */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 14px 32px;
      font-size: 1rem;
      font-weight: 600;
      border-radius: var(--radius-full);
      text-decoration: none;
      cursor: pointer;
      transition: var(--transition);
      border: none;
    }

    .btn-primary {
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
      color: #fff;
      box-shadow: var(--shadow-pink);
    }

    .btn-primary:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 8px 40px rgba(236, 72, 153, 0.4);
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.8);
      color: var(--color-text);
      border: 2px solid var(--color-border-strong);
    }

    .btn-secondary:hover {
      background: var(--color-surface);
      border-color: var(--color-primary-light);
      transform: translateY(-2px);
    }

    /* ===== HERO ===== */
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding-top: 80px;
    }

    .hero-content {
      max-width: 900px;
      margin: 0 auto;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 18px;
      background: linear-gradient(135deg, rgba(251, 207, 232, 0.3) 0%, rgba(244, 114, 182, 0.1) 100%);
      border: 1px solid var(--color-border-strong);
      border-radius: var(--radius-full);
      font-size: 0.9rem;
      color: var(--color-primary-dark);
      margin-bottom: 28px;
      font-weight: 600;
    }

    .hero-badge .sparkle {
      font-size: 1rem;
      animation: sparkle 1.5s infinite;
    }

    @keyframes sparkle {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(1.2); }
    }

    .hero h1 {
      margin-bottom: 24px;
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 50%, var(--color-text) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero p {
      font-size: 1.35rem;
      max-width: 650px;
      margin: 0 auto 44px;
      color: var(--color-text-muted);
    }

    .hero-buttons {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .hero-stats {
      display: flex;
      gap: 60px;
      justify-content: center;
      margin-top: 100px;
    }

    .stat {
      text-align: center;
    }

    .stat-number {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-primary);
      display: block;
    }

    .stat-label {
      font-size: 0.9rem;
      color: var(--color-text-dim);
      margin-top: 4px;
      font-weight: 500;
    }

    /* ===== SECTIONS ===== */
    section {
      position: relative;
      padding: 120px 0;
    }

    .section-header {
      text-align: center;
      max-width: 650px;
      margin: 0 auto 72px;
    }

    .section-header h2 {
      margin-bottom: 16px;
      color: var(--color-text);
    }

    .section-header p {
      color: var(--color-text-muted);
      font-size: 1.1rem;
    }

    /* ===== SERVICES ===== */
    #services {
      background: linear-gradient(180deg, transparent 0%, rgba(253, 242, 248, 0.5) 100%);
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 28px;
    }

    .service-card {
      background: rgba(255, 255, 255, 0.9);
      border: 1px solid var(--color-border);
      border-radius: var(--radius);
      padding: 36px;
      transition: var(--transition);
      position: relative;
      overflow: hidden;
    }

    .service-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, var(--color-primary), var(--color-primary-light));
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.4s ease;
    }

    .service-card:hover {
      transform: translateY(-8px);
      border-color: var(--color-border-strong);
      box-shadow: var(--shadow-lg);
    }

    .service-card:hover::before {
      transform: scaleX(1);
    }

    .service-icon {
      width: 56px;
      height: 56px;
      background: linear-gradient(135deg, rgba(251, 207, 232, 0.3) 0%, rgba(244, 114, 182, 0.1) 100%);
      border-radius: var(--radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;
      color: var(--color-primary);
    }

    .service-icon svg {
      width: 26px;
      height: 26px;
    }

    .service-card h3 {
      margin-bottom: 14px;
      color: var(--color-text);
    }

    .service-card p {
      font-size: 0.95rem;
      line-height: 1.7;
    }

    /* ===== PRICING ===== */
    #pricing {
      background: linear-gradient(180deg, rgba(253, 242, 248, 0.3) 0%, rgba(255, 245, 247, 1) 100%);
    }

    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 28px;
      max-width: 1000px;
      margin: 0 auto;
    }

    .pricing-card {
      background: rgba(255, 255, 255, 0.95);
      border: 2px solid var(--color-border);
      border-radius: var(--radius);
      padding: 40px 32px;
      text-align: center;
      transition: var(--transition);
      position: relative;
    }

    .pricing-card.featured {
      border-color: var(--color-primary);
      transform: scale(1.05);
      box-shadow: var(--shadow-lg);
    }

    .pricing-card.featured::before {
      content: 'Most Popular';
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
      color: #fff;
      padding: 6px 20px;
      border-radius: var(--radius-full);
      font-size: 0.8rem;
      font-weight: 600;
    }

    .pricing-card:hover {
      transform: translateY(-6px);
      border-color: var(--color-border-strong);
      box-shadow: var(--shadow-lg);
    }

    .pricing-card.featured:hover {
      transform: scale(1.05) translateY(-6px);
    }

    .pricing-name {
      font-size: 1.3rem;
      font-weight: 700;
      color: var(--color-text);
      margin-bottom: 8px;
    }

    .pricing-desc {
      font-size: 0.9rem;
      color: var(--color-text-dim);
      margin-bottom: 24px;
    }

    .pricing-price {
      font-size: 3.5rem;
      font-weight: 800;
      color: var(--color-primary);
      line-height: 1;
    }

    .pricing-price span {
      font-size: 1rem;
      font-weight: 500;
      color: var(--color-text-dim);
    }

    .pricing-features {
      list-style: none;
      margin: 28px 0;
      text-align: left;
    }

    .pricing-features li {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 0;
      font-size: 0.95rem;
      color: var(--color-text-muted);
      border-bottom: 1px solid var(--color-border);
    }

    .pricing-features li:last-child {
      border-bottom: none;
    }

    .pricing-features li svg {
      width: 18px;
      height: 18px;
      color: var(--color-primary);
      flex-shrink: 0;
    }

    /* ===== ABOUT ===== */
    .about-section {
      background: linear-gradient(180deg, transparent 0%, rgba(253, 242, 248, 0.5) 50%, transparent 100%);
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: center;
    }

    .about-visual {
      position: relative;
    }

    .about-image {
      width: 100%;
      aspect-ratio: 4/3;
      border-radius: var(--radius);
      object-fit: cover;
      box-shadow: var(--shadow-lg);
    }

    .about-content h2 {
      margin-bottom: 24px;
      color: var(--color-text);
    }

    .about-content p {
      margin-bottom: 16px;
      font-size: 1.05rem;
    }

    .about-features {
      margin-top: 28px;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .about-feature {
      display: flex;
      align-items: center;
      gap: 14px;
      color: var(--color-text-muted);
      font-size: 0.95rem;
    }

    .about-feature svg {
      width: 22px;
      height: 22px;
      color: var(--color-primary);
      flex-shrink: 0;
    }

    /* ===== FOOTER ===== */
    .footer {
      position: relative;
      background: linear-gradient(180deg, transparent 0%, rgba(253, 242, 248, 0.8) 100%);
      border-top: 1px solid var(--color-border);
      padding: 80px 0 40px;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.2fr;
      gap: 48px;
      margin-bottom: 48px;
    }

    .footer-brand .logo {
      margin-bottom: 16px;
    }

    .footer-brand p {
      font-size: 0.95rem;
      max-width: 320px;
    }

    .footer-links h4 {
      font-size: 0.9rem;
      color: var(--color-text);
      margin-bottom: 20px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: 600;
    }

    .footer-links ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .footer-links a {
      color: var(--color-text-muted);
      text-decoration: none;
      font-size: 0.95rem;
      transition: var(--transition);
    }

    .footer-links a:hover {
      color: var(--color-primary);
    }

    .footer-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 32px;
      border-top: 1px solid var(--color-border);
    }

    .footer-bottom p {
      font-size: 0.85rem;
      color: var(--color-text-dim);
    }

    .footer-social {
      display: flex;
      gap: 14px;
    }

    .footer-social a {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--radius-sm);
      background: rgba(255, 255, 255, 0.8);
      border: 1px solid var(--color-border);
      color: var(--color-text-muted);
      transition: var(--transition);
    }

    .footer-social a:hover {
      background: var(--color-primary);
      color: #fff;
      border-color: var(--color-primary);
      transform: translateY(-3px);
    }

    .footer-social svg {
      width: 18px;
      height: 18px;
    }

    /* ===== LIVE CHAT WIDGET ===== */
    .chat-widget {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 1000;
    }

    .chat-toggle {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--shadow-pink);
      transition: var(--transition);
    }

    .chat-toggle:hover {
      transform: scale(1.1);
      box-shadow: 0 8px 40px rgba(236, 72, 153, 0.5);
    }

    .chat-toggle svg {
      width: 28px;
      height: 28px;
      color: #fff;
    }

    .chat-box {
      position: absolute;
      bottom: 80px;
      right: 0;
      width: 360px;
      max-width: 90vw;
      background: rgba(255, 255, 255, 0.98);
      border-radius: var(--radius);
      box-shadow: var(--shadow-lg);
      border: 1px solid var(--color-border);
      overflow: hidden;
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px);
      transition: var(--transition);
    }

    .chat-box.open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .chat-header {
      background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
      color: #fff;
      padding: 18px 20px;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .chat-avatar {
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .chat-avatar svg {
      width: 22px;
      height: 22px;
    }

    .chat-info h4 {
      font-size: 1rem;
      font-weight: 600;
    }

    .chat-info p {
      font-size: 0.8rem;
      opacity: 0.9;
      color: #fff;
    }

    .chat-close {
      margin-left: auto;
      background: none;
      border: none;
      color: #fff;
      cursor: pointer;
      padding: 4px;
    }

    .chat-close svg {
      width: 20px;
      height: 20px;
    }

    .chat-messages {
      height: 280px;
      overflow-y: auto;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .chat-message {
      max-width: 85%;
      padding: 12px 16px;
      border-radius: 16px;
      font-size: 0.9rem;
      line-height: 1.5;
    }

    .chat-message.bot {
      background: var(--color-accent);
      color: var(--color-text);
      align-self: flex-start;
      border-bottom-left-radius: 4px;
    }

    .chat-message.user {
      background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
      color: #fff;
      align-self: flex-end;
      border-bottom-right-radius: 4px;
    }

    .chat-input-area {
      padding: 16px;
      border-top: 1px solid var(--color-border);
      display: flex;
      gap: 10px;
    }

    .chat-input {
      flex: 1;
      padding: 12px 16px;
      border: 1px solid var(--color-border);
      border-radius: var(--radius-full);
      font-size: 0.9rem;
      outline: none;
      transition: var(--transition);
    }

    .chat-input:focus {
      border-color: var(--color-primary);
    }

    .chat-send {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      transition: var(--transition);
    }

    .chat-send:hover {
      transform: scale(1.1);
    }

    .chat-send svg {
      width: 18px;
      height: 18px;
    }

    /* ===== SCROLL REVEAL ===== */
    .reveal {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.7s ease, transform 0.7s ease;
    }

    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* ===== RESPONSIVE ===== */
    @media (max-width: 900px) {
      .nav-links {
        display: none;
      }
      .mobile-toggle {
        display: block;
      }
      .about-grid {
        grid-template-columns: 1fr;
        gap: 48px;
      }
      .footer-grid {
        grid-template-columns: 1fr 1fr;
      }
      .hero-stats {
        gap: 32px;
      }
      .pricing-card.featured {
        transform: none;
      }
      .pricing-card.featured:hover {
        transform: translateY(-6px);
      }
    }

    @media (max-width: 600px) {
      .footer-grid {
        grid-template-columns: 1fr;
      }
      .footer-bottom {
        flex-direction: column;
        gap: 16px;
      }
      .hero-buttons {
        flex-direction: column;
        align-items: center;
      }
      .hero-stats {
        flex-wrap: wrap;
        gap: 28px;
      }
      .chat-box {
        width: 100%;
        right: -12px;
      }
    }

    /* ===== ACCESSIBILITY ===== */
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
  </style>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <meta property="og:image" content="https://bolt.new/static/og_default.png">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:image" content="https://bolt.new/static/og_default.png">
</head>
<body>
  <div class="video-bg"></div>

  <nav id="navbar">
    <div class="container nav-inner">
      <a href="#" class="logo">
        <span class="logo-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
        </span>
        NeuraForge
      </a>
      <ul class="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button class="mobile-toggle" aria-label="Toggle menu" onclick="toggleMenu()">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>
    </div>
  </nav>

  <section class="hero parallax-section">
    <div class="hero-content">
      <div class="hero-badge">
        <span class="sparkle">&#10024;</span>
        AI That Hits Different
      </div>
      <h1>Your AI Era Starts<br>Right Here, Bestie</h1>
      <p>We build AI that actually works. Like, no cap. From chatbots that get you to ML models that predict the future. Low-key genius stuff.</p>
      <div class="hero-buttons">
        <a href="#contact" class="btn btn-primary">Let's Gooo</a>
        <a href="#pricing" class="btn btn-secondary">Check the Prices</a>
      </div>
      <div class="hero-stats">
        <div class="stat">
          <span class="stat-number" data-target="150">0</span>
          <span class="stat-label">Projects Shipped</span>
        </div>
        <div class="stat">
          <span class="stat-number" data-target="98">0</span>
          <span class="stat-label">Happy Clients %</span>
        </div>
        <div class="stat">
          <span class="stat-number" data-target="12">0</span>
          <span class="stat-label">Countries</span>
        </div>
      </div>
    </div>
  </section>

  <section id="services">
    <div class="container">
      <div class="section-header reveal">
        <h2>What We Build</h2>
        <p>AI solutions that actually deliver. No fluff, no vibes-only approach. Real tech that drives real results.</p>
      </div>
      <div class="services-grid">
        <div class="service-card reveal">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <h3>AI Chatbots</h3>
          <p>Chatbots that actually understand context and don't give robotic responses. Your customers will feel the difference.</p>
        </div>
        <div class="service-card reveal">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4"/>
              <path d="M12 8h.01"/>
            </svg>
          </div>
          <h3>Machine Learning</h3>
          <p>Predictive models, recommendation engines, and classification systems. Turn your data into decisions that matter.</p>
        </div>
        <div class="service-card reveal">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 20h9"/>
              <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
            </svg>
          </div>
          <h3>Custom AI Strategy</h3>
          <p>Not sure what AI can do for you? We'll map it out and show you exactly where the ROI lives. No guesswork.</p>
        </div>
        <div class="service-card reveal">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </div>
          <h3>MLOps & Scaling</h3>
          <p>Keep your models fresh, your costs low, and your infrastructure humming. We handle the boring stuff so you don't have to.</p>
        </div>
        <div class="service-card reveal">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="m9 12 2 2 4-4"/>
            </svg>
          </div>
          <h3>AI Security</h3>
          <p>Bias audits, compliance checks, and ethical guardrails. Make sure your AI plays by the rules.</p>
        </div>
        <div class="service-card reveal">
          <div class="service-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <ellipse cx="12" cy="5" rx="9" ry="3"/>
              <path d="M3 5V19a9 3 0 0 0 18 0V5"/>
              <path d="M3 12a9 3 0 0 0 18 0"/>
            </svg>
          </div>
          <h3>Data Pipelines</h3>
          <p>Clean, reliable data infrastructure. Because garbage in = garbage out, and nobody wants that energy.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="pricing">
    <div class="container">
      <div class="section-header reveal">
        <h2>Simple Pricing</h2>
        <p>No hidden fees, no surprise charges. Pick a plan that vibes with your budget.</p>
      </div>
      <div class="pricing-grid">
        <div class="pricing-card reveal">
          <div class="pricing-name">Starter</div>
          <div class="pricing-desc">Perfect for trying out AI</div>
          <div class="pricing-price">&#8377;25K<span>/project</span></div>
          <ul class="pricing-features">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              1 AI Model Integration
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              Basic Chatbot Setup
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              30 Days Support
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              Documentation
            </li>
          </ul>
          <a href="#contact" class="btn btn-secondary" style="width: 100%;">Get Started</a>
        </div>
        <div class="pricing-card featured reveal">
          <div class="pricing-name">Pro</div>
          <div class="pricing-desc">For serious AI adoption</div>
          <div class="pricing-price">&#8377;75K<span>/project</span></div>
          <ul class="pricing-features">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              3 AI Model Integrations
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              Advanced Chatbot with RAG
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              90 Days Priority Support
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              Training Session
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              Custom Dashboard
            </li>
          </ul>
          <a href="#contact" class="btn btn-primary" style="width: 100%;">Let's Go</a>
        </div>
        <div class="pricing-card reveal">
          <div class="pricing-name">Enterprise</div>
          <div class="pricing-desc">Full-scale AI transformation</div>
          <div class="pricing-price">Custom</div>
          <ul class="pricing-features">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              Unlimited Integrations
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              Custom ML Models
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              1 Year Dedicated Support
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              On-site Deployment
            </li>
          </ul>
          <a href="#contact" class="btn btn-secondary" style="width: 100%;">Talk to Us</a>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="about-section">
    <div class="container">
      <div class="about-grid">
        <div class="about-visual reveal">
          <img src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800" alt="AI workspace" class="about-image">
        </div>
        <div class="about-content reveal">
          <h2>Built by People Who Get It</h2>
          <p>We started NeuraForge because we were tired of seeing companies get burned by overhyped AI projects that went nowhere. We're here to change that narrative.</p>
          <p>Our team has shipped real products, made real mistakes, and learned what actually works. We don't do buzzwords for the sake of it. We deliver results that move your business forward.</p>
          <div class="about-features">
            <div class="about-feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              <span>Production-ready code, not just prototypes</span>
            </div>
            <div class="about-feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              <span>Clear timelines, transparent pricing</span>
            </div>
            <div class="about-feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              <span>You own everything we build for you</span>
            </div>
            <div class="about-feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              <span>Bangalore-based, globally available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer id="contact" class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand reveal">
          <a href="#" class="logo">
            <span class="logo-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </span>
            NeuraForge
          </a>
          <p>Making AI accessible and actually useful for businesses across India and beyond. Let's build something great together.</p>
        </div>
        <div class="footer-links reveal">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">AI Chatbots</a></li>
            <li><a href="#services">Machine Learning</a></li>
            <li><a href="#services">Custom Strategy</a></li>
            <li><a href="#services">MLOps</a></li>
          </ul>
        </div>
        <div class="footer-links reveal">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Case Studies</a></li>
          </ul>
        </div>
        <div class="footer-links reveal">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:yellowpinklovies2105@gmail.com">yellowpinklovies2105@gmail.com</a></li>
            <li><a href="tel:+919152963609">+91 9152963609</a></li>
            <li><a href="#">Bangalore, India</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 NeuraForge. Made with love in India.</p>
        <div class="footer-social">
          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="#" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="#" aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Live Chat Widget -->
  <div class="chat-widget">
    <div class="chat-box" id="chatBox">
      <div class="chat-header">
        <div class="chat-avatar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
        <div class="chat-info">
          <h4>NeuraForge Support</h4>
          <p>Usually replies instantly</p>
        </div>
        <button class="chat-close" onclick="toggleChat()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
        </button>
      </div>
      <div class="chat-messages" id="chatMessages">
        <div class="chat-message bot">Hey there! 👋 Welcome to NeuraForge. How can we help you today?</div>
      </div>
      <div class="chat-input-area">
        <input type="text" class="chat-input" id="chatInput" placeholder="Type a message..." onkeypress="handleKeyPress(event)">
        <button class="chat-send" onclick="sendMessage()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"/>
            <polygon points="11 19 22 2 13 2 11 19"/>
          </svg>
        </button>
      </div>
    </div>
    <button class="chat-toggle" onclick="toggleChat()" aria-label="Open chat">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    </button>
  </div>

  <script>
    // ===== NAVBAR SCROLL =====
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ===== PARALLAX EFFECT =====
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-section');
      parallaxElements.forEach(el => {
        const speed = 0.1;
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    });

    // ===== SCROLL REVEAL =====
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 100);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    revealElements.forEach(el => observer.observe(el));

    // ===== STAT COUNTER =====
    const statNumbers = document.querySelectorAll('.stat-number');
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.dataset.target);
          const duration = 1500;
          const start = performance.now();
          function tick(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            entry.target.textContent = Math.floor(ease * target) + (target === 98 ? '%' : '+');
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          countObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    statNumbers.forEach(el => countObserver.observe(el));

    // ===== MOBILE MENU =====
    function toggleMenu() {
      const nav = document.querySelector('.nav-links');
      const isOpen = nav.style.display === 'flex';
      nav.style.display = isOpen ? 'none' : 'flex';
      if (!isOpen) {
        nav.style.position = 'absolute';
        nav.style.top = '60px';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.flexDirection = 'column';
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.backdropFilter = 'blur(20px)';
        nav.style.padding = '24px';
        nav.style.borderBottom = '1px solid var(--color-border)';
        nav.style.gap = '16px';
        nav.style.borderRadius = '0 0 var(--radius) var(--radius)';
      }
    }

    // ===== LIVE CHAT WIDGET =====
    let chatOpen = false;
    const chatBox = document.getElementById('chatBox');
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');

    function toggleChat() {
      chatOpen = !chatOpen;
      chatBox.classList.toggle('open', chatOpen);
      if (chatOpen) {
        chatInput.focus();
      }
    }

    function addMessage(text, isUser) {
      const msg = document.createElement('div');
      msg.className = `chat-message ${isUser ? 'user' : 'bot'}`;
      msg.textContent = text;
      chatMessages.appendChild(msg);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getBotResponse(message) {
      const lower = message.toLowerCase();
      if (lower.includes('price') || lower.includes('cost') || lower.includes('pricing')) {
        return "Great question! Our pricing starts at Rs.25K for starter projects. Check out the pricing section above or drop us an email at yellowpinklovies2105@gmail.com for a custom quote!";
      }
      if (lower.includes('contact') || lower.includes('reach') || lower.includes('call')) {
        return "You can reach us at +91 9152963609 or email us at yellowpinklovies2105@gmail.com. We typically respond within a few hours!";
      }
      if (lower.includes('service') || lower.includes('what do you')) {
        return "We build AI chatbots, machine learning models, and custom AI solutions for businesses. Everything from strategy to deployment. What are you looking for?";
      }
      if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
        return "Hey! So glad you're here. What brings you to NeuraForge today? Looking to add some AI magic to your business?";
      }
      return "Thanks for reaching out! For detailed queries, you can email us at yellowpinklovies2105@gmail.com or call +91 9152963609. Is there anything specific I can help you with?";
    }

    function sendMessage() {
      const message = chatInput.value.trim();
      if (!message) return;
      addMessage(message, true);
      chatInput.value = '';
      setTimeout(() => {
        addMessage(getBotResponse(message), false);
      }, 800);
    }

    function handleKeyPress(e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    }
  </script>
</body>
</html>
