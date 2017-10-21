const LeastAbsent = ( array ) =>
{
  const UniqueArray = ( array ) =>
  {
    const temp = {};
    for ( const position in array )
    {
      temp[ array[ position ] ] = true;
    }
    const newArray = [];
    for ( const value in temp )
    {
      newArray.push( value );
    }
    return newArray;
  }
  const sortedArray = UniqueArray( array ).sort();
  const Answer = ( potential, position ) =>
  {
    if ( potential == sortedArray[ position ] )
    {
      return Answer( potential + 1, position + 1 );
    }
    else
    {
      return potential;
    }
  };
  return Answer( 1, 0 );
}
console.log( LeastAbsent( [ 1, 3, 6, 4, 1, 2, 1 ] ) );
console.log( LeastAbsent( [ 1, 3, 6, 4, 1, 2 ] ) );
console.log( LeastAbsent( [ 1, 2, 3 ] ) );
console.log( LeastAbsent( [-1, -3] ) );
