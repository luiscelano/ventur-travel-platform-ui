import LoraMedium from 'src/fonts/LoraMedium.ttf'
import LoraRegular from 'src/fonts/LoraRegular.ttf'
import PoppinsMedium from 'src/fonts/PoppinsMedium.ttf'
import PoppinsBold from 'src/fonts/PoppinsBold.ttf'
import PoppinsExtraBold from 'src/fonts/PoppinsExtraBold.ttf'

export const globalStyles = `
    body {
        margin: 0;
        height: 100%;
    }
    a {
        text-decoration: none;
    }
    @font-face {
        font-family: 'Lora Regular';
        src: local('Lora Regular'), local('LoraRegular'),
        url(${LoraRegular}) format('truetype'),
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Lora Medium';
        src: local('Lora Medium'), local('LoraMedium'),
        url(${LoraMedium}) format('truetype'),
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Poppins Medium';
        src: local('Poppins Medium'), local('PoppinsMedium'),
        url(${PoppinsMedium}) format('truetype'),
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Poppins Bold';
        src: local('Poppins Bold'), local('PoppinsBold'),
        url(${PoppinsBold}) format('truetype'),
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'Poppins ExtraBold';
        src: local('Poppins ExtraBold'), local('PoppinsExtraBold'),
        url(${PoppinsExtraBold}) format('truetype'),
        font-weight: 800;
        font-style: normal;
    }
`
