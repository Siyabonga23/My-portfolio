window.addEventListener('scroll',function(){
    const navbar =this.document.querySelector('.navbar');

    if (this.window.scrollY>900){
        navbar.classList.add('scrolled');

    }else{
        navbar.classList.remove('scrolled');
    }

});