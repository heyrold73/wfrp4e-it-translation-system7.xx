Hooks.on("init", () => {
  CONFIG.Actor.compendiumBanner =
    "./modules/wfrp4e-core/assets/banners/undead-fight.webp";
  CONFIG.Item.compendiumBanner =
    "./modules/wfrp4e-core/assets/banners/city.webp";
  CONFIG.JournalEntry.compendiumBanner =
    "./modules/wfrp4e-core/assets/banners/town-hill.webp";
  CONFIG.RollTable.compendiumBanner =
    "./modules/wfrp4e-core/assets/banners/tricksy-halflings.webp";
  CONFIG.Scene.compendiumBanner =
    "./modules/wfrp4e-core/assets/banners/town.webp";
  CONFIG.Macro.compendiumBanner =
    "./modules/wfrp4e-core/assets/banners/agitator.webp";
  CONFIG.Playlist.compendiumBanner =
    "./modules/wfrp4e-core/assets/banners/hut.webp";
  CONFIG.Adventure.compendiumBanner =
    "./modules/wfrp4e-core/assets/banners/beastmen-fight.webp";
  CONFIG.Cards.compendiumBanner =
    "./modules/wfrp4e-core/assets/banners/forest.webp";

  const WFRP4E = {};

  // Species
  WFRP4E.species = {
    human: "Human",
    dwarf: "Dwarf",
    halfling: "Halfling",
    helf: "High Elf",
    welf: "Wood Elf",
  };

  WFRP4E.subspecies = {
    human: {
      reiklander: {
        name: "Reiklander",
        skills: [
          "Animal Care",
          "Charm",
          "Cool",
          "Evaluate",
          "Gossip",
          "Haggle",
          "Language (Bretonnian)",
          "Language (Wastelander)",
          "Leadership",
          "Lore (Reikland)",
          "Melee (Basic)",
          "Ranged (Bow)",
        ],
        talents: ["Doomed", "Savvy, Suave", 3],
      },
    },
  };

  WFRP4E.speciesCharacteristics = {
    human: {
      ws: "2d10+20",
      bs: "2d10+20",
      s: "2d10+20",
      t: "2d10+20",
      i: "2d10+20",
      ag: "2d10+20",
      dex: "2d10+20",
      int: "2d10+20",
      wp: "2d10+20",
      fel: "2d10+20",
    },
    dwarf: {
      ws: "2d10+30",
      bs: "2d10+20",
      s: "2d10+20",
      t: "2d10+30",
      i: "2d10+20",
      ag: "2d10+10",
      dex: "2d10+30",
      int: "2d10+20",
      wp: "2d10+40",
      fel: "2d10+10",
    },
    halfling: {
      ws: "2d10+10",
      bs: "2d10+30",
      s: "2d10+10",
      t: "2d10+20",
      i: "2d10+20",
      ag: "2d10+20",
      dex: "2d10+30",
      int: "2d10+20",
      wp: "2d10+30",
      fel: "2d10+30",
    },
    helf: {
      ws: "2d10+30",
      bs: "2d10+30",
      s: "2d10+20",
      t: "2d10+20",
      i: "2d10+40",
      ag: "2d10+30",
      dex: "2d10+30",
      int: "2d10+30",
      wp: "2d10+30",
      fel: "2d10+20",
    },
    welf: {
      ws: "2d10+30",
      bs: "2d10+30",
      s: "2d10+20",
      t: "2d10+20",
      i: "2d10+40",
      ag: "2d10+30",
      dex: "2d10+30",
      int: "2d10+30",
      wp: "2d10+30",
      fel: "2d10+20",
    },
  };

  WFRP4E.speciesSkills = {
    human: [
      "Animal Care",
      "Charm",
      "Cool",
      "Evaluate",
      "Gossip",
      "Haggle",
      "Language (Bretonnian)",
      "Language (Wastelander)",
      "Leadership",
      "Lore (Reikland)",
      "Melee (Basic)",
      "Ranged (Bow)",
    ],
    dwarf: [
      "Consume Alcohol",
      "Cool",
      "Endurance",
      "Entertain (Storytelling)",
      "Evaluate",
      "Intimidate",
      "Language (Khazalid)",
      "Lore (Dwarfs)",
      "Lore (Geology)",
      "Lore (Metallurgy)",
      "Melee (Basic)",
      "Trade (any one)",
    ],
    halfling: [
      "Charm",
      "Consume Alcohol",
      "Dodge",
      "Gamble",
      "Haggle",
      "Intuition",
      "Language (Mootish)",
      "Lore (Reikland)",
      "Perception",
      "Sleight of Hand",
      "Stealth (Any)",
      "Trade (Cook)",
    ],
    helf: [
      "Cool",
      "Entertain (Sing)",
      "Evaluate",
      "Language (Eltharin)",
      "Leadership",
      "Melee (Basic)",
      "Navigation",
      "Perception",
      "Play (any one)",
      "Ranged (Bow)",
      "Sail",
      "Swim",
    ],
    welf: [
      "Athletics",
      "Climb",
      "Endurance",
      "Entertain (Sing)",
      "Intimidate",
      "Language (Eltharin)",
      "Melee (Basic)",
      "Outdoor Survival",
      "Perception",
      "Ranged (Bow)",
      "Stealth (Rural)",
      "Track",
    ],
  };

  WFRP4E.speciesTalents = {
    human: ["Doomed", "Savvy, Suave", 3],
    dwarf: [
      "Magic Resistance",
      "Night Vision",
      "Read/Write, Relentless",
      "Resolute, Strong-minded",
      "Sturdy",
      0,
    ],
    halfling: [
      "Acute Sense (Taste)",
      "Night Vision",
      "Resistance (Chaos)",
      "Small",
      2,
    ],
    helf: [
      "Acute Sense (Sight)",
      "Coolheaded, Savvy",
      "Night Vision",
      "Second Sight, Sixth Sense",
      "Read/Write",
      0,
    ],
    welf: [
      "Acute Sense (Sight)",
      "Hardy, Second Sight",
      "Night Vision",
      "Read/Write, Very Resilient",
      "Rover",
      0,
    ],
  };

  WFRP4E.speciesMovement = {
    human: 4,
    dwarf: 3,
    halfling: 3,
    helf: 5,
    welf: 5,
  };

  WFRP4E.speciesFate = {
    human: 2,
    dwarf: 0,
    halfling: 0,
    helf: 0,
    welf: 0,
  };

  WFRP4E.speciesRes = {
    human: 1,
    dwarf: 2,
    halfling: 2,
    helf: 0,
    welf: 0,
  };

  WFRP4E.speciesExtra = {
    human: 3,
    dwarf: 2,
    halfling: 3,
    helf: 2,
    welf: 2,
  };

  WFRP4E.speciesAge = {
    human: "15+1d10",
    dwarf: "15+10d10",
    halfling: "15+5d10",
    helf: "30+10d10",
    welf: "30+10d10",
  };

  WFRP4E.speciesHeight = {
    human: {
      feet: 4,
      inches: 9,
      die: "2d10",
    },
    dwarf: {
      feet: 4,
      inches: 3,
      die: "1d10",
    },
    halfling: {
      feet: 3,
      inches: 1,
      die: "1d10",
    },
    helf: {
      feet: 5,
      inches: 11,
      die: "1d10",
    },
    welf: {
      feet: 5,
      inches: 11,
      die: "1d10",
    },
  };

  WFRP4E.classTrappings = {
    Academics: "ClassTrappings.Academics",
    Academic: "ClassTrappings.Academics",
    Burghers: "ClassTrappings.Burghers",
    Burgher: "ClassTrappings.Burghers",
    Courtiers: "ClassTrappings.Courtiers",
    Courtier: "ClassTrappings.Courtiers",
    Peasants: "ClassTrappings.Peasants",
    Peasant: "ClassTrappings.Peasants",
    Rangers: "ClassTrappings.Rangers",
    Ranger: "ClassTrappings.Rangers",
    Riverfolk: "ClassTrappings.Riverfolk",
    Rogues: "ClassTrappings.Rogues",
    Rogue: "ClassTrappings.Rogues",
    Warriors: "ClassTrappings.Warriors",
    Warrior: "ClassTrappings.Warriors",
  };

  // Weapon Group Descriptions
  WFRP4E.weaponGroupDescriptions = {
    basic: "Basic",
    cavalry: "WFRP4E.GroupDescription.Cavalry",
    fencing: "Fencing",
    brawling: "Brawling",
    flail: "WFRP4E.GroupDescription.Flail",
    parry: "WFRP4E.GroupDescription.Parry",
    polearm: "Polearm",
    twohanded: "Two-Handed",
    blackpowder: "WFRP4E.GroupDescription.Blackpowder",
    bow: "Bow",
    crossbow: "WFRP4E.GroupDescription.Crossbow",
    entangling: "Entangling",
    engineering: "WFRP4E.GroupDescription.Engineering",
    explosives: "WFRP4E.GroupDescription.Explosives",
    sling: "Sling",
    throwing: "WFRP4E.GroupDescription.Throwing",
  };

  // Weapon reach descriptions
  WFRP4E.reachDescription = {
    personal: "WFRP4E.Reach.PersonalDescription",
    vshort: "WFRP4E.Reach.VShortDescription",
    short: "WFRP4E.Reach.ShortDescription",
    average: "WFRP4E.Reach.AverageDescription",
    long: "WFRP4E.Reach.LongDescription",
    vLong: "WFRP4E.Reach.VLongDescription",
    massive: "WFRP4E.Reach.MassiveDescription",
  };

  // Weapon Quality Descriptions (Used in dropdown info)
  WFRP4E.qualityDescriptions = {
    accurate: "WFRP4E.Properties.Accurate",
    blackpowder: "WFRP4E.Properties.Blackpowder",
    blast: "WFRP4E.Properties.Blast",
    damaging: "WFRP4E.Properties.Damage",
    defensive: "WFRP4E.Properties.Defensive",
    distract: "WFRP4E.Properties.Distract",
    entangle: "WFRP4E.Properties.Entangle",
    fast: "WFRP4E.Properties.Fast",
    hack: "WFRP4E.Properties.Hack",
    impact: "WFRP4E.Properties.Impact",
    impale: "WFRP4E.Properties.Impale",
    penetrating: "WFRP4E.Properties.Penetrating",
    pistol: "WFRP4E.Properties.Pistol",
    precise: "WFRP4E.Properties.Precise",
    pummel: "WFRP4E.Properties.Pummel",
    repeater: "WFRP4E.Properties.Repeater",
    shield: "WFRP4E.Properties.Shield",
    trapblade: "WFRP4E.Properties.Trapblade",
    unbreakable: "WFRP4E.Properties.Unbreakable",
    wrap: "WFRP4E.Properties.Wrap",
    flexible: "WFRP4E.Properties.Flexible",
    impenetrable: "WFRP4E.Properties.Impenetrable",
    durable: "WFRP4E.Properties.Durable",
    fine: "WFRP4E.Properties.Fine",
    lightweight: "WFRP4E.Properties.Lightweight",
    practical: "WFRP4E.Properties.Practical",
  };

  // Weapon Flaw Descriptions (used in dropdown info)
  WFRP4E.flawDescriptions = {
    dangerous: "WFRP4E.Properties.Dangerous",
    imprecise: "WFRP4E.Properties.Imprecise",
    reload: "WFRP4E.Properties.Reload",
    slow: "WFRP4E.Properties.Slow",
    tiring: "WFRP4E.Properties.Tiring",
    undamaging: "WFRP4E.Properties.Undamaging",
    partial: "WFRP4E.Properties.Partial",
    weakpoints: "WFRP4E.Properties.Weakpoints",
    ugly: "WFRP4E.Properties.Ugly",
    shoddy: "WFRP4E.Properties.Shoddy",
    unreliable: "WFRP4E.Properties.Unreliable",
    bulky: "WFRP4E.Properties.Bulky",
  };

  WFRP4E.loreEffectDescriptions = {
    petty: "None",
    beasts: "WFRP4E.LoreDescription.Beasts",
    death: "WFRP4E.LoreDescription.Death",
    fire: "WFRP4E.LoreDescription.Fire",
    heavens: "WFRP4E.LoreDescription.Heavens",
    metal: "WFRP4E.LoreDescription.Metal",
    life: "WFRP4E.LoreDescription.Life",
    light: "WFRP4E.LoreDescription.Light",
    shadow: "WFRP4E.LoreDescription.Shadow",
    hedgecraft: "WFRP4E.LoreDescription.Hedgecraft",
    witchcraft: "WFRP4E.LoreDescription.Witchcraft",
    daemonology: "",
    necromancy: "",
    nurgle: "",
    slaanesh: "",
    tzeentch: "",
  };

  WFRP4E.conditionDescriptions = {
    ablaze: "WFRP4E.Conditions.Ablaze",
    bleeding: "WFRP4E.Conditions.Bleeding",
    blinded: "WFRP4E.Conditions.Blinded",
    broken: "WFRP4E.Conditions.Broken",
    deafened: "WFRP4E.Conditions.Deafened",
    entangled: "WFRP4E.Conditions.Entangled",
    fatigued: "WFRP4E.Conditions.Fatigued",
    poisoned: "WFRP4E.Conditions.Poisoned",
    prone: "WFRP4E.Conditions.Prone",
    stunned: "WFRP4E.Conditions.Stunned",
    surprised: "WFRP4E.Conditions.Surprised",
    unconscious: "WFRP4E.Conditions.Unconscious",
    grappling: "WFRP4E.Conditions.Grappling",
    fear: "WFRP4E.Conditions.Fear",
    engaged: "WFRP4E.Conditions.Engaged",
  };

  WFRP4E.symptoms = {
    blight: "WFRP4E.Symptom.Blight",
    buboes: "WFRP4E.Symptom.Buboes",
    convulsions: "WFRP4E.Symptom.Convulsions",
    coughsAndSneezes: "WFRP4E.Symptom.CoughsandSneezes",
    fever: "WFRP4E.Symptom.Fever",
    flux: "WFRP4E.Symptom.Flux",
    gangrene: "WFRP4E.Symptom.Gangrene",
    lingering: "WFRP4E.Symptom.Lingering",
    malaise: "WFRP4E.Symptom.Malaise",
    nausea: "WFRP4E.Symptom.Nausea",
    pox: "WFRP4E.Symptom.Pox",
    wounded: "WFRP4E.Symptom.Wounded",
  };

  WFRP4E.symptomDescriptions = {
    blight: "WFRP4E.SymptomDescriptions.Blight",
    buboes: "WFRP4E.SymptomDescriptions.Buboes",
    convulsions: "WFRP4E.SymptomDescriptions.Convulsions",
    coughsAndSneezes: "WFRP4E.SymptomDescriptions.CoughsandSneezes",
    fever: "WFRP4E.SymptomDescriptions.Fever",
    flux: "WFRP4E.SymptomDescriptions.Flux",
    gangrene: "WFRP4E.SymptomDescriptions.Gangrene",
    lingering: "WFRP4E.SymptomDescriptions.Lingering",
    malaise: "WFRP4E.SymptomDescriptions.Malaise",
    nausea: "WFRP4E.SymptomDescriptions.Nausea",
    pox: "WFRP4E.SymptomDescriptions.Pox",
    wounded: "WFRP4E.SymptomDescriptions.Pox",
  };

  WFRP4E.symptomTreatment = {
    blight: "WFRP4E.SymptomTreatment.Blight",
    buboes: "WFRP4E.SymptomTreatment.Buboes",
    convulsions: "WFRP4E.SymptomTreatment.Convulsions",
    coughsAndSneezes: "WFRP4E.SymptomTreatment.CoughsandSneezes",
    fever: "WFRP4E.SymptomTreatment.Fever",
    flux: "WFRP4E.SymptomTreatment.Flux",
    gangrene: "WFRP4E.SymptomTreatment.Gangrene",
    lingering: "WFRP4E.SymptomTreatment.Lingering",
    malaise: "WFRP4E.SymptomTreatment.Malaise",
    nausea: "WFRP4E.SymptomTreatment.Nausea",
    pox: "WFRP4E.SymptomTreatment.Pox",
    wounded: "WFRP4E.SymptomTreatment.Wounded",
  };

  WFRP4E.loreEffects = {
    beasts: {
      name: "Lore of Beasts",
      icon: "modules/wfrp4e-core/icons/spells/beasts.png",
      transfer: false,
      flags: {
        wfrp4e: {
          effectApplication: "actor",
          effectTrigger: "invoke",
          lore: true,
          script: `
                    let value = 1
                    let name = this.actor.prototypeToken.name
                    
                    if (game.user.isGM) {
                        game.user.targets.forEach(t => {
                            t.actor.applyFear(value, name)
                        })
                        game.user.updateTokenTargets([]);
                    }
                    else {
                        game.wfrp4e.utility.postFear(value, name)
                    }
                `,
        },
      },
    },
    death: {
      name: "Lore of Death",
      icon: "modules/wfrp4e-core/icons/spells/death.png",
      transfer: false,
      flags: {
        wfrp4e: {
          effectApplication: "apply",
          effectTrigger: "oneTime",
          lore: true,
          script: `
                    if (this.actor.isOwner)
                    {
                        args.actor.addCondition("fatigued")
                    }`,
        },
      },
    },
    fire: {
      name: "Lore of Fire",
      icon: "modules/wfrp4e-core/icons/spells/fire.png",
      transfer: false,
      flags: {
        wfrp4e: {
          effectApplication: "apply",
          effectTrigger: "oneTime",
          lore: true,
          script: `
                    if (this.actor.isOwner)
                    {
                        args.actor.addCondition("ablaze")
                    }`,
        },
      },
    },
    heavens: {
      name: "Lore of Heavens",
      icon: "modules/wfrp4e-core/icons/spells/heavens.png",
      transfer: false,
      flags: {
        wfrp4e: {
          effectApplication: "damage",
          effectTrigger: "applyDamage",
          lore: true,
          script: `
                let applyAP = (args.damageType == game.wfrp4e.config.DAMAGE_TYPE.IGNORE_TB || args.damageType == game.wfrp4e.config.DAMAGE_TYPE.NORMAL)
                
                let AP = args.AP
                let metalValue = 0;
                for (let layer of AP.layers) {
                   if (layer.metal) {
                      metalValue += layer.value
                   }
                }
                
                if (applyAP) {
                
                   args.totalWoundLoss +=  metalValue
                   let newUsed = AP.used - metalValue;
                
                   let apIndex = args.messageElements.findIndex(i => i.includes(game.i18n.localize("AP")))
                   args.messageElements[apIndex] = newUsed + "/" + AP.value + " " + game.i18n.localize("AP")
                }
                    `,
        },
      },
    },
    metal: {
      name: "Lore of Metal",
      icon: "modules/wfrp4e-core/icons/spells/metal.png",
      transfer: false,
      flags: {
        wfrp4e: {
          effectApplication: "damage",
          effectTrigger: "applyDamage",
          lore: true,
          script: `
                let applyAP = (args.damageType == game.wfrp4e.config.DAMAGE_TYPE.IGNORE_TB || args.damageType == game.wfrp4e.config.DAMAGE_TYPE.NORMAL)

                let AP = args.AP
                let metalValue = 0;
                for (let layer of AP.layers) {
                   if (layer.metal) {
                      metalValue += layer.value
                   }
                }
                
                
                if (metalValue)
                    args.messageElements.push(\`-\${metalValue} Metal Armour\`)
                args.totalWoundLoss += metalValue
                
                if (applyAP) {
                
                   args.totalWoundLoss +=  metalValue
                   let newUsed = AP.used - metalValue;
                
                   let apIndex = args.messageElements.findIndex(i => i.includes(game.i18n.localize("AP")))
                   args.messageElements[apIndex] = newUsed + "/" + AP.value + " " + game.i18n.localize("AP")
                }
                `,
        },
      },
    },
    life: {
      name: "Lore of Life",
      icon: "modules/wfrp4e-core/icons/spells/life.png",
      transfer: false,
      flags: {
        wfrp4e: {
          effectApplication: "apply",
          effectTrigger: "oneTime",
          lore: true,
          script: `
                    fromUuid(this.effect.origin).then(caster => {
                        if (this.actor.isOwner)
                        {
                            if (!this.actor.has(game.i18n.localize("NAME.Daemonic")) && !this.actor.has(game.i18n.localize("NAME.Undead")))
                            {
                                let bleeding = this.actor.hasCondition("bleeding")
                                let fatigued = this.actor.hasCondition("fatigued")
                                if (bleeding) this.actor.removeCondition("bleeding", bleeding.flags.wfrp4e.value)
                                if (fatigued) this.actor.removeCondition("fatigued", fatigued.flags.wfrp4e.value)
                            }
                            else if (this.actor.has(game.i18n.localize("NAME.Undead")))
                                this.actor.applyBasicDamage(caster.system.characteristics.wp.bonus, {damageType : game.wfrp4e.config.DAMAGE_TYPE.IGNORE_ALL});
                        }
                    })`,
        },
      },
    },
    light: {
      name: "Lore of Light",
      icon: "modules/wfrp4e-core/icons/spells/light.png",
      transfer: false,
      flags: {
        wfrp4e: {
          effectApplication: "apply",
          effectTrigger: "oneTime",
          lore: true,
          script: `
                fromUuid(this.effect.origin).then(caster => {
                    if (this.actor.isOwner)
                    {
                        let bleeding = this.actor.addCondition("blinded")
                        if (this.actor.has(game.i18n.localize("NAME.Undead")) || this.actor.has(game.i18n.localize("NAME.Daemonic")))
                            this.actor.applyBasicDamage(caster.system.characteristics.int.bonus, {damageType : game.wfrp4e.config.DAMAGE_TYPE.IGNORE_ALL});
                    }
                })`,
        },
      },
    },
    shadow: {
      name: "Lore of Shadow",
      icon: "modules/wfrp4e-core/icons/spells/shadow.png",
      transfer: false,
      flags: {
        wfrp4e: {
          effectApplication: "damage",
          effectTrigger: "applyDamage",
          lore: true,
          script: `
                let applyAP = (args.damageType == game.wfrp4e.config.DAMAGE_TYPE.IGNORE_TB || args.damageType == game.wfrp4e.config.DAMAGE_TYPE.NORMAL)
                
                if (applyAP) {
                   let AP = args.AP
                
                   args.totalWoundLoss += AP.used
                   let apIndex = args.messageElements.findIndex(i => i.includes(game.i18n.localize("AP")))
                   args.messageElements[apIndex] = "0/" + AP.value + " " + game.i18n.localize("AP")
                }`,
        },
      },
    },
    hedgecraft: {
      name: "Lore of Hedgecraft",
      icon: "modules/wfrp4e-core/icons/spells/hedgecraft.png",
      transfer: false,
      flags: {
        wfrp4e: {
          effectApplication: "actor",
          effectTrigger: "invoke",
          lore: true,
          script: ``,
        },
      },
    },
    witchcraft: {
      name: "Lore of Witchcraft",
      icon: "modules/wfrp4e-core/icons/spells/witchcraft.png",
      transfer: false,
      flags: {
        wfrp4e: {
          effectApplication: "apply",
          effectTrigger: "oneTime",
          lore: true,
          script: `
                    if (this.actor.isOwner)
                    {
                        args.actor.addCondition("bleeding")
                    }`,
        },
      },
    },
  };

  WFRP4E.symptomEffects = {
    blight: {
      name: "WFRP4E.Symptom.Blight",
      icon: "modules/wfrp4e-core/icons/diseases/disease.png",
      transfer: false,
      flags: {
        wfrp4e: {
          effectApplication: "actor",
          effectTrigger: "invoke",
          symptom: true,
          script: `
                        let difficulty = ""
                        if (this.effect.name.includes("Moderate"))
                            difficulty = "easy"
                        else if (this.effect.name.includes("Severe"))
                            difficulty = "average"
                        else
                            difficulty = "veasy"
    
                        if (this.actor.isOwner)
                        {
                            args.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {context : {failure : args.actor.name + " dies from Blight"}, absolute: {difficulty}, appendTitle : " - Blight"}).then(setupData => {
                                args.actor.basicTest(setupData).then(test => 
                                    {
                                        if (test.result.outcome == "failure")
                                            args.actor.addCondition("dead")
                                    })
                                })
                        }`,
        },
      },
    },
    buboes: {
      name: "WFRP4E.Symptom.Buboes",
      icon: "modules/wfrp4e-core/icons/diseases/disease.png",
      transfer: false,
      flags: {
        wfrp4e: {
          effectApplication: "actor",
          effectTrigger: "prefillDialog",
          symptom: true,
          script: `
                    let applicableCharacteristics = ["ws", "bs", "s", "fel", "ag", "t", "dex"]
                    if (args.type == "weapon")
                        args.prefillModifiers.modifier -= 10
                    else if (args.type == "characteristic")
                    {
                        if (applicableCharacteristics.includes(args.item))
                            args.prefillModifiers.modifier -= 10
                    }
                    else if (args.type == "skill")
                    {
                        if (applicableCharacteristics.includes(args.item.characteristic.key))
                            args.prefillModifiers.modifier -= 10
                    }
            `,
        },
      },
    },
    convulsions: {
      name: "WFRP4E.Symptom.Convulsions",
      icon: "modules/wfrp4e-core/icons/diseases/disease.png",
      transfer: false,
      flags: {
        wfrp4e: {
          effectApplication: "actor",
          effectTrigger: "prefillDialog",
          symptom: true,
          script: `
                        let modifier = 0
                        if (this.effect.name.includes("Moderate"))
                            modifier = -20
                        else
                            modifier = -10
                        
                        let applicableCharacteristics = ["ws", "bs", "s", "ag", "t", "dex"]
                        if (args.type == "weapon")
                            args.prefillModifiers.modifier += modifier
                        else if (args.type == "characteristic")
                        {
                            if (applicableCharacteristics.includes(args.item))
                                args.prefillModifiers.modifier += modifier
                        }
                        else if (args.type == "skill")
                        {
                            if (applicableCharacteristics.includes(args.item.characteristic.key))
                                args.prefillModifiers.modifier += modifier
                        }`,
        },
      },
    },
    coughsandsneezes: {
      name: "WFRP4E.Symptom.CoughsandSneezes",
      icon: "modules/wfrp4e-core/icons/diseases/disease.png",
      transfer: false,
      flags: {
        wfrp4e: {
          symptom: true,
        },
      },
    },
    fever: {
      name: "WFRP4E.Symptom.Fever",
      icon: "modules/wfrp4e-core/icons/diseases/disease.png",
      transfer: false,
      flags: {
        wfrp4e: {
          effectApplication: "actor",
          effectTrigger: "prefillDialog",
          symptom: true,
          script: `
                       
                    let applicableCharacteristics = ["ws", "bs", "s", "fel", "ag", "t", "dex"]
    
                    if (args.type == "weapon")
                        args.prefillModifiers.modifier -= 10
                    else if (args.type == "characteristic")
                    {
                        if (applicableCharacteristics.includes(args.item))
                            args.prefillModifiers.modifier -= 10
                    }
                    else if (args.type == "skill")
                    {
                        if (applicableCharacteristics.includes(args.item.characteristic.key))
                            args.prefillModifiers.modifier -= 10
                    }`,
        },
      },
    },
    flux: {
      name: "WFRP4E.Symptom.Flux",
      icon: "modules/wfrp4e-core/icons/diseases/disease.png",
      transfer: false,
      flags: {
        wfrp4e: {
          symptom: true,
        },
      },
    },
    gangrene: {
      name: "WFRP4E.Symptom.Gangrene",
      icon: "modules/wfrp4e-core/icons/diseases/disease.png",
      transfer: false,
      flags: {
        wfrp4e: {
          effectApplication: "actor",
          effectTrigger: "prefillDialog",
          symptom: true,
          script: `
                        if (args.type == "characteristic" && args.item == "fel")
                        {
                            if (args.item == "fel")
                                args.prefillModifiers.modifier -= 10
                        }
                        else if (args.type == "skill")
                        {
                            if (args.item.characteristic.key == "fel")
                                args.prefillModifiers.modifier -= 10
                        }`,
          otherEffects: ["blight", "wounded"],
        },
      },
    },
    lingering: {
      name: "WFRP4E.Symptom.Lingering",
      icon: "modules/wfrp4e-core/icons/diseases/disease.png",
      transfer: false,
      flags: {
        wfrp4e: {
          symptom: true,
        },
      },
    },
    malaise: {
      name: "WFRP4E.Symptom.Malaise",
      icon: "modules/wfrp4e-core/icons/diseases/disease.png",
      transfer: false,
      flags: {
        wfrp4e: {
          effectApplication: "actor",
          effectTrigger: "prepareData",
          symptom: true,
          script: `
                    if (game.user.isUniqueGM)
                    {
                        let fatigued = args.actor.hasCondition("fatigued")
                        if (!fatigued)
                        {
                            args.actor.addCondition("fatigued")
                            ui.notifications.notify("Fatigued added to " + args.actor.name + " which cannot be removed until the Malaise symptom is gone.")
                        }
                    }
                    `,
        },
      },
    },
    nausea: {
      name: "WFRP4E.Symptom.Nausea",
      icon: "modules/wfrp4e-core/icons/diseases/disease.png",
      transfer: false,
      flags: {
        wfrp4e: {
          effectApplication: "actor",
          effectTrigger: "rollTest",
          symptom: true,
          script: `
                    if (this.actor.isOwner && args.test.result.outcome == "failure")
                    {
                        let applicableCharacteristics = ["ws", "bs", "s", "fel", "ag", "t", "dex"]
                        if (applicableCharacteristics.includes(args.test.characteristicKey))
                            this.actor.addCondition("stunned")
    
                    }
                    `,
        },
      },
    },
    pox: {
      name: "WFRP4E.Symptom.Pox",
      icon: "modules/wfrp4e-core/icons/diseases/disease.png",
      transfer: false,
      flags: {
        wfrp4e: {
          effectApplication: "actor",
          effectTrigger: "prefillDialog",
          symptom: true,
          script: `
                       
                        if (args.type == "characteristic" && args.item == "fel")
                                args.prefillModifiers.modifier -= 10
                        else if (args.type == "skill")
                        {
                            if (args.item.characteristic.key == "fel")
                                args.prefillModifiers.modifier -= 10
                        }`,
        },
      },
    },
    wounded: {
      name: "WFRP4E.Symptom.Wounded",
      icon: "modules/wfrp4e-core/icons/diseases/disease.png",
      transfer: false,
      flags: {
        wfrp4e: {
          effectApplication: "actor",
          effectTrigger: "invoke",
          symptom: true,
          script: `
                        if (this.actor.isOwner)
                        {
                            args.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {absolute: {difficulty : "average"}}).then(setupData => {
                                args.actor.basicTest(setupData).then(test => 
                                    {
                                        if (test.result.outcome == "failure")
                                            fromUuid("Compendium.wfrp4e-core.items.kKccDTGzWzSXCBOb").then(disease => {
                                                args.actor.createEmbeddedDocuments("Item", [disease.toObject()])
                                            })
                                    })
                                })
                        }`,
        },
      },
    },
  };

  mergeObject(game.wfrp4e.config, WFRP4E);
});

