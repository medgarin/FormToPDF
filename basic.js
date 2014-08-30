function demoPDF() {  
   var doc = new jsPDF();  
   var nombre = document.getElementById("fname").value;
   doc.text(10, 10, 'Prueba PDF');  
   doc.text(10, 20, 'El nombre es');  
   doc.text(10, 40, 'Su correo es');  
   doc.setFont("times");  
   doc.setFontType("italic");  
   doc.text(50, 40, document.getElementById("email").value); //append email id in pdf  
   doc.setFontType("bold");  
   doc.setTextColor(255, 0, 0); //set font color to red  
   doc.text(60, 20, document.getElementById("fname").value); //append first name in pdf  
   doc.text(100, 20, document.getElementById("lname").value); //append last name in pdf  
   doc.addPage(); // add new page in pdf  
   doc.setTextColor(165, 0, 0);  

   doc.save(nombre); 
}  