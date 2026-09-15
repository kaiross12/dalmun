<template>
    <div id="about">
        <div class="cards-container">
            <Card
            :title="'WHO'"
            :description="'In this committee, delegates will discuss the growing global mental health crisis, focusing on barriers to accessible mental healthcare, the impact of stigma and discrimination, the mental health of children and young people, and the need for stronger international cooperation.'"
            :image1="'./profiles/asyauysal.png'"
            :image2="'./profiles/adarege.png'"
            :image3="'./profiles/iremcelik.png'"
            :user1="'asya uysal'"
            :user1Role="'ACAS of WHO'"
            :user2="'adar ege kesebir'"
            :user2Role="'Chair of WHO'"
            :user3="'irem çelik'"
            :user3Role="'USG of WHO'"
        />
        <Card
            :title="'Sochum'"
            :description="'In this committee, delegates will examine the root causes and consequences of gender-based violence, while addressing issues such as unequal access to education and employment, discrimination, harmful social norms, and the protection of vulnerable groups.'"
            :image1="'./profiles/feritumut.png'"
            :image2="'./profiles/keremsoner.png'"
            :image3="'./profiles/ekinuslu.png'"
            :user1="'ferit umut tuna'"
            :user1Role="'ACAS of Sochum'"
            :user2="'kerem soner'"
            :user2Role="'Chair of Sochum'"
            :user3="'ekin uslu'"
            :user3Role="'USG of Sochum'"
        />
        <Card
            :title="'unodc'"
            :description="'In this committee, delegates will examine the challenges posed by criminal networks operating through the Dark Web, including cybercrime, illicit online marketplaces, financial crimes, trafficking, and the anonymous movement of illegal goods and services.'"
            :image1="'./profiles/zeynepmasal.png'"
            :image2="'./profiles/bertanozer.png'"
            :image3="'./profiles/meteguzel.png'"
            :user1="'zeynep masal özdemir'"
            :user1Role="'ACAS of UNODC'"
            :user2="'bertan özer'"
            :user2Role="'Chair of UNODC'"
            :user3="'mete güzel'"
            :user3Role="'USG of UNODC'"
        />
        <Card
            :title="'disec'"
            :description="'In this committee, delegates will address the complex connections between terrorism financing, illegal arms trafficking, transnational organized crime, and emerging technologies. Discussions will focus on strengthening international cooperation, improving financial monitoring and border controls, disrupting illicit arms networks, and supporting countries in preventing the illegal movement of weapons.'"
            :image1="'./profiles/ozguruzun.png'"
            :image2="'./profiles/utkutuna.png'"
            :image3="'./profiles/onurtuna.png'"
            :user1="'özgür uzun'"
            :user1Role="'Acas of DISEC'"
            :user2="'utku tuna denizli'"
            :user2Role="'Chair of DISEC'"
            :user3="'onur tuna büyükyakalı'"
            :user3Role="'USG of DISEC'"
        />
        </div>
    </div>
</template>
<script>
import Card from "./Card.vue";

export default {
    name: "About",
    components: {
        Card
    }
}
</script>
<style scoped>
#about {
    width: 100%;
    min-height: 60vh;
    padding: 5rem 6rem;
    box-sizing: border-box;
}

.cards-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    justify-content: center;
    gap: 2rem;
}

@media (max-width: 800px) {
    #about {
        padding: 3rem 1.5rem;
    }
}

@media (max-width: 400px) {
    #about {
        padding: 2rem 1rem;
    }

    .cards-container {
        grid-template-columns: minmax(0, 1fr);
    }
}
</style>