Hooks.on("ready", () => {
  for (let symptom in game.wfrp4e.config.symptomEffects) {
    game.wfrp4e.config.symptomEffects[symptom].name = game.i18n.localize(
      game.wfrp4e.config.symptomEffects[symptom].name
    );
  }

  if (
    !game.settings.get("wfrp4e-it-translation-system7xx", "initialized") &&
    game.user.isGM
  )
    new WFRP4eCoreInitWrapper().render(true);
});

Hooks.once("diceSoNiceReady", (dice3d) => {
  dice3d.addSystem({ id: "wfrp-coin", name: "WFRP Coin" }, false);
  dice3d.addDicePreset({
    type: "dc",
    labels: [
      "modules/wfrp4e-core/art/other/coin-tails.png",
      "modules/wfrp4e-core/art/other/coin-heads.png",
    ],
    bumpMaps: [
      "modules/wfrp4e-core/art/other/coin-tails_bump.png",
      "modules/wfrp4e-core/art/other/coin-heads_bump.png",
    ],
    system: "wfrp-coin",
    colorset: "wfrp-coin",
  });
  dice3d.addColorset(
    {
      name: "wfrp-coin",
      description: "WFRP Coin",
      category: "WFRP",
      foreground: "#000000",
      background: "#988f86",
      texture: "none",
      edge: "#988f86",
      material: "metal",
    },
    "no"
  );
});
