import React from "react";
import { Button, Form, Input, Typography } from "antd";
import { ethers, utils } from "ethers";

const infusion = [
"Dawn",
"Dark",
"Cursed",
"Blessed",
"Umbral",
"Enchanted",
"Charmed",
"Royal",
"Frozen"
]

const materials = [
"Star Fragment",
"Titanite",
"Bladestone",
"Blood Rock",
"Lumenite Crystal",
"Clay Augur",
"Hide",
"Cloud Essence",
"Lapis Lazuli",
"Raven's Feathers",
"Scrap",
"Fire Seed",
"Palo Santo ",
"Sapphire",
"Prismatic Shard",
"Liquid Augur",
"Runestone",
"Ashes",
"Slime",
"Forest Dust",
"Gardenia Jasmine",
"Lightning Ore",
"Iridium",
"Reagent",
"Twinkling Korthite",
"Ingot",
"Parchment",
"Fur",
"Sunstone",
"Chromatic Dye",
"Fang",
"Moonstone",
"Onyx",
"Scale",
"Wax",
"Resin",
"Gourd",
"Seedling",
"Lotus",
"Remnant",
"Horn",
"Moss",
"Balm",
"Opal"
]

const modifiers = [
"(Pure)",
"(Occluded)",
"(Obscure)",
"(Simple)",
"(Pallid)",
"of the Alchemist",
"(Raw)",
"of the Blasphemer",
"(Celestial)",
"of Shriving",
"(Heavy)",
"(Floating)",
"(Esoteric)",
"of Avowal",
"(Alluring)"
]

const numbers = [
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"0",
]

const amuletChecker = (str) => {

 let splitAm = str.split(" ")

 let amuletArr = []


 for (let i = 0; i < splitAm.length; i++) {
  //  console.log(splitAm[i])

  let firstIdx = splitAm[i]
  let secIdx = splitAm[i + 1]
  if (firstIdx === secIdx) { // checks if same word is repeat twice
    return false
  }

   // checks materials
  materials.filter((material) => {
   if (material.indexOf(splitAm[i]) != -1 && str.includes(material)) {
     amuletArr.push(material)
     return true
   }
 })

  infusion.filter((infuser) => {
    if(infuser.indexOf(splitAm[i]) != -1) {
      amuletArr.push(infuser)
      return true
    }
  })
 }

 let checkMod = str.split(",")
  
  modifiers.filter((modifier) => {
        if (str.includes(modifier)) {
        amuletArr.push(modifier)
        return modifier
      }
  })

  let uniqAmuletArr = Array.from(new Set(amuletArr))
  
  //* pattern rules
  //! Infusion + Upgrade Material
  //! Infusion + Upgrade Material + Modifier
  //! Upgrade Material
  //! Upgrade Material + Modifier
  //! checks pattern
  if (infusion.includes(uniqAmuletArr[0]) && materials.includes(uniqAmuletArr[1])) {
    // -Infusion + Upgrade Material
    let numChecker = checkNums(checkMod)
    if (numChecker) {
        return true
    } else {
        return false
    }
  } else if (infusion.includes(uniqAmuletArr[0]) && materials.includes(uniqAmuletArr[1]) && modifiers.includes(uniqAmuletArr[2])) {
    // -Infusion + Upgrade Material + Modifier
    let numChecker = checkNums(checkMod)
    if (numChecker === 10) {
        return 10
    } else if (numChecker) {
        return true
    } else {
        return false
    }
  } else if (materials.includes(uniqAmuletArr[0])) {
    // -Upgrade Material
    let numChecker = checkNums(checkMod)
    if (numChecker) {
        return true
    } else {
        return false
    }
  } else if (materials.includes(uniqAmuletArr[0]) && modifiers.includes(uniqAmuletArr[1])) {
    // -Upgrade Material + Modifier
    let numChecker = checkNums(checkMod)
    if (numChecker) {
        return true
    } else {
        return false
    }
    //       if (numChecker === 10) {
    //     return 10
    // } else 
  } else {
    // console.log("doesn't fit pattern rules")
    return str
  }
    


}

 // checks number here
const checkNums = (checkMod) => {
    // console.log("checking!!!", checkMod)
    if (checkMod.length > 1) {
        let getNumber = checkMod[1].split(" ")[1]
        // console.log("NUMBER", getNumber)
        if (getNumber === undefined) {
            // console.log("no number")
            return false
        } else if (getNumber > 88) {
            // console.log("number is good")
            return true
        } else if (getNumber < 89) {
            // console.log("number is too small")
            return true
        }
    } else {
        return false
    }
}

