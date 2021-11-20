console.log("ENUME.ts");

enum Membership {
  Simple,
  Standart,
  Premium,
}

console.log(Membership.Premium);

const membership = Membership.Standart;
console.log(membership);

const membership2 = Membership[1];
console.log(membership2);
console.log(Membership[1]);

enum SocialMedia {
  vk = "VK",
  facebook = "Facebook",
  instagram = "Instagram",
}

console.log(SocialMedia.vk, SocialMedia.facebook, SocialMedia.instagram);
console.log(SocialMedia[2], SocialMedia[1], SocialMedia[0], SocialMedia[3]);
