//change fun from true to false to disable "fun" features
var fun = true
var rng1 = 69



function fb() {
  if (fun === true)
    rng1 = (Math.floor(Math.random() * 6))
    if (rng1 === 0.0)
      ChatLib.command("pc you cant dps in f7 with fb -end, 2024")
      else if (rng1 === 1.0)
        ChatLib.command("pc im not a multi trillionaire")
        else if (rng1 === 2.0)
          ChatLib.command("pc but i get kill aura for secret bats")
          else if (rng1 === 3.0)
            ChatLib.command("pc https://www.youtube.com/watch?v=XHe2Mbci5YI&t=29s")
            else if (rng1 === 4.0)
              ChatLib.command('pc "But fb is g- g- good... -Chomper 2024" -omega, 2024')
              else
                ChatLib.command("pc LDM ball cube ball big cube ball next Rest In Peace niflheim vismuth slow wave fast robot keep going! slow ship go! slow ball Auto? fast dual ship slow fast ufo slow How? fast ship slow cube fast ball lol slow robot in out slow ufo take a break ????? !")
                if (rng1 === 5.0)
                  setTimeout(function() {
                  ChatLib.command("pc !!!! ?? ?! ??! !! ?! !! ?!!? ??! !! ?!!? ??! ?! ?? !! ?? !! ?? ?! ??! ?!!? ?? ??! ?! !! ?!!? slow ufo go! go! Yeah! fast cube dual wave watch out! faster! OMG! mini next next great! verified by NIFLHEIM koreaqwer")
                  }, 420);
}

function fbgood() {
  if (fun === true)
    rng1 = (Math.floor(Math.random() * 2))
    if (rng1 === 0.0)
      ChatLib.command("pc ikr");
      else
        ChatLib.command("pc fax");
}

function rs() {
  if (fun === true)
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
}

function pkickend() {
  if (fun === true)
    ChatLib.command(`p kick EndAStorm`)
}

function baldsoul() {
    if (fun === true)
    setTimeout(function() {
    ChatLib.command("pc youre the bald one B)")
    }, 500);
}



register("messageSent", (message, event) => {
  if (message.toLowerCase().includes("!cps")) {
      setTimeout(function() {
          ChatLib.chat(CPS.getLeftClicks()+" CPS")
      }, 1000);
  }
});


register("chat", (message, chat , player, event) => {
  baldsoul()
}).setCriteria("baldsoul").setContains();


register("chat", (message, chat , player, event) => {
  pkickend()
}).setCriteria("!pkickend").setContains();


register("chat", (message, chat , player, event) => {
  ChatLib.command("sendcoords")
}).setCriteria("!sc").setContains();


register("chat", (message, chat , player, event) => {
  fb()
}).setCriteria("frozen blaze sucks").setContains();

register("chat", (message, chat , player, event) => {
  fb()
}).setCriteria("fb sucks").setContains();

register("chat", (message, chat , player, event) => {
  fb()
}).setCriteria("necron is better").setContains();

register("chat", (message, chat , player, event) => {
  fb()
}).setCriteria("necron good").setContains();

register("chat", (message, chat , player, event) => {
  fb()
}).setCriteria("necron goog").setContains();

register("chat", (message, chat , player, event) => {
  fb()
}).setCriteria("necron is the best").setContains();


register("chat", (message, chat , player, event) => {
  fbgood()
}).setCriteria("fb good").setContains();

register("chat", (message, chat , player, event) => {
  fbgood()
}).setCriteria("fb goog").setContains();

register("chat", (message, chat , player, event) => {
  fbgood()
}).setCriteria("necron sucks").setContains();


register("chat", (message, chat , player, event) => {
  rs()
}).setCriteria("reaper scythe sucks").setContains();
