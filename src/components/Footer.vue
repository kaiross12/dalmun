<template>
    <footer class="site-footer">
        
        <div class="footer-wave">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,21.3C1200,21,1320,43,1380,53.3L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z" fill="#111111"></path>
            </svg>
        </div>

        <div class="footer-content">
            <div class="footer-container">
                
                <div class="footer-grid">
                    <div class="footer-brand">
                        <h3>DalMUN'26</h3>
                        <p>Official Web Site of Düvenciler Anatolian High School Model United Nations</p>
                        
                        <div class="social-links">
                            <a href="https://www.instagram.com/dalmun26/" class="social-icon"><IconBrandInstagram/></a>
                            <a href="https://www.tiktok.com/@dalmodelunitednations" class="social-icon"><IconBrandTiktok/></a>
                        </div>
                        <div class="map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47892.980193070965!2d27.327515274903483!3d41.38904624249174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b4a4acf2ff28cb%3A0x75f38bfeff122e9a!2sD%C3%BCvenciler%20Anadolu%20Lisesi!5e0!3m2!1str!2str!4v1789239577295!5m2!1str!2str" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                        </div>
                    </div>

                    <div class="footer-links-col">
                        <h4>Navigation</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Comittes</a></li>
                            <li><a href="#">Academic Staff</a></li>
                            <li><a href="#">Register</a></li>
                        </ul>
                    </div>

                    <div class="footer-links-col">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">KVKK</a></li>
                        </ul>
                    </div>
                </div>

                
                <div class="footer-divider"></div>

                
                <div class="footer-bottom">
                    <p>&copy; 2026 DalMUN. Tüm hakları saklıdır.</p>
                    <p class="developer-credit"><img src="/axonode.png"></p>
                </div>
            </div>
        </div>
    </footer>
</template>
<script setup>
import { IconBrandInstagram } from '@tabler/icons-vue';
import { IconBrandTiktok } from '@tabler/icons-vue';
import { IconMail } from '@tabler/icons-vue';
</script>

<style scoped>
.site-footer {
    background-color: #111111; 
    color: #ffffff;
    font-family: 'Poppins', sans-serif;
    position: relative;
    width: 100%;
}


.footer-wave {
    width: 100%;
    overflow: hidden;
    line-height: 0;
    
    background-color: transparent; 
}

.footer-wave svg {
    display: block;
    width: 100%;
    height: 50px;
}

.footer-content {
    padding: 2rem 2rem 3rem 2rem;
    display: flex;
    justify-content: center;
}

.footer-container {
    max-width: 1100px;
    width: 100%;
}


.footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 3rem;
    margin-bottom: 2rem;
}

.footer-brand h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 0.8rem 0;
    color: #ffffff;
}

.footer-brand p {
    color: #888888;
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0 0 1.5rem 0;
    max-width: 350px;
}


.social-links {
    display: flex;
    gap: 0.8rem;
}

.social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 6px;
    background-color: #1a1a1a;
    color: #aaaaaa;
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 600;
    border: 1px solid #222222;
    transition: all 0.3s ease;
}


.social-icon:hover {
    background-color: #222222;
    color: #d4af37;
    border-color: #d4af37;
}

.footer-links-col h4 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 1rem 0;
    color: #ffffff;
}

.footer-links-col ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
}

.map-container{
    width: 100%;
    max-width: 500px;
    height: 300px;
    margin-top: 1rem;
    border-radius: 12px;
    overflow: hidden;
}

.footer-links-col a {
    color: #888888;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.2s ease;
}

.footer-links-col a:hover {
    color: #d4af37; 
}


.footer-divider {
    height: 1px;
    width: 100%;
    background: linear-gradient(90deg, transparent, #333333, transparent);
    margin: 2rem 0;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #777777;
    font-size: 0.85rem;
}

.developer-credit {
    color: #555555;
    width: 200px;
    height: auto;
}

.developer-credit img{
    width: 100%;
    height: auto;
}


@media (max-width: 768px) {
    .footer-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    .footer-bottom {
        flex-direction: column;
        gap: 0.5rem;
        text-align: center;
    }
}
</style>