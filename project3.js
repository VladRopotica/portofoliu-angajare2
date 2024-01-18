
        let offsetStart = 0;
        let offsetEnd = 0;

      window.addEventListener('scroll', () => {
          document.documentElement.style.setProperty('--scroll', ( window.pageYOffset - offsetStart ) / ( document.body.offsetHeight - offsetStart - offsetEnd - window.innerHeight ));
     }, false);