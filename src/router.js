import Vue from 'vue'
import Router from 'vue-router'
import QRCode from '@/views/QRCodeView'
import Introduction from '@/views/IntroductionView'
import HeadPhone from '@/views/HeadPhoneView'
import UsePhone from '@/views/UseYourPhoneView'
import Isere from '@/views/IsereView'
import IntroductionTuto from '@/views/IntroductionTutoView'
import UnderStandIntroduction from '@/views/UnderStandIntroductionView'
import ChooseLandscape from '@/views/ChooseLandscapeView'
import CommandDrone from '@/views/CommandDroneView'
import Command from '@/components/Command'
import Download from '@/views/DownloadView'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Introduction',
            // component: Download
            component: QRCode
        },
        {
            path: '/usePhone',
            name: 'UsePhone',
            component: UsePhone
        },
        {
            path: '/introduction',
            name: 'Introduction',
            component: Introduction
        },
        {
            path: '/headphone',
            name: 'HeadPhone',
            component: HeadPhone
        },
        {
            path: '/isere',
            name: 'isere',
            component: Isere
        },
        {
            path: '/introduction-tuto',
            name: 'introduction-tuto',
            component: IntroductionTuto
        },
        {
            path: '/understand-introduction-tuto',
            name: 'understand-introduction-tuto',
            component: UnderStandIntroduction
        },
        {
            path: '/choose-landscape',
            name: 'choose-landscape',
            component: ChooseLandscape
        },
        {
            path: '/commande-drone',
            name: 'commande-drone',
            component: CommandDrone
        },
        {
            path: '/commande',
            name: 'commande',
            component: Command
        },
        {
            path: '/download',
            name: 'download',
            component: Download
        },
    ]
})
