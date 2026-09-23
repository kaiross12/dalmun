<template>
    <section class="faq-section" id="faq">
        <div class="faq-container">
            <div class="faq-header">
                <h2 class="title">Frequently Asked <span class="highlight">Questions</span></h2>
                <div class="title-divider"></div>
            </div>

            <div class="faq-list">
                <div 
                    v-for="(faq, index) in faqs" 
                    :key="index" 
                    class="faq-item"
                    :class="{ 'active': activeIndex === index }"
                    @click="toggleFaq(index)"
                >
                    <div class="faq-question">
                        <h3>{{ faq.question }}</h3>
                        <div class="icon-wrapper">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                    </div>
                    
                    <div class="faq-answer-wrapper">
                        <div class="faq-answer">
                            <p>{{ faq.answer }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(null)

const toggleFaq = (index) => {
    
    activeIndex.value = activeIndex.value === index ? null : index
}


const faqs = ref([
    {
        question: "Who can participate in the event?",
        answer: "The event is open to high school students."
    },
    {
        question: "Is there a registration fee?",
        answer: "No, participation in the event is completely free of charge."
    },
    {
        question: "Which MUN procedure is followed during the event?",
        answer: "The Harvard MUN procedure will be followed throughout the event."
    },
    {
        question: "Will a certificate be provided?",
        answer: "Yes, participants who attend all sessions except for a maximum of 2 sessions will receive a certificate of participation. Participants who are late for 2 sessions will not be eligible to receive a certificate."
    },
    {
        question: "Is there a dress code?",
        answer: "Yes, a formal dress code (Western Business Attire) is mandatory throughout the event. Casual attire can be worn during social events."
    }
])
</script>

<style scoped>

.faq-section {
    background-color: #ffffff;
    padding: 2rem 2rem 6rem 2rem;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
}

.faq-container {
    max-width: 800px;
    width: 100%;
}


.faq-header {
    text-align: center;
    margin-bottom: 3.5rem;
}

.title {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #1a1a1a;
}


.title-divider {
    height: 3px;
    width: 200px;
    background: linear-gradient(135deg, #d4af37 0%, #aa771c 100%);
    margin: 0 auto;
    border-radius: 2px;
}


.faq-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.faq-item {
    background-color: #ffffff;
    border: 1px solid #f0f0f0;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    
}

.faq-item:hover {
    border-color: #e8e8e8;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
}


.faq-item.active {
    
    border-left: 3px solid #d4af37;
    border-color: #e8e8e8;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
}

.faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
}

.faq-question h3 {
    margin: 0;
    font-size: 1.05rem;
    font-weight: 500;
    color: #333333;
    transition: color 0.3s ease;
}

.faq-item.active .faq-question h3 {
    color: #1a1a1a;
    font-weight: 600;
}


.icon-wrapper {
    width: 24px;
    height: 24px;
    color: #cccccc;
    transition: all 0.3s ease;
}

.icon-wrapper svg {
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
}


.faq-item.active .icon-wrapper {
    color: #d4af37;
}

.faq-item.active .icon-wrapper svg {
    transform: rotate(180deg);
}

.faq-answer-wrapper {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s ease;
}

.faq-item.active .faq-answer-wrapper {
    grid-template-rows: 1fr;
}

.faq-answer {
    overflow: hidden;
}

.faq-answer p {
    margin: 0;
    padding: 0 1.5rem 1.5rem 1.5rem;
    color: #666666;
    font-size: 0.95rem;
    line-height: 1.6;
}


@media (max-width: 768px) {
    .faq-section {
        padding: 1rem 1.5rem;
    }
    .title {
        font-size: 1.8rem;
    }
    .faq-question h3 {
        font-size: 0.95rem;
    }
}
</style>