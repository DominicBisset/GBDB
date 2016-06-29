BEGIN TRANSACTION;
CREATE TABLE "Team" ("id" integer not null primary key autoincrement, "name" varchar(255) not null, "seasonIntroducedNo" integer not null, foreign key("seasonIntroducedNo") references "Season"("seasonNo"));
INSERT INTO `Team` (id,name,seasonIntroducedNo) VALUES (1,'Fishermen',1),
 (2,'Butchers',1),
 (3,'Brewers',1),
 (4,'Masons',1),
 (5,'Alchemists',1),
 (6,'Morticians',1),
 (7,'Engineers',1),
 (8,'Union',1),
 (9,'Hunters',1);
CREATE TABLE "Tag" ("id" integer not null primary key autoincrement, "name" varchar(255) not null, "type" integer not null);
INSERT INTO `Tag` (id,name,type) VALUES (1,'Ethraynnian',2),
 (2,'Human',3),
 (3,'Female',1),
 (4,'Captain',5),
 (5,'Defensive Midfielder',4),
 (6,'Male',1),
 (7,'Erskirii',2),
 (8,'Attacking Midfielder',4),
 (9,'Veteran',6);
CREATE TABLE "Season" ("seasonNo" integer, "startDate" date not null, "endDate" date null, primary key ("seasonNo"));
INSERT INTO `Season` (seasonNo,startDate,endDate) VALUES (1,1428274800000,1464217200000),
 (2,1464217200000,NULL);
CREATE TABLE "PlayerTeam" ("id" integer not null primary key autoincrement, "playerId" integer not null, "teamId" integer not null, foreign key("playerId") references "Player"("id"), foreign key("teamId") references "Team"("id"));
INSERT INTO `PlayerTeam` (id,playerId,teamId) VALUES (1,1,5),
 (2,2,5),
 (3,3,5);
CREATE TABLE "PlayerTag" ("id" integer not null primary key autoincrement, "playerId" integer not null, "tagId" integer not null, foreign key("playerId") references "Player"("id"), foreign key("tagId") references "Tag"("id"));
INSERT INTO `PlayerTag` (id,playerId,tagId) VALUES (1,1,1),
 (2,1,2),
 (3,1,3),
 (4,1,4),
 (5,1,5),
 (6,2,2),
 (7,2,6),
 (8,2,7),
 (9,2,8),
 (10,3,2),
 (11,3,6),
 (12,3,7),
 (13,3,8),
 (14,3,9);
CREATE TABLE "PlayerAbility" ("id" integer not null primary key autoincrement, "playerId" integer not null, "abilityId" integer not null, "parameterValue" varchar(255) null, foreign key("playerId") references "Player"("id"), foreign key("abilityId") references "Ability"("id"));
INSERT INTO `PlayerAbility` (id,playerId,abilityId,parameterValue) VALUES (1,1,1,NULL),
 (2,1,2,NULL),
 (3,1,3,NULL),
 (4,2,4,NULL),
 (5,2,5,NULL),
 (6,2,6,NULL),
 (7,1,10,NULL),
 (8,1,9,NULL),
 (9,1,8,NULL),
 (10,1,7,NULL),
 (11,3,4,NULL),
 (12,3,11,NULL),
 (13,3,12,NULL),
 (14,3,13,'4'),
 (15,3,14,NULL);
CREATE TABLE "Player" ("id" integer not null primary key autoincrement, "title" varchar(255) null, "characterId" integer not null, "seasonIntroducedNo" integer not null, "seasonRetiredNo" integer null, "movJog" integer not null, "movRun" integer not null, "TAC" integer not null, "kickDice" integer not null, "kickDistance" integer not null, "def" integer not null, "arm" integer not null, "infGenerated" integer not null, "infMax" integer not null, "health" integer not null, "baseSize" integer not null, "meleeZone" integer not null, foreign key("characterId") references "Character"("id"), foreign key("seasonIntroducedNo") references "Season"("seasonNo"), foreign key("seasonRetiredNo") references "Season"("seasonNo"));
INSERT INTO `Player` (id,title,characterId,seasonIntroducedNo,seasonRetiredNo,movJog,movRun,TAC,kickDice,kickDistance,def,arm,infGenerated,infMax,health,baseSize,meleeZone) VALUES (1,'Smoke',1,2,NULL,4,6,4,4,6,4,1,4,6,16,30,1),
 (2,'Katalyst',2,1,NULL,5,8,6,2,6,3,1,2,3,27,40,1),
 (3,'Katalyst The Lost|Veteran Katalyst',2,2,'',5,8,8,1,4,2,1,2,2,29,50,2);
