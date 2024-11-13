var rng1 = 69

register("messageSent", (message, event) => {
    if (message.toLowerCase().includes("!cps")) {
        setTimeout(function() {
            ChatLib.chat(CPS.getLeftClicks()+" CPS")
        }, 1000);
    }
  });

register("chat", (message, chat , player, event) => {
  setTimeout(function() {
  ChatLib.command("pc youre the bald one B)")
  }, 500);
}).setCriteria("baldsoul").setContains();

register("messageSent", (message, player, event) => {
  if (message.toLowerCase().includes("!pkickend")) {
      ChatLib.command(`p kick EndAStorm`)
  }
});

register("chat", (message, chat , player, event) => {
  rng1 = (Math.floor(Math.random() * 6))
  if (rng1 === 0.0)
    ChatLib.command("pc stop lying");
    else if (rng1 === 1.0)
      ChatLib.command("pc ok mr giants sword");
      else if (rng1 === 2.0)
        ChatLib.command("pc how much did the t4 rev pay u");
        else if (rng1 === 3.0)
          ChatLib.command("pc biased");
          else if (rng1 === 4.0)
            ChatLib.command("pc ok mr claymore")
            else if (rng1 === 5.0)
             ChatLib.command("pc LDM ball cube ball big cube ball next Rest In Peace niflheim vismuth slow wave fast robot keep going! slow ship go! slow ball Auto? fast dual ship slow fast ufo slow How? fast ship slow cube fast ball lol slow robot in out slow ufo take a break ????? !")
            if (rng1 === 5.0)
              setTimeout(function() {
               ChatLib.command("pc !!!! ?? ?! ??! !! ?! !! ?!!? ??! !! ?!!? ??! ?! ?? !! ?? !! ?? ?! ??! ?!!? ?? ??! ?! !! ?!!? slow ufo go! go! Yeah! fast cube dual wave watch out! faster! OMG! mini next next great! verified by NIFLHEIM koreaqwer")
              }, 420);
}).setCriteria("reaper scythe sucks").setContains();