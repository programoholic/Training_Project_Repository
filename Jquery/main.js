


$(function(){

	const $con=$('#testAjax');

	let $country=$('#country_val');

	let $suger=$('#suger_val');
	let $salt=$('#salt_val');  

	$.ajax({
		type:'GET',
		url:'http://localhost:3000/countries',

		success: function(countries){

			$.each(countries,function(i,country){

				$con.append('<tr> <td>'+ country.country +'</td> <td>' + Math.ceil(country.suger)+' </td> <td> '+ Math.ceil(country.salt)+' </td><td><button name="delete" type="submit" class="delB">Delete</button></td</tr>');

			});

		},

		error: function(){

			alert('error loading data');
		}

	});

	$('#add').on('click',function(){

		var country={
			country: $country.val().toUpperCase(),
			suger: parseInt($suger.val()),
			salt: parseInt($salt.val())    
		}



		const request = $.ajax({
			type:'POST',
			url :'http://localhost:3000/countries/',
			contentType: "application/json",
			data: JSON.stringify(country),
			dataType: "json"
		});

		request.done(function(newCountry){


			$con.append('<tr> <td class="country">'+ newCountry.country +'</td> <td>' + newCountry.suger+' </td> <td> '+ newCountry.salt+' </td> <td><button name="delete" type="submit" class="delB">Delete</button></tr>');

			$('.modal-body').append('<div class="alert alert-success fade in" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Sucess!</strong> Data inserted Sucessfully </div>');
			$('.alert-success').css('display','block');
			$('svg').remove();
			plotGraph();
		});

		request.fail(function(xhr,status,error){

			let msg= xhr.responseText;

			let reply=msg.split("/n");
			let  result;
			console.log(reply[0]); 
			console.log(xhr.responseText);
			console.log(country.country);


			if(reply[0].indexOf("duplicate")!=-1)
			{
				

				result=country.country+" Already Exists.";


			}

			$('.modal-body').append('<div class="alert alert-danger alert-dismissible" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Error!</strong> Failed to Update , '+ result +' !</div>');
			$('.alert-danger').css('display','block');
		});





	});

	$(document).on('click','.delB',function(){


		console.log('inside source');
		let  jsobj=$(this).parent().siblings(":first").text();
		let row=$(this).closest ('tr');    
		console.log("**************", jsobj);

		$.ajax({

			type:'DELETE',
			url : 'http://localhost:3000/countries/'+jsobj,
            //data : jsobj,

            success : function(){


          	// alert("inside success function");

          	row.remove();
          	$('svg').remove();
          	plotGraph();

          },

          error:function(err){

          	alert('error : '+ err);

          }

      });



		// alert("delte button clicked");

	});

	$('.close').on('click',function(){


		// $('.alert').css('display','none'); 

		// $(".close").on('click', '.alert-close', function(e) 
		// {   
		// 	$(this).parent().hide();


			$country.val("");
			$suger.val("");
			$salt.val("");


		});
		




		$('.numOnly').keyup(function () {
			if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
				this.value = this.value.replace(/[^0-9\.]/g, '');
			}
		});

	});