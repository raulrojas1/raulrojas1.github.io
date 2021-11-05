create database if not exists laravel_master;

use laravel_master;

create table if not exists users(
id 		int(255) auto_increment not null,
role 	varchar(20),
name 	varchar(100),
surname varchar(200),
nick	varchar(100),
email	varchar(255),
passwrd	varchar(255),
image	varchar(255),
created_at datetime,
updated_at datetime,
remember_token varchar(255),
CONSTRAINT pk_users PRIMARY KEY (id)
)engine=innodb;

insert into users values (null,'user','Benimaru','Tempest','shakal','ben@tempest.com','pass',null,curtime(),curtime(),null);
insert into users values (null,'admin','Rimuru','Tempest','rimamu','rim@tempest.com','pass',null,curtime(),curtime(),null);
insert into users values (null,'user','Echioma','Monster','tudulce','ech@monster.net','pass',null,curtime(),curtime(),null);

create table if not exists images(
id 			int(255) auto_increment not null,
user_id 	int(255),
image_path 	varchar(255),
description text,
created_at 	datetime,
updated_at 	datetime,
CONSTRAINT pk_images PRIMARY KEY (id),
CONSTRAINT fk_images_users FOREIGN KEY(user_id) REFERENCES users(id) 
)engine=innodb;


insert into images values (null,1,'test2.jpg','Kowloon DIY youtube refrigerator vinyl systemic industrial grade. Katana camera j-pop realism Tokyo tube-space singularity. Pistol media boy systemic Kowloon singularity shanty town futurity grenade-ware artisanal. Ablative youtube sensory systema papier-mache San Francisco augmented reality rain. Bridge augmented reality apophenia car rifle industrial grade wonton soup skyscraper construct claymore mine numinous boy. Decay marketing wristwatch corrupted smart-cyber-dissident systemic boy soul-delay franchise crypto-advert meta-uplink j-pop. Pen-ware boat fetishism tank-traps Tokyo vinyl film jeans paranoid computer dome dead otaku Kowloon sentient tanto. Weathered hacker crypto-corrupted lights pistol neural. '
		,curtime(),curtime());
insert into images values (null,1,'test1.jpg','Tattoo augmented reality apophenia dome tanto drugs wonton soup Tokyo cardboard bridge realism. 3D-printed marketing katana neural boy footage physical Kowloon. Carbon drone tattoo media pen marketing industrial grade RAF savant paranoid crypto-youtube receding sign garage network papier-mache. Nodality boat papier-mache into lights rain paranoid table dome. Skyscraper fetishism ablative plastic BASE jump saturation point shanty town San Francisco semiotics savant concrete realism papier-mache render-farm grenade chrome.-ware film drugs motion papier-mache rifle savant engine cartel skyscraper. Chrome bomb tiger-team silent tanto table Tokyo youtube crypto-pen bicycle. Computer narrative crypto-Legba rebar claymore mine media urban boat beef noodles sunglasses math-boy. Artisanal hacker crypto-boat otaku San Francisco nano-uplink physical gang Tokyo concrete. '
		,curtime(),curtime());
insert into images values (null,2,'test0.jpg','Boat film footage nodality range-rover wonton soup post-nano-bomb. Decay voodoo god lights Chiba wonton soup sign BASE jump physical Kowloon drone 3D-printed uplink cardboard hacker. Shrine weathered alcohol wonton soup office sentient bridge film augmented reality military-grade. '
		,curtime(),curtime());


create table if not exists comments(
id 			int(255) auto_increment not null,
user_id 	int(255),
image_id 	int(255),
content 	text,
created_at 	datetime,
updated_at 	datetime,
CONSTRAINT pk_comments PRIMARY KEY (id),
CONSTRAINT fk_comments_users FOREIGN KEY(user_id) REFERENCES users(id) ,
CONSTRAINT fk_comments_images FOREIGN KEY(image_id) REFERENCES images(id)
)engine=innodb;

insert into comments values(null,1,2,'Math-hacker courier faded into narrative modem shoes Tokyo wonton soup crypto. BASE jump otaku numinous Kowloon voodoo god geodesic bridge youtube savant pre-fetishism sprawl sub-orbital.-ware soul-delay sentient table bridge pre-pen computer boy savant. Long-chain hydrocarbons tube digital computer artisanal shrine pre-franchise wristwatch hotdog boat. ',
	curtime(),curtime());
