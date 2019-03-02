<template>
    <div class="choose-landscape">
        <transition name="fade" mode="out-in">
            <div key="1" class="bloc-landscape" v-if="!show">
                <p class="bold">
                    Maintenant où va-t-on ?
                </p>
                <p class="ligth">
                    Choisis un territoire sur ton smartphone.
                </p>
            </div>
            <div key="2" v-show="show" class="choose">
                <div class="choose-content">

                    <span class="choose-content-left">
                        <span class="circle"></span>
                        <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 1312 1113" style="enable-background:new 0 0 1312 1113;" xml:space="preserve">
    <g>
    <defs>
        <rect id="SVGID_1_" x="128.7" y="28" width="1075.3" height="1065.7"/>
    </defs>
    <clipPath id="SVGID_2_">
        <use xlink:href="#SVGID_1_"  style="overflow:visible;"/>
    </clipPath>
    <path class="st0" d="M1204,560.8c0,40.9-12.3,86.1-36,120.9c-26.2,38.4-23.6,84.4-37.7,127.4c-35.7,109.3-112.3,160.5-200.5,192.6
        c-37.2,13.5-60.1,61.9-98.3,74.6c-52.5,17.4-112.5,24-171.4,8.6c-30.6-8-86.5,11.8-116.7,6.5c-91.9-16.3-113.8-92.7-196.3-127.6
        c-66.5-28-130.3-69-138.7-128.1c-7.8-54.7-35.8-92.1-68-130.6c-29.6-35.3,6.2-110.6,6.2-158.9c0-65.8-34.3-139.7,8.3-184.9
        c41.9-44.5,69.3-94.8,95.6-148.5c22.9-46.7,74-86.6,126.1-97.7c53.6-11.4,107.6-24.5,154.3-62.3c47.8-38.6,88.6-21,130.9-21
        c74.7,0,146.1-11.3,210.3,43.4c46.1,39.3,116.4,42.2,160.1,82.8c37.7,35,33.6,102.7,86.4,135.2c54.2,33.4,42.4,134.8,65.7,181.3
        C1197.3,500.4,1204,531.2,1204,560.8"/>
    </g>
    </svg>
                        <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 1312 1113" style="enable-background:new 0 0 1312 1113;" xml:space="preserve">
    <g>
    <defs>
        <rect id="SVGID_1_" x="128.7" y="28" width="1075.3" height="1065.7"/>
    </defs>
    <clipPath id="SVGID_2_">
        <use xlink:href="#SVGID_1_"  style="overflow:visible;"/>
    </clipPath>
    <path class="st0" d="M1204,560.8c0,40.9-12.3,86.1-36,120.9c-26.2,38.4-23.6,84.4-37.7,127.4c-35.7,109.3-112.3,160.5-200.5,192.6
        c-37.2,13.5-60.1,61.9-98.3,74.6c-52.5,17.4-112.5,24-171.4,8.6c-30.6-8-86.5,11.8-116.7,6.5c-91.9-16.3-113.8-92.7-196.3-127.6
        c-66.5-28-130.3-69-138.7-128.1c-7.8-54.7-35.8-92.1-68-130.6c-29.6-35.3,6.2-110.6,6.2-158.9c0-65.8-34.3-139.7,8.3-184.9
        c41.9-44.5,69.3-94.8,95.6-148.5c22.9-46.7,74-86.6,126.1-97.7c53.6-11.4,107.6-24.5,154.3-62.3c47.8-38.6,88.6-21,130.9-21
        c74.7,0,146.1-11.3,210.3,43.4c46.1,39.3,116.4,42.2,160.1,82.8c37.7,35,33.6,102.7,86.4,135.2c54.2,33.4,42.4,134.8,65.7,181.3
        C1197.3,500.4,1204,531.2,1204,560.8"/>
    </g>
    </svg>
                        <p>
                            <span class="ligth">
                                Ok on part à
                            </span>
                            <span class="bold">
                                {{this.cityChoosen.name}} !
                            </span>
                        </p>
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
    import choose1 from "@/assets/img/choose1.jpg"
    import {AudioData} from "../utils/AudioData";

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
                        img: choose1
                    },
                    {
                        name: "Grésivaudan",
                        img: choose1
                    },
                    {
                        name: "Vercors",
                        img: choose1
                    },
                    {
                        name: "Portes des Alpes",
                        img: choose1
                    },
                ]
            }
        },
        sockets: {
            chooseLandscape: function (data) {
                this.AnLandScapeHasChoosen(data)
                this.$root.$emit("stopSound", AudioData.SOUND.CHOOSE)
                this.$root.$emit("playSound", AudioData.SOUND.LETSGO)
            },
            closeLandscape: function (data) {
                this.cityChoosen = null;
                alert(data)
                this.show = !this.show
            },
            readTuto: function(data) {
                alert("Salut")
            },
        },

        methods: {
            AnLandScapeHasChoosen(id) {
                this.show = !this.show
                this.cityChoosen = this.citys[id];
            }
        },

        mounted() {
            this.$root.$emit("playSound", AudioData.SOUND.CHOOSE)
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
                line-height: 1;
                .ligth {
                    font-size: 30px;
                }
                .bold {
                    display: block;
                    font-size: 40px;
                }
                p {
                    z-index: 100;
                }
                .circle {
                    width: 120vh;
                    height: 120vh;
                    background: white;
                    position: absolute;
                    left: -80%;
                    top: -10%;
                    -webkit-border-radius: 100%;
                    -moz-border-radius: 100%;
                    border-radius: 100%;
                }
                svg {
                    -webkit-transform: scale(1.3);
                    -moz-transform: scale(1.3);
                    -ms-transform: scale(1.3);
                    -o-transform: scale(1.3);
                    transform: scale(1.3);
                    opacity: 0.6;
                    position: absolute;
                    width: 1312px;
                    height: 100%;
                    left: -85%;
                    top: 0;
                    -webkit-animation: rotation 70s linear infinite;
                    animation: rotation 70s linear infinite;
                    &:nth-of-type(2) {
                        -webkit-animation: rotation 40s linear infinite;
                        animation: rotation 40s linear infinite;
                        left: -90%;
                    }
                }
                @keyframes rotation {
                    0% {
                        transform: rotate(0) scale(1.4);
                    }
                    100% {
                        transform: rotate(360deg) scale(1.4);
                    }
                }


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
    .st0{clip-path:url(#SVGID_2_);fill:#FFFFFF;}


</style>