CREATE TABLE "PlaybookResult" ("id" integer not null primary key autoincrement, "playerId" integer not null, "row" integer not null, "col" integer not null, "resultType" integer not null, "magnitude" integer not null, foreign key("playerId") references "Player"("id"));
INSERT INTO `PlaybookResult` (id,playerId,row,col,resultType,magnitude) VALUES (1,2,2,1,2,1),
 (2,2,1,2,3,1),
 (3,2,2,2,1,1),
 (4,2,2,2,7,1),
 (5,2,1,3,2,2),
 (6,2,2,3,1,1),
 (7,2,2,3,7,2),
 (8,2,1,4,4,1),
 (9,2,2,4,1,1),
 (10,2,2,4,5,1),
 (11,2,2,4,6,1),
 (12,2,2,5,2,3),
 (13,2,2,6,1,1),
 (14,2,2,6,2,3),
 (15,2,2,6,5,2),
 (16,1,2,1,2,1),
 (17,1,1,2,3,1),
 (18,1,2,2,1,1),
 (19,1,2,2,5,1),
 (20,1,1,3,2,2),
 (21,1,2,3,1,1),
 (22,1,2,3,5,2),
 (23,1,2,4,1,1),
 (24,1,2,4,3,1),
 (25,3,2,1,2,1),
 (26,3,2,2,1,1),
 (27,3,2,2,5,1),
 (28,3,1,3,2,2),
 (29,3,2,3,1,1),
 (30,3,2,3,2,1),
 (31,3,2,3,7,1),
 (32,3,1,4,4,1),
 (33,3,2,4,1,1),
 (34,3,2,4,5,2),
 (35,3,1,5,3,1),
 (36,3,2,5,2,3),
 (37,3,1,6,1,1),
 (38,3,1,6,2,2),
 (39,3,1,6,7,1),
 (40,3,2,6,1,1),
 (41,3,2,6,2,3),
 (42,3,2,6,5,2),
 (43,3,2,7,1,1),
 (44,3,2,7,2,3),
 (45,3,2,7,7,1),
 (46,3,2,8,2,3),
 (47,3,2,8,4,1),
 (48,0,0,0,0,0);
CREATE TABLE "IcySpongeLevel" ("id" integer not null primary key autoincrement, "playerId" integer not null, "icySpongeLevel" integer not null, foreign key("playerId") references "Player"("id"));
INSERT INTO `IcySpongeLevel` (id,playerId,icySpongeLevel) VALUES (1,1,6),
 (2,1,12),
 (3,2,9),
 (4,2,18);
CREATE TABLE "Character" ("id" integer not null primary key autoincrement, "name" varchar(255) not null);
INSERT INTO `Character` (id,name) VALUES (1,'Smoke'),
 (2,'Katalyst');
CREATE TABLE "Ability" ("id" integer not null primary key autoincrement, "name" varchar(255) not null, "abilityText" text not null, "abilityType" integer, "hasParameter" boolean null, "infCost" integer null, "gbCost" integer null, "rng" integer null, "zone" integer null, "zoneSize" integer null, "sustain" boolean null);
INSERT INTO `Ability` (id,name,abilityText,abilityType,hasParameter,infCost,gbCost,rng,zone,zoneSize,sustain) VALUES (1,'Cloud Jumper','Once per turn during its activation, this model may choose 
an ongoing-effect AOE within [4”]. This model may be placed anywhere within the chosen ongoing-effect AOE.',1,'False',NULL,NULL,NULL,NULL,NULL,NULL),
 (2,'Momentous Inspiration','[4" Aura] While within this aura, friendly models that generate one or more successful hits when using a Character Play that causes damage, additionally generate [1] MP.',1,'False',NULL,NULL,NULL,NULL,NULL,NULL),
 (3,'Smoke Bomb','Models within this ongoing-effect AOE benefit from cover. 
This Character Play may only be used once per turn.',2,'False',1,NULL,8,1,3,NULL),
 (4,'Intensify','Enemy models that are suffering conditions and are within the pulse suffer [2] DMG.',2,'False',2,1,-1,3,3,''),
 (5,'Rabid Animal','Target enemy model suffers [-4”/-4”] MOV and the poison condition.',2,'False',NULL,2,-2,'','','True'),
 (6,'Elemental Infusion','If this model makes an Attack against an enemy model that is suffering from one or more of the following conditions, the following cumulative benefits apply to the Attack against that model:
burning: [+1] DMG to Playbook damage results.
poison: [+2] TAC.
bleed: Target model suffers [-1] ARM.',1,'False',NULL,NULL,NULL,NULL,NULL,NULL),
 (7,'Alchemy Mix','Choose an ongoing-effect AOE that was positioned by a friendly model. Position a new [3”] ongoing-effect AOE in contact with the chosen AOE. The new AOE is a duplicate of 
the chosen ongoing-effect AOE. This Character Play may only be used once per turn.',2,'False',1,'',8,'','',''),
 (8,'Chemical Breeze','Choose an ongoing-effect AOE that was positioned by a friendly model. The chosen AOE may be positioned within [4”] of its current location. Models within the AOE when it is positioned are considered to have entered the AOE. This Character Play may only be used once on each ongoing-effect AOE per turn.',2,'False',1,'',6,NULL,NULL,NULL),
 (9,'Unpredictable Movement','Once per turn when an enemy model ends an Advance in this model’s melee zone, this model may immediately make a [2”]  Dodge.',1,'False',NULL,NULL,NULL,NULL,NULL,NULL),
 (10,'Chemical Shower','Position two [3”] AOEs within [8”] of this model. Models within one or more of these AOEs immediately suffer [3] condition-damage. Models entering or ending their activation in either of these ongoing-effect AOEs suffer the poison condition.',4,'False',NULL,NULL,NULL,NULL,NULL,NULL),
 (11,'Furious','This model may Charge without spending Influence.',1,'False',NULL,NULL,NULL,NULL,NULL,NULL),
 (12,'Chemical Frenzy','This model gains [+1] DMG to Playbook damage results when targeting an enemy model suffering at least one condition.',1,'False',NULL,NULL,NULL,NULL,NULL,NULL),
 (13,'Deteriorating','At the end of this model’s activation this model suffers the stated DMG.',1,'True',NULL,NULL,NULL,NULL,NULL,NULL),
 (14,'Glorious Achievement','If this model inflicts the taken-out condition on an enemy model, this model may immediately suffer the taken-out condition and reduce its HP to [0]. The friendly team gains an additional [+2] VP. ',3,'False',NULL,NULL,NULL,NULL,NULL,NULL);
COMMIT;
