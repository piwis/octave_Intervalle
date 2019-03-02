<template>
    <div class="qrcode">
        <transition name="fade" mode="out-in">
            <div key="1" v-if="show" class="qrcode-intro">
                <p class="title light">
                    Scanner le QR Code avec ton smartphone
                    <span class="bold">
                    pour réveiller Octave !
                </span>
                </p>
                <div class="canvas">
                    <canvas id="canvas"></canvas>
                </div>
            </div>
            <div key="2" v-else class="qrcode-reveille">
                    <span class="qrcode-reveille-title light">
                        Octave s'éveille.
                    </span>

                <p>
                        <span class="bold">
                            C'est ici qu'il va te parler
                        </span>
                    <span class="light">
                            et tu peux lui répondre grace à ton smarthphone
                        </span>
                </p>

            </div>
        </transition>
    </div>
</template>

<script>

    import {ColorData} from "../utils/ColorData";

    var QRCode = require('qrcode');

    export default {
        name: 'qrcode-view',
        data() {
            return {
                show: true
            }
        },
        sockets: {
            connect() {

                /**
                 * Quand l'user arrive sur le site
                 * Cela permet de quitter la page du qrCode
                 */
                this.$socket.emit("clientTv", true)
            },
            useHeadPhone: function () {
                this.$root.$emit('transitionBackground', ColorData.COLOR.RED);
                this.$root.$emit('onTuto', true)
                this.$router.push('headphone')
            },

            startIntroduction() {
                this.show = false
                //this.$router.push('introduction')
            }
        },

        mounted() {

            var options = {
                rendererOpts: {
                    quality: 0.3
                }
            }
            var canvas = document.getElementById('canvas')
            QRCode.toCanvas(canvas, 'https://octave.suriteka.website/', {
                color: {
                    dark: '#0F005F',  // Blue dots
                    light: '#0000'
                }
            }, function (error) {
                if (error) console.error(error)
                console.log('success!');
            })
        }

    };
</script>


<style lang="scss" scoped>
    .qrcode {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        &-reveille {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-flow: column;
            .bold {
                display: block;
                font-size: 40px;
                line-height: 50px;
            }
            .light {
                font-size: 25px;
                &:first-of-type {
                    margin-bottom: 30px;
                }
            }

        }
        &-intro {
            .title {
                color: #0F005F;
                position: absolute;
                top: 40px;
                left: 50%;
                -webkit-transform: translateX(-50%);
                -moz-transform: translateX(-50%);
                -ms-transform: translateX(-50%);
                -o-transform: translateX(-50%);
                transform: translateX(-50%);
                max-width: 600px;
                width: 100%;
                font-size: 25px;
                line-height: 50px;
            }
            span {
                display: block;
                font-size: 40px;
                line-height: 1;
            }
        }
    }

    .canvas {
        #canvas {
            width: 250px !important;
            height: 250px !important;
        }
        position: relative;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }


</style>
