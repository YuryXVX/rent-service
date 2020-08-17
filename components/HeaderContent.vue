<template>
    <div>
        <div>
        <Logo />
        <span>World's first affordable airsharing</span>
        </div>
        <div>
            <span>Bessie Cooper</span>
            <UserAvatar :image="require('../assets/mockuser.jpg')"  rounded />  
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderContent'
}
</script>

<style>

</style>