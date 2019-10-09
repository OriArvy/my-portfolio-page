TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  afterLoad: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const welcome = section.querySelector(".welcome");
    const start = section.querySelector(".start-exploring");
    const pointing = section.querySelector(".pointing-down-emote");
    const tl = new TimelineMax({ delay: 0.5 });
    if (destination.index === 0) {
    tl.fromTo(title, 1, { x: "-50%", y: "-10%", opacity: 0 }, { x: "-50%", y: "0%", opacity: 1 })
    .fromTo(welcome, 1.5, { x: "45%", y: "35%", opacity: 0 }, { x: "-20%", y: "-35%", opacity: 1 })
    .fromTo(start, 2, { x: "-90%", y: "35%", opacity: 0}, {x: "-50%", y: "-20%", opacity: 1})
    .fromTo(pointing, 0.25, {y: "80%", opacity: 0}, {y: "50%", opacity: 1})
      }
  },
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h1");
    const about = section.querySelector(".about-me");
    const welcome = section.querySelector(".welcome");
    const start = section.querySelector(".start-exploring");
    const pointing = section.querySelector(".pointing-down-emote");
    const photo = section.querySelector(".photo");
    const paragraph = section.querySelectorAll(".paragraph");
    const other = section.querySelector(".other-projects");
    const repaythedelay = section.querySelector(".repaythedelay");
    const venuemenu = section.querySelector(".venuemenu");
    const youtube = section.querySelector(".youtube-button");
    const spotify = section.querySelector(".spotify-button");
    const tl = new TimelineMax({ delay: 0.5 });
    if (destination.index === 1) {
    tl.fromTo(about, 1, { y: "10%", opacity: 0 }, { y: "-20%", opacity: 1 })
    .fromTo(paragraph, 1.5, { x: "60%", y: "45%", opacity: 0}, {x: "-60%", y: "-45%", opacity: 1})
    .fromTo(photo, 1, { height: "0%" }, { height: "40%", ease: Power2.easeInOut })
    .fromTo(pointing, 0.25, {y: "80%", opacity: 0}, {y: "50%", opacity: 1})
      } else if (destination.index === 2) {
          tl.fromTo(other, 1, { y: "40%", opacity: 0 }, { y: "-20%", opacity: 1 })
          .fromTo(repaythedelay, 1.5, { x: "-100%", y: "45%", opacity: 0}, {x: "-25%", y: "-45%", opacity: 1})
          .fromTo(venuemenu, 1.5, {x: "75%", y: "45%", opacity: 0}, {x: "-75%", y: "-45%", opacity: 1})
          .fromTo(pointing, 0.25, {y: "80%", opacity: 0}, {y: "50%", opacity: 1})

      } else if (destination.index === 3) {
          tl.fromTo(about, 1, { x: "50%", y: "20%", opacity: 0 }, { x: "-50%", y: "-20%", opacity: 1 })
          .fromTo(paragraph[0], 3, { opacity: 0}, { opacity: 1})
          .fromTo(paragraph[1], 3, { opacity: 0}, { opacity: 1})
          .fromTo(paragraph[2], 3, { opacity: 0}, { opacity: 1})
          .fromTo(paragraph[3], 3, { opacity: 0}, { opacity: 1})
          .fromTo(paragraph[4], 3, { opacity: 0}, { opacity: 1})
          .fromTo(paragraph[5], 3, { opacity: 0}, { opacity: 1})
          .fromTo(paragraph[6], 3, { opacity: 0}, { opacity: 1})
          .fromTo(paragraph[7], 3, { opacity: 0}, { opacity: 1})
          .fromTo(paragraph[8], 3, { opacity: 0}, { opacity: 1})
          .fromTo(paragraph[9], 3, { opacity: 0}, { opacity: 1})
          .fromTo(paragraph[10], 3, { opacity: 0}, { opacity: 1})
          .fromTo(pointing, 0.25, {y: "80%", opacity: 0}, {y: "50%", opacity: 1})
      } else if (destination.index === 4) {
          tl.fromTo(title, 1, { y: "40%", opacity: 0 }, { y: "-20%", opacity: 1 })
          .fromTo(paragraph, 1, { opacity: 0}, { opacity: 1})
          .fromTo(youtube, 0.5, { x: "-100%", y: "-70%", opacity: 0}, {x: "-30%", y: "-70%", opacity: 1})
          .fromTo(spotify, 0.5, {x: "75%", y: "-70%", opacity: 0}, {x: "-60%", y: "-70%", opacity: 1})
          .fromTo(pointing, 0.25, {y: "80%", opacity: 0}, {y: "50%", opacity: 1})
        } else if (destination.index === 5) {
          tl.fromTo(about, 1, { y: "40%", opacity: 0 }, { y: "-20%", opacity: 1 })
          .fromTo(paragraph, 1, { opacity: 0}, { opacity: 1})
          .fromTo(pointing, 0.25, {y: "80%", opacity: 0}, {y: "50%", opacity: 1})
        } else if (destination.index === 6) {
          tl.fromTo(about, 1, { y: "40%", opacity: 0 }, { y: "-20%", opacity: 1 })
          .fromTo(paragraph, 1, { opacity: 0}, { opacity: 1})
        }
  }
});
