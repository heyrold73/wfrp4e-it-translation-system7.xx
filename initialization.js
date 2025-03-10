Hooks.on("init", () => {
  game.settings.register("wfrp4e-it-translation-system7xx", "initialized", {
    name: "Initialization",
    scope: "world",
    config: false,
    default: false,
    type: Boolean,
  });

  game.settings.registerMenu("wfrp4e-it-translation-system7xx", "init-dialog", {
    name: "WFRP4e Setup Italiano",
    label: "Setup IT",
    hint: "Importa o aggiorna i contenuti dal modulo WFRP4e Manuale Base",
    type: WFRP4eCoreITInitWrapper,
    restricted: true,
  });
});

class WFRP4eCoreITInitWrapper extends FormApplication {
  render() {
    let html = `<img src="modules/wfrp4e-core/art/ui/logo.webp" style="margin-right: auto;margin-left: auto;width: 40%;display: block;"/>
      <p class="notes">Initializzare il Modulo Manuale Base WFRP4e?<br><br>Import or update all Journals and Scenes into your world, sort them into folders, and place map pins</p>
      <ul>
      <li>12 Journal Entries containing 271 Pages</li>
      <li>52 Rollable Tables</li>
      <li>3 Scenes - Including Reikland Map with Pins</li>
      </ul>
      <p class="notes">
      Warhammer Fantasy Roleplay 4th Edition Core Module.<br><br>

      No part of this publication may be reproduced, distributed, stored in a retrieval system, or transmitted in any form by any means, electronic, mechanical, photocopying, recording or otherwise without the prior permission of the publishers.<br><br>
      
      Warhammer Fantasy Roleplay 4th Edition © Copyright Games Workshop Limited 2023. Warhammer Fantasy Roleplay 4th Edition, the Warhammer Fantasy Roleplay 4th Edition logo, GW, Games Workshop, Warhammer, The Game of Fantasy Battles, the twin-tailed comet logo, and all associated logos, illustrations, images, names, creatures, races, vehicles, locations, weapons, characters, and the distinctive likeness thereof, are either ® or TM, and/or © Games Workshop Limited, variably registered around the world, and used under licence. Cubicle 7 Entertainment and the Cubicle 7 Entertainment logo are trademarks of Cubicle 7 Entertainment Limited. All rights reserved.<br><br>
      
      <img src="modules/wfrp4e-core/c7.png" height=50 width=50/>   <img src="modules/wfrp4e-core/warhammer.png" height=50 width=50/>
      <br>
      Published by: <b>Cubicle 7 Entertainment Ltd</b><br>
      Foundry Edition by <b>Russell Thurman (Moo Man)</b><br>
      Special thanks to: <b>Games Workshop, Fatshark</b><br><br>
      
      <a href="mailto: info@cubicle7games.com">info@cubicle7games.com</a>`;

    new WarhammerModuleInitializer(
      "wfrp4e-it-translation-system7xx",
      "WFRP4e Content Initialization",
      html
    ).render(true);
  }
}
