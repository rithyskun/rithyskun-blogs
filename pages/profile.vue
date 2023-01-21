<script setup lang="ts">
const { page } = useContent();
</script>

<template>
    <div class="page-layout">
        <LayoutNavbar />
        <DocsPageLayout>
            <NuxtPage></NuxtPage>
        </DocsPageLayout>
    </div>
</template>
<style lang="ts" scoped>
css({
    '.page-layout': {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
    }
})
</style>
