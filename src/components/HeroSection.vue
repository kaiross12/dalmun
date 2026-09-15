<template>
    <div class="hero-section-container">
        
        <div class="video-container">
            <video autoplay loop muted playsinline class="video">
                <source src="/text.webm" type="video/webm">
            </video>
        </div>
        <div class="divider-container">
            <hr class="divider">
        </div>

        <p class="description">
            DALMUN brings together passionate delegates to debate today’s most pressing global issues across SOCHUM, DISEC, UNODC, and WHO. Step into diplomacy, challenge perspectives, build solutions, and make your voice heard.
        </p>
        <button class="learn-more-btn" @click.prevent="scrollToRegistration">
            Register Now
        </button>

        <div class="event-footer">
            <div class="footer-left">
                <div class="footer-title-row">
                    <h4 class="event-name">DalMUN'26</h4>
                </div>
                <div class="left-bottom">
                    <p class="event-date">24-25 Ekim 2026</p>
                <div class="location-wrapper">
                    <svg class="tabler-pin-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.243 -4.243a8 8 0 1 1 11.314 0z" />
                    </svg>
                    <a class="event-location" href="https://maps.app.goo.gl/bCZcA9E9jQvkagjq5">Kırklareli / Türkiye</a>
                </div>
                </div>
            </div>

            <div class="footer-center">
                <p class="committee-list">Sochum, UNODC, DISEC, WHO</p>
            </div>

            <div class="footer-right">
                <div class="logo-placeholder">Sponsors</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import '@fontsource/poppins/300.css'; 
import '@fontsource/poppins/400.css'; 
import '@fontsource/poppins/500.css'; 
import '@fontsource/poppins/700.css'; 

const scrollToRegistration = () => {
    const el = document.getElementById('registration');
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top, behavior: "smooth" });
};
</script>

<style scoped>
@import url('https://googleapis.com'); 


.learn-more-btn {
    margin-top: 1.5rem;
    padding: 0.8rem 1.6rem;

    border-radius: 999px;
    border: none;

    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    transform: translateZ(0);
    will-change: backdrop-filter;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;

    color: white;
    font-size: 0.9rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;

    cursor: pointer;

    box-shadow:
        0 8px 32px rgba(0, 0, 0, 0.15),
        inset 0 1px 1px rgba(255, 255, 255, 0.2);

    transition: all 0.3s ease;
}

.learn-more-btn:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);

    transform: translateY(-2px);

    box-shadow:
        0 12px 35px rgba(0, 0, 0, 0.2),
        inset 0 1px 1px rgba(255, 255, 255, 0.3);
}

.learn-more-btn:active {
    transform: translateY(0);
}
.video-container {
    width: 100%;
    max-width: 800px;
    height: auto;
    aspect-ratio: 800 / 180;
    overflow: hidden;
    position: relative;
    background: transparent;
    border: none;
    outline: none;
}

.video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border: none;
    outline: none;
}

.description{
    color: #ffffff;
    text-align: center;
    width: 100%;
    max-width: 600px;
    font-size: 1.2rem ;
    padding: 0 1rem;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
}

.left-bottom{
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
}

.hero-section-container {
    width: 100%;
    min-height: 100vh;

    background-image: url("/background.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    overflow: hidden;
    position: relative; 
}

.event-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    background-color: rgb(255, 255, 255);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    transform: translateZ(0);
    will-change: backdrop-filter;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    
    padding: 1rem 3rem;
    box-sizing: border-box;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    color: rgb(80, 80, 80);
    font-family: 'Poppins', sans-serif;
    border-bottom: 1px solid rgb(226, 226, 226);
}

.footer-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.15rem;
}


.footer-title-row {
    display: flex;
    align-items: center;
    gap: 1rem;
}


.location-wrapper {
    display: flex;
    align-items: center;
    gap: 0.3rem;
}

.tabler-pin-icon {
    color: #888888;
}

.footer-center {
    flex: 1;
    display: flex;
    justify-content: center;
    text-align: center;
}

.footer-right {
    flex: 1;
    display: flex;
    gap: 1.5rem;
    align-items: center;
    justify-content: flex-end; 
}

.event-name, .committee-title {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    font-family: 'Poppins', sans-serif;
}

.event-date, .committee-list, .event-location {
    margin: 0;
    font-size: 0.9rem;
    color: #636363;
}

.event-location {
    font-size: 0.85rem;
    color: #888888;
    cursor: pointer;
}

.logo-placeholder {
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 1px;
}

@media (max-width: 768px) {
    .event-footer {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
    }
    .footer-left, .footer-center, .footer-right {
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .footer-title-row {
        flex-direction: column;
        gap: 0.2rem;
    }
    .footer-right {
        flex-wrap: wrap;
    }
}
</style>