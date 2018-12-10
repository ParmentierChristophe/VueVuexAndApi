<template>
    <div class="container">
        <div class="columns is-multiline">
            <div class="column is-4" v-for="(item, index) in pays.data" :key="index">

                <div class="card">
                    <div class="card-image">
                        <figure class="image is-5by4">
                            <img :src="item.flag" :alt="'flag of ' + item.name  " />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48">
                                    <img :src="item.flag" :alt="'flag of ' + item.name  ">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">{{item.name}}</p>
                            </div>
                        </div>

                        <div class="content">
                            <p class="subtitle is-4">capital : {{item.capital}}</p>
                            <p>population : {{item.population}} hab.</p>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomePaysPreview',
        props: ['pays']
    }
</script>

<style scoped>
</style>