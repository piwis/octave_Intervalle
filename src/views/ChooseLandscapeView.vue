<template>
    <div class="choose-landscape">
        <transition name="fade" mode="out-in">
            <div class="bloc-landscape" v-if="!show">
                <p class="bold">
                    Maintenant où va-t-on ?
                </p>
                <p class="ligth">
                    Choisis un territoire sur ton smartphone.
                </p>
            </div>
            <div v-else class="choose">
                <div class="choose-content">
                    <span class="choose-content-left">
                        Ok on part à {{this.cityChoosen.name}}
                    </span>
                    <span class="background" v-bind:style="{ 'background-image': 'url(' + this.cityChoosen.img + ')' }">
                    </span>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>


    import Test from '@/components/chooseAnLandscape'
    import img1 from "@/assets/img/territoires/oisans-choose.png"
    import img2 from "@/assets/img/territoires/test.png"
    import imgTest from "@/assets/img/image-test.png"

    export default {
        name: 'understand-introduction-view',

        components: {
            'lanscdapechoosen': Test,
        },
        data() {
            return {
                show: false,
                cityChoosen: null,
                citys: [
                    {
                        name: "Oisans",
                        img: imgTest
                    },
                    {
                        name: "Grésivaudan",
                        img: imgTest
                    },
                    {
                        name: "Vercors",
                        img: imgTest
                    },
                    {
                        name: "Portes des Alpes",
                        img: imgTest
                    },
                ]
            }
        },
        sockets: {
            chooseLandscape: function (data) {
                this.AnLandScapeHasChoosen(data)
            },
            closeLandscape: function (data) {
                this.cityChoosen = null;
                alert(data)
                this.show = !this.show
            },
        },

        methods: {
            AnLandScapeHasChoosen(id) {
                this.show = !this.show
                this.cityChoosen = this.citys[id];
            }
        },

        mounted() {
        }

    };
</script>


<style lang="scss">

    .background {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        -webkit-background-size: cover;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: right;
    }
    .choose {
        height: 100%;
        width: 100%;
        &-content {
            height: 100%;
            width: 100%;
            display: flex;
            &-left {

                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                width: 39%;
                height: 100%;
                background-image: url(../assets/img/bg-choose.png);
                -webkit-background-size: cover;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: left top;
            }
        }
    }

    .bloc-landscape {
        width: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        height: 100vh;
        max-height: 500px;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        max-width: 800px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
        padding: 20px;
        box-sizing: border-box;

        p {
            margin: 0;
            color: #085724;
            font-size: 25px;
            &.bold {
                display: block;
                font-size: 40px;
            }
        }
    }


</style>
