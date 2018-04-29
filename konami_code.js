const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0

function init() {

  const body = document.querySelector('body');
    body.addEventListener('keydown', function(event){
        let key = parseInt(event.detail || event.which);
        if (key === code[index]) {
          index++

          if (index === code.length){
            alert("HUZZAH!!!!!");
            index = 0
          }

        } else {
          index = 0
        }
      }
    );

}
