var h2s = jQuery("h2:not(.widget-title, .ignore-toc)");
var h2sCount = h2s.length;
if (h2sCount == 0) {
    jQuery("#tocScrollNav").addClass("hidden");
    jQuery(".content-toc").addClass("hidden");
  }


class TableOfContents {
  /*
      The parameters from and to must be Element objects in the DOM.
  */
  constructor({ from, to }) {
      this.fromElement = from;
      this.toElement = to;
      // Get all the ordered headings.
      this.headingElements = this.fromElement.querySelectorAll("h2:not(.widget-title, .ignore-toc), h3:not(.widget-title, .ignore-toc)");
      this.tocElement = document.createElement("div");
  }

  /*
      Get the most important heading level.
      For example if the article has only <h2>, <h3> and <h4> tags
      this method will return 2.
  */
  getMostImportantHeadingLevel() {
      let mostImportantHeadingLevel = 3; // <h6> heading level
      for (let i = 0; i < this.headingElements.length; i++) {
          let headingLevel = TableOfContents.getHeadingLevel(this.headingElements[i]);
          mostImportantHeadingLevel = (headingLevel < mostImportantHeadingLevel) ?
              headingLevel : mostImportantHeadingLevel;
      }
      return mostImportantHeadingLevel;
  }

  /*
      Generate a unique id string for the heading from its text content.
  */
  static generateId(headingElement) {
      return headingElement.textContent.replace(/\s+/g, "_");
  }

  /*
      Convert <h1> to 1 … <h6> to 6.
  */
  static getHeadingLevel(headingElement) {
      switch (headingElement.tagName.toLowerCase()) {
          case "h2": return 1;
          case "h3": return 2;
          default: return 1;
      }
  }
  
  generateToc() {
      let currentLevel = this.getMostImportantHeadingLevel() - 1,
          currentElement = this.tocElement;

      for (let i = 0; i < this.headingElements.length; i++) {
          let headingElement = this.headingElements[i],
              headingLevel = TableOfContents.getHeadingLevel(headingElement),
              headingLevelDifference = headingLevel - currentLevel,
              linkElement = document.createElement("a");

          if (!headingElement.id) {
              headingElement.id = TableOfContents.generateId(headingElement);
          }
          linkElement.href = `#${headingElement.id}`;
          linkElement.textContent = headingElement.textContent;

          if (headingLevelDifference > 0) {
              // Go down the DOM by adding list elements.
              for (let j = 0; j < headingLevelDifference; j++) {
                  let listElement = document.createElement("ol"),
                      listItemElement = document.createElement("li");
                  listElement.appendChild(listItemElement);
                  currentElement.appendChild(listElement);
                  currentElement = listItemElement;
              }
              currentElement.appendChild(linkElement);
          } else {
              // Go up the DOM.
              for (let j = 0; j < -headingLevelDifference; j++) {
                  currentElement = currentElement.parentNode.parentNode;
              }
              let listItemElement = document.createElement("li");
              listItemElement.appendChild(linkElement);
              currentElement.parentNode.appendChild(listItemElement);
              currentElement = listItemElement;
          }

          currentLevel = headingLevel;
      }
      this.tocElement.firstChild.setAttribute("id", "contentToc");
      this.tocElement.firstChild.setAttribute("class", "list-unstyled hidden");
      this.toElement.appendChild(this.tocElement.firstChild);
  }
}

document.addEventListener("DOMContentLoaded", () =>
  new TableOfContents({
      from: document.querySelector(".entry-content"),
      to: document.querySelector("#toc")
  }).generateToc()
);

jQuery(".content-toc_showhide").click(function () {
  var state = jQuery(this).attr("data-state");
  var show = jQuery(this).attr("data-show");
  var hide = jQuery(this).attr("data-hide");
  if (state === "shown") {
    jQuery(this).attr("data-state", "hidden");
    jQuery(this).text(show);
    jQuery(this).parent().next("#contentToc").addClass("hidden");
  } else {
    jQuery(this).attr("data-state", "shown");
    jQuery(this).text(hide);
    jQuery(this).parent().next("#contentToc").removeClass("hidden");
  }
});