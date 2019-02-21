<template>
    <div class="isere">
        <div class="third-introduction">

            <transition name="fade" mode="out-in">
                <div class="i-am-drone" v-if="dronePaysage">
                    <p class="light">
                        <span class="bold">Je suis un drône,</span>
                        et je parcours l’Isère pour faire découvrir aux gens
                    </p>
                    <p class="bold">
                        la richesse et la variété de ses paysages
                    </p>
                </div>
                <div class="ready" v-else>
                    <div class="dronePaysage">
                        <p class="bold">
                            Et si on allait survoler <br>
                            ces paysages ensemble ?
                        </p>
                        <p class="light">
                            Je te partagerais <span class="bold">mes ressentis</span> sur ce que l’on verra.
                        </p>
                    </div>

                </div>
            </transition>
            <span class="montagne"></span>
        </div>
    </div>
</template>

<script>


    export default {
        name: 'isere-view',

        data() {
            return {
                dronePaysage: true,
                lookAtScreen: true,
                useHeadPhone: false,
                //startIntroduction: false,
            }
        },

        sockets: {

            isereView: function (data) {
                this.$router.push('introduction-tuto')
            },
            isereNextView: function (data) {
                alert("Salut")
                this.dronePaysage = !this.dronePaysage;
                // this.$router.push('introduction-tuto')
            }
        },

        methods: {


        },

        mounted() {
            //this.$socket.emit("isereHasRead", true)

        }

    };
</script>

f
<style scoped lang="scss">
    @import '../assets/scss/utils/variables';
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }

    #canvas {
        width: 300px !important;
        height: 300px !important;
    }
    .i-am-drone {
        p {
            color: #3a0000;
            &.bold {
                font-size: 40px;
            }
            &.light {
                .bold {
                    display: block;
                }
                font-size: 25px;

            }
        }
    }
    .ready {
        p {
            color: #3a0000;
            &.bold {
                font-size: 40px;
            }
            &.light {
                font-size: 25px;

            }
        }

    }
    .montagne {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 755px;
        background-image: url(../assets/img/Montagnes.png);
        -webkit-background-size: contain;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left bottom;
    }
</style>
