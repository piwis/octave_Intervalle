<template>
    <div class="AudioPlay">
    </div>

</template>

<script>

    import {TweenMax} from 'gsap';
    import {AudioData} from "../utils/AudioData";
    import test from "../assets/audio/SD_Voix_01.mp3"

    export default {
        data() {
            return {
                AudiosContextPlaying: {},
                AudioContext: null,
                volume: {
                    from: 0,
                    to: 1,
                    duration: 1
                }
            }
        },

        methods: {
            playSound(src) {
                this.AudioContext = new Audio(src);
                this.AudiosContextPlaying[src] = this.AudioContext
                this.fromToVolume(this.AudioContext);
                this.AudioContext.play();
            },
            stopSound(src) {
                this.AudiosContextPlaying[src].pause();

            },
            deleteVolume(AudioContext) {
                let options = this.options;
                TweenMax.to(AudioContext,  1, { volume: 0, onComplete:()=> {
                        this.deleteVolume(AudioContext);
                        this.removeAudioContext(AudioContext);
                    }});
            },
            fromToVolume(AudioContext) {
                this.setVolume(AudioContext);
                this.goToVolume(AudioContext);
            },
            setVolume(AudioContext) {
                let options = this.options;
                TweenMax.set(AudioContext, { volume: 0 });
            },
             goToVolume (AudioContext) {
                 let options = this.options;
                 TweenMax.to(AudioContext,  2, { volume: 0.7 });
            },
            removeAudioContext (src) {
            delete this.AudiosContextPlaying[src];
            }
        },
        mounted() {

            this.$root.$on('playSound', (data) => {
                this.playSound(data);
            })

            this.$root.$on('stopSound', (data) => {
                this.stopSound(data);
            })


        },
        destroyed: function () {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .choose-an-landscape {
        background: white;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        &--close {
            background: red;
            width: 20px;
            height: 20px;
            position: absolute;
            left: 0;
            top: 0;
        }
    }

    p {
        display: block;
    }

    .draggerBounds {
        position: absolute;
        left: 30px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 250px;
        height: 50px;
        background: grey;
        margin: 20px;
        box-sizing: content-box;
    }

    .dragger {
        width: 50px;
        height: 50px;
        background: red;
        text-align: center;
        line-height: 50px;
        position: absolute;
    }
</style>
