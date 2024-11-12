<template>
    <div class="d-flex h-100 test">
        <v-tab class="h-auto pt-2 pb-2" :value="props.userData.id">
            <v-avatar 
                size="x-large"
            >
                <v-img
                    :src="props.userData.avatar"
                ></v-img>
            </v-avatar>
            <v-card-title>{{ props.userData.name }}</v-card-title>
        </v-tab>
    </div>
    <v-divider thickness="2"></v-divider>
</template>

<script>
import { defineComponent } from 'vue';

    export default defineComponent ({
        name: 'ChatTabCard',

        props: {
            userData: {
                type: Object,   
                default: {}
            }
        },

        setup(props) {
            console.log(props.userData.id)

            return { props }
        }
    })
</script>

<style scoped>

</style>