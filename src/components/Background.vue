<template>
    <div class="background-vue">
        <transition-group name="fade" mode="out-in">
				<span class="circle" key="1" v-if="displayCircle">
				</span>
            	<span key="2" class="circle-animation" v-if="rotationCircle">
					<svg version="1.1" class="circle-bg" id="circle1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		 viewBox="0 0 1228.7 1217.7" style="enable-background:new 0 0 1228.7 1217.7;" xml:space="preserve">
			<g>
		<defs>
			<rect id="SVGID_1_" y="0" width="1228.7" height="1217.7"/>
		</defs>
		<clipPath id="SVGID_2_">
			<use xlink:href="#SVGID_1_"  style="overflow:visible;"/>
		</clipPath>
		<path class="st0" d="M1228.7,608.8c0,46.8-14,98.4-41.1,138.1c-29.9,43.9-27,96.4-43.1,145.6c-40.8,124.9-128.3,183.4-229.1,220.1
			c-42.5,15.5-68.7,70.8-112.4,85.3c-60,19.9-128.5,27.4-195.8,9.8c-35-9.2-98.9,13.5-133.3,7.4c-105-18.6-130-106-224.3-145.7
			c-76-32-148.8-78.9-158.4-146.3c-8.9-62.6-40.9-105.3-77.7-149.2c-33.8-40.4,7.1-126.4,7.1-181.6c0-75.2-39.2-159.6,9.5-211.3
			c47.9-50.9,79.1-108.3,109.2-169.7c26.1-53.4,84.6-99,144.1-111.6c61.2-13,122.9-28,176.3-71.2c54.6-44.1,101.2-24,149.5-24
			c85.4,0,166.9-12.9,240.3,49.6c52.7,44.9,133,48.3,183,94.7c43.1,40,38.4,117.4,98.7,154.5c62,38.1,48.4,154,75.1,207.1
			C1221,539.8,1228.7,575,1228.7,608.8"/>
	</g>
	</svg>
				<svg version="1.1" class="circle-bg" id="circle2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		 viewBox="0 0 1228.7 1217.7" style="enable-background:new 0 0 1228.7 1217.7;" xml:space="preserve">
	<g>
		<defs>
			<rect id="SVGID_1_" y="0" width="1228.7" height="1217.7"/>
		</defs>
		<clipPath id="SVGID_2_">
			<use xlink:href="#SVGID_1_"  style="overflow:visible;"/>
		</clipPath>
		<path class="st0" d="M1228.7,608.8c0,46.8-14,98.4-41.1,138.1c-29.9,43.9-27,96.4-43.1,145.6c-40.8,124.9-128.3,183.4-229.1,220.1
			c-42.5,15.5-68.7,70.8-112.4,85.3c-60,19.9-128.5,27.4-195.8,9.8c-35-9.2-98.9,13.5-133.3,7.4c-105-18.6-130-106-224.3-145.7
			c-76-32-148.8-78.9-158.4-146.3c-8.9-62.6-40.9-105.3-77.7-149.2c-33.8-40.4,7.1-126.4,7.1-181.6c0-75.2-39.2-159.6,9.5-211.3
			c47.9-50.9,79.1-108.3,109.2-169.7c26.1-53.4,84.6-99,144.1-111.6c61.2-13,122.9-28,176.3-71.2c54.6-44.1,101.2-24,149.5-24
			c85.4,0,166.9-12.9,240.3,49.6c52.7,44.9,133,48.3,183,94.7c43.1,40,38.4,117.4,98.7,154.5c62,38.1,48.4,154,75.1,207.1
			C1221,539.8,1228.7,575,1228.7,608.8"/>
	</g>
	</svg>
				</span>
        </transition-group>
    </div>
</template>

