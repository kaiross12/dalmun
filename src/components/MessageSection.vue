<template>
  <section class="message-section">
    <div class="container">
      <!-- <div class="header-wrapper">
        <h2 class="section-title">Message from the Secretary-General</h2>
        <div class="title-divider"></div>
      </div> -->

      <div class="message-card">
        <div class="quote-badge">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="quote-icon">
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5 3.871 3.871 0 0 1-2.748-1.179z"/>
          </svg>
        </div>

        <div class="message-content">
          <p class="paragraph highlight-lead">
            It is an absolute honor and privilege to welcome you to the official website of
            <span class="brand-text">DALMUN 2026</span> as the Secretary-General of this year’s conference.
          </p>

          <p class="paragraph">
            In a rapidly changing world, international challenges require dialogue, understanding, and innovative solutions.
          </p>

          <p class="paragraph">
            DALMUN 2026 aims to provide a platform where young minds can engage in meaningful debate, develop diplomatic skills, and approach global issues from the perspective of future leaders. Our goal is not only to challenge your debating and negotiation skills, but also to inspire cooperation and bridge differences through diplomacy.
          </p>

          <p class="paragraph">
            On behalf of the Team, welcome to DALMUN 2026. We look forward to an inspiring and unforgettable conference together.
          </p>

          <div class="signature-block">
            <div class="signature-line"></div>
            <h3 class="author-title">Ezgi Işık</h3>
            <span class="author-subtitle">DALMUN 2026 Secretary-General</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.message-section {
  width: 100%;
  padding: 60px 20px;
  background-color: #ffffff;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header-wrapper {
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-title {
  font-family: 'Camood', sans-serif;
  font-size: clamp(1.8rem, 4.5vw, 2.4rem);
  font-weight: 400;
  color: #1a1a1a;
  margin: 0 0 0.75rem 0;
  letter-spacing: -0.02em;
}

.title-divider {
  height: 3px;
  width: 140px;
  background: linear-gradient(135deg, #d4af37 0%, #aa771c 100%);
  margin: 0 auto;
  border-radius: 2px;
}

.message-card {
  position: relative;
  width: 100%;
  background: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 16px;
  padding: 48px 40px 40px 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  box-sizing: border-box;
}

.quote-badge {
  position: absolute;
  top: -20px;
  left: 40px;
  width: 44px;
  height: 44px;
  background: #d4af37;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quote-icon {
  width: 22px;
  height: 22px;
  fill: #ffffff;
}

.message-content {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.paragraph {
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  line-height: 1.5;
  color: #4a4a4a;
  margin: 0;
  text-align: justify;
}

.highlight-lead {
  font-size: clamp(1.05rem, 2.2vw, 1.15rem);
  color: #2c2c2c;
  font-weight: 450;
}

.brand-text {
  color: #aa771c;
  font-weight: 700;
}

.signature-block {
  margin-top: 15px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
}

.signature-line {
  width: 60px;
  height: 2px;
  background-color: #d4af37;
  margin-bottom: 12px;
}

.author-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 4px 0;
}

.author-subtitle {
  font-size: 0.85rem;
  color: #777777;
  font-weight: 400;
}

@media (max-width: 600px) {
  .message-section {
    padding: 40px 20px;
  }

  .message-card {
    padding: 36px 20px 28px 20px;
    border-radius: 12px;
  }

  .quote-badge {
    left: 20px;
    top: -18px;
    width: 36px;
    height: 36px;
  }

  .quote-icon {
    width: 18px;
    height: 18px;
  }

  .paragraph {
    text-align: left;
  }

  .signature-block {
    align-items: flex-start;
    text-align: left;
  }
}
</style>