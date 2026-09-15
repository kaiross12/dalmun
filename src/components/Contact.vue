<template>
    <section class="contact-section" id="contact">
        <div class="contact-container">
            
            <div class="contact-header">
                <h2 class="title">Contact</h2>
                
                <div class="title-divider"></div>
                <p class="subtitle">
                    You can contact our management and coordination team directly for your questions and collaborations.
                </p>
            </div>

            
            <div class="team-grid">
                
                <div class="team-card">
                    <div class="card-content">
                        <h3 class="member-name">DALMUN'26</h3>
                        <p class="member-role">The Secretariat</p>
                        
                        <div class="contact-links">
                            <a href="mailto:y46378743@gmail.com" class="contact-link">
                                
                                <IconMail />
                                dalmodelunitednations@gmail.com
                            </a>
                            <a href="https://www.instagram.com/dalmun26/" class="contact-link">
                                <IconBrandInstagram />
                                @dalmun26
                            </a>
                            <a href="https://www.tiktok.com/@dalmodelunitednations" class="contact-link">
                                <IconBrandTiktok />
                                @dalmodelunitednations
                            </a>
                        </div>
                    </div>
                    
                    <div class="card-bottom-line"></div>
                </div>
                <div class="team-card">
                    <div class="card-content">
                        <h3 class="member-name">Yasin Kaya</h3>
                        <p class="member-role">Director General</p>
                        
                        <div class="contact-links">
                            <a href="mailto:y46378743@gmail.com" class="contact-link">
                                
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                y46378743@gmail.com
                            </a>
                            <a href="tel:+905421357547" class="contact-link">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                +90 542 135 75 47
                            </a>
                        </div>
                    </div>
                    
                    <div class="card-bottom-line"></div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { IconBrandInstagram } from '@tabler/icons-vue';
import { IconBrandTiktok } from '@tabler/icons-vue';
import { IconMail } from '@tabler/icons-vue';
</script>

<style scoped>

.contact-section {
    background-color: #ffffff; 
    color: #333333;
    padding: 2rem 2rem 6rem 2rem;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
}

.contact-container {
    max-width: 1000px;
    width: 100%;
}


.contact-header {
    text-align: center;
    margin-bottom: 4rem;
}

.title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.2rem;
    color: #1a1a1a;
}


.title-divider {
    height: 3px;
    width: 130px;
    background: linear-gradient(135deg, #d4af37 0%, #aa771c 100%);
    margin: 0 auto 1.5rem auto;
    border-radius: 2px;
}

.subtitle {
    font-size: 1rem;
    color: #666666;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}


.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}


.team-card {
    background-color: #ffffff;
    border: 1px solid #f0f0f0;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
}

.team-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
    border-color: #e8e8e8;
}

.card-content {
    padding: 2rem;
    flex-grow: 1;
}

.member-name {
    margin: 0 0 0.2rem 0;
    font-size: 1.25rem;
    font-weight: 600;
    color: #1a1a1a;
}

.member-role {
    margin: 0 0 1.5rem 0;
    font-size: 0.9rem;
    color: #888888;
    font-weight: 500;
}


.contact-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-link {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: #444444;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.2s ease;
}

.contact-link svg {
    color: #cccccc; 
    transition: color 0.2s ease;
}


.contact-link:hover {
    color: #aa771c; 
}

.contact-link:hover svg {
    color: #d4af37; 
}


.card-bottom-line {
    height: 3px;
    width: 100%;
    background: #f5f5f5; 
    transition: background 0.3s ease;
}

.team-card:hover .card-bottom-line {
    
    background: linear-gradient(90deg, #d4af37 0%, #aa771c 100%);
}


@media (max-width: 768px) {
    .contact-section {
        padding: 1rem 1.5rem;
    }
    .title {
        font-size: 2rem;
    }
    .team-grid {
        grid-template-columns: 1fr; 
    }
}
</style>