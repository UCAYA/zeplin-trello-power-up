/* global TrelloPowerUp */

var WHITE_ICON = './images/icon-white.svg';
var GRAY_ICON = './images/icon-gray.svg';
var COLOR_ICON = './images/icon-color.svg';

TrelloPowerUp.initialize({
  'attachment-thumbnail': function(t, options) {

    var re = /https:\/\/scene\.zeplin\.io\/project\/([^\/]+)\/screen\/([^\/\?]+)/i;
    var result = re.exec(options.url);
    if(result) {

      var zeplinFormatUrl = "https://app.zeplin.io/project.html#pid={pid}&sid={sid}";
      var zeplinUrl = zeplinFormatUrl.replace("{pid}", result[1]).replace("{sid}", result[2]);

      // return an object with some or all of these properties:
      // url, title, image, openText, modified (Date), created (Date), createdBy, modifiedBy
      return {
        url: options.url,
        title: "Zeplin Scene - Screen",
        image: {
          url: COLOR_ICON,
          logo: true // false if you are using a thumbnail of the content
        },
        openText: 'Open screen',
        initialize: {
          type: 'iframe',
          url: t.signUrl(TrelloPowerUp.util.relativeUrl('link.html'), {url: zeplinUrl, text: "Open screen in Zeplin app"})
        }
      };
    } else {
      throw t.NotHandled("Not a handled URL");
    }
  },
  'format-url': function(t, options) {
    throw t.NotHandled();
  }
});
