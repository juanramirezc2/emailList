describe("Huge Template Engine",function(){
	
	     var render;

		 beforeEach(function() {
		 	render=HugeRender;

         });
          it("should be able to render a div", function() {
		    view={"label":"item1","url":"www"};
		    template='<div><H this.label H></div>';
		    rendered=render(template,view);
		    expect(rendered).toEqual("<div>item1</div>");
		    //expect(player.currentlyPlayingSong).toEqual(song);

		    //demonstrates use of custom matcher
		    //expect(player).toBePlaying(song);
		  });
		  it("should be able to render a a loop",function(){
		  	view={
		  		"persons":[
		  			{
			  			"name":"michael",
			  			"age" :"20"
		  			},
		  			{
		  				"name":"rose",
		  				"age" :"25"
		  			}
		  		 ]
		  	  };
		  	  template='<H for(var index in this.persons) { H>'
		  	  			+'<div><H this.persons[index].name H></div>'
		  	  			+'<div><H this.persons[index].age H></div>'
		  	  			+'<H } H>';
		  	  expected='<div>michael</div><div>20</div><div>rose</div><div>25</div>';
		  	  rendered=render(template,view);	
		  	  expect(rendered).toEqual(expected);
		   });


});