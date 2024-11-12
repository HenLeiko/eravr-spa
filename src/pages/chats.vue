<template>
    <v-card class="mw-100 ml-5 mr-5 mt-5">
        <v-tabs
            v-model="tab"
        >
            <v-tab value="One">Информация</v-tab>
            <v-tab value="Two">Техничка</v-tab>
            <v-tab value="Three">Ремонт</v-tab>
            <v-tab value="Four">Стафф</v-tab>
        </v-tabs>

        <v-card-text>
            <v-tabs-window v-model="tab">
                <v-tabs-window-item value="One">
                    <ChatTabs></ChatTabs>
                </v-tabs-window-item>
                <v-tabs-window-item value="Two">
                    test2
                </v-tabs-window-item>
                <v-tabs-window-item value="Three">
                    test3
                </v-tabs-window-item>
                <v-tabs-window-item value="Four">
                    test4
                </v-tabs-window-item>
            </v-tabs-window>
        </v-card-text>
    </v-card>
</template>

<script>
import ChatTabs from '@/components/ChatTabs.vue';
import { ref } from 'vue';

export default {
    components: {
        ChatTabs
    },

    setup() {
        let tab = ref(null)

        return { tab }
    }
}
</script>