console.log("ENUME.ts");
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standart"] = 1] = "Standart";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
console.log(Membership.Premium);
var membership = Membership.Standart;
console.log(membership);
var membership2 = Membership[1];
console.log(membership2);
console.log(Membership[1]);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["vk"] = "VK";
    SocialMedia["facebook"] = "Facebook";
    SocialMedia["instagram"] = "Instagram";
})(SocialMedia || (SocialMedia = {}));
console.log(SocialMedia.vk, SocialMedia.facebook, SocialMedia.instagram);
console.log(SocialMedia[2], SocialMedia[1], SocialMedia[0], SocialMedia[3]);
