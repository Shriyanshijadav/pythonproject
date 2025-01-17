const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 2;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 3) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

// reviwe and rating
$(".rating-component .star").on("mouseover", function () {
    var onStar = parseInt($(this).data("value"), 10); //
    $(this).parent().children("i.star").each(function (e) {
      if (e < onStar) {
        $(this).addClass("hover");
      } else {
        $(this).removeClass("hover");
      }
    });
  }).on("mouseout", function () {
    $(this).parent().children("i.star").each(function (e) {
      $(this).removeClass("hover");
    });
  });
  
  $(".rating-component .stars-box .star").on("click", function () {
    var onStar = parseInt($(this).data("value"), 10);
    var stars = $(this).parent().children("i.star");
    var ratingMessage = $(this).data("message");
  
    var msg = "";
    if (onStar > 1) {
      msg = onStar;
    } else {
      msg = onStar;
    }
    $('.rating-component .starrate .ratevalue').val(msg);
    
  
   
    $(".fa-smile-wink").show();
    
    $(".button-box .done").show();
  
    if (onStar === 5) {
      $(".button-box .done").removeAttr("disabled");
    } else {
      $(".button-box .done").attr("disabled", "true");
    }
  
    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass("selected");
    }
  
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass("selected");
    }
  
    $(".status-msg .rating_msg").val(ratingMessage);
    $(".status-msg").html(ratingMessage);
    $("[data-tag-set]").hide();
    $("[data-tag-set=" + onStar + "]").show();
  });
  
  $(".feedback-tags  ").on("click", function () {
    var choosedTagsLength = $(this).parent("div.tags-box").find("input").length;
    choosedTagsLength = choosedTagsLength + 1;
  
    if ($(this).hasClass("choosed")) {
      $(this).removeClass("choosed");
      choosedTagsLength = choosedTagsLength - 2;
    } else {
      $(this).addClass("choosed");
      $(".button-box .done").removeAttr("disabled");
    }
  
    console.log(choosedTagsLength);
  
    if (choosedTagsLength <= 0) {
      $(".button-box .done").attr("enabled", "false");
    }
  });
  
  
  
  $(".compliment-container .fa-smile-wink").on("click", function () {
    $(this).fadeOut("slow", function () {
      $(".list-of-compliment").fadeIn();
    });
  });
  
  
  
  $(".done").on("click", function () {
    $(".rating-component").hide();
    $(".feedback-tags").hide();
    $(".button-box").hide();
    $(".submited-box").show();
    $(".submited-box .loader").show();
  
    setTimeout(function () {
      $(".submited-box .loader").hide();
      $(".submited-box .success-message").show();
    }, 1500);
  });
  