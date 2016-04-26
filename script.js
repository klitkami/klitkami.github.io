$(function () {
$('.categ li').on('click', function() {
	var i=0;
	var j=$('.categ li').length;
	for (i; i < j; i++) {
	$('.categ li').eq(i).removeClass('line');
	};
	$(this).addClass('line');

	if ($(this).is('#categ_1')) {
		$('.sm1 img').attr('src','img/works/portf_8.jpg');
		$('.sm2 img').attr('src','img/works/portf_7.jpg');
		$('.sm3 img').attr('src','img/works/portf_6.jpg');
		$('.mid1 img').attr('src','img/works/portf_5.jpg');
		$('.mid2 img').attr('src','img/works/portf_4.jpg');
		$('.mid3 img').attr('src','img/works/portf_3.jpg');
		$('.b1 img').attr('src','img/works/portf_2.jpg');
		$('.b2 img').attr('src','img/works/portf_1.jpg');
	} else 
	if ($(this).is('#categ_2')) {
		$('.sm1 img').attr('src','img/works/portf1_1.png');
		$('.sm2 img').attr('src','img/works/portf1_2.png');
		$('.sm3 img').attr('src','img/works/portf1_3.png');
		$('.mid1 img').attr('src','img/works/portf1_4.png');
		$('.mid2 img').attr('src','img/works/portf1_5.png');
		$('.mid3 img').attr('src','img/works/portf1_6.png');
		$('.b1 img').attr('src','img/works/portf1_7.png');
		$('.b2 img').attr('src','img/works/portf1_8.png');
	} else 
	if ($(this).is('#categ_3')) {
		$('.sm1 img').attr('src','img/works/portf_6.jpg');
		$('.sm2 img').attr('src','img/works/portf_8.jpg');
		$('.sm3 img').attr('src','img/works/portf_7.jpg');
		$('.mid1 img').attr('src','img/works/portf_4.jpg');
		$('.mid2 img').attr('src','img/works/portf_3.jpg');
		$('.mid3 img').attr('src','img/works/portf_5.jpg');
		$('.b1 img').attr('src','img/works/portf_1.jpg');
		$('.b2 img').attr('src','img/works/portf_2.jpg');
	} else 
	if ($(this).is('#categ_4')) {
		$('.sm1 img').attr('src','img/works/portf1_6.png');
		$('.sm2 img').attr('src','img/works/portf1_8.png');
		$('.sm3 img').attr('src','img/works/portf1_7.png');
		$('.mid1 img').attr('src','img/works/portf1_4.png');
		$('.mid2 img').attr('src','img/works/portf1_3.png');
		$('.mid3 img').attr('src','img/works/portf1_5.png');
		$('.b1 img').attr('src','img/works/portf1_1.png');
		$('.b2 img').attr('src','img/works/portf1_2.png');
	} else 
	if ($(this).is('#categ_5')) {
		$('.sm1 img').attr('src','img/works/portf_2.jpg');
		$('.sm2 img').attr('src','img/works/portf_1.jpg');
		$('.sm3 img').attr('src','img/works/portf_5.jpg');
		$('.mid1 img').attr('src','img/works/portf_3.jpg');
		$('.mid2 img').attr('src','img/works/portf_4.jpg');
		$('.mid3 img').attr('src','img/works/portf_7.jpg');
		$('.b1 img').attr('src','img/works/portf_8.jpg');
		$('.b2 img').attr('src','img/works/portf_6.jpg');
	}; 
});
$('.buttons .squ').on('click', function() {
	var i=0;
	var j=$('.buttons .squ').length;
	for (i; i < j; i++) {
	$('.buttons .squ').eq(i).removeClass('active');
	};
	$(this).addClass('active');

	if ($(this).is('.but1')) {
		changeClass (activeLi, 1);
	} else
	if ($(this).is('.but2')) {
		changeClass (activeLi, 2);
	} else
	if ($(this).is('.but3')) {
		changeClass (activeLi, 3);
	} else
	if ($(this).is('.but4')) {
		changeClass (activeLi, 4);
	}
	});

	var activeLi = $('.active_blocks li');
	function changeClass (activeLi, r) {
		var i=0;
		var h=activeLi.length;
		for (i; i < h; i++) {
			activeLi.eq(i).removeClass('show_active');
		};
			$('.move'+ r +'').addClass('show_active');
		};

$('.work img').on('click', function() {
	var imgsrc = $(this).attr('src');
	$('.fullImg').html('<div><img src=' + imgsrc +'></div>').addClass('imgshow');
	$('.imgshow').animate({opacity:'1'}, 300);
	});
$('.fullImg').on('click', function() {
	$('.imgshow').animate({opacity:'0'}, 300);
	$('.fullImg').removeClass('imgshow');
	});
});
