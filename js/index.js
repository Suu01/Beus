window.onload = function() {

    // 이벤트를 실행시키기 위한 요소 불러들이기
    let brandTitle1 = document.querySelector('.brand-text1 a');
    let brandTitle2 = document.querySelector('.brand-text2 a');
    let brandTitle3 = document.querySelector('.brand-text3 a');
    let brandImage = document.querySelector('.brand-img');


    // brand의 title 클릭 시 bg-img 전환
    brandTitle1.onmouseover = function() {
        let changeImg1 = `<img src="./images/bgimg1.png">`;
        brandImage.innerHTML = changeImg1;
        preventDefault();
    };
    brandTitle2.onmouseover = function() {
        let changeImg2 = `<img src="./images/bgimg2.png">`;
        brandImage.innerHTML = changeImg2;
        preventDefault();
    }
    brandTitle3.onmouseover = function() {
        let changeImg3 = `<img src="./images/bgimg3.png">`;
        brandImage.innerHTML = changeImg3;
        preventDefault();
    }
};