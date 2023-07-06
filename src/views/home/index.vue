<template>
    <div
        class="
            min-h-screen
            flex flex-col
            items-center
            justify-center
            bg-brand-burack
            py-10
            md:py-0
        "
    >
        <h1 class="text-white text-2xl">
            Hello my dear friend, <strong class="text-pink-500">{{ loginData.name }}</strong>
        </h1>
    </div>
</template>

<script setup>
import { loginData } from '../../state/login'
</script>