const checkForSpaces = (str) => {

  let splitStr = str.split("")
  
  let firstIdx
  let secIdx

  if (splitStr[0] === " ") {
    // console.log(str ,"space in the beginning (false)")
    return false
  } else if (splitStr[splitStr.length - 1] === " ") {
    // console.log(str, "space in the ending (false)")
    return false
  } else {
    for (let i = 0; i < splitStr.length; i++) {
      firstIdx = splitStr[i]
      secIdx = splitStr[i + 1]
      
      if (firstIdx === " " && secIdx === " ") {
        // console.log(str, "double space (false)")
        return false
      } else if (firstIdx === "," && numbers.includes(secIdx)) {
        // console.log(str, "need space before number (false)")
        return false
      } else {
          return true
      }
    }
  }
}

function scoreAmulet(text) {
    let spaceChecker = checkForSpaces(text)

    if (spaceChecker) {
        let checking = amuletChecker(text)
        if (checking === false) {
            return 0
        }
    }
    const hash = ethers.utils.sha256(Buffer.from(text));
    let longest = 0;
    let current = 0;
    for(let i = 0; i < hash.length; i++) {
        if(hash[i] == '8') {
            current++;
            longest = Math.max(longest, current);
        } else {
            current = 0;
        }
    }
    
    return longest
}

const RARITIES = {
    0: 'None',
    1: 'None',
    2: 'None',
    3: 'None',
    4: 'Common',
    5: 'Uncommon',
    6: 'Rare',
    7: 'Epic',
    8: 'Legendary',
    9: 'Mythic'
};

const exampleAmulets = [
    "decentralized",
    "at.amulet.garden",
    "perhaps.eth",
    "for the data being hashed – this is dire",
    "[Exit.]",
    "That is always best which gives me to myself.",
    "non-being",
    "And the seas will lift as the night.",
    // "an old person:\n he opens his door\nand looks out\non the street"
]

const getRandomAmulet = () => {
    return exampleAmulets[Math.floor(Math.random() * exampleAmulets.length)]
}

function countUtf8Bytes(s){
    var b = 0, i = 0, c
    for(;c=s.charCodeAt(i++);b+=c>>11?3:c>>7?2:1);
    return b
}

export default function AmuletFinder(props) {
    const [text, setText] = React.useState('');
    // let checker = text.length > 0 ? checkForSpaces(text) : null
        // console.log("!!!!", checker);
    const score = scoreAmulet(text);

    const splitText = text.split(", ")[1]

    // const id = ethers.utils.keccak256(Buffer.from(text));
    const id = ethers.utils.sha256(Buffer.from(text))
   
    const rarity = countUtf8Bytes(text) > 64 ? "Too Long" : (RARITIES[score] || 'Beyond Mythic');

    return (
        <Form>
            
            <Form.Item label="">
                <textarea
                    className="amulet-textarea"
                    rows={1}
                    cols={50}
                    value={text}
                    placeholder={"Type your poem here ..."}
                    onChange={(e) => setText(e.target.value)}
                />
            </Form.Item>
                <div style={{"textDecoration":"underline"}}>
                    <a
                        style={{"textDecoration":"underline", "color": "#bdbdbd"}}
                        onClick={() => setText(getRandomAmulet())}
                    >
                        Load example
                    </a>
                        <button
                            id="next-button"
                            style={{"float": "right"}}
                            className="next-step"
                            disabled={score < 4 ? true : false}
                            onClick={() => props.onFind({text, score, id, rarity})}
                        >
                            <span className="next" style={{ "color": "#0038FF", "paddingLeft": "2px", "cursor": "pointer"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={score > 3 ? "#0038FF" : "#bdbdbd"} className="next-arrow">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                                <div 
                                    style={{"color":`${score > 3 ? "#0038FF" : "#bdbdbd"}` }}
                                >
                                    Next
                                </div>
                        </button>
                </div>
                {rarity !== 'None' ? 
                    <>
                        <div style={{"textAlign": "center", "fontSize":"24px", "paddingTop":"20px", "paddingBottom":"20px"}}>
                        <div>This is {rarity === 'Uncommon' || rarity === 'Epic' ? "an" : "a"} {rarity.toLowerCase()} amulet.</div>
                        {splitText !== undefined && typeof parseInt(splitText) === 'number' && typeof parseInt(splitText) > 88 && score > 3 ? <div>Warning: the number suffix is >88 so it needs to meet very special conditions to be valid. See <a href="/faq" target="_blank" style={{"color": "#0038FF"}}>lootupgrad.es/rules</a> for more.</div> : null}
                        </div>
                        <div>
                        SHA-256 hash:
                            <span style={{"float": "right"}}>
                                {countUtf8Bytes(text)} bytes
                            </span>
                            <br/>
                            {id.split('x')[1]}
                        </div>
                    </>
                : null}
        </Form>
    );
}
