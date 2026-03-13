(function () {
  "use strict";

  // ============================================================
  // 1. Swiper Carousel for Product Pages
  // ============================================================
  var swiperEl = document.querySelector(".swiper");
  if (!swiperEl) return;

  var slides = swiperEl.querySelectorAll(".swiper-slide");
  var totalSlides = slides.length;

  // Pagination dots: "flex gap-1 justify-between mt-2"
  var paginationContainer = document.querySelector(
    ".flex.gap-1.justify-between.mt-2"
  );
  var dots = paginationContainer
    ? paginationContainer.querySelectorAll("button")
    : [];

  // Arrow buttons: inside "flex gap-2" after the dots section
  var controlsRow = paginationContainer
    ? paginationContainer.nextElementSibling
    : null;
  var arrowContainer = controlsRow
    ? controlsRow.querySelector(".flex.gap-2")
    : null;
  var btnPrev = arrowContainer ? arrowContainer.children[0] : null;
  var btnNext = arrowContainer ? arrowContainer.children[1] : null;

  var swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 32,
    loop: false,
    speed: 300,
    on: {
      init: function () {
        updateControls(this);
      },
      slideChange: function () {
        updateControls(this);
      },
    },
  });

  function updateControls(sw) {
    var idx = sw.activeIndex;
    for (var i = 0; i < dots.length; i++) {
      if (i === idx) {
        dots[i].className = dots[i].className.replace(
          "bg-primary-60",
          "bg-primary-20"
        );
      } else {
        dots[i].className = dots[i].className.replace(
          "bg-primary-20",
          "bg-primary-60"
        );
      }
    }
    if (btnPrev) {
      if (sw.isBeginning) {
        btnPrev.setAttribute("disabled", "");
      } else {
        btnPrev.removeAttribute("disabled");
      }
    }
    if (btnNext) {
      if (sw.isEnd) {
        btnNext.setAttribute("disabled", "");
      } else {
        btnNext.removeAttribute("disabled");
      }
    }
  }

  if (btnPrev) {
    btnPrev.addEventListener("click", function () {
      swiper.slidePrev();
    });
  }
  if (btnNext) {
    btnNext.addEventListener("click", function () {
      swiper.slideNext();
    });
  }

  for (var i = 0; i < dots.length; i++) {
    (function (index) {
      dots[index].addEventListener("click", function () {
        swiper.slideTo(index);
      });
    })(i);
  }

  // ============================================================
  // 2. Full Review Data (same 20 reviews, 14 have "続きを読む")
  // ============================================================
  // Slide indices with "続きを読む": 0,1,2,3,4,5,8,11,12,13,14,15,16,18
  var fullReviews = [
    {
      title: "今後の人生の投資✨",
      content:
        "最初に飲んだ感想は「まずいー‼︎」でした。\nでも飲んでるうち慣れてきました！\n1日2本飲み続けて2ヶ月近くなりますが、体感として日中の眠気が感じにくくなりました。朝もスッキリ起きれています。\n腸内フローラ検査の結果も詳しく書いてあり、何よりLINEで相談したところ、下川先生がご丁寧にお答えくださり感激しました！\n今後の人生の健康のための投資として、これからも続けていきたいです！",
      age: "40代",
      purchase: "定期購入",
    },
    {
      title: "1クール試してみて",
      content:
        "発酵高麗人参と腸内フローラの検査をしました。\n\n発酵高麗人参はもっと飲みにくいと思っていたけど、思ったより飲みやすいといった感じです。もちろん特有の苦み、えぐみみたいなものもあるけどそれがまたいい。特にお酒を飲むときには重宝しております。\n\nぜひ続けたい商品です。\n\n腸内フローラの検査に関しては、想像以上に良くなく本当にやって良かったなと思います。改善に向けてはこれからですが、改めて症状と検査の結果と納得する部分もあり、わかりやすくアドバイスもいただけるので助かります。\n\n自分の身体のパフォーマンスには伸びしろがあることが分かったので継続していきたいと思います。",
      age: "40代",
      purchase: "定期購入",
    },
    {
      title: "快腸！",
      content:
        "1日に何回かバナナのような健康な便がでるようになりました\n驚くほど快腸です\n肌も綺麗になり下腹もスッキリしてきました\n初めは高いと思って始めたのですが\n今では無くてはならないものです",
      age: "50代",
      purchase: "定期購入",
    },
    {
      title: "排便回数アップ",
      content:
        "もともと便秘ではなく、1日1度の排便はありましたが、こちらの発酵高麗人参を摂取すると、より良い便が出ていて効果をすぐに感じられました。腸の調子が良いと心も落ち着きお肌の調子も良いです。そして、検査をして結果アドバイスももらえ、次の検査のために食生活も変化させ、良い結果になるよう心がけています。前向きな生活が送れるので少し価格は高い（内容にしてはとても安価だと思いますが…生活の面を考えると…）ですが、続けていこうと思います。",
      age: "40代",
      purchase: "単品購入",
    },
    {
      title: "初めて飲んだ翌朝一発目でしっかり効果を実感し、正直驚きました",
      content:
        "12月下旬から飲み始め、現在3ヶ月目に入ったところです。もともとお腹が緩くなりやすく、朝の弱さや疲れやすさを感じていました。1年半以上ジムで筋トレを続けていても体脂肪が落ちにくく、腸内環境が悪いせいもあるのではと気になっていたこともあり試してみました。\n\n初めてKINSPRIMEを飲んだ翌日は、今までの自分では考えられないくらいスッキリ目覚められたので、その即効性にはさすがに驚きました。お酒を飲んだ翌日のだるさも残らなかったので、効果を感じて毎日欠かさず飲んでいます。ただ、私のケースでは目覚めの良さに関しては2週間ほどで少しずつ薄れてしまいました。やはりKINSPRIMEだけに頼りきりになるのではなく、普段の食生活から根本的に見直さないとダメだなと反省し、いまは下川先生のYouTubeで学びながら腸活を実践しています。\n\n後から届いた腸内フローラ検査結果では、予想通りあらゆる項目が最低スコアという絶望的な結果でした...。\nでもある意味、自覚している症状と検査結果がかなりリンクする内容だったこともあり、腸活を続けることで改善するかもしれないという希望も同時に感じられました。どう改善すべきかも公式LINEで相談したところ、「全然救いようありますよ！」と励ましの言葉と、具体的で的確なフィードバックをもらうことができ、とても感動しました。自分の生活習慣の甘さを受け止めつつ、アドバイスを参考にしながら地道に腸活を続けていこうと思います。",
      age: "30代",
      purchase: "定期購入",
    },
    {
      title: "看病続きでも倒れない体へ。菌ケアで叶える「熟睡」と「活力」",
      content:
        "KINS PRIMEを飲み始めてから、体の内側からの強さが変わったのを実感しています。\n驚いたのは、今年家族が2回もインフルエンザにかかり、私が付きっきりで看病をしていた時のことです。周囲が倒れていく中、唯一私だけは風邪ひとつ引かず、元気に過ごすことができました。まさに「お守り」のような存在です。\n​また、睡眠の質にも大きな変化がありました。以前は夜中に目が覚めることもありましたが、今では朝まで一度も起きることなくぐっすり。翌朝起きた時のスッキリ感が、以前とは格段に違います。\n​余談ですが、夫にも勧めて飲ませてみたところ、寝つきが良くなり日中の活力が変わったと喜んでいます。これからも夫婦で健康維持のために続けていきたいです。",
      age: "30代",
      purchase: "定期購入",
    },
    // Slide 6 (効果がすぐにわかりました) - no button
    // Slide 7 (飲みやすい点) - no button
    {
      title: "続けたくなる商品",
      content:
        "今まで色々なサプリを飲みましたが、あまり体感が無く結局続きませんでした。\nKINSPRIMEも自分に合っているのか、効果があるのか不安で、初めは単品購入して飲んでみたところ、かなり早くに体感がありました。\n睡眠の質が良くなり、以前より寝起きがすっきり。驚きました。\nそして風邪など引きにくくなり、いつも喉の不調から悪化して熱が出たりしていましたが、熱が出る前に落ち着くようになったり、家族のインフルエンザもうつらずに済みました。\n続けやすいというより、続けたいと強く思い定期購入を始めました。\n決して安くはありませんが、本当に助けられています。",
      age: "40代",
      purchase: "定期購入",
    },
    // Slide 9 (身体が欲している感覚) - no button
    // Slide 10 (味も全く問題なく飲みやすい) - no button
    {
      title: "疲れにくくなりました",
      content:
        "購入して2週間、毎日飲んで感じたのは疲れにくくなったこと。平日の睡眠時間が5時間程度しか取れないため、週の後半はだるさが残るのですがそれがないです。しばらく続けてみたいと思っています。味はまだ慣れず、水と一緒に飲んでいます。漢方薬は飲み慣れているのですが、これはまだもう少し時間がかかりそう。",
      age: "50代",
      purchase: "単品購入",
    },
    {
      title: "生活のQOLが爆あがりしました",
      content:
        "飲みやすさについてですが、個人差はあると思いますが、私は適度な苦味があり、おいしいと逆に感じるタイプです。続けやすさは朝ご飯と夕ご飯の後に飲むようにルーティン化しているので、飲み忘れもなく続けやすいです。体感ですが飲んだすぐその日から深い睡眠がしっかり取れるようになり、睡眠の質が爆上がり、しました。まず1番効果を感じた点がそこです。そしてお通じも劇的に良くなりまして、腸活にもすごく最適でした。もともとひじきを食べたり、千切り大根を食べたり、食物繊維を毎日たっぷり取っていたのですが、さらにお通じもしっかり出るようになりました。睡眠の質が向上し、お通じがしっかりでだすと、体の回復が驚くほど上がります。おかげさまで毎日の生活の質が上がりました。健康のありがたさを身に染みて感じましたので、その分仕事や家庭生活に余裕を持って取り組めるようになり、周りの人にも優しくなれたような気がします(笑)。お通じも良くなってきたので、肌もつやつやで、周りの人からも肌がきれいだねと言われています。今回発酵高麗人参を飲ませていただいたことで二十代の頃のような健康に一歩近づきました。これからも楽しく健康に配慮した、食生活や生活習慣を続けまして、末永く、より健康に生活できるようにしていきたいと思います。周りの40代の友人にもお勧めしたいと思います。下川さんを始めとしてキンズの皆様、こんな素晴らしい商品を開発していただきましてありがとうございました。感謝申し上げます🥲",
      age: "40代",
      purchase: "定期購入",
    },
    {
      title: "目覚めの軽やかさ",
      content:
        "飲み始めの体感は寝起きの軽さです！\n会食などで普段より睡眠時間が削られて、疲れが取れない状態でも寝起き後の気怠さや、目の奥に残っているような眠気が残る感じがありませんでした！\nまた腸内フローラ検査によって自分が持っている菌の認知とそこからのケア、アドバイスが毎回丁寧かつ的確で腸活意欲が沸々湧いてきます！！",
      age: "30代",
      purchase: "定期購入",
    },
    {
      title: "続けやすい",
      content:
        "お酒が残らない、手足が冷たくない（冷えを感じない）などの効果が感じられたことが嬉しく、続けるモチベーションになっています。味もすぐに慣れ、今では美味しいと感じます。個包装で携帯しやすく、時間、場所を問わずにすぐ飲めるところも気に入っています。",
      age: "40代",
      purchase: "単品購入",
    },
    {
      title: "睡眠の質と疲労改善",
      content:
        "購入の決め手はYouTube動画です。\n発酵高麗人参を飲んでたから、下川先生のおっしゃる通り、次の3点を実感してます。\n①男性機能改善\n②睡眠の質改善\n③疲労軽減（身体が軽い）\n\n飲む前まで、上記3点を問題だと感じていませんでしたが、飲んでみて、こんなに変わるんだ？！と体感しています。\n率直に、高額なのでどのくらい続けられるか、お財布と相談しながら考えたいと思います。ただ、気持ち的にはずっと続けたいです。",
      age: "30代",
      purchase: "定期購入",
    },
    {
      title: "生活の必需品！！",
      content:
        "何か体の不具合を改善するために購入したわけではなく、日々の腸活の延長として1ヶ月前から試しに始めました。値段が安くないため、効果を実感出来なければ解約する予定でしたが、今では生活の必需品になっています。一番効果を感じるのは、仕事において疲労を感じなくなったことです。朝と15時頃に1包ずつ飲んでいますが、残業中も高い集中力を保てています。購入後1月間継続してブーストがかかっているような感覚であり、プラセボではないと思っています。プラスαで本来の購入目的である腸活(健康増進)にも効果を発揮するのであれば、辞める理由は今のところありません。\n一点だけ要望ですが、定期購入をしていれば商品が無くなる頃にはまた届くものだと思っていましたが、ちょうど2ヶ月目を迎える現在、1日2包を飲み続けて今日で無くなるタイミングで決済確認メールを受信し、発送手続きが進むようなので商品が切れます。今後改善出来るならお願いしたいです。\n引き続きよろしくお願いします。",
      age: "30代",
      purchase: "定期購入",
    },
    // Slide 17 (1回サイズで手軽) - no button
    {
      title: "何をやっても何を飲んでも効かなかったのに",
      content:
        "これを飲むまでは、何をやっても、何を飲んでもお腹の調子がすっきりしませんでした。そのつもりで試しに飲んでみました。\n驚いたことにお通じが毎日スルッと出るようになりました。それまではお腹がガスで張っているような感じでした。腸のマッサージに行くといつもお腹が張っていることを指摘されました。食べ物には気をつけていました。揚げ物は食べず、食物繊維は毎日たっぷり取っていましたがいつもすっきりしない腸の状態でしたので睡眠の質も悪く夜中に起きることもしばしばありました。これを飲み始めてからはぐっすりと眠ることが出来ていますし朝もすっきりと目覚めています。あと、疲れにくくなったので、手放せなくなりました。",
      age: "50代",
      purchase: "単品購入",
    },
    // Slide 19 (飲みやすさと実感について) - no button
  ];

  // ============================================================
  // 3. Review Modal (centered overlay, matching original site)
  // ============================================================
  var modalOverlay = null;

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function buildStarSvg() {
    return (
      '<svg viewBox="0 0 24 24" class="shrink-0 size-6" aria-hidden="true">' +
      "<defs>" +
      '<linearGradient id="star-grad" x1="0%" y1="0%" x2="100%" y2="15%">' +
      '<stop offset="0%" stop-color="#4bdff1"></stop>' +
      '<stop offset="100%" stop-color="#ab4bf1"></stop>' +
      "</linearGradient></defs>" +
      '<polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" fill="url(#star-grad)"></polygon>' +
      "</svg>"
    );
  }

  function openReviewModal(review) {
    // Create overlay
    modalOverlay = document.createElement("div");
    modalOverlay.className = "fixed inset-0 z-[1000] overflow-y-auto";
    modalOverlay.style.cssText = "animation: fadeIn 200ms ease-out";
    modalOverlay.innerHTML =
      '<div class="fixed inset-0 bg-primary-80/50" aria-hidden="true"></div>' +
      '<div class="flex min-h-full items-center justify-center px-4 py-8">' +
      '<div class="relative z-[1001] w-full max-w-[600px] min-w-[320px] sm:min-w-[400px] rounded-lg mx-2 py-6 flex flex-col gap-4">' +
      '<div class="sticky top-0 pt-6 flex justify-end">' +
      '<button type="button" class="ml-auto rounded-lg hover:scale-120 duration-110 cursor-pointer" data-close-review>' +
      '<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<line x1="0.726112" y1="0.661095" x2="17.6967" y2="17.6317" stroke="#ECECEE"></line>' +
      '<line y1="-0.5" x2="24" y2="-0.5" transform="matrix(-0.707107 0.707107 0.707107 0.707107 18 1.01465)" stroke="#ECECEE"></line>' +
      "</svg></button></div>" +
      '<div class="text-primary-0 rounded-md bg-linear-to-tr from-[#151519] from-70% to-[#494958]">' +
      '<div class="flex flex-col py-4 px-8 gap-4">' +
      '<div class="flex items-center">' +
      '<div class="flex gap-1 mr-3">' +
      buildStarSvg() +
      buildStarSvg() +
      buildStarSvg() +
      buildStarSvg() +
      buildStarSvg() +
      "</div></div>" +
      '<div class="text-[18px]">' +
      escapeHtml(review.title) +
      '<hr class="text-primary-40"></div>' +
      '<p class="text-[14px] whitespace-pre-line">' +
      escapeHtml(review.content) +
      "</p>" +
      '<div class="text-xs flex justify-between">' +
      "<span>(" +
      escapeHtml(review.age) +
      " / " +
      escapeHtml(review.purchase) +
      ")</span>" +
      "</div></div></div></div></div>";

    document.body.appendChild(modalOverlay);
    document.body.style.overflow = "hidden";

    // Close on backdrop click
    modalOverlay
      .querySelector(".fixed.inset-0.bg-primary-80\\/50")
      .addEventListener("click", closeReviewModal);

    // Close on X button
    modalOverlay
      .querySelector("[data-close-review]")
      .addEventListener("click", closeReviewModal);
  }

  function closeReviewModal() {
    if (modalOverlay) {
      document.body.removeChild(modalOverlay);
      modalOverlay = null;
      document.body.style.overflow = "";
    }
  }

  // Close on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeReviewModal();
  });

  // Bind "続きを読む" buttons
  var reviewIndex = 0;
  for (var s = 0; s < slides.length; s++) {
    var readMoreBtn = slides[s].querySelector(
      "button.text-primary-20"
    );
    if (
      readMoreBtn &&
      readMoreBtn.textContent.trim() === "続きを読む"
    ) {
      (function (idx) {
        readMoreBtn.addEventListener("click", function () {
          if (fullReviews[idx]) openReviewModal(fullReviews[idx]);
        });
      })(reviewIndex);
      reviewIndex++;
    }
  }

  // Bind "(123)" review count button — scroll to reviews
  var reviewCountBtn = document.querySelector(
    "button.text-primary-0.underline.underline-offset-4"
  );
  if (reviewCountBtn) {
    reviewCountBtn.addEventListener("click", function () {
      swiperEl.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Bind "こちら" CTA button in last slide
  var lastSlide = slides[slides.length - 1];
  if (lastSlide) {
    var ctaBtn = lastSlide.querySelector("button");
    if (ctaBtn && ctaBtn.textContent.includes("こちら")) {
      ctaBtn.addEventListener("click", function () {
        window.location.href = "../account/login-mypage-orders.html";
      });
    }
  }
})();
