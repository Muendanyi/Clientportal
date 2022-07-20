var x = document.getElementById('content');
if (x.style.display == "none"){
    x.style.display = "block"
} 


jQuery(document).ready(function () {
	//////////////
	//////////////
	$('#btn-print').click(function () {
		// window.print();

		let wspFrame = document.getElementById('frame').contentWindow;
		wspFrame.focus();
		wspFrame.print();
	});
	//////////////
	//////////////

	$('#btn-one').click(function () {

		html2canvas(document.querySelector('#content')).then((canvas) => {
			let base64image = canvas.toDataURL('image/png');
			console.log(base64image);
			let pdf = new jsPDF('p', 'px', [800, 880]);
			pdf.addImage(base64image, 'JPG', 50, 50, 600, 680);
			pdf.save('Invoice.pdf');
		});
	});
	//////////////
	//////////////
	// $('#btn-two').click(function () {
	// 	html2canvas(
	// 		document.querySelector('iframe').contentWindow.document.querySelector('.receipt-wrap'),).then((canvas) => {
	// 		let base64image = canvas.toDataURL('image/png');
	// 		// console.log(base64image);
	// 		let pdf = new jsPDF('p', 'px', [1600, 1131]);
	// 		pdf.addImage(base64image, 'PNG', 15, 15, 1140, 966);
	// 		pdf.save('webtylepress-receipt.pdf');
	// 	});
	// });
	//////////////
	//////////////
});