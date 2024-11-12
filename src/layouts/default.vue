<template>
  <v-layout class="rounded rounded-md main">
    <v-app-bar
    prominent
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>EraVR Overdose</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn class="nav_profile-btn" v-bind="props">
            <v-avatar class="nav_profile-avatar">
              <v-img src="https://i.ytimg.com/vi/LYtmzQvcJEk/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGH8gEygyMA8=&rs=AOn4CLCcuim94hYdrGrk9g9q4pQFo5cB8w"></v-img>
            </v-avatar>
            <p class="nav_profile-name">HenLeiko</p>
          </v-btn>
        </template>
        <v-list class="nav_profile-list">
          <v-list-item v-for="(item, index) in profileList" :value="index" :title="item.name" :to="item.page"></v-list-item>
          <v-list-item class="bg-red" title="Выход" value="20" to="exit">
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" class="justify-scenter" temporary>
      <v-list>
        <router-link class="router-link" v-for="(item, index) in menuList" :to="item.page">
          <v-list-item class="list-titem" :value="index">
            {{ item.name }}
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-layout>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const menuList = [
      {
        name: 'Главная',
        page: '/'
      },
      {
        name: 'Расписание',
        page: 'agenda'
      },
      {
        name: 'Закупки',
        page: 'orders'
      },
      {
        name: 'Чаты',
        page: 'chats'
      },
      {
        name: 'Кассовый отчёт',
        page: 'x-report'
      },
    ]
    const profileList = [
      {
        name: 'Мой профиль',
        page: 'profile',
      },
      {
        name: 'Настройки',
        page: 'settings'
      }
    ]
    let drawer = ref(false)

    return { 
      menuList, 
      drawer, 
      profileList
    }
  }
}

</script>

<style scoped>
  .main {
    min-height: 100vh;
  }

  .router-link {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
  }

  .list-item {
    font-size: 20px;
  }

  .nav_profile-btn {
    display: flex;
    min-height: 100%;
    border-radius: 10px;
  }

  .nav_profile-avatar {
    margin: 10px;
  }

  .nav_profile-list {
    overflow: hidden;
    scrollbar-width: none;
  }

  .nav_profile-list::-webkit-scrollbar {
    display: none;
  }

</style>