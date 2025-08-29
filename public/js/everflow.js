var siteUrls = [
  "idrotherapylove.com",
  "beverlyhillsscoops.com",
];

var DEFAULT_ORGANIC_AFFID = 38;

window.onload = function () {
  var elems = document.body.getElementsByTagName("a");

  const offer_id = EF.urlParameter("oid") || "22";
  const affiliate_id = EF.urlParameter("affid") || DEFAULT_ORGANIC_AFFID;
  const sub1 = EF.urlParameter("sub1") || "";
  const sub2 = EF.urlParameter("sub2") || "";
  const sub3 = EF.urlParameter("sub3") || "";
  const sub4 = EF.urlParameter("sub4") || "";
  const sub5 = EF.urlParameter("sub5") || "";
  const uid = EF.urlParameter("uid") || "";
  const source_id = EF.urlParameter("source_id") || "idrotherapy-news-investigation-red-oli";

  if (offer_id) {
    for (var i = 0; i < elems.length; i++) {
      if (siteUrls.some(domain => elems[i].href.includes(domain))) {
        var url = new URL(elems[i].href);
        url.searchParams.set("oid", offer_id);
        url.searchParams.set("affid", affiliate_id);
        url.searchParams.set("sub1", sub1);
        url.searchParams.set("sub2", sub2);
        url.searchParams.set("sub3", sub3);
        url.searchParams.set("sub4", sub4);
        url.searchParams.set("sub5", sub5);
        url.searchParams.set("uid", uid);
        url.searchParams.set("source_id", source_id);
        elems[i].href = url.href;
      }
    };
  }

  EF.impression({
      offer_id,
      affiliate_id,
      sub1,
      sub2,
      sub3,
      sub4,
      sub5,
      uid,
      source_id,
  });
};
