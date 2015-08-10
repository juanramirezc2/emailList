describe("Ajax call", function() {
  it("Should call get function to get data by ajax", function(done) {
     spyOn(Ajax,'get');
     Ajax.get("/api/nav.json");
     expect(Ajax.get).toHaveBeenCalled();
     done(); 
  });
});