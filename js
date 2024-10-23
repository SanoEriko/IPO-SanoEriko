//アコーディオンをクリックした時の動作
$('.question__title').on('click', function() {//タイトル要素をクリックしたら
	$('.answer').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる
    
	var findElm = $(this).next(".answer");//タイトル直後のアコーディオンを行うエリアを取得
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去    
	}else{//それ以外は
		$('.close').removeClass('close'); //クラス名closeを全て除去した後
		$(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
		$(findElm).slideDown(500);//アコーディオンを開く
	}
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function(){
	$('question__list li:first-of-type').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
	$(".open").each(function(index, element){	//openクラスを取得
		var Title =$(element).children('.question__title');	//openクラスの子要素のtitleクラスを取得
		$(Title).addClass('close');				///タイトルにクラス名closeを付与し
		var Box =$(element).children('.answer');	//openクラスの子要素boxクラスを取得
		$(Box).slideDown(500);					//アコーディオンを開く
	});
});
