<template>
    <section class="gallery-section" id="gallery">
        <div class="gallery-container">
            
            <div class="gallery-header">
                <h2 class="title">Event <span class="highlight">Gallery</span></h2>
                <div class="title-divider"></div>
                <p class="subtitle">Some moments from our event, captured by our cameras.</p>
            </div>

            
            <div class="gallery-wrapper">
                
                <div class="gallery-grid">
<div class="gallery-item item-large">
    <img src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80"
         alt="Galeri Görsel 1" />
</div>

<div class="gallery-item">
    <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"
         alt="Galeri Görsel 2" />
</div>

<div class="gallery-item">
    <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80"
         alt="Galeri Görsel 3" />
</div>

<div class="gallery-item item-tall">
    <img src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=80"
         alt="Galeri Görsel 4" />
</div>

<div class="gallery-item">
    <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80"
         alt="Galeri Görsel 5" />
</div>

<div class="gallery-item item-wide">
    <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
         alt="Galeri Görsel 6" />
</div>
                </div>

                <div class="gallery-overlay">
                    <div class="drive-cta-card">
                        <div class="drive-icon-wrapper">
                            <img src="/drive.webp" alt="Drive" class="drive-icon" />
                        </div>
                        <h3>Check out the full archive</h3>
                        <p>You can access all high-resolution photos taken during the event from our Google Drive folder.</p>
                        <a href="https://drive.google.com" target="_blank" class="drive-btn">
                            Check out the full archive
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { IconBrandGoogleDrive } from '@tabler/icons-vue';

</script>

<style scoped>
.gallery-section {
    background-color: #ffffff;
    padding: 6rem 2rem;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
}

.gallery-container {
    max-width: 1100px;
    width: 100%;
}

.gallery-header {
    text-align: center;
    margin-bottom: 3.5rem;
}

.title {
    font-size: 2.5rem;
    font-weight: 700;
    margin:0;
    padding:0;
    color: #1a1a1a;
}

.title-divider {
    height: 3px;
    width: 160px;
    background: linear-gradient(135deg, #d4af37 0%, #aa771c 100%);
    margin: 0 auto 1rem auto;
    border-radius: 2px;
}

.subtitle {
    font-size: 1rem;
    color: #666666;
}

.gallery-wrapper {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 180px;
    gap: 1rem;
    padding: 1rem;
    background-color: #fafafa;
}

.gallery-item {
    border-radius: 12px;
    overflow: hidden;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.9);
}


.item-large {
    grid-column: span 2;
    grid-row: span 2;
}

.item-tall {
    grid-row: span 2;
}

.item-wide {
    grid-column: span 2;
}


.gallery-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    background: rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    transform: translateZ(0);
}


.drive-cta-card {
    background: #ffffff;
    padding: 2.5rem 3rem;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
    max-width: 420px;
    width: 90%;
    border: 1px solid rgba(212, 175, 55, 0.2); 
}

.drive-icon {
    width: 40px;
    height: 35px;
    color: #d4af37;
}

.drive-icon-wrapper {
    margin-bottom: 1rem;
    display: inline-flex;
    padding: 12px;
    background: #f8f9fa;
    border-radius: 50%;
    box-shadow: 0 4px 10px rgba(0,0,0,0.03);
}

.drive-cta-card h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.3rem;
    font-weight: 600;
    color: #1a1a1a;
}

.drive-cta-card p {
    margin: 0 0 1.5rem 0;
    font-size: 0.9rem;
    color: #666666;
    line-height: 1.5;
}


.drive-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.8rem 1.6rem;
    border-radius: 999px;
    background: #d4af37 ;
    color: #ffffff;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    transition: all 0.3s ease;
}

.drive-btn:hover {
    transform: translateY(-2px);
}


@media (max-width: 768px) {
    .gallery-section{
        padding: 1rem 1.5rem;
    }
    .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 140px;
    }
    .item-large, .item-wide {
        grid-column: span 2;
    }
    .drive-cta-card {
        padding: 1.5rem;
    }
    .title {
        font-size: 2rem;
    }
    .drive-btn{
        font-size: 0.7rem;
    }
}
</style>