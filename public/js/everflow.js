var siteUrls = [
  "https://www.idrotherapylove.com",
  "https://www.beverlyhillsscoops.com",
  "https://www.beverlyhillsscoops.com/argan",
];

var DEFAULT_ORGANIC_AFFID = 38;

// Helper function to get URL parameters
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

window.onload = function () {
  var elems = document.body.getElementsByTagName("a");

  const offer_id = getUrlParameter("oid") || "22";
  const affiliate_id = getUrlParameter("affid") || DEFAULT_ORGANIC_AFFID;
  const sub1 = getUrlParameter("sub1") || "";
  const sub2 = getUrlParameter("sub2") || "";
  const sub3 = getUrlParameter("sub3") || "";
  const sub4 = getUrlParameter("sub4") || "";
  const sub5 = getUrlParameter("sub5") || "";
  const uid = getUrlParameter("uid") || "";
  const source_id = getUrlParameter("source_id") || "idrotherapy-news-investigation-red-oli";

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
};