<script>

    import * as THREE from 'three';
    import {TweenMax} from "gsap"
    import imgSmoke from "../assets/img/smoke.png"
    export default {
        name: 'background-vue',
        data() {
            return {
                transitionBg: true,
                rotationCircle: false,
                displayCircle: true,
                img: null,
                mask: null,
                canvasTransition: null,
                imgTransition: null,
                maskTransition: null,
                iTransition: 0,
                i: 0,
                camera: null,
                scene: null,
                renderer: null,
                geometry: null,
                material: null,
                mesh: null,
                cubeSineDriver: null,
                delta: null,
                clock: null,
                smokeParticles: [],
            }
        },
        sockets: {
            startIntroduction: function () {
                document.querySelector(".circle").classList.add("active")
            },
            lookAtScreen: function () {
                document.querySelector(".circle").classList.add("active")
            },
        },
        methods: {

            init() {
                this.clock = new THREE.Clock();
                this.renderer = new THREE.WebGLRenderer({alpha: true, antialias: false});
                this.renderer.setClearColor(0xFFFFFF, 1.0);
                this.oldColor = 0xFEF4EB;
                // this.renderer.setClearColor(0xb9e3c3, 1);
                this.renderer.setSize(window.innerWidth, window.innerHeight);

                this.scene = new THREE.Scene();

                this.ambientLight = new THREE.AmbientLight(0xB8B0FD);
                this.scene.add(this.ambientLight);

                this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
                this.camera.position.z = 1000;
                this.scene.add(this.camera);

                //scene.add( mesh );
                this.cubeSineDriver = 0;

                THREE.ImageUtils.crossOrigin = ''; //Need this to pull in crossdomain images from AWS

                var smokeTexture = THREE.ImageUtils.loadTexture(imgSmoke);
                this.smokeMaterial = new THREE.MeshLambertMaterial({
                    color: 0xB8B0FD,
                    opacity: 1.0,
                    map: smokeTexture,
                    side: THREE.FrontSide,
                    transparent: true,
                });
                this.smokeLigthMaterial = new THREE.MeshLambertMaterial({
                    color: 0xCEDDFE,
                    opacity: .70,
                    side: THREE.FrontSide,
                    map: smokeTexture,
                    transparent: true
                });

                var smokeGeo = new THREE.PlaneGeometry(600, 600);

                this.smokeParticles = [];
                this.smokeParticlesLigth = [];

                // Coté
                for (var p = 0; p < 20; p++) {
                    var particle = new THREE.Mesh(smokeGeo, this.smokeMaterial);
                    particle.scale.x = 600;
                    particle.scale.y = 600

                    particle.scale.set(1, 1, 1);

                    let posX = 0;
                    let posY = 0;
                    let posZ = 0;

                    let w = window.innerWidth
                    let h = window.innerHeight

                    // BON POUR LES PLACEMENT

                    // X Va vers la droite en positif
                    // Y Va vers la haut en positif
                    // Z Profondeur
                    particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
                    particle.rotation.z = Math.random() * 360;
                    this.scene.add(particle);
                    this.smokeParticles.push(particle);
                }
                for (var p = 0; p < 3; p++) {
                    var particle = new THREE.Mesh(smokeGeo, this.smokeLigthMaterial);
                    particle.scale.x = 600;
                    particle.scale.y = 600

                    particle.scale.set(1, 1, 1);

                    let posX = 0;
                    let posY = 0;
                    let posZ = 0;

                    let w = window.innerWidth
                    let h = window.innerHeight

                    // BON POUR LES PLACEMENT
                    if(p === 0) {
                        posX = 0
                        posY = -100

                    } else if(p === 1) {
                        posX = 200
                        posY = -100

                    } else if(p === 2) {
                        posX = -200
                        posY = -100
                    }

                    // X Va vers la droite en positif
                    // Y Va vers la haut en positif
                    // Z Profondeur
                    particle.position.set(posX, posY, 800);
                    particle.rotation.z = 600;
                    // particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
                    // particle.rotation.z = Math.random() * 360;
                    this.scene.add(particle);
                    this.smokeParticlesLigth.push(particle);
                }

                // MILIEUX


                document.querySelector(".background-vue").appendChild(this.renderer.domElement);

                window.addEventListener("resize", this.onWindowResize.bind(this));
                this.animate()
            },
            animate() {
                this.delta = this.clock.getDelta();
                requestAnimationFrame(this.animate.bind(this));
                this.evolveSmoke();
                this.render();

            },
            evolveSmoke() {
                var sp = this.smokeParticles.length;
                while (sp--) {
                    this.smokeParticles[sp].rotation.z += Math.random() * (this.delta * 0.06);
                }
                var sp = this.smokeParticlesLigth.length;
                while (sp--) {
                    this.smokeParticlesLigth[sp].rotation.z += Math.random() * (this.delta * 0.06);
                }
            },
            render() {
                this.renderer.render(this.scene, this.camera);
            },
            onWindowResize() {
                // Update canvas renderer size
                this.renderer.setSize(window.innerWidth, window.innerHeight);

                // Resize camera aspect
                this.camera.aspect = window.innerWidth / window.innerHeight;
                this.camera.updateProjectionMatrix();

            },

            activeRotation() {
                this.rotation = !this.rotation;
            },
            hiddenCircle() {

            },
            init() {
                this.clock = new THREE.Clock();
                this.renderer = new THREE.WebGLRenderer({ alpha: true,antialias: false });
                // this.renderer.setClearColor(0x1d1a19, 1);
                this.renderer.setSize(window.innerWidth, window.innerHeight);

                this.scene = new THREE.Scene();

                this.ambientLight = new THREE.AmbientLight(0xB8B0FD);
                this.scene.add(this.ambientLight);

                this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
                this.camera.position.z = 1000;
                this.scene.add(this.camera);
                //scene.add( mesh );


                var smokeTexture = THREE.ImageUtils.loadTexture(imgSmoke);
                this.smokeMaterial = new THREE.MeshLambertMaterial({
                    color: 0xB8B0FD,
                    opacity: 1.0,
                    map: smokeTexture,
                    transparent: true
                });
                var smokeGeo = new THREE.PlaneGeometry(500, 500);
                this.smokeParticles = [];

                for (var p = 0; p < 40; p++) {
                    var particle = new THREE.Mesh(smokeGeo, this.smokeMaterial);
                    particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
                    particle.rotation.z = Math.random() * 360;
                    this.scene.add(particle);
                    this.smokeParticles.push(particle);
                }

                document.querySelector(".background-vue").appendChild(this.renderer.domElement);
                this.animate()
            },
            animate() {
                this.delta = this.clock.getDelta();
                requestAnimationFrame(this.animate.bind(this));
                this.evolveSmoke();
                this.render();

            },
            evolveSmoke() {
                var sp = this.smokeParticles.length;
                while (sp--) {
                    this.smokeParticles[sp].rotation.z += (this.delta * 0.2);
                }
            },
            render() {
                this.renderer.render(this.scene, this.camera);
            },
            changeColorOfMaterial(color) {

                TweenMax.to([this.smokeMaterial.color], 1, {
                    r: color.r,
                    g: color.g,
                    b: color.b,
                })
            }

        },
        mounted() {

            this.init();

            this.$root.$on('bg', (data) => {
                this.transitionBg = !this.transitionBg;
            })

            this.$root.$on('transitionBackground', (data) => {
                this.changeColorOfMaterial(data);
            })

            this.$root.$on('onTuto', (data) => {
                console.log(data);
                if(data) {
                    this.rotationCircle = true;
                    setTimeout(() => {
                        document.querySelector(".circle").classList.add('start-animation')
                    }, 100)
                } else {
                    this.rotationCircle = false;
                    document.querySelector(".circle").classList.remove('start-animation')
                }
            });
            this.$root.$on('displayCircle', (data) => {
                if(data) {
                    this.displayCircle = true
                } else {
                    this.displayCircle = false
                }
            });


        }

        ,
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .background-vue {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
        width: 100%;
        height: 100%;
    }

    #canvasTransition {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1000;
    }

    .CSScanvas {
        position: relative;
        width: 800px;
        height: 600px;
    }

    .img {
        width: 800px;
        height: 600px;
        position: absolute;
        top: 0;
        left: 0;
    }

    .start-animation {
        .transition-red, .transition-blue {
            -webkit-mask: url("../assets/img/rend.png");
            mask: url("../assets/img/rend.png");
            -webkit-mask-size: 2300% 100%;
            mask-size: 2300% 100%;
            -webkit-animation: mask-play 1.4s steps(22) forwards;
            animation: mask-play 1.4s steps(22) forwards;

        }
    }

    .bg-transition {
        z-index: 1;
        width: 100%;
        height: 100vh;
        position: absolute;
        left: 0;
        top: 0;
        -webkit-background-size: cover;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        &.blue {
            background-image: url("../assets/img/bg-blue.jpg");
        }
        &.red {
            background-image: url("../assets/img/bg-red.jpg");
        }
        @keyframes mask-play {
            from {
                -webkit-mask-position: 0% 0;
                mask-position: 0% 0;
            }
            to {
                -webkit-mask-position: 100% 0;
                mask-position: 100% 0;
            }
        }
    }

    .circle {
        &.active {
            -webkit-transform: translate(-50%, -50%) scale(1.0);
            -moz-transform: translate(-50%, -50%) scale(1.0);
            -ms-transform: translate(-50%, -50%) scale(1.0);
            -o-transform: translate(-50%, -50%) scale(1.0);
            transform: translate(-50%, -50%) scale(1.0);
        }
        z-index: 100;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%) scale(0.35);
        -moz-transform: translate(-50%, -50%) scale(0.35);
        -ms-transform: translate(-50%, -50%) scale(0.35);
        -o-transform: translate(-50%, -50%) scale(0.35);
        transform: translate(-50%, -50%) scale(0.35);
        -webkit-transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
        -moz-transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
        -ms-transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
        -o-transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
        transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
        height: 120vh;
        width: 120vh;
        will-change: transform;
        border-radius: 100%;
        background: rgba(255, 255, 255, 0.6);
    }

	.circle-bg {
		width: 100%;

	}

    .st0 {
        clip-path: url(#SVGID_2_);
        fill: #FFFFFF;
    }

    svg {
        opacity: 0.3;
        position: absolute;
		left: 0;
		top: -13%;
        width: 126%;
        height: 126%;
        transform-origin: center;

        &:nth-of-type(1) {
			animation: rotate 60s infinite; /* IE 10+, Fx 29+ */
			animation-timing-function: linear;
        }
		&:nth-of-type(2) {
			animation: rotate 80s infinite; /* IE 10+, Fx 29+ */
			animation-timing-function: linear;
        }
        @keyframes rotate {
            0% {
                -webkit-transform: rotate(0deg);
                -moz-transform: rotate(0deg);
                -ms-transform: rotate(0deg);
                -o-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
                -moz-transform: rotate(360deg);
                -ms-transform: rotate(360deg);
                -o-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }

    }


</style>
