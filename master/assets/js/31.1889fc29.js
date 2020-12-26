(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{608:function(e,t,a){e.exports=a.p+"assets/img/evidence_lifecycle.40473e8f.png"},681:function(e,t,a){"use strict";a.r(t);var i=a(1),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"adr-059-evidence-composition-and-lifecycle"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#adr-059-evidence-composition-and-lifecycle"}},[e._v("#")]),e._v(" ADR 059: Evidence Composition and Lifecycle")]),e._v(" "),i("h2",{attrs:{id:"changelog"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),i("ul",[i("li",[e._v("04/09/2020: Initial Draft (Unabridged)")]),e._v(" "),i("li",[e._v("07/09/2020: First Version")])]),e._v(" "),i("h2",{attrs:{id:"scope"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#scope"}},[e._v("#")]),e._v(" Scope")]),e._v(" "),i("p",[e._v("This document is designed to collate together and surface some predicaments involving evidence in Tendermint: both its composition and lifecycle. It then aims to find a solution to these. The scope does not extend to the verification nor detection of certain types of evidence but concerns itself mainly with the general form of evidence and how it moves from inception to application.")]),e._v(" "),i("h2",{attrs:{id:"background"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),i("p",[e._v("For a long time "),i("code",[e._v("DuplicateVoteEvidence")]),e._v(", formed in the consensus reactor, was the only evidence Tendermint had. It was produced whenever two votes from the same validator in the same round\nwas observed and thus it was designed that each evidence was for a single validator. It was predicted that there may come more forms of evidence and thus "),i("code",[e._v("DuplicateVoteEvidence")]),e._v(" was used as the model for the "),i("code",[e._v("Evidence")]),e._v(" interface and also for the form of the evidence data sent to the application. It is important to note that Tendermint concerns itself just with the detection and reporting of evidence and it is the responsibility of the application to exercise punishment.")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBFdmlkZW5jZSBpbnRlcmZhY2UgeyAvL2V4aXN0aW5nCiAgSGVpZ2h0KCkgaW50NjQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGVpZ2h0IG9mIHRoZSBvZmZlbnNlCiAgVGltZSgpIHRpbWUuVGltZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGltZSBvZiB0aGUgb2ZmZW5zZQogIEFkZHJlc3MoKSBbXWJ5dGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZHJlc3Mgb2YgdGhlIG9mZmVuZGluZyB2YWxpZGF0b3IKICBCeXRlcygpIFtdYnl0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBieXRlcyB3aGljaCBjb21wcmlzZSB0aGUgZXZpZGVuY2UKICBIYXNoKCkgW11ieXRlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBoYXNoIG9mIHRoZSBldmlkZW5jZQogIFZlcmlmeShjaGFpbklEIHN0cmluZywgcHViS2V5IGNyeXB0by5QdWJLZXkpIGVycm9yIC8vIHZlcmlmeSB0aGUgZXZpZGVuY2UKICBFcXVhbChFdmlkZW5jZSkgYm9vbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBlcXVhbGl0eSBvZiBldmlkZW5jZQoKICBWYWxpZGF0ZUJhc2ljKCkgZXJyb3IKICBTdHJpbmcoKSBzdHJpbmcKfQo="}}),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBEdXBsaWNhdGVWb3RlRXZpZGVuY2Ugc3RydWN0IHsKICBWb3RlQSAqVm90ZQogIFZvdGVCICpWb3RlCgogIHRpbWVzdGFtcCB0aW1lLlRpbWUgLy8gdGFrZW4gZnJvbSB0aGUgYmxvY2sgdGltZQp9Cg=="}}),e._v(" "),i("p",[e._v("Tendermint has now introduced a new type of evidence to protect light clients from being attacked. This "),i("code",[e._v("LightClientAttackEvidence")]),e._v(" (see "),i("a",{attrs:{href:"https://github.com/informalsystems/tendermint-rs/blob/31ca3e64ce90786c1734caf186e30595832297a4/docs/spec/lightclient/attacks/evidence-handling.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),i("OutboundLink")],1),e._v(" for more information) is vastly different to "),i("code",[e._v("DuplicateVoteEvidence")]),e._v(" in that it is physically a much different size containing a complete signed header and validator set. It is formed within the light client, not the consensus reactor and requires a lot more information from state to verify ("),i("code",[e._v("VerifyLightClientAttack(commonHeader, trustedHeader *SignedHeader, commonVals *ValidatorSet)")]),e._v("  vs "),i("code",[e._v("VerifyDuplicateVote(chainID string, pubKey PubKey)")]),e._v("). Finally it batches validators together (a single piece of evidence that implicates multiple malicious validators at a height) as opposed to having individual evidence (each piece of evidence is per validator per height). This evidence stretches the existing mould that was used to accommodate new types of evidence and has thus caused us to reconsider how evidence should be formatted and processed.")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBMaWdodENsaWVudEF0dGFja0V2aWRlbmNlIHN0cnVjdCB7IC8vIHByb3Bvc2VkIHN0cnVjdCBpbiBzcGVjCiAgQ29uZmxpY3RpbmdCbG9jayAqTGlnaHRCbG9jawogIENvbW1vbkhlaWdodCBpbnQ2NAogIFR5cGUgIEF0dGFja1R5cGUgICAgIC8vIGVudW06IHtMdW5hdGljfEVxdWl2b2NhdGlvbnxBbW5lc2lhfQoKICB0aW1lc3RhbXAgdGltZS5UaW1lIC8vIHRha2VuIGZyb20gdGhlIGJsb2NrIHRpbWUgYXQgdGhlIGNvbW1vbiBoZWlnaHQKfQo="}}),e._v(" "),i("p",[i("em",[e._v("Note: These three attack types have been proven by the research team to be exhaustive")])]),e._v(" "),i("h2",{attrs:{id:"possible-approaches-for-evidence-composition"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#possible-approaches-for-evidence-composition"}},[e._v("#")]),e._v(" Possible Approaches for Evidence Composition")]),e._v(" "),i("h3",{attrs:{id:"individual-framework"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#individual-framework"}},[e._v("#")]),e._v(" Individual framework")]),e._v(" "),i("p",[e._v("Evidence remains on a per validator basis. This causes the least disruption to the current processes but requires that we break "),i("code",[e._v("LightClientAttackEvidence")]),e._v(" into several pieces of evidence for each malicious validator. This not only has performance consequences in that there are n times as many database operations and that the gossiping of evidence will require more bandwidth then necessary (by requiring a header for each piece) but it potentially impacts our ability to validate it. In batch form, the full node can run the same process the light client did to see that 1/3 validating power was present in both the common block and the conflicting block whereas this becomes more difficult to verify individually without opening the possibility that malicious validators forge evidence against innocent . Not only that, but "),i("code",[e._v("LightClientAttackEvidence")]),e._v(" also deals with amnesia attacks which unfortunately have the characteristic where we know the set of validators involved but not the subset that were actually malicious (more to be said about this later). And finally splitting the evidence into individual pieces makes it difficult to understand the severity of the attack (i.e. the total voting power involved in the attack)")]),e._v(" "),i("h4",{attrs:{id:"an-example-of-a-possible-implementation-path"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#an-example-of-a-possible-implementation-path"}},[e._v("#")]),e._v(" An example of a possible implementation path")]),e._v(" "),i("p",[e._v("We would ignore amnesia evidence (as individually it's hard to make) and revert to the initial split we had before where "),i("code",[e._v("DuplicateVoteEvidence")]),e._v(" is also used for light client equivocation attacks and thus we only need "),i("code",[e._v("LunaticEvidence")]),e._v(". We would also most likely need to remove "),i("code",[e._v("Verify")]),e._v(" from the interface as this isn't really something that can be used.")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:" go",base64:"dHlwZSBMdW5hdGljRXZpZGVuY2Ugc3RydWN0IHsgLy8gaW5kaXZpZHVhbCBsdW5hdGljIGF0dGFjawogIGhlYWRlciAqSGVhZGVyCiAgY29tbW9uSGVpZ2h0IGludDY0CiAgdm90ZSAqVm90ZQoKICB0aW1lc3RhbXAgdGltZS5UaW1lIC8vIG9uY2UgYWdhaW4gdGFrZW4gZnJvbSB0aGUgYmxvY2sgdGltZSBhdCB0aGUgaGVpZ2h0IG9mIHRoZSBjb21tb24gaGVhZGVyCn0K"}}),e._v(" "),i("h3",{attrs:{id:"batch-framework"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#batch-framework"}},[e._v("#")]),e._v(" Batch Framework")]),e._v(" "),i("p",[e._v("The last approach of this category would be to consider batch only evidence. This works fine with "),i("code",[e._v("LightClientAttackEvidence")]),e._v(" but would require alterations to "),i("code",[e._v("DuplicateVoteEvidence")]),e._v(" which would most likely mean that the consensus would send conflicting votes to a buffer in the evidence module which would then wrap all the votes together per height before gossiping them to other nodes and trying to commit it on chain. At a glance this may improve IO and verification speed and perhaps more importantly grouping validators gives the application and Tendermint a better overview of the severity of the attack.")]),e._v(" "),i("p",[e._v("However individual evidence has the advantage that it is easy to check if a node already has that evidence meaning we just need to check hashes to know that we've already verified this evidence before. Batching evidence would imply that each node may have a different combination of duplicate votes which may complicate things.")]),e._v(" "),i("h4",{attrs:{id:"an-example-of-a-possible-implementation-path-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#an-example-of-a-possible-implementation-path-2"}},[e._v("#")]),e._v(" An example of a possible implementation path")]),e._v(" "),i("p",[i("code",[e._v("LightClientAttackEvidence")]),e._v(" won't change but the evidence interface will need to look like the proposed one above and "),i("code",[e._v("DuplicateVoteEvidence")]),e._v(" will need to change to encompass multiple double votes. A problem with batch evidence is that it needs to be unique to avoid people from submitting different permutations.")]),e._v(" "),i("h2",{attrs:{id:"decision"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),i("p",[e._v("The decision is to adopt a hybrid design.")]),e._v(" "),i("p",[e._v("We allow individual and batch evidence to coexist together, meaning that verification is done depending on the evidence type and that  the bulk of the work is done in the evidence pool itself (including forming the evidence to be sent to the application).")]),e._v(" "),i("h2",{attrs:{id:"detailed-design"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#detailed-design"}},[e._v("#")]),e._v(" Detailed Design")]),e._v(" "),i("p",[e._v("Evidence has the following simple interface:")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBFdmlkZW5jZSBpbnRlcmZhY2UgeyAgLy9wcm9wb3NlZAogIEhlaWdodCgpIGludDY0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhlaWdodCBvZiB0aGUgb2ZmZW5zZQogIEJ5dGVzKCkgW11ieXRlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ5dGVzIHdoaWNoIGNvbXByaXNlIHRoZSBldmlkZW5jZQogIEhhc2goKSBbXWJ5dGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhhc2ggb2YgdGhlIGV2aWRlbmNlCiAgVmFsaWRhdGVCYXNpYygpIGVycm9yCiAgU3RyaW5nKCkgc3RyaW5nCn0K"}}),e._v(" "),i("p",[e._v("The changing of the interface is backwards compatible as these methods are all present in the previous version of the interface. However, networks will need to upgrade to be able to process the new evidence as verification has changed.")]),e._v(" "),i("p",[e._v("We have two concrete types of evidence that fulfil this interface")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBMaWdodENsaWVudEF0dGFja0V2aWRlbmNlIHN0cnVjdCB7CiAgQ29uZmxpY3RpbmdCbG9jayAqTGlnaHRCbG9jawogIENvbW1vbkhlaWdodCBpbnQ2NCAvLyB0aGUgbGFzdCBoZWlnaHQgYXQgd2hpY2ggdGhlIHByaW1hcnkgcHJvdmlkZXIgYW5kIHdpdG5lc3MgcHJvdmlkZXIgaGFkIHRoZSBzYW1lIGhlYWRlcgp9Cg=="}}),e._v(" "),i("p",[e._v("where the "),i("code",[e._v("Hash()")]),e._v(" is the hash of the header and commonHeight.")]),e._v(" "),i("p",[e._v("Note: It was also discussed whether to include the commit hash which captures the validators that signed the header. However this would open the opportunity for someone to propose multiple permutations of the same evidence (through different commit signatures) hence it was omitted. Consequentially, when it comes to verifying evidence in a block, for "),i("code",[e._v("LightClientAttackEvidence")]),e._v(" we can't just check the hashes because someone could have the same hash as us but a different commit where less than 1/3 validators voted which would be an invalid version of the evidence. (see "),i("code",[e._v("fastCheck")]),e._v(" for more details)")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBEdXBsaWNhdGVWb3RlRXZpZGVuY2UgewogIFZvdGVBICpWb3RlCiAgVm90ZUIgKlZvdGUKfQo="}}),e._v(" "),i("p",[e._v("where the "),i("code",[e._v("Hash()")]),e._v(" is the hash of the two votes")]),e._v(" "),i("p",[e._v("For both of these types of evidence, "),i("code",[e._v("Bytes()")]),e._v(" represents the proto-encoded byte array format of the evidence and "),i("code",[e._v("ValidateBasic")]),e._v(" is\nan initial consistency check to make sure the evidence has a valid structure.")]),e._v(" "),i("h3",{attrs:{id:"the-evidence-pool"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#the-evidence-pool"}},[e._v("#")]),e._v(" The Evidence Pool")]),e._v(" "),i("p",[i("code",[e._v("LightClientAttackEvidence")]),e._v(" is generated in the light client and "),i("code",[e._v("DuplicateVoteEvidence")]),e._v(" in consensus. Both are sent to the evidence pool through "),i("code",[e._v("AddEvidence(ev Evidence) error")]),e._v(". The evidence pool's primary purpose is to verify evidence. It also gossips evidence to other peers' evidence pool and serves it to consensus so it can be committed on chain and the relevant information can be sent to the application in order to exercise punishment. When evidence is added, the pool first runs "),i("code",[e._v("Has(ev Evidence)")]),e._v(" to check if it has already received it (by comparing hashes) and then  "),i("code",[e._v("Verify(ev Evidence) error")]),e._v(".  Once verified the evidence pool stores it it's pending database. There are two databases: one for pending evidence that is not yet committed and another of the committed evidence (to avoid committing evidence twice)")]),e._v(" "),i("h4",{attrs:{id:"verification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#verification"}},[e._v("#")]),e._v(" Verification")]),e._v(" "),i("p",[i("code",[e._v("Verify()")]),e._v(" does the following:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Use the hash to see if we already have this evidence in our committed database.")])]),e._v(" "),i("li",[i("p",[e._v("Use the height to check if the evidence hasn't expired.")])]),e._v(" "),i("li",[i("p",[e._v("If it has expired then use the height to find the block header and check if the time has also expired in which case we drop the evidence")])]),e._v(" "),i("li",[i("p",[e._v("Then proceed with switch statement for each of the two evidence:")])])]),e._v(" "),i("p",[e._v("For "),i("code",[e._v("DuplicateVote")]),e._v(":")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Check that height, round, type and validator address are the same")])]),e._v(" "),i("li",[i("p",[e._v("Check that the Block ID is different")])]),e._v(" "),i("li",[i("p",[e._v("Check the look up table for addresses to make sure there already isn't evidence against this validator")])]),e._v(" "),i("li",[i("p",[e._v("Fetch the validator set and confirm that the address is in the set at the height of the attack")])]),e._v(" "),i("li",[i("p",[e._v("Check that the chain ID and signature is valid.")])])]),e._v(" "),i("p",[e._v("For "),i("code",[e._v("LightClientAttack")])]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Fetch the common signed header and val set from the common height and use skipping verification to verify the conflicting header")])]),e._v(" "),i("li",[i("p",[e._v("Fetch the trusted signed header at the same height as the conflicting header and compare with the conflicting header to work out which type of attack it is and in doing so return the malicious validators.")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("If equivocation, return the validators that signed for the commits of both the trusted and signed header")])]),e._v(" "),i("li",[i("p",[e._v("If lunatic, return the validators from the common val set that signed in the conflicting block")])]),e._v(" "),i("li",[i("p",[e._v("If amnesia, return no validators (since we can't know which validators are malicious). This also means that we don't currently send amnesia evidence to the application, although we will introduce more robust amnesia evidence handling in future Tendermint Core releases")])])])]),e._v(" "),i("li",[i("p",[e._v("For each validator, check the look up table to make sure there already isn't evidence against this validator")])])]),e._v(" "),i("p",[e._v("After verification we persist the evidence with the key "),i("code",[e._v("height/hash")]),e._v(" to the pending evidence database in the evidence pool with the following format:")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBFdmlkZW5jZUluZm8gc3RydWN0IHsKICBldiBFdmlkZW5jZQogIHRpbWUgdGltZS5UaW1lCiAgdmFsaWRhdG9ycyBbXVZhbGlkYXRvcgogIHRvdGFsVm90aW5nUG93ZXIgaW50NjQKfQo="}}),e._v(" "),i("p",[i("code",[e._v("time")]),e._v(", "),i("code",[e._v("validators")]),e._v(" and "),i("code",[e._v("totalVotingPower")]),e._v(" are need to form the "),i("code",[e._v("abci.Evidence")]),e._v(" that we send to the application layer. More in this to come later.")]),e._v(" "),i("h4",{attrs:{id:"broadcasting-and-receiving-evidence"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#broadcasting-and-receiving-evidence"}},[e._v("#")]),e._v(" Broadcasting and receiving evidence")]),e._v(" "),i("p",[e._v("The evidence pool also runs a reactor that broadcasts the newly validated\nevidence to all connected peers.")]),e._v(" "),i("p",[e._v("Receiving evidence from other evidence reactors works in the same manner as receiving evidence from the consensus reactor or a light client.")]),e._v(" "),i("h4",{attrs:{id:"proposing-evidence-on-the-block"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#proposing-evidence-on-the-block"}},[e._v("#")]),e._v(" Proposing evidence on the block")]),e._v(" "),i("p",[e._v("When it comes to prevoting and precomitting a proposal that contains evidence, the full node will once again\ncall upon the evidence pool to verify the evidence using "),i("code",[e._v("CheckEvidence(ev []Evidence)")]),e._v(":")]),e._v(" "),i("p",[e._v("This performs the following actions:")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Loops through all the evidence to check that nothing has been duplicated")])]),e._v(" "),i("li",[i("p",[e._v("For each evidence, run "),i("code",[e._v("fastCheck(ev evidence)")]),e._v(" which works similar to "),i("code",[e._v("Has")]),e._v(" but instead for "),i("code",[e._v("LightClientAttackEvidence")]),e._v(" if it has the\nsame hash it then goes on to check that the validators it has are all signers in the commit of the conflicting header. If it doesn't pass fast check (because it hasn't seen the evidence before) then it will have to verify the evidence.")])]),e._v(" "),i("li",[i("p",[e._v("runs "),i("code",[e._v("Verify(ev Evidence)")]),e._v(" - Note: this also saves the evidence to the db as mentioned before.")])])]),e._v(" "),i("h4",{attrs:{id:"updating-application-and-pool"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#updating-application-and-pool"}},[e._v("#")]),e._v(" Updating application and pool")]),e._v(" "),i("p",[e._v("The final part of the lifecycle is when the block is committed and the "),i("code",[e._v("BlockExecutor")]),e._v(" then updates state. As part of this process, the "),i("code",[e._v("BlockExecutor")]),e._v(" gets the evidence pool to create a simplified format for the evidence to be sent to the application. This happens in "),i("code",[e._v("ApplyBlock")]),e._v(" where the executor calls "),i("code",[e._v("Update(Block, State) []abci.Evidence")]),e._v(".")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"YWJjaVJlc3BvbnNlcy5CZWdpbkJsb2NrLkJ5emFudGluZVZhbGlkYXRvcnMgPSBldnBvb2wuVXBkYXRlKGJsb2NrLCBzdGF0ZSkK"}}),e._v(" "),i("p",[e._v("Here is the format of the evidence that the application will receive. As seen above, this is stored as an array within "),i("code",[e._v("BeginBlock")]),e._v(".\nThe changes to the application are minimal (it is still formed one for each malicious validator) with the exception of using an enum instead of a string for the evidence type.")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBFdmlkZW5jZSBzdHJ1Y3QgewogIC8vIGVpdGhlciBMaWdodENsaWVudEF0dGFja0V2aWRlbmNlIG9yIER1cGxpY2F0ZVZvdGVFdmlkZW5jZSBhcyBhbiBlbnVtIChhYmNpLkV2aWRlbmNlVHlwZSkKCVR5cGUgRXZpZGVuY2VUeXBlIGBwcm90b2J1ZjomcXVvdDt2YXJpbnQsMSxvcHQsbmFtZT10eXBlLHByb3RvMyxlbnVtPXRlbmRlcm1pbnQuYWJjaS5FdmlkZW5jZVR5cGUmcXVvdDsganNvbjomcXVvdDt0eXBlLG9taXRlbXB0eSZxdW90O2AKCS8vIFRoZSBvZmZlbmRpbmcgdmFsaWRhdG9yCglWYWxpZGF0b3IgVmFsaWRhdG9yIGBwcm90b2J1ZjomcXVvdDtieXRlcywyLG9wdCxuYW1lPXZhbGlkYXRvcixwcm90bzMmcXVvdDsganNvbjomcXVvdDt2YWxpZGF0b3ImcXVvdDtgCgkvLyBUaGUgaGVpZ2h0IHdoZW4gdGhlIG9mZmVuc2Ugb2NjdXJyZWQKCUhlaWdodCBpbnQ2NCBgcHJvdG9idWY6JnF1b3Q7dmFyaW50LDMsb3B0LG5hbWU9aGVpZ2h0LHByb3RvMyZxdW90OyBqc29uOiZxdW90O2hlaWdodCxvbWl0ZW1wdHkmcXVvdDtgCgkvLyBUaGUgY29ycmVzcG9uZGluZyB0aW1lIHdoZXJlIHRoZSBvZmZlbnNlIG9jY3VycmVkCglUaW1lIHRpbWUuVGltZSBgcHJvdG9idWY6JnF1b3Q7Ynl0ZXMsNCxvcHQsbmFtZT10aW1lLHByb3RvMyxzdGR0aW1lJnF1b3Q7IGpzb246JnF1b3Q7dGltZSZxdW90O2AKCS8vIFRvdGFsIHZvdGluZyBwb3dlciBvZiB0aGUgdmFsaWRhdG9yIHNldCBpbiBjYXNlIHRoZSBBQkNJIGFwcGxpY2F0aW9uIGRvZXMKCS8vIG5vdCBzdG9yZSBoaXN0b3JpY2FsIHZhbGlkYXRvcnMuCgkvLyBodHRwczovL2dpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2lzc3Vlcy80NTgxCglUb3RhbFZvdGluZ1Bvd2VyIGludDY0IGBwcm90b2J1ZjomcXVvdDt2YXJpbnQsNSxvcHQsbmFtZT10b3RhbF92b3RpbmdfcG93ZXIsanNvbj10b3RhbFZvdGluZ1Bvd2VyLHByb3RvMyZxdW90OyBqc29uOiZxdW90O3RvdGFsX3ZvdGluZ19wb3dlcixvbWl0ZW1wdHkmcXVvdDtgCn0K"}}),e._v(" "),i("p",[e._v("This "),i("code",[e._v("Update()")]),e._v(" function does the following:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Increments state which keeps track of both the current time and height used for measuring expiry")])]),e._v(" "),i("li",[i("p",[e._v("Marks evidence as committed and saves to db. This prevents validators from proposing committed evidence in the future\nNote: the db just saves the height and the hash. There is no need to save the entire committed evidence")])]),e._v(" "),i("li",[i("p",[e._v("Forms ABCI evidence as such:  (note for "),i("code",[e._v("DuplicateVoteEvidence")]),e._v(" the validators array size is 1)")]),e._v(" "),i("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Zm9yIF8sIHZhbCA6PSByYW5nZSBldkluZm8uVmFsaWRhdG9ycyB7CiAgYWJjaUV2ID0gYXBwZW5kKGFiY2lFdiwgJmFtcDthYmNpLkV2aWRlbmNlewogICAgVHlwZTogZXZUeXBlLCAgIC8vIGVpdGhlciBEdXBsaWNhdGVWb3RlIG9yIExpZ2h0Q2xpZW50QXR0YWNrCiAgICBWYWxpZGF0b3I6IHZhbCwgICAvLyB0aGUgb2ZmZW5kaW5nIHZhbGlkYXRvciAod2hpY2ggaW5jbHVkZXMgdGhlIGFkZHJlc3MsIHB1YmtleSBhbmQgcG93ZXIpCiAgICBIZWlnaHQ6IGV2SW5mby5ldi5IZWlnaHQoKSwgICAgLy8gdGhlIGhlaWdodCB3aGVuIHRoZSBvZmZlbnNlIGhhcHBlbmVkCiAgICBUaW1lOiBldkluZm8udGltZSwgICAgICAvLyB0aGUgdGltZSB3aGVuIHRoZSBvZmZlbnNlIGhhcHBlbmVkCiAgICBUb3RhbFZvdGluZ1Bvd2VyOiBldkluZm8udG90YWxWb3RpbmdQb3dlciAgIC8vIHRoZSB0b3RhbCB2b3RpbmcgcG93ZXIgb2YgdGhlIHZhbGlkYXRvciBzZXQKICB9KQp9Cg=="}})],1),e._v(" "),i("li",[i("p",[e._v("Removes expired evidence from both pending and committed databases")])])]),e._v(" "),i("p",[e._v("The ABCI evidence is then sent via the "),i("code",[e._v("BlockExecutor")]),e._v(" to the application.")]),e._v(" "),i("h4",{attrs:{id:"summary"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),i("p",[e._v("To summarize, we can see the lifecycle of evidence as such:")]),e._v(" "),i("p",[i("img",{attrs:{src:a(608),alt:"evidence_lifecycle"}})]),e._v(" "),i("p",[e._v("Evidence is first detected and created in the light client and consensus reactor. It is verified and stored as "),i("code",[e._v("EvidenceInfo")]),e._v(" and gossiped to the evidence pools in other nodes. The consensus reactor later communicates with the evidence pool to either retrieve evidence to be put into a block, or verify the evidence the consensus reactor has retrieved in a block. Lastly when a block is added to the chain, the block executor sends the committed evidence back to the evidence pool so a pointer to the evidence can be stored in the evidence pool and it can update it's height and time. Finally, it turns the committed evidence into ABCI evidence and through the block executor passes the evidence to the application so the application can handle it.")]),e._v(" "),i("h2",{attrs:{id:"status"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),i("p",[e._v("Implemented")]),e._v(" "),i("h2",{attrs:{id:"consequences"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),i("h3",{attrs:{id:"positive"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),i("ul",[i("li",[e._v("Evidence is better contained to the evidence pool / module")]),e._v(" "),i("li",[e._v("LightClientAttack is kept together (easier for verification and bandwidth)")]),e._v(" "),i("li",[e._v("Variations on commit sigs in LightClientAttack doesn't lead to multiple permutations and multiple evidence")]),e._v(" "),i("li",[e._v("Address to evidence map prevents DOS attacks, where a single validator could DOS the network by flooding it with evidence submissions")])]),e._v(" "),i("h3",{attrs:{id:"negative"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),i("ul",[i("li",[e._v("Changes the "),i("code",[e._v("Evidence")]),e._v(" interface and thus is a block breaking change")]),e._v(" "),i("li",[e._v("Changes the ABCI "),i("code",[e._v("Evidence")]),e._v(" and is thus a ABCI breaking change")]),e._v(" "),i("li",[e._v("Unable to query evidence for address / time without evidence pool")])]),e._v(" "),i("h3",{attrs:{id:"neutral"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),i("h2",{attrs:{id:"references"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://github.com/informalsystems/tendermint-rs/blob/31ca3e64ce90786c1734caf186e30595832297a4/docs/spec/lightclient/attacks/evidence-handling.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("LightClientAttackEvidence"),i("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);