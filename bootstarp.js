module.exports = async () => {
 const  Userjoke = require("./userjokes");
 const Member = require("./models/members");

 Member.hasMany(Userjoke, { as: "Userjokes", forignKey: 'userid'});
 Userjoke.belongsTo(Member, { as: "Member",forignKey: 'userid' });

 const errHandler = err => {
     console.log("Error: ", err);
 };

 const member = await Member.create({
     name: "darkodmc",
     email: "bla@gmail.com"

 }).catch(errHandler);

 const userjokes = await Userjoke.create({
        upvotes: 5,
        downvotes: 10,
        body: "knockknock",
        userid: 1
 }).catch(errHandler);






};