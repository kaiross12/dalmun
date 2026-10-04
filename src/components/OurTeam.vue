<template>
    <div id="our-team">
        <h2 class="section-title">OUR TEAM</h2>
        
        <!-- Üst Kısım: 1:1 Oranlı Fotoğraflar -->
        <div class="team-grid top-team">
            <div class="team-member" v-for="(member, index) in topTeamMembers" :key="'top-'+index">
                <div class="member-image-wrapper top-image-wrapper">
                    <img :src="member.image" :alt="member.name" class="member-image top-image">
                </div>
                <h3 class="member-name">{{ member.name }}</h3>
            </div>
        </div>

        <div class="divider"></div>

        <!-- Alt Kısım: Orijinal Oranlı Fotoğraflar -->
        <div class="team-grid bottom-team">
            <div class="team-member" v-for="(member, index) in bottomTeamMembers" :key="'bottom-'+index">
                <div class="member-image-wrapper">
                    <img :src="member.image" :alt="member.name" class="member-image bottom-image">
                </div>
                <h3 class="member-name">{{ member.name }}</h3>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// Üst kısımdaki (1:1 kırpılacak) üyeler
const topTeamMembers = ref([
    { name: 'Advisor Teacher', image: './our-team/advisor.jpeg' },
    { name: 'Director General', image: './our-team/director.jpeg' },
    { name: 'Secretary General', image: './our-team/secretary-general.jpeg' },
    { name: 'Head of IT', image: './our-team/head-of-it.jpeg' },
    { name: 'Head of PR', image: './our-team/head-of-pr.jpeg' },
    { name: 'Head of Crisis', image: './our-team/head-of-crisis.jpeg' },
    { name: 'Head of Finance', image: './our-team/head-of-finance.jpeg' },
    { name: 'Deputy General', image: './our-team/deputy-general.jpeg' },
    { name: 'Head of Security & Deputy Head of Crisis', image: './our-team/head-of-sec.jpeg' },
    { name: 'Head of Entertainment', image: './our-team/head-of-ent.jpeg' },
    { name: 'Co-Head of Press', image: './our-team/co-head-press.jpeg' },
    { name: 'Co-Head of Press', image: './our-team/co-head-press2.jpeg' },
    { name: 'Head of Academy', image: './our-team/head-of-academy.jpeg' },
    { name: 'Chair of DISEC', image: './our-team/chair-of-disec.jpeg' }
    
    
    
])

// Alt kısımdaki (orijinal ratio kalacak) üyeler
const bottomTeamMembers = ref([
    { name: 'Entertainment Team', image: './our-team/ent-team.jpeg' },
    { name: 'Admin/Logistic Team', image: './our-team/admin-logistic-team.jpeg' },
    { name: 'Media Team', image: './our-team/media-team.jpeg' },
    { name: 'PR Team', image: './our-team/pr-team.jpeg' },
    { name: 'Press Team', image: './our-team/press-team.jpeg' },
    { name: 'Crisis Team', image: './our-team/crisis-team.jpeg' }
])
</script>

<style scoped>
#our-team {
    width: 100%;
    padding: 5rem 6rem;
    box-sizing: border-box;
    background: transparent;
}

.section-title {
    font-size: clamp(36px, 5vw, 50px);
    font-weight: 500;
    text-align: center;
    margin: 0 0 4rem 0;
    font-family: 'Camood', sans-serif;
    color: #1a1a1a;
}

.divider {
    height: 1px;
    background: #e0e0e0;
    width: 60%;
    margin: 4rem auto;
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 3rem 2rem;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    align-items: start; /* Yazı uzunsa fotoğrafı yukarı itmemesi için start kullanıldı */
}

.bottom-team {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.bottom-team .team-member {
    flex: 0 1 200px; /* Alt kısımdaki kartları daha büyük ve ortalı yapar */
}

.team-member {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
}

.team-member:hover {
    transform: translateY(-5px);
}

.member-image-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.2rem;
}

/* Üst Kısım 1:1 Fotoğraf Stili */
.top-image-wrapper {
    aspect-ratio: 1 / 1;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.top-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Alt Kısım Orijinal Ratio Fotoğraf Stili */
.bottom-image {
    width: 100%;
    height: auto;
    max-height: 350px; /* Fotoğrafların daha büyük görünmesi için sınır artırıldı */
    object-fit: contain;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.member-name {
    font-size: 16px;
    font-weight: 500;
    font-family: 'Camood', sans-serif;
    letter-spacing: 0.5px;
    margin: 0;
    text-align: center;
    color: #333;
}

@media (max-width: 800px) {
    #our-team {
        padding: 3rem 1.5rem;
    }
    .team-grid {
        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
        gap: 2rem 1.5rem;
    }
}

@media (max-width: 400px) {
    #our-team {
        padding: 2rem 1rem;
    }
    .team-grid {
        grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
    }
}
</style>
