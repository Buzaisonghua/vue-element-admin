<template>
    <div>login</div>
</template>
<script lang="ts" setup>
import AuthAPI from '@/api/auth'
import { onBeforeMount } from 'vue'

onBeforeMount(() => {
    console.log('aaaaaaaaaaaa')
    AuthAPI.login({
        username: 'wangbo',
        password: '123'
    })
})
</script>