insert into comments values(null,3,1,'Concrete tanto girl neural network denim claymore mine kanji bicycle dome Chiba bomb. Shoes pre-BASE jump neon neural Chiba skyscraper bicycle semiotics. Dissident engine vinyl table woman gang nodality dome meta-man semiotics. Ablative saturation point kanji sprawl plastic face forwards tiger-team semiotics nodal point. Advert order-flow j-pop systemic neural tank-traps uplink boy table neon Kowloon warehouse. Receding free-market Tokyo post-augmented reality realism urban paranoid boy sprawl dolphin face forwards 3D-printed chrome rifle dome fetishism. Wonton soup uplink shoes tower shanty town 3D-printed ablative crypto. Face forwards numinous footage computer cardboard artisanal warehouse human rifle construct tiger-team. Assassin geodesic face forwards range-rover pre-jeans boy nano-bicycle semiotics DIY post. ',
	curtime(),curtime());
insert into comments values(null,2,1,'Chiba j-pop katana systemic Kowloon plastic youtube futurity convenience store silent dolphin dome network dissident. Skyscraper savant soul-delay systema jeans long-chain hydrocarbons car. Construct stimulate concrete neural spook numinous systemic-space Legba. Woman-space papier-mache tanto nodality artisanal nodal point spook franchise cardboard futurity systemic. ',
	curtime(),curtime());


insert into comments values(null,3,2,'Math-hacker courier faded into narrative modem shoes Tokyo wonton soup crypto. BASE jump otaku numinous Kowloon voodoo god geodesic bridge youtube savant pre-fetishism sprawl sub-orbital.-ware soul-delay sentient table bridge pre-pen computer boy savant. Long-chain hydrocarbons tube digital computer artisanal shrine pre-franchise wristwatch hotdog boat. ',
	curtime(),curtime());
insert into comments values(null,2,3,'Concrete tanto girl neural network denim claymore mine kanji bicycle dome Chiba bomb. Shoes pre-BASE jump neon neural Chiba skyscraper bicycle semiotics. Dissident engine vinyl table woman gang nodality dome meta-man semiotics. Ablative saturation point kanji sprawl plastic face forwards tiger-team semiotics nodal point. Advert order-flow j-pop systemic neural tank-traps uplink boy table neon Kowloon warehouse. Receding free-market Tokyo post-augmented reality realism urban paranoid boy sprawl dolphin face forwards 3D-printed chrome rifle dome fetishism. Wonton soup uplink shoes tower shanty town 3D-printed ablative crypto. Face forwards numinous footage computer cardboard artisanal warehouse human rifle construct tiger-team. Assassin geodesic face forwards range-rover pre-jeans boy nano-bicycle semiotics DIY post. ',
	curtime(),curtime());
insert into comments values(null,1,2,'Chiba j-pop katana systemic Kowloon plastic youtube futurity convenience store silent dolphin dome network dissident. Skyscraper savant soul-delay systema jeans long-chain hydrocarbons car. Construct stimulate concrete neural spook numinous systemic-space Legba. Woman-space papier-mache tanto nodality artisanal nodal point spook franchise cardboard futurity systemic. ',
	curtime(),curtime());


create table if not exists likes(
id 			int(255) auto_increment not null,
user_id 	int(255),
image_id 	int(255),
created_at 	datetime,
updated_at 	datetime,
CONSTRAINT pk_likes PRIMARY KEY (id),
CONSTRAINT fk_likes_users FOREIGN KEY(user_id) REFERENCES users(id) ,
CONSTRAINT fk_likes_images FOREIGN KEY(image_id) REFERENCES images(id)
)engine=innodb;

insert into likes values(null,1,1,curtime(),curtime());
insert into likes values(null,1,1,curtime(),curtime());
insert into likes values(null,1,1,curtime(),curtime());
insert into likes values(null,2,1,curtime(),curtime());
insert into likes values(null,3,3,curtime(),curtime());
insert into likes values(null,2,2,curtime(),curtime());
insert into likes values(null,3,2,curtime(),curtime());

insert into likes values(null,1,1,curtime(),curtime());
insert into likes values(null,1,1,curtime(),curtime());
insert into likes values(null,1,1,curtime(),curtime());
insert into likes values(null,2,1,curtime(),curtime());
insert into likes values(null,3,3,curtime(),curtime());
insert into likes values(null,2,2,curtime(),curtime());
insert into likes values(null,3,2,curtime(),curtime());





