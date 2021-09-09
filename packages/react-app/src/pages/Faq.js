import React from 'react';
import PageLayout from '../utils/PageLayout'

const Faq = () => {

    return (
        <PageLayout>
            <div className="faq-question">
                <b>What are the odds I’ll type something into <a href="/scratchpad">the scratchpad</a> and discover an amulet?</b>
                <p>Very, very, very, VERY low! It’s much more practical to “discover” amulets with a computer program. (The examples in the scratchpad were all produced in this way.)</p>
            </div>
            <div className="faq-question">
                <b>I discovered an amulet! What do I do?</b>
                <p>Anything you want! Save it, tweet it, put it in your email signature; write it on a piece of paper, then burn the paper; and/or simply bask in your good fortune.</p>
            </div>
            <div className="faq-question">
                <b>How do I mint my amulet?</b>
                <p>Go to the <a href="/scratchpad">scratchpad</a>, enter your amulet, and follow the directions.</p>
                <p>You can choose to just mint your amulet - in which case it will remain "a mysterious amulet" in the NFT view - or also reveal it to the world with a second transaction.</p>
            </div>
            <div className="faq-question">
                <b>Isn’t it possible to generate rare amulets easily by larding a poem with obscure Unicode characters?</b>
                <p>Yes.</p>
            </div>
            <div className="faq-question">
                <b>Will anyone be impressed if I do this?</b>
                <p>No.</p>
            </div>
            <div className="faq-question">
                <b>Do you have anything to help me with the journey ahead?</b>
                <p>Take these three common wind amulets:
                    <ol className="ordered-faq">
                        <li>
                            <span>the wind at night has a dream</span>
                        </li>
                        <li>the wind:
                        don't ask me what it is</li>
                        <li>a certain wind, to blow this back to me</li>
                    </ol>
                </p>
            </div>
            <div style={{"paddingTop":"20px"}}>
                <p>
                    Description is modified from Robin Sloan’s{" "}
                    <a
                        href="https://text.bargains/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{"textDecoration":"underline", "color":"blue"}}
                    >text.bargains</a>
                </p>
            </div>
            <div className="faq-question">
                <b>What are Upgrade Materials and how can I get some?</b>
                <p>Upgrade Materials are Amulet NFTs that can upgrade your loot and mloot. You can discover and mint them yourself on <a href="/scratchpad" target="_blank" style={{"color": "blue"}}>at.amulet.garden</a> using the following format:
                    <br/>
                    (Infusion)? Base Material (Modifier)?, (Natural Number ≤ 88)?
                    <br />
                    With infusions, base materials, and modifiers from this <a href="/material-list" target="_blank" style={{"color": "blue"}}>chart</a>.
                </p>
            </div>
            <div className="faq-question">
                <b>Ok but what is an Amulet NFT?</b>
                <p>
                    {"Amulets were defined by author Robin Sloan as unicode that's <64 bytes and has a SHA-256 hash containing at least 4 consecutive eights. Amulet NFTs also require evidence of a carbon offset in the metadata."}
                </p>
            </div>
            <div className="faq-question">
                <b>Can you give some examples of valid Upgrade Materials?</b>
                <p>
                    Sure! “Blessed Cloud Essence (Alluring)” is an Upgrade Material. So is "Cloud Essence, 87". Both fit the format and are Amulets. You can check yourself using the scratchpad on <a href="/scratchpad" target="_blank" style={{"color": "blue"}}>at.amulet.garden</a>.
                </p>
            </div>
            <div className="faq-question">
                <b>What about numbers greater than 88?</b>
                <p>
                    It is possible to discover Hoards of Basic Upgrade Materials in amounts greater than 88.
                    Hoards have the following conditions:
                </p>
                <ul>
                    <li>Base Material only, with no infusions or modifiers.</li>
                    <li>The Number suffix must be the lowest Natural Number that, when preceded by the given Base Material, is an Amulet.</li>
                    <li>The carbon offset tonnage must be EQUAL to the Number.</li>
                </ul>
            </div>
            <div className="faq-question">
                <b>Where can I buy a Carbon Offset, and how much does it cost per ton?</b>
                <p>
                    <a href="https://twitter.com/offsetra" target="_blank" style={{"color": "blue"}}>@offsetra</a> is willing to supply Carbon offsets for $10 per ton. Send ETH, USDC, or $agld to 0x7526Ff47215613882De8EF4c395562aa3EEb4709 and then include the tx in the token's metadata (you will get a prompt for this on <a href="/" target="_blank" style={{"color": "blue"}}>at.amulet.garden</a>.) You can also purchase Web2 offsets at <a href="https://www.cloverly.com/" target="_blank" style={{"color": "blue"}}>Cloverly.com</a>.
                </p>
            </div>
            <div className="faq-question">
                <b>Can I add arbitrary space at the beginning, the end, or in between words to make an Upgrade Material?</b>
                <p>
                    No, that is suspect and not recommended. "Cloud Essence, 87" works. " Cloud Essence, 87" does not, neither does
"Cloud  Essence, 87”, “Cloud Essence,  87”, “Cloud Essence, 87 ” etc.
                </p>
            </div>
            <div className="faq-question">
                <b>What if I mint an Upgrade Material that has already been claimed?</b>
                <p>
                    So long as you mint through <a href="/" target="_blank" style={{"color": "blue"}}>at.amulet.garden</a> you shouldn't have this problem. Minted materials will show as already minted. You can find a list of minted materials here: <a href="https://cloudflare-ipfs.com/ipfs/QmceUt1GXcAvygbWD2B9thbv4YmCMz6MTjZo9BPLWfnMfQ/upgradeMaterials.html" target="_blank" style={{"color": "blue"}}>https://cloudflare-ipfs.com/ipfs/QmceUt1GXcAvygbWD2B9thbv4YmCMz6MTjZo9BPLWfnMfQ/upgradeMaterials.html</a>
                </p>
            </div>
            <div className="faq-question">
                <b>I already minted but didn't add a carbon offset, can I add it afterward?</b>
                <p>
                    Not at the moment, but we are working on a solution for this.
                </p>
            </div>
        </PageLayout>
    )
}

export default Faq