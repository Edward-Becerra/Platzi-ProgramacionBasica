var numero = 100;
var div = false;

for(i=1; i<=100; i++)
{
  if( divisible(i, 3) )
  {
    document.write("Fizz");
  }

  if ( divisible( i, 5) )
  {
    document.write("Buzz");
  }

  if( !divisible(i, 3) && !divisible(i, 5) )
  {
    document.write(i);
  }

  document.write("<br />");
}

function divisible(num, divisor)
{
  if(num % divisor == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}
