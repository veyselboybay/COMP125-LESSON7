//IIFE
"use strinct";
(function(){


    function Start()
    {
        let veysel=new Person("Veysel",25);
        veysel.saysHello();

    }

    window.addEventListener("load",Start);

})();