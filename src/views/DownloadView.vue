<template>
    <div class="download-page">
        <div class="content-bottom">
            <transition name="fade" mode="out-in">
                <!--<div key="1" class="i-am-drone" v-if="downloadVideo">-->
                    <!--<p class="light fz-25">-->
                        <!--Tu veux conserver le souvenir de ce moment unique ?-->
                    <!--</p>-->
                    <!--<p class="bold fz-40">-->
                        <!--Si tu veux, je peux t'envoyer une notification pour télécharger la vidéo de ton voyage ?-->
                    <!--</p>-->
                    <!--<svg id="Calque_2" data-name="Calque 2" xmlns="http://www.w3.org/2000/svg"-->
                         <!--viewBox="0 0 141.21 138.82">-->
                        <!--<defs></defs>-->
                        <!--<title>telecharger_bleu</title>-->
                        <!--<circle class="cls-1" cx="70.6" cy="68.78" r="59.04"/>-->
                        <!--<path class="cls-2"-->
                              <!--d="M79.05,89.53a8.5,8.5,0,0,1-16.89,0H50.61a5.5,5.5,0,1,1,0-11,.5.5,0,0,0,.49-.5V66A19.51,19.51,0,0,1,64.6,47.47v-.94a6,6,0,0,1,12,0v.94A19.51,19.51,0,0,1,90.1,66V78a.5.5,0,0,0,.5.5,5.5,5.5,0,1,1,0,11Zm-3,0H65.2a5.5,5.5,0,0,0,10.81,0ZM66.48,50.05A16.5,16.5,0,0,0,54.1,66V78a3.5,3.5,0,0,1-3.49,3.5,2.5,2.5,0,1,0,0,5h40a2.5,2.5,0,1,0,0-5A3.5,3.5,0,0,1,87.1,78V66a16.5,16.5,0,0,0-12.37-16l-1.13-.29V46.53a3,3,0,0,0-6,0v3.23Z"/>-->
                    <!--</svg>-->
                <!--</div>-->
                <div key="1" class="i-am-drone" v-if="downloadVideo">
                <p class="bold fz-40">
                Chouette ! Je t'avertirais quand se sera prêt.
                </p>
                <p class="light fz-25">
                ça devrait prendre moins de 15 minutes
                </p>
                </div>

            </transition>
        </div>
    </div>
</template>

<script>


    import Landscape from '@/components/chooseAnLandscape'
    import {TweenMax} from "gsap"
    import img1 from "@/assets/img/territoires/oisans-choose.png"
    import {AudioData} from "../utils/AudioData";

    export default {
        name: 'download-view',

        data() {
            return {
                downloadVideo: true,
                userDownload: false,
                userHasDownload: false,
            }
        },
        sockets: {},

        methods: {

            download() {
                this.userDownload = true
                this.nextStep = true
                setTimeout(() => {
                    this.userHasDownload = true
                }, 2000)

            },
        },
        mounted() {
            this.$root.$emit("playSound", AudioData.SOUND.DOWNLOAD)
        }

    };
</script>


<style lang="scss" scoped>
    @import '../assets/scss/utils/variables';

    .nextStep {
        position: absolute;
        right: 0;
        bottom: 0;
        p {
            display: flex;
            align-items: center;
            justify-content: center;
            @include f-muli-bold;
            font-size: 20px;
            &:after {
                content: '';
                margin-left: 10px;
                display: inline-block;
                position: relative;
                width: 36px;
                height: 73px;
                -webkit-transform: scale(0.4) rotate(-180deg);
                -moz-transform: scale(0.4) rotate(-180deg);
                -ms-transform: scale(0.4) rotate(-180deg);
                -o-transform: scale(0.4) rotate(-180deg);
                transform: scale(0.4) rotate(-180deg);
                -webkit-background-size: cover;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Calque_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 36 73' style='enable-background:new 0 0 36 73;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bclip-path:url(%23SVGID_2_);fill:%236589FF;%7D%0A%3C/style%3E%3Cg%3E%3Cg%3E%3Cdefs%3E%3Crect id='SVGID_1_' x='0' y='0' width='36' height='73'/%3E%3C/defs%3E%3CclipPath id='SVGID_2_'%3E%3Cuse xlink:href='%23SVGID_1_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cpath class='st0' d='M0,36.5c0-0.7,0.3-1.5,0.7-2L31.6,0.8c1-1.1,2.6-1.1,3.7,0c1,1.1,1,2.9,0,4l-29,31.7l29,31.7c1,1.1,1,2.9,0,4 c-1,1.1-2.6,1.1-3.7,0L0.7,38.5C0.3,38,0,37.2,0,36.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
            }
        }
    }

    .cls-1 {
        fill: #6589ff;
    }

    .cls-2 {
        fill: #fff;
    }

    .bold {
        font-size: 35px;
        padding: 0 120px;
    }
    .ligth {
        font-size: 30px;
    }

    svg {
        width: 200px;
        height: 200px;
        margin-bottom: 50px;
    }

    #download {
        width: 76px;
        height: 76px;
    }

    .st0 {
        clip-path: url(#SVGID_2_);
        fill: #6589FF;
    }

    .st1 {
        clip-path: url(#SVGID_2_);
        fill: none;
        stroke: #FFFFFF;
        stroke-width: 3;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
    }

</style>
