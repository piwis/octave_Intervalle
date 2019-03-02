<template>
    <div class="isere">
        <div class="third-introduction">

            <div class="content-bottom">
                <transition name="fade" mode="out-in">
                    <div key="1" class="i-am-drone" v-if="dronePaysage">
                        <p class="light fz-25">
                            <span class="bold">Je suis un drône,</span>
                            et je parcours l’Isère pour faire découvrir aux gens
                        </p>
                        <p class="bold">
                            la richesse et la variété de ses paysages
                        </p>
                    </div>
                    <div key="2" class="ready " v-else>
                        <div class="dronePaysage">
                            <p class="bold fz-40">
                                Et si on allait survoler <br>
                                ces paysages ensemble ?
                            </p>
                            <p class="light">
                                Je te partagerais <span class="bold">mes ressentis</span> sur ce que l’on verra.
                            </p>
                        </div>

                    </div>
                </transition>
            </div>
            <span class="montagne"></span>
        </div>
    </div>
</template>

<script>


    import {AudioData} from "../utils/AudioData";

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
                this.$router.push('usePhone')
                this.$root.$emit("stopSound", AudioData.SOUND.ISEREVIEW)
            },
            isereNextView: function (data) {
                this.$root.$emit("stopSound", AudioData.SOUND.IMOCTAVE)
                this.$root.$emit("playSound", AudioData.SOUND.ISEREVIEW)
                this.dronePaysage = !this.dronePaysage;
                // this.$router.push('introduction-tuto')
            }
        },

        methods: {


        },

        mounted() {
            this.$root.$emit("playSound", AudioData.SOUND.IMOCTAVE)
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
    .isere {
        justify-content: flex-start;
        .content-bottom {
            margin-top: 24vh;
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

                }
            }
        }
        .ready {
            p {
                color: #3a0000;
                &.light {
                    font-size: 30px;
                }
                &.bold {

                }
            }

        }
        .montagne {
            position: absolute;
            left: -10%;
            bottom: 0px;
            width: 120%;
            height: 755px;
            background-image: url(../assets/img/Montagnes.png);
            -webkit-background-size: contain;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: left bottom;
        }

    }
</style>
