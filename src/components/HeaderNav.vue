<template>
    <header>
        <img src="../assets/shared/logo.svg" alt="space-tourism" />
        <nav>
            <ol>
                <li><a href="#">Home</a></li>
                <li><a href="#">Destination</a></li>
                <li><a href="#">Crew</a></li>
                <li><a href="#">Technology</a></li>
            </ol>
        </nav>
    </header>
</template>
<script>
export default {
    name: "HeaderMenu",
    data() {
        return {
            logo: "",
        };
    },
};
</script>
<style scoped>
header {
    display: flex;
    flex-flow: row wrap;
    height: 200px;
}
img {
    /* flex-grow: 1; */
}
nav {
    display: flex;
    flex-grow: 2;
}
ol {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
}
li {
    flex-grow: 1;
}
a {
    text-decoration: none !important;
    /* list-style: none; */
    color: #ffff;
}
</style>
