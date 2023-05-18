jQuery(".fs-awp-prev").click(function () {
  var awpSelector = ".award-winning-products";
  var activeCard = jQuery(awpSelector).children(".active");
  var activeCardIndex = activeCard.index();
  jQuery(activeCard).removeClass("active");
  if (activeCardIndex === 0) {
    jQuery(awpSelector + " > div:last-child").addClass("active");
  } else {
    jQuery(awpSelector + " > div:nth-child(" + activeCardIndex + ")").addClass(
      "active"
    );
    console.log(
      awpSelector + " > div:nth-child(" + (activeCardIndex + 1) + ")"
    );
  }
});
jQuery(".fs-awp-next").click(function () {
  var awpSelector = ".award-winning-products";
  var cardCount = jQuery(awpSelector).children(".award-winner-card").length;
  var activeCard = jQuery(awpSelector).children(".active");
  var activeCardIndex = activeCard.index();
  jQuery(activeCard).removeClass("active");
  if (activeCardIndex + 1 === cardCount) {
    jQuery(awpSelector + " > div:first-child").addClass("active");
  } else {
    jQuery(
      awpSelector + " > div:nth-child(" + (activeCardIndex + 2) + ")"
    ).addClass("active");
  }
});
jQuery(".fs-video").click(function () {
  var vidWidth = jQuery(this).width();
  var vidID = jQuery(this).attr("data-video-id");
  var locale = jQuery(this).attr("data-locale");
  var src = "https://www.youtube.com/embed/" + vidID;
  var iframe =
    '<iframe id="youtube" width="' +
    vidWidth +
    '" height="' +
    Math.round((vidWidth / 16) * 9) +
    '" frameborder="0" src="' +
    src +
    "?autoplay=1&modestbranding=1&hl=" +
    locale +
    '" allowfullscreen allow="autoplay"></iframe>';
  jQuery(this).html(iframe);
});
document.addEventListener("DOMContentLoaded", function () {
  var div,
    n,
    v = document.getElementsByClassName("youtube-player");
  for (n = 0; n < v.length; n++) {
    div = document.createElement("div");
    div.setAttribute("data-id", v[n].dataset.id);
    div.innerHTML = labnolThumb(v[n].dataset.id);
    div.onclick = labnolIframe;
    v[n].appendChild(div);
  }
});
function labnolThumb(id) {
  var thumb = '<img src="https://i.ytimg.com/vi/ID/maxresdefault.jpg">',
    play = '<div class="play"></div>';
  return thumb.replace("ID", id) + play;
}
function labnolIframe() {
  var iframe = document.createElement("iframe");
  var embed = "https://www.youtube.com/embed/ID?autoplay=1";
  iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "1");
  this.parentNode.replaceChild(iframe, this);
}
jQuery(document).ready(function () {
  if (jQuery(".bg_p").length > 0) {
    jQuery("html").css("overflow", "auto");
    var theadCol1 = jQuery(".bg_p thead th.column-1"),
      theadCol2 = jQuery(".bg_p thead th.column-2"),
      theadCol3 = jQuery(".bg_p thead th.column-3"),
      theadCol4 = jQuery(".bg_p thead th.column-4"),
      theadCol5 = jQuery(".bg_p thead th.column-5"),
      theadCol6 = jQuery(".bg_p thead th.column-6"),
      theadCol7 = jQuery(".bg_p thead th.column-7"),
      theadCol8 = jQuery(".bg_p thead th.column-8"),
      theadCol9 = jQuery(".bg_p thead th.column-9"),
      theadCol10 = jQuery(".bg_p thead th.column-10"),
      theadCol11 = jQuery(".bg_p thead th.column-11"),
      theadCol12 = jQuery(".bg_p thead th.column-12"),
      theadCol13 = jQuery(".bg_p thead th.column-13"),
      theadCol14 = jQuery(".bg_p thead th.column-14"),
      theadCol15 = jQuery(".bg_p thead th.column-15"),
      theadLastChild = jQuery(".bg_p thead th:last-child");
    var strong = jQuery(theadCol1).find("strong");
    jQuery("#bg_p__tbody_col1").append(strong);
    var attrTheadLastChild = theadLastChild.attr("class");
    theadLastChild
      .addClass(attrTheadLastChild + "_last")
      .removeClass(attrTheadLastChild);
    if (jQuery(".bg_cat").length > 0) {
      jQuery(".bg_p tbody tr td.column-1").addClass("bg_cat__head_title");
      jQuery(".bg_p tbody ").addClass("bg_cat__row_hover");
      jQuery(theadCol1).addClass("bg_p__d_null");
    }
    if (theadCol1.text().length > 1) {
      jQuery(".bg_p tbody tr td.column-1").each(function () {
        if (jQuery.trim(jQuery(this).html()).length > 0) {
        } else {
          jQuery(this).addClass("bg_p__d_null");
        }
      });
    }
    if (theadCol2.length > 0) {
      if (theadCol2.text().length > 1) {
        jQuery(".bg_p tbody tr td.column-2").each(function () {
          if (jQuery.trim(jQuery(this).html()).length > 0) {
            if (jQuery(".bg_cat").length == 0) {
              jQuery(this).prepend(
                '<h5 class="bg_p_thead__title bg_p__d_mob"><strong>' +
                  theadCol2.text() +
                  "<strong></h5>"
              );
            }
          } else {
            jQuery(this).addClass("bg_p__d_null");
          }
        });
      }
    }
    if (theadCol3.length > 0) {
      if (theadCol3.text().length > 1) {
        jQuery(".bg_p tbody tr td.column-3").each(function () {
          if (jQuery.trim(jQuery(this).html()).length > 0) {
            jQuery(this).prepend(
              '<h5 class="bg_p_thead__title bg_p__d_mob"><strong>' +
                theadCol3.text() +
                "<strong></h5>"
            );
          } else {
            jQuery(this).addClass("bg_p__d_null");
          }
        });
      }
    }
    if (theadCol4.length > 0) {
      if (theadCol4.text().length > 1) {
        jQuery(".bg_p tbody tr td.column-4").each(function () {
          if (jQuery.trim(jQuery(this).html()).length > 0) {
            jQuery(this).prepend(
              '<h5 class="bg_p_thead__title bg_p__d_mob"><strong>' +
                theadCol4.text() +
                "<strong></h5>"
            );
          } else {
            jQuery(this).addClass("bg_p__d_null");
          }
        });
      }
    }
    if (theadCol5.length > 0) {
      if (theadCol5.text().length > 1) {
        jQuery(".bg_p tbody tr td.column-5").each(function () {
          if (jQuery.trim(jQuery(this).html()).length > 0) {
            jQuery(this).prepend(
              '<h5 class="bg_p_thead__title bg_p__d_mob"><strong>' +
                theadCol5.text() +
                "<strong></h5>"
            );
          } else {
            jQuery(this).addClass("bg_p__d_null");
          }
        });
      }
    }
    if (theadCol6.length > 0) {
      if (theadCol6.text().length > 1) {
        jQuery(".bg_p tbody tr td.column-6").each(function () {
          if (jQuery.trim(jQuery(this).html()).length > 0) {
            jQuery(this).prepend(
              '<h5 class="bg_p_thead__title bg_p__d_mob"><strong>' +
                theadCol6.text() +
                "<strong></h5>"
            );
          } else {
            jQuery(this).addClass("bg_p__d_null");
          }
        });
      }
    }
    if (theadCol7.length > 0) {
      if (theadCol7.text().length > 1) {
        jQuery(".bg_p tbody tr td.column-7").each(function () {
          if (jQuery.trim(jQuery(this).html()).length > 0) {
            jQuery(this).prepend(
              '<h5 class="bg_p_thead__title bg_p__d_mob"><strong>' +
                theadCol7.text() +
                "<strong></h5>"
            );
          } else {
            jQuery(this).addClass("bg_p__d_null");
          }
        });
      }
    }
    if (theadCol8.length > 0) {
      if (theadCol8.text().length > 1) {
        jQuery(".bg_p tbody tr td.column-8").each(function () {
          if (jQuery.trim(jQuery(this).html()).length > 0) {
            jQuery(this).prepend(
              '<h5 class="bg_p_thead__title bg_p__d_mob"><strong>' +
                theadCol8.text() +
                "<strong></h5>"
            );
          } else {
            jQuery(this).addClass("bg_p__d_null");
          }
        });
      }
    }
    if (theadCol9.length > 0) {
      if (theadCol9.text().length > 1) {
        jQuery(".bg_p tbody tr td.column-9").each(function () {
          if (jQuery.trim(jQuery(this).html()).length > 0) {
            jQuery(this).prepend(
              '<h5 class="bg_p_thead__title bg_p__d_mob"><strong>' +
                theadCol9.text() +
                "<strong></h5>"
            );
          } else {
            jQuery(this).addClass("bg_p__d_null");
          }
        });
      }
    }
    if (theadCol10.length > 0) {
      if (theadCol10.text().length > 1) {
        jQuery(".bg_p tbody tr td.column-10").each(function () {
          if (jQuery.trim(jQuery(this).html()).length > 0) {
            jQuery(this).prepend(
              '<h5 class="bg_p_thead__title bg_p__d_mob"><strong>' +
                theadCol10.text() +
                "<strong></h5>"
            );
          } else {
            jQuery(this).addClass("bg_p__d_null");
          }
        });
      }
    }
    if (theadCol11.length > 0) {
      if (theadCol11.text().length > 1) {
        jQuery(".bg_p tbody tr td.column-11").each(function () {
          if (jQuery.trim(jQuery(this).html()).length > 0) {
            jQuery(this).prepend(
              '<h5 class="bg_p_thead__title bg_p__d_mob"><strong>' +
                theadCol11.text() +
                "<strong></h5>"
            );
          } else {
            jQuery(this).addClass("bg_p__d_null");
          }
        });
      }
    }
    if (theadCol12.length > 0) {
      if (theadCol12.text().length > 1) {
        jQuery(".bg_p tbody tr td.column-12").each(function () {
          if (jQuery.trim(jQuery(this).html()).length > 0) {
            jQuery(this).prepend(
              '<h5 class="bg_p_thead__title bg_p__d_mob"><strong>' +
                theadCol12.text() +
                "<strong></h5>"
            );
          } else {
            jQuery(this).addClass("bg_p__d_null");
          }
        });
      }
    }
    if (theadCol13.length > 0) {
      if (theadCol13.text().length > 1) {
        jQuery(".bg_p tbody tr td.column-13").each(function () {
          if (jQuery.trim(jQuery(this).html()).length > 0) {
            jQuery(this).prepend(
              '<h5 class="bg_p_thead__title bg_p__d_mob"><strong>' +
                theadCol13.text() +
                "<strong></h5>"
            );
          } else {
            jQuery(this).addClass("bg_p__d_null");
          }
        });
      }
    }
    if (theadCol14.length > 0) {
      if (theadCol14.text().length > 1) {
        jQuery(".bg_p tbody tr td.column-14").each(function () {
          if (jQuery.trim(jQuery(this).html()).length > 0) {
            jQuery(this).prepend(
              '<h5 class="bg_p_thead__title bg_p__d_mob"><strong>' +
                theadCol14.text() +
                "<strong></h5>"
            );
          } else {
            jQuery(this).addClass("bg_p__d_null");
          }
        });
      }
    }
    if (theadCol15.length > 0) {
      if (theadCol15.text().length > 1) {
        jQuery(".bg_p tbody tr td.column-15").each(function () {
          if (jQuery.trim(jQuery(this).html()).length > 0) {
            jQuery(this).prepend(
              '<h5 class="bg_p_thead__title bg_p__d_mob"><strong>' +
                theadCol15.text() +
                "<strong></h5>"
            );
          } else {
            jQuery(this).addClass("bg_p__d_null");
          }
        });
      }
    }
  }
});
