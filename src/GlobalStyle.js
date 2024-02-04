import NotoSansKRBold from "./assets/fonts/NotoSansKR-Bold.ttf";
import NotoSansKRExtraBold from "./assets/fonts/NotoSansKR-ExtraBold.ttf";
import NotoSansKRExtraLight from "./assets/fonts/NotoSansKR-ExtraLight.ttf";
import NotoSansKRLight from "./assets/fonts/NotoSansKR-Light.ttf";
import NotoSansKRMedium from "./assets/fonts/NotoSansKR-Medium.ttf";
import NotoSansKRRegular from "./assets/fonts/NotoSansKR-Regular.ttf";
import NotoSansKRSemiBold from "./assets/fonts/NotoSansKR-SemiBold.ttf";
import NotoSansKRThin from "./assets/fonts/NotoSansKR-Thin.ttf";
import PamelaBestie from "./assets/fonts/PamelaBestie.ttf";
import NanumGothicRegular from "./assets/fonts/NanumGothic-Regular.ttf";
import NanumGothicBold from "./assets/fonts/NanumGothic-Bold.ttf";
import NanumGothicExtraBold from "./assets/fonts/NanumGothic-ExtraBold.ttf";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Noto Sans KR";
        src: url((${NotoSansKRThin}));
        font-weight: 100
    }

    @font-face {
        font-family: "Noto Sans KR";
        src: url((${NotoSansKRExtraLight}));
        font-weight: 100
    }

    @font-face {
        font-family: "Noto Sans KR";
        src: url((${NotoSansKRLight}));
        font-weight: 300
    }

    @font-face {
        font-family: "Noto Sans KR";
        src: url((${NotoSansKRRegular}));
        font-weight: 400
    }
    @font-face {
        font-family: "Noto Sans KR";
        src: url((${NotoSansKRMedium}));
        font-weight: 500
    }

    @font-face {
        font-family: "Noto Sans KR";
        src: url((${NotoSansKRSemiBold}));
        font-weight: 600
    }
    
    @font-face {
        font-family: "Noto Sans KR";
        src: url((${NotoSansKRBold}));
        font-weight: 700
    }
    
    @font-face {
        font-family: "Noto Sans KR";
        src: url((${NotoSansKRExtraBold}));
        font-weight: 800
    }

    @font-face {
        font-family:"pamelabestie";
        src:url(${PamelaBestie});
    }

    @font-face {
        font-family:"nanum";
        src:url(${NanumGothicRegular});
        font-weight: 400;
    }
    @font-face {
        font-family:"nanum";
        src:url(${NanumGothicBold});
        font-weight: 700;
    }
    @font-face {
        font-family:"nanum";
        src:url(${NanumGothicExtraBold});
        font-weight: 800;
    }

    #root,*,body,html {
        box-sizing: border-box
    }

    #root,body,html {
        width: 100%;
        height: 100%;
        margin: 0
    }

    #root {
        color: #000;
        font-family: "nanum"
    }

    header {
        height: 130px
    }

    main {
        padding-top: 130px;
        height: 100%
    }

    button {
        border: 0;
        background: 0 0;
        color: #fff;
        font-weight: 700;
        padding: 0
    }

    p {
        margin: 5px
    }

    a,a:visited {
        color: inherit;
        text-decoration: none
    }

    .swal2-popup{
        font-family: "nanum";
        position: sticky;
    }

    .swal2-title {
        font-weight: bold;
        font-size: 1rem;
    }

    input{
        border-radius: 2px;
    }

    input:focus {
        outline: none;
        border: 2px solid #999;
    }

 `;

export default GlobalStyle;
