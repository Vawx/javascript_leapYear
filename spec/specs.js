
describe( 'LeapYear', function() {
   it("checks if a year is a leap year", function() {
      var testYear = new Year(2000);
      expect(testYear.isLeapYear( ) ).to.equal(true) 
   });
   it("checks if a year is not a leap year", function() {
      var testYear = new Year(1993);
      expect(testYear.isLeapYear( ) ).to.equal(false) 
   });
   it("checks if input is a digit", function() {
      var testYear = new Year(2004);
      expect(testYear.isLeapYear( ) ).to.equal(true) 
   });
    it("checks if input is NOT a digit", function() {
      var testYear = new Year("asdfas");
      expect(testYear.isLeapYear( ) ).to.equal(false) 
   });
    it("checks if input is a whole digit", function() {
      var testYear = new Year(2008);
      expect(testYear.isLeapYear( ) ).to.equal(true) 
   });
    it("checks if input is NOT a whole digit", function() {
      var testYear = new Year(200.38);
      expect(testYear.isLeapYear( ) ).to.equal(false) 
   });
});