
  // نختار العنوان
  let title = document.getElementById("title");

  // نختار العنوان الفرعي
  let subtitle = document.getElementById("subtitle");

  // نربط الحدث مباشرة باستخدام خاصية onclick
  title.onclick = function () {
    subtitle.innerText = "welcome in toorchoof";
  };

