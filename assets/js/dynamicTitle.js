window.onload = function () {
  const favicon = document.getElementById("favicon");
  let pageTitle = document.title;
  let attentionMessage = "Hey!";

  document.addEventListener("visibilitychange", function (e) {
    let isPageActive = !document.hidden;

    if (!isPageActive) {
      toggle();
    } else {
      document.title = pageTitle;
    }
  });

  document.addEventListener("visibilitychange", function (e) {
    if (!document.hidden) {
      document.title = pageTitle;
      favicon.href = "./assets/images/dp_male.svg";
    }
  });

  function toggle() {
    if (document.title === attentionMessage) {
      document.title = pageTitle;
      favicon.href = "https://cdn.discordapp.com/avatars/482916816738582537/a044b9ac85d2f586f9d6599f5a371fc6.png?size=1024";
    } else {
      document.title = attentionMessage;
      favicon.href = "https://cdn.discordapp.com/avatars/482916816738582537/a044b9ac85d2f586f9d6599f5a371fc6.png?size=1024";
    }
  }
};
