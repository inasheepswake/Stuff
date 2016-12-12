


<!?xml version="1.0" encoding="utf-8"?>

<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<div id="clckwiselogo">

	<a id="clckwiselogoHover" href="http://clckwise.com"></a>
	
	<div id="clckwiselogographic">
		<svg id="C_clckwiselogo" viewBox="0 0 600 800" width="50%" heigth="50%">
				<polygon  fill="#F5B054" points="358.003,61.695 46.272,373.425 358.003,685.148 		"/>
		</svg>
		<svg id="K1_clckwiselogo" viewBox="0 0 600 800"  width="50%" heigth="50%">
				<polygon id="K1_clckwiselogo" fill="#EF4944" points="202.131,217.56 513.867,529.287 202.131,529.287"/>
		</svg>
		<svg id="K2_clckwiselogo" viewBox="0 0 600 800"  width="50%" heigth="50%">
				<polygon id="K2_clckwiselogo" fill="#68A3D8" points="202.131,217.56 513.867,217.56 358.003,373.425"/>
		</svg>
		<svg id="L_clckwiselogo" viewBox="0 0 600 800"  width="50%" heigth="50%">
				<polygon id="L_clckwiselogo" fill="#F282A1" points="46.272,217.56 358.003,529.287 46.272,529.287"/>
		</svg>
		<!svg id="stroke_clckwiselogo" viewBox="0 0 600 800"  width="50%" heigth="50%">
		<!path  fill="none" stroke="#FFFFFF" stroke-width="5.6693" stroke-miterlimit="10" d="M522.323,684.424
			c0,6.626-4.03,11.999-9,11.999H46.816c-4.97,0-9-5.373-9-11.999V62.42c0-6.627,4.03-12,9-12h466.508c4.97,0,9,5.373,9,12V684.424z"/>
		<!/svg>
	</div>
</div>
<style>
#clckwiselogo{
	position: absolute;
	top: 0;
	width: 110px;
	height: 120px;
	z-index: 1000
}
#clckwiselogoHover{
	position: absolute;
	width: 110px;
	height: 140px;
	z-index: 100000;
	opacity: .5
}
#clckwiselogographic{
	position: absolute;
	top: 0;
	margin: 0 0 0 -100px;
	width: 220px;
	height: 150px;
	z-index: 100;
	opacity: .6;
	transition: .5s;
}
#clckwiselogographic *{
	position: absolute;
	opacity: .8;
	-webkit-animation-timing-function: ease-out;
	-webkit-animation: 60s alternate infinite;
}
@-webkit-keyframes clckwise{
	0%		{-webkit-transform: rotateX(0deg)}
	100%	{-webkit-transform: rotateX(360deg)}
}
@-webkit-keyframes C_clckwise{
	0%		{-webkit-transform: rotateX(0deg)}
	100%	{-webkit-transform: rotateX(10800deg)}
}
@-webkit-keyframes L_clckwise{
	0%		{-webkit-transform: rotateX(0deg)}
	100%	{-webkit-transform: rotateX(900deg)}
}
@-webkit-keyframes K1_clckwise{
	0%		{-webkit-transform: rotateX(0deg) rotateX(0deg)}
	100%	{-webkit-transform: rotateX(3600deg) rotateX(90deg)}
}
@-webkit-keyframes K2_clckwise{
	0%		{-webkit-transform: rotateX(0deg)}
	100%	{-webkit-transform: rotateX(54000deg)}
}
</style>

<script>
	$("#clckwiselogoHover").mouseover(function() {
		$("#clckwiselogo").css({"opacity":"1"});
		$("#C_clckwiselogo").css({"-webkit-animation-name":"C_clckwise"});
		$("#L_clckwiselogo").css({"-webkit-animation-name":"L_clckwise"});
		$("#K1_clckwiselogo").css({"-webkit-animation-name":"K1_clckwise"});
		$("#K2_clckwiselogo").css({"-webkit-animation-name":"K2_clckwise"});
	});
	$("#clckwiselogoHover").mouseout(function() {
		$("#clckwiselogo").css({"opacity":".8"});
		$("#C_clckwiselogo").css({"-webkit-animation-name":"none"});
		$("#L_clckwiselogo").css({"-webkit-animation-name":"none"});
		$("#K1_clckwiselogo").css({"-webkit-animation-name":"none"});
		$("#K2_clckwiselogo").css({"-webkit-animation-name":"none"});
	});
	
	
</script>