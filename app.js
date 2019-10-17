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
          tl.fromTo(other, 1, { y: "40%", opacity: 0 }, { y: "-30%", opacity: 1 })
          .fromTo(repaythedelay, 1.5, { x: "-100%", y: "45%", opacity: 0}, {x: "-40%", y: "-45%", opacity: 1})
          .fromTo(venuemenu, 1.5, {x: "75%", y: "45%", opacity: 0}, {x: "-58%", y: "-45%", opacity: 1})
          .fromTo(pointing, 0.25, {y: "80%", opacity: 0}, {y: "50%", opacity: 1})

      } else if (destination.index === 3) {
          let pos = 0;
          const speed = 35;
          const str = "It's time for me to properly introduce myself, so Hi again! My name is Rokas and I am from Lithuania 🇱🇹. I was born in the capital city of Lithuania - Vilnius. I lived in Vilnius for 19 years before deciding on moving to London. In my early years I used to love spending my summer days playing football and basketball with my friends, but as the time passed some of them flew oversees while others grew older and found other interests. That lead to me spending more and more time on my own, and for me the best way to spend that time alone, was playing video games. Growing up I used to be the shyest kid ever, but recently I have started to gain more confidence. Although I am still a quite shy, awkward, nervous and scared of life, nowadays I tend to feel a lot more free and a lot more willing to try new things. Which is probably why I am embarking on this new programming journey. Generally I like to think of myself as relaxed, calm and easy going person, but I also love competition, so I tend to try my best and give my all in everything I do!"

          function type() {
            if (pos<str.length) {
              document.querySelector(`.text-position`).innerHTML += str.charAt(pos);
              pos++;
              setTimeout(type, speed)
            }
          }
          type()
      } else if (destination.index === 4) {
          tl.fromTo(title, 1, { y: "40%", opacity: 0 }, { y: "-20%", opacity: 1 })
          .fromTo(paragraph, 1, { opacity: 0}, { opacity: 1})
          .fromTo(youtube, 0.5, { x: "-100%", y: "-70%", opacity: 0}, {x: "-60%", y: "-60%", opacity: 1})
          .fromTo(spotify, 0.5, {x: "75%", y: "-70%", opacity: 0}, {x: "0%", y: "-60%", opacity: 1})
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




