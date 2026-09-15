<template>
    <div class="card-container">
        <div class="card-top">
            <h1 class="title">{{ title }}</h1>
            
            <div class="description-wrapper">
                <div class="description-content" :class="{ expanded: isExpanded }">
                    <p class="description">{{ description }}</p>
                </div>
                <button class="toggle-btn" @click="isExpanded = !isExpanded">
                    {{ isExpanded ? 'Read Less' : 'Read More' }}
                </button>
            </div>
        </div>

        <div class="card-bottom">
            <div class="user">
                <img :src="image1" alt="" class="userImage">
                <div class="user-info">
                    <p class="user-name">{{ user1 }}</p>
                    <p class="user-role">{{ user1Role }}</p>
                </div>
            </div>

            <div class="user">
                <img :src="image2" alt="" class="userImage">
                <div class="user-info">
                    <p class="user-name">{{ user2 }}</p>
                    <p class="user-role">{{ user2Role }}</p>
                </div>
            </div>

            <div class="user">
                <img :src="image3" alt="" class="userImage">
                <div class="user-info">
                    <p class="user-name">{{ user3 }}</p>
                    <p class="user-role">{{ user3Role }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    title: String,
    description: String,
    image1: String,
    image2: String,
    image3: String,
    user1: String,
    user1Role: String,
    user2: String,
    user2Role: String,
    user3: String,
    user3Role: String
})

const isExpanded = ref(false)
</script>

<style scoped>
.card-container {
    width: 100%;
    max-width: 380px;
    min-height: 380px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    box-sizing: border-box;
    border: 1px solid #f2f2f2;
    border-radius: 15px;
    padding: 2.5rem;
    font-family: 'Poppins', sans-serif;
    gap: 40px;
}

.card-top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.description-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.description-content {
    max-height: 75px;
    overflow: hidden;
    transition: max-height 0.4s ease;
    width: 100%;
}

.description-content:not(.expanded) {
    -webkit-mask-image: linear-gradient(180deg, #000 30%, transparent 100%);
    mask-image: linear-gradient(180deg, #000 30%, transparent 100%);
}

.description-content.expanded {
    max-height: 500px;
    -webkit-mask-image: none;
    mask-image: none;
}

.toggle-btn {
    background: transparent;
    border: none;
    color: #a8a8a8;
    font-size: 13px;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    margin-top: 8px;
    padding: 4px 8px;
    transition: color 0.2s ease;
}

.toggle-btn:hover {
    color: #555;
}

.card-bottom {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 15px;
}

.user {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
}

.userImage {
    width: 40px;
    height: 40px;
    min-width: 40px;
    border-radius: 9999px;
    object-fit: cover;
}

.user-info {
    min-width: 0;
}

.user-info p {
    margin: 0;
    padding: 0;
}

.user-name {
    font-size: 14px;
    font-weight: 500;
    font-family: 'Camood', sans-serif;
    letter-spacing: 1px;
}

.user-role {
    font-size: 12px;
    font-weight: 400;
    color: #a8a8a8;
}

.title {
    font-size: clamp(36px, 5vw, 50px);
    font-weight: 500;
    margin: 0 0 10px 0;
    font-family: 'Camood', sans-serif;
}

.description {
    font-size: 14px;
    line-height: 1.6;
    margin: 0;
    font-weight: 300;
    overflow-wrap: break-word;
}
</style>