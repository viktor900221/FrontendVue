<template>
    <div class="home">
<CRUD></CRUD>
</div>
</template>

<script>
import CRUD from '@/components/CRUD.vue';

export default {

name: 'CRUDView',
components:{
CRUD
}
}
</script>

<style scoped>
.home {
   
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
</style>