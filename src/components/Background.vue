<template>
    <div class="background-vue">
        <div v-if="transitionBg" class="start-animation">
            <span :class="{ 'class-a': transitionBg, 'bg-transition blue' : true } "></span>
            <span class="bg-transition red transition-blue"></span>
        </div>
        <div v-else class="add-class">
            <span :class="{ 'class-a': transitionBg, 'bg-transition red' : true } "></span>
            <span class="bg-transition blue transition-red"></span>
        </div>
			<transition-group name="fade" mode="out-in">
				<span class="circle" v-bind:key="1" v-show="displayCircle">
				</span>
				<span class="circle-animation" v-show="rotationCircle" v-bind:key="2">
					<svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
				<svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
    export default {
        name: 'background-vue',
        data() {
            return {
                transitionBg: true,
                rotationCircle: false,
				displayCircle:true,
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
            useHeadPhone: function () {
                this.rotationCircle = true;
            },
        },
        methods: {

            activeRotation() {
                this.rotation = !this.rotation;
            },
            hiddenCircle() {

			}
            // init() {
            //     this.clock = new THREE.Clock();
            //     this.renderer = new THREE.WebGLRenderer({ alpha: true,antialias: false });
            //     // this.renderer.setClearColor(0x1d1a19, 1);
            //     this.renderer.setSize(window.innerWidth, window.innerHeight);
            //
            //     this.scene = new THREE.Scene();
            //
            //     var ambientLight = new THREE.AmbientLight(0xccc2ae);
            //     this.scene.add(ambientLight);
            //
            //     this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
            //     this.camera.position.z = 1000;
            //     this.scene.add(this.camera);
            //
            //     this.geometry = new THREE.CubeGeometry(200, 200, 200);
            //     this.material = new THREE.MeshLambertMaterial({
            //         color: 0xaaa466,
            //         wireframe: false
            //     });
            //     this.mesh = new THREE.Mesh(this.geometry, this.material);
            //     //scene.add( mesh );
            //     this.cubeSineDriver = 0;
            //
            //     var textGeo = new THREE.PlaneGeometry(300, 300);
            //     THREE.ImageUtils.crossOrigin = ''; //Need this to pull in crossdomain images from AWS
            //     var textTexture = THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/quickText.png');
            //     var textMaterial = new THREE.MeshLambertMaterial({
            //         color: 0x00ffff,
            //         opacity: 1,
            //         map: textTexture,
            //         transparent: true,
            //         blending: THREE.AdditiveBlending
            //     })
            //     var text = new THREE.Mesh(textGeo, textMaterial);
            //     text.position.z = 800;
            //     // scene.add(text);
            //
            //     // light = new THREE.DirectionalLight(0xffffff,0.5);
            //     // light.position.set(-1,0,1);
            //     // scene.add(light);
            //
            //     var smokeTexture = THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png');
            //     var smokeMaterial = new THREE.MeshLambertMaterial({
            //         color: 0x937268,
            //         opacity: 0.2,
            //         map: smokeTexture,
            //         transparent: true
            //     });
            //     var smokeGeo = new THREE.PlaneGeometry(300, 300);
            //     this.smokeParticles = [];
            //
            //     for (var p = 0; p < 150; p++) {
            //         var particle = new THREE.Mesh(smokeGeo, smokeMaterial);
            //         particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
            //         particle.rotation.z = Math.random() * 360;
            //         this.scene.add(particle);
            //         this.smokeParticles.push(particle);
            //     }
            //
            //     document.querySelector(".background-vue").appendChild(this.renderer.domElement);
            //     this.animate()
            // },
            // animate() {
            //     this.delta = this.clock.getDelta();
            //     requestAnimationFrame(this.animate.bind(this));
            //     this.evolveSmoke();
            //     this.render();
            //
            // },
            // evolveSmoke() {
            //     var sp = this.smokeParticles.length;
            //     while (sp--) {
            //         this.smokeParticles[sp].rotation.z += (this.delta * 0.2);
            //     }
            // },
            // render() {
            //     this.mesh.rotation.x += 0.005;
            //     this.mesh.rotation.y += 0.01;
            //     this.cubeSineDriver += .01;
            //     this.mesh.position.z = 100 + (Math.sin(this.cubeSineDriver) * 500);
            //     this.renderer.render(this.scene, this.camera);
            //
            // }
        },
        mounted() {

            this.$root.$on('bg', (data) => {
                console.log("Salut");
                this.transitionBg = !this.transitionBg;
                setTimeout(() => {
                    document.querySelector(".add-class").classList.add('start-animation')
                }, 100)
            })

            this.$root.$on('onTuto', (data) => {
                this.displayCircle = false
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
        height: 130vh;
        width: 120vh;
        will-change: transform;
        border-radius: 100%;
        background: rgba(255, 255, 255, 0.6);
    }

    .st0 {
        clip-path: url(#SVGID_2_);
        fill: #FFFFFF;
    }

    svg {
        opacity: 0.4;
        position: absolute;
        left: -5%;
        top: -5%;
        width: 110%;
        height: 110%;
        transform-origin: center;
        animation: rotate 50s infinite; /* IE 10+, Fx 29+ */
        animation-timing-function: linear;
        &:nth-of-type(2) {
            animation-delay: 10s;
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
