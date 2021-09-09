import React from 'react';

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


const MaterialList = () => {
    
    return (
        <React.Fragment>
            <section className="body-text">
                <section
                    className="material-wrapper"
                >
                    <ul style={{ "listStyleType": "none", "paddingTop": "15px" }}>
                        <b>Infusers</b>
                        {infusion.map((infuser) => {
                            return <li style={{ "textDecoration": "none" }}>{infuser}</li>
                        })}
                    </ul>
                    <ul style={{ "listStyleType": "none", "paddingTop": "15px" }}>
                        <b>Base Materials</b>
                        {materials.map((material) => {
                            return <li style={{ "textDecoration": "none" }}>{material}</li>
                        })}
                    </ul>
                    <ul style={{ "listStyleType": "none", "paddingTop": "15px" }}>
                        <b>Modifiers</b>
                        {modifiers.map((mod) => {
                            return <li style={{ "textDecoration": "none" }}>{mod}</li>
                        })}
                    </ul>
                </section>
            </section>
        </React.Fragment>
    )
}

export default MaterialList