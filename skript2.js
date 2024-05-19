let aNi = document.querySelectorAll('.animal');
let foCus = 0;
let loAD = document.querySelector('.Loading')
















aNi[foCus].classList.add('new')
document.addEventListener('keydown', function () {
    aNi[foCus].classList.remove('new')
    if (event.key === 'ArrowLeft' ) {
        foCus = (foCus - 1 + aNi.length) % aNi.length
        

        document.addEventListener("keydown", function () {
            if (event.key === "Enter" ) {
            loAD.classList.add('loud')
            
            setTimeout(function () {
                loAD.classList.remove('loud')
                
            }, 2000);
            window.location.href = "./cat.html";
            }
        });
    }

    else if (event.key === 'ArrowRight') {
        foCus = (foCus + 1) % aNi.length
        
        document.addEventListener('keydown', function () {
        if (event.key === "Enter") {

            loAD.classList.add('loud')

            setTimeout(function () {

            loAD.classList.remove('loud')

            window.location.href = "./duck.html";

            }, 2000);
            }
        })

        
    }
    aNi[foCus].classList.add('new')
})