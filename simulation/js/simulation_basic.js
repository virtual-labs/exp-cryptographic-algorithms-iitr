A  = new Array (35);
			   Chars0 = "................................"; // 0-31
			   Chars1 = ' !"#$%&.()*.,-./0123456789:;<=>?'; //32-63
			   Chars2 = "@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_"; //64-95
			   Chars3 = "..abcdefghijklmnopqrstuvwxyz{|}~."; //96-127
			   Chars4 = "................................"; //128 - 159
			   Chars5 = "��������������������������������"; //160 - 191
			   Chars6 = "��������������������������������"; //192 - 223
			   Chars7 = "��������������������������������"; //224 - 255
			   all_Chars = Chars0+Chars1+Chars2+Chars3+Chars4+Chars5+Chars6+Chars7;
		   
		   function clear() {
			   document.gen_form.public_key.value ="";
			   document.gen_form.private_key.value= "";
			   document.myform.input.value="";
			   document.myform.encrypt_key.value = "";
			   document.myform.crypted.value="";
		   }
		   
		   function generate() {
		        today = new Date();
		        key1 = today.getTime()%256;
		        document.gen_form.public_key.value = key1;
		        document.gen_form.private_key.value= 256 - key1;
				document.getElementById("cell3").disabled=false;	  
		   }
		   
	var message;			   
	function encrypt() 
	{
	var a=document.getElementById("cell1");
	var b=document.getElementById("cell2");
    if(a.value=="" && b.value==""){
		Swal.fire({
			backdrop:false,
		   target: '#boxx',
		   position:'center',
			customClass: {
			  container: 'position-absolute',
			  popup:"swal2-popup"
			},
			text:"First enter message and encryption key.",
	 
			}); 
        
    }
    else if(a.value==""){
		Swal.fire({
            backdrop:false,
           target: '#boxx',
           position:'center',
            customClass: {
              container: 'position-absolute',
              popup:"swal2-popup"
            },
            title:'Oops..',
            text:"You have not entered a message.",
            icon:'info'
            });
       
    }
    else if(b.value=="")
    {
		Swal.fire({
            backdrop:false,
           target: '#boxx',
           position:'center',
            customClass: {
              container: 'position-absolute',
              popup:"swal2-popup"
            },
            title:'Oops..',
            text:"You have not entered a encryption key.",
            icon:'info'
            })

    }
	else if(b.value == document.gen_form.private_key.value)
	{
		Swal.fire({
            backdrop:false,
           target: '#boxx',
           position:'center',
            customClass: {
              container: 'position-absolute',
              popup:"swal2-popup"
            },
			title:'Oops..',
            text:"Please enter your public key.",
            icon:'warning'
            })
	}
	else if(b.value!==document.gen_form.private_key.value && b.value!=document.gen_form.public_key.value)
	{
		Swal.fire({
            backdrop:false,
           target: '#boxx',
           position:'center',
            customClass: {
              container: 'position-absolute',
              popup:"swal2-popup"
            },
			title:'Oops..',
            text:"Please enter a valid key.",
            icon:'error'
            })
	}
	else{
		len = document.myform.input.value.length;
			   message = document.myform.input.value;
			   key = document.myform.encrypt_key.value;
		   
			   document.myform.crypted.value="";
			   for (n=0;n<len;n++) {
				A[n] =  message.charCodeAt(n);
					for (j=0;j<key;j++){
				   A[n] ++; 
					}
					//document.myform.crypted.value += " ";
				document.myform.crypted.value += A[n];
				
				   }
				   Swal.fire({
					backdrop:false,
				   target: '#boxx',
				   position:'center',
				   width:'380',
					customClass: {
					  container: 'position-absolute',
					  popup:"swal2-popup"
					},
					text:"Message encrypted.",
					
					})
	}
	document.getElementById("cell5").disabled=false;	  
		   }

		   function sleep(ms) {
			return new Promise(resolve => setTimeout(resolve, ms));
		 }

		   async function decrypt() {
			var a=document.getElementById("cell4");
			if(a.value == document.gen_form.public_key.value)
			{
				Swal.fire({
					backdrop:false,
				   target: '#boxx',
				   position:'center',
					customClass: {
					  container: 'position-absolute',
					  popup:"swal2-popup"
					},
					title:'Oops..',
					text:"Please enter your private key.",
					icon:'warning'
					})
				
			}
			else if(a.value=="")
			{
				Swal.fire({
					backdrop:false,
				   target: '#boxx',
				   position:'center',
				   width:'390',
					customClass: {
					  container: 'position-absolute',
					  popup:"swal2-popup"
					},
					title:'Key Missing',
					text:"Enter the key.",
					icon:'info'
					});
			}
			
			else{
				key = document.decrypt_form.decrypt_key.value - 256;
				len = document.myform.input.value.length;
				document.decrypt_form.decrypted.value="";
					for (i=0;i<len;i++) {
					decrypt_value = (A[i]+key)%256;
					document.decrypt_form.decrypted.value += all_Chars.charAt(decrypt_value);
					
				}
				await sleep(1000);

				if(message==document.decrypt_form.decrypted.value)
				{
					Swal.fire({
						backdrop:false,
					   target: '#boxx',
					   position:'center',
						customClass: {
						  container: 'position-absolute',
						  popup:"swal2-popup"
						},
						title:'Done',
						text:"Entered message and decrypted message matches.",
						icon:'success'
						});
				}
				else{
					Swal.fire({
						backdrop:false,
					   target: '#boxx',
					   position:'center',
						customClass: {
						  container: 'position-absolute',
						  popup:"swal2-popup"
						},
						title:'Oops...',
						text:"Input message and decrypted message do not match. Please reset and follow the instructions.",
						icon:'error'
						});
				}
			}
			  
		   }