<template>
    <div class="section-divider">
        <div class="divider-line"></div>
        <div class="divider-dot"></div>
        <div class="divider-line"></div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.section-divider {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0; 
    background-color: #ffffff; 
}


.divider-line {
    flex: 1;
    max-width: 800px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #e0e0e0);
}

.section-divider .divider-line:last-child {
    background: linear-gradient(90deg, #e0e0e0, transparent);
}


.divider-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: linear-gradient(135deg, #d4af37 0%, #aa771c 100%);
    margin: 0 1rem;
    box-shadow: 0 0 8px rgba(212, 175, 55, 0.4);
}
</style>