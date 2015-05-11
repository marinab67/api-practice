$(function(){

	$("#search-term").submit(function(event) { 
		event.preventDefault(); 
		var searchTerm = $("#query").val(); 
		getRequest(searchTerm);
	});

	function getRequest(searchTerm) { 
		$.getJSON('http://www.omdbapi.com/?s=' + searchTerm + '&r=json', function(data) { 
			showResults(data.Search);
		});
	}

	function showResults(results) { 
		$.each(results, function(index, value) { 
			console.log(value.Title);
			$("#search-results").html("<p>" + value.Title + "<br></p>");
		});
	}
	

});