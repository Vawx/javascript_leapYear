function Year( year ) {
  this.year = year;
};

Year.prototype.isLeapYear = function( ) {
      if( isNaN( this.year ) || this.year % 1 !== 0 )
      {
          return false;
      }
      if ( this.year % 4 === 0 || this.year % 100 === 0 || this.year % 400 === 0 )
      {        
        return true;
      }
      return false;
  };
  
  function resetFields( ) {
      
  }
  
  $(document).ready(function() {
    $("form#new-year").submit(function(event) {
    event.preventDefault( );
     
    var inputYear = new Year( $("input#new-leap-year").val( ) );
     
    console.log( "input year: " + inputYear );
     
    if ( isNaN( inputYear.year ) || inputYear.year % 1 !== 0 )
    {
        if( inputYear.year % 1 !== 0 )
        {
           $("ul#years").append("<li><span class='year'>" + "NOT A WHOLE NUMBER" + "</span></li>" );   
        }
        else
        {
            $("ul#years").append("<li><span class='year'>" + "NOT A NUMBER" + "</span></li>" );   
        }
    }
    else
    {
        $("ul#years").append("<li><span class='year'>" + "Year: " + inputYear.year + " - " + inputYear.isLeapYear( ) + "</span></li>" );        
    }

    console.log("add years?");
    $(".year").last( ).click( function() {
       $("#show-years").show( );
       $("#show-years h2").text(inputYear.leapYear( ));
    });
    
    resetFields( );
    }); 
  });