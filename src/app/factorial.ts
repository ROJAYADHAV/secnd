export function factorial(n){

    var f=1;

    var i;

    if(n<0)

      {

          return 'invalid';

      }

      

      else{

  

      

    for(i=1;i<=n;i++)

      {

          f=f*i;

  

      }

      return f;

  }

  }