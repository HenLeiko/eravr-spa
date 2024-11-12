<template>
    <v-card class="d-flex">
        <!-- <v-container> -->
            <v-tabs class="h-100" style="width: 35%;" direction="vertical" v-model="tabs">
                <ChatTabCard v-for="item in testData" :userData="item"></ChatTabCard>
            </v-tabs>
            <v-card-text class="w-100">
                <v-tabs-window class="h-100" v-model="tabs">
                    <v-tabs-window-item class="border h-100" value="test">
                    <div class="card-size">dsfds</div>
                    </v-tabs-window-item>
                    <v-tabs-window-item value="testTwo">Ихихихи</v-tabs-window-item>
                </v-tabs-window>
            </v-card-text>
        <!-- </v-container> -->
    </v-card>
</template>

<script>
import { ref } from 'vue';
import ChatTabCard from '@/components/ui/ChatTabCard.vue'

export default {
    components: {
        ChatTabCard,
    },

    setup() {
        let tabs = ref(null)
        let testData = [
            {
                id: 'test',
                name: 'Вова',
                avatar: 'https://avatars.mds.yandex.net/i?id=51de9bb924767452a394044e1d4e540c_l-5100713-images-thumbs&n=13'
            },
            {
                id: 'testTwo',
                name: 'Настя',
                avatar: 'https://i.pinimg.com/originals/06/c2/88/06c288ba624ebcef2dd7974a9cd7e24c.jpg'
            }
        ]
        return { tabs, testData }
    }
}
</script>

<style scoped>
    .test {
        min-height: 64px;
    }

    .card-size {
        height: 78vh;
    }
</style>