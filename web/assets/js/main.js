import asideScroll from './animations/aside.js' 


const afterLoading = () => {
    asideScroll();
}

loadingScreen(afterLoading);