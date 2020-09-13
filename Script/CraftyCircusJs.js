function ProfileSelect(index){
  var profileText=document.getElementById('ProfileText');
  var profileImage=document.getElementById('ProfileImage');
  if(index==0)
  {
    profileText.innerHTML="Tran Nguyen Anh Khoa <br> ID: S3863956 <br> <br> Born and raised in a tranquill city, Dalat, I don't usually lose my temper. I could stay calm and cool-headed in most situations and do not really pay attention on what people think of me. However, I am always a curious boy, I often fantasize about living in a sci-fi worlds and visual worlds. I love watching movies of the fantasy future and hold the desire of creating my own imaginary world where people enjoy. I have a great enthusiasm and interest in space and cartoon, for that, I am extremely into sci-fi tales from movies or books. Additionally, I consider myself a crafty person, as a child, I made dragons, soliders out of paper because it fulfilled my desire. However, papercrafting seems a bit off for a 18 years old boy so I changed to game development. To be honest, I love making video games, when I first started it with unity I realised what my purpose is. I have over twenty projects, though the majority of them is abandoned, I completed some. Then I received many compliments of the games but I have not consider it a success. Therefore, I will still follow this path to the end.";
    profileImage.style.backgroundImage="url('Asset/Picture/KhoaPose.jpg')";
  }
  if(index==1)
  {
    profileText.innerHTML="Lu Minh Khang( Kent) <br> ID: S3863969 <br> <br>Ayyo wassup! My name is Lu Minh Khang but you can call me Kent for short. My student ID is just after this 2 dots mark: S3863969. Sharing a little bit about myself, I like made rap, mixed beat, and of course sport is on the list too especially badminton. The story of how I get my attention in IT was started from a movie named “Mission Impossible” and a person in that movie name Benji Dunn was inspired me a lot since then I started to learn more about the world of technology and virtual numbers. I also have many good experiences in IT especially programming software and web-design (I study full-stack so front-end and back-end are both my fields). After all that time of experiencing and updating knowledge about this field, I learned that the world and people are only gorillas without technology. That's a bit of information about myself. This is Kent from the Crafty Circus team with hip hop and love.";
    profileImage.style.backgroundImage="url('Asset/Picture/KentPose.jpg')";
  }
  if(index==2)
  {
    profileText.innerHTML="Nexie Jester <br> ID: 009900 <br> <br> I am cute because I was designed to be cute. My job is easy, all I need to do is staying still and being a good indicator. Besides, I also have hobbies, and loved one is staying still which I do alot, as you can see. I was built from the concept of Olaf in the Frozen. He is like my idol and , therefore, I have been always wanted to have a nose like him. It is sooooo Flexible =^= but mostly because I dont have one which is weird for a clown :/ . By the way, I also have a huge adoration for IT because, I am virtual. So my plan on IT is to discover the way to be real, I want to exist out there T^T because I am drown in boredom already, you know being a statue is a mundane hobby. Life out there is so interesting and exciting, I want to see snow because, Olaf is made of snow and I might find him. So I am one hundred percent ready to learn IT. By the way, try not to look at me much, it's human nature to be uncomfortable when being looked.";
    profileImage.style.backgroundImage="url('Asset/Picture/NexiePose.jpg')";
  }
  if(index==3)
  {
    profileText.innerHTML="Ho Buu Quoc Phong <br> ID: S3803566 <br> <br> I am currently a Vietnamese student studying Information Technology in RMIT University Vietnam aiming to become a programmer in the near future, my student number is S3803566, my email address is s3803566@rmit.edu.vn. The languages that I know currently are English and Vietnamese. I used to study in Canada (Toronto) in York University as a Psychology student before coming back to Vietnam pursuing I.T. My hobbies include reading and playing the piano. I was brought into the computer world because of my brother at a very young age, not only that but I have always been fascinated on the technologies that we humans had and still developing, we are already at the time when human necessities are easily provided by just a click of a mouse or a tap on the phone.";
    profileImage.style.backgroundImage="url('Asset/Picture/PhongPose.jpg')";
  }
  if(index==4)
  {
    profileText.innerHTML="Nguyen Hoang Minh Nhat <br> ID: S3765963 <br> <br>I am Vietnamese.Then, just a little bit about myself that I want to write down, that is I am not an introvert. I am lazy whenever nothing can interest me to do but as soon as I like it, I spend all the time for it, days and nights. I like playing badminton and soccer, but I do not have time and partners to play with, I can be in any group and type of people. There is a long story for me about absolutely studying Information Technology. Since I was in grade 11th, I wished that someday I could create something innovative just like Apple or Microsoft. First it was a dream, then my brother said that IT is one of the most difficult majors in which students graduate very few. At that moment, I was scared, I listened to my parents apply into Hospitality in RMIT. Right there, after two semesters studying, I had found myself getting bored because of business. I found Daniel Shiffman channel who teaches JS, HTML, CSS, ect,.. I admired him and started learning code from him and Processing was the first application which I wrote down my first code. Now, I am going to be a Junior then further due to learning all courses in RMIT. I am wondering if RMIT or me or could be both will help me to be good at using code to help people. ";
    profileImage.style.backgroundImage="url('Asset/Picture/NhatPose.jpg')";
  }
}
function CareerPlan(index)
{
  var khoaCareer=document.getElementById('KhoaCareer');
  var kentCareer=document.getElementById('KentCareer');
  var phongCareer=document.getElementById('PhongCareer');
  var nhatCareer=document.getElementById('NhatCareer');
  nhatCareer.preventDefault;
  khoaCareer.classList.remove('CareerPlanCall');
  void khoaCareer.setoffWidth;
  kentCareer.classList.remove('CareerPlanCall');
  void kentCareer.setoffWidth;
  phongCareer.classList.remove('CareerPlanCall');
  void phongCareer.setoffWidth;
  nhatCareer.classList.remove('CareerPlanCall');
  void nhatCareer.setoffWidth;
  if(index==0)
  {
    //stretch the chosen container
    khoaCareer.style.width="62%";
    var child=khoaCareer.childNodes;
    child[7].innerHTML="I have a dream of working in the game industry. Although I have an ideal job, Game Designer, I am ambitious about having my own business. This is quite different from other members in the team. <br><br>I and Nhat will be working in the same industry, however, his plan is more likely to get employed. Therefore, there is a connection between our plans. <br><br>On the other hand, Phong wants more freedom at work so he chose to be a freelancer. In contrast, my work would be more reliable than his, as he only can earn money when he is hired. The pattern of work is also distinct.<br><br>Kent and I may share the same ideas, is to establish a team. However, he is less relentless than me as he wants to gain experience from working first.";
    Collapse(index);
    khoaCareer.classList.add("CareerPlanCall");
    setTimeout(function()
  {
    var savedHeight=nhatCareer.offsetHeight;
    savedHeight=savedHeight+ "px";
    kentCareer.style.height=savedHeight;
        khoaCareer.style.height=savedHeight;
            phongCareer.style.height=savedHeight;
  },500)
  }
  if(index==1)
  {
    //stretch the chosen container
    kentCareer.style.width="62%";
    var child=kentCareer.childNodes;
    child[7].innerHTML="To add a level of complexity to your transitions, you can use the power of cubic beziers. Most of the time, if you’re just developing websites, you probably won’t need to mess with cubic beziers much. But, if you do and because I am barely competent with math (d’aww), I will let someone who is much better with numbers do the hard work to explain those. Check out The Art of Web for their excellent cubic bezier documentation. Transitions also work with images and can create some really cool effects. In fact, you can make entire slideshows with CSS transitions and images. But we’ll be covering that in another tutorial that’s coming soon!";
    Collapse(index);
    phongCareer.classList.add("CareerPlanCall");
    setTimeout(function()
  {
    var savedHeight=nhatCareer.offsetHeight;
    savedHeight=savedHeight+ "px";
    nhatCareer.style.height=savedHeight;
    khoaCareer.style.height=savedHeight;
    phongCareer.style.height=savedHeight;
  },500)
  }
  if(index==2)
  {
    //stretch the chosen container
    phongCareer.style.width="62%";
    var child=phongCareer.childNodes;
    child[7].innerHTML="My ideal job was to be a software engineer. But the more I get to work in a simulated I.T environment the more I prefer to be working as a freelancer, being a freelancer means I get to work with a more flexible environment and encounter a broader kinds of work without sticking to one genre. Khoa’s career plan for the future is self-employment in the gaming industry. The most similar thing from my career plan and Khoa’s is probably the self-employment element, since being a freelancer that technically means I too am working for myself, the difference is his career plan sticks onto the gaming category while I can choose any request types. Nhat and Khang’s career plan difference comparing to mine is that, Nhat will be working under a company as a game developer while Khang already has a company that he will be working for as soon as he finishes his studies, Khang also wishes to progress further from his future company by being open to other job offerings, ultimately the biggest aspects that differentiates between my career plans and Khang, Nhat’s is that they have a certain path to follow and the preference of working under a certain category with a steady salary while I look for requests with different amounts of payment under various working topics.";
    Collapse(index);
    phongCareer.classList.add("CareerPlanCall");
    setTimeout(function()
  {
    var savedHeight=nhatCareer.offsetHeight;
    savedHeight=savedHeight+ "px";
    nhatCareer.style.height=savedHeight;
        khoaCareer.style.height=savedHeight;
            kentCareer.style.height=savedHeight;
  },500)
  }
  if(index==3)
  {
    //stretch the chosen container
    nhatCareer.style.width="62%";
    var child=nhatCareer.childNodes;
    child[7].innerHTML="My ideal job is about to become a game developer which is a programming position. My ideal job is similar to Khoa which is also a game developer. However, Khoa is fond of a design position. Design and programming are completely different, design is harder than programming in my opinion. Because it needs to be creative and attractive, which is the face of the product, in this case, it is the face of our game. Besides, programming is about building the skull to support the face our side. Comparing to Kent, we are both developers but these two jobs develop in different areas in the IT industry and the work is totally different. Mostly, full-stack is the one working with full web which is the face of the web and manages to let it work completely. That means he will know a little bit about designing the web to attract users. Although programming and full-stack are absolutely different, we also are able to help each other by the code that we know and the solution.Lastly, comparing my ideal’s job with Phong’s ideal job, mine is about creating, maintaining and developing source code meanwhile, Phong’s is supposed to analyze and satisfy the request from clients. Specifically, Phong’s job is the “bridge” between clients and employers in order to guarantee that the product and client’s requirements are suitable. Therefore, his ideal job can help mine to understand and make sure that mine is doing the right way.";
    Collapse(index);
    nhatCareer.classList.add("CareerPlanCall");
    setTimeout(function()
  {
    var savedHeight=nhatCareer.offsetHeight;
    savedHeight=savedHeight+ "px";
    phongCareer.style.height=savedHeight;
        khoaCareer.style.height=savedHeight;
            kentCareer.style.height=savedHeight;
  },500)
  }
}
function Collapse(chosen)
{
  var khoaCareer=document.getElementById('KhoaCareer');
  var kentCareer=document.getElementById('KentCareer');
  var phongCareer=document.getElementById('PhongCareer');
  var nhatCareer=document.getElementById('NhatCareer');
  if(chosen==0)
  {
    kentCareer.style.width="10%";
    var childKent=kentCareer.childNodes;
    childKent[7].innerHTML="";
    phongCareer.style.width="10%";
    var childPhong=phongCareer.childNodes;
    childPhong[7].innerHTML="";
    nhatCareer.style.width="10%";
    var childNhat=nhatCareer.childNodes;
    childNhat[7].innerHTML="";
  }
  if(chosen==1)
  {
    khoaCareer.style.width="10%";
    var childKhoa=khoaCareer.childNodes;
    childKhoa[7].innerHTML="";
    phongCareer.style.width="10%";
    var childPhong=phongCareer.childNodes;
    childPhong[7].innerHTML="";
    nhatCareer.style.width="10%";
    var childNhat=nhatCareer.childNodes;
    childNhat[7].innerHTML="";
  }
  if(chosen==2)
  {
    kentCareer.style.width="10%";
    var childKent=kentCareer.childNodes;
    childKent[7].innerHTML="";
    khoaCareer.style.width="10%";
    var childKhoa=khoaCareer.childNodes;
    childKhoa[7].innerHTML="";
    nhatCareer.style.width="10%";
    var childNhat=nhatCareer.childNodes;
    childNhat[7].innerHTML="";
  }
  if(chosen==3)
  {
    kentCareer.style.width="10%";
    var childKent=kentCareer.childNodes;
    childKent[7].innerHTML="";
    phongCareer.style.width="10%";
    var childPhong=phongCareer.childNodes;
    childPhong[7].innerHTML="";
    khoaCareer.style.width="10%";
    var childKhoa=khoaCareer.childNodes;
    childKhoa[7].innerHTML="";

  }
}
function Restretch()
{
  var khoaCareer=document.getElementById('KhoaCareer');
  var kentCareer=document.getElementById('KentCareer');
  var phongCareer=document.getElementById('PhongCareer');
  var nhatCareer=document.getElementById('NhatCareer');
  kentCareer.style.width="23%";
  var childKent=kentCareer.childNodes;
  childKent[7].innerHTML="DataMissing";
  phongCareer.style.width="23%";
  var childPhong=phongCareer.childNodes;
  childPhong[7].innerHTML=" My ideal job was to be a software engineer. But the more I get to work in a simulated I.T environment the more I prefer to be working as a freelancer, being a freelancer means I get to work with a more flexible environment and encounter a broader kinds of work without sticking to one genre. Khoa’s career plan for the future is self-employment in the gaming industry. The most similar thing from my career plan and Khoa’s is probably the self-employment element, since being";
  khoaCareer.style.width="23%";
  var childKhoa=khoaCareer.childNodes;
  childKhoa[7].innerHTML="I have a dream of working in the game industry. Although I have an ideal job, Game Designer, I am ambitious about having my own business. This is quite different from other members in the team.";
  nhatCareer.style.width="23%";
  var childNhat=nhatCareer.childNodes;
  childNhat[7].innerHTML="  My ideal job is about to become a game developer which is a programming position. My ideal job is similar to Khoa which is also a game developer. However, Khoa is fond of a design position while developing a game. Design and programming are completely different, design is harder than programming in my opinion. Because it needs to be creative and attractive, which is the face of the product, in this case, it is the face of our game.";
  phongCareer.style.height='300px';
  khoaCareer.style.height='300px';
  kentCareer.style.height='300px';
  nhatCareer.style.height='300px';
}
function ToolShow(index)
{
  var tool=document.getElementById('toolContent');
  if(index==0)
  {
    tool.innerHTML="There are both free license and professional one for this program. Unity is a video game engine, we would use Unity to build the game and design maps. Khoa has experienced this program before and he has a few video games made out of this program. He is familiar with making 2D games. <br><br> We will also add some external package to Unity: <br> <br> Monetization package: This is an additional package which we will add to the game later for income. <br> 2D Animation package & PSD Importer package: we will use animation package for real animation while psd imported enables Unity to read photoshop files.";
  }
  if(index==1)
  {
    tool.innerHTML="this program requires membership or license. Photoshop is a graphic design tool which we will use to create characters, environment, UI. Khoa started learning Photoshop 2 years ago, but, as according to what he said, he is not confident with it and there are more to improve and explore with its vastly features. He opined that Photoshop is an extremely powerful tool in term of graphic.";
  }
  if(index==2)
  {
    tool.innerHTML="There is a free version for the community. Visual Studio includes C# language which is supported by Unity. Unity supports many programming softwares, however, we chose this due to the IntelliSense. According to our leader, Khoa, this feature is genuinely efficient and it increases productivity. For example, if you type down few keys, a panel appears to show the full sentences and commands, there are even with notes. IntelliSense also enables automatic simple debugging function. It helps reduce work time significantly. ";
  }
  if(index==3)
  {
      tool.innerHTML="there is a license required to function this program. We will use Spine to test for animation as it is not complicated and flexible. We saw animators on youtube used this program to create animation for videogames. Normally, people will also photoshop with spine to create a fully graphically functioning character, then the characters will exported frame by frame and eventually imported into Unity.";
  }
  if(index==4)
  {
    tool.innerHTML="require membership or license. We use After Effect to create VFX. This program is shockingly time-efficient users could make an appealing effect like flashing or muzzles after few clicks. Another reason we prefer Ae over others is due to the fact that it allows user to export an animation to frame-by-frame images which is usable in 2D games.";
  }
  if(index==6)
  {
    tool.innerHTML="No license required. Soundly is used to make Sound effect(sfx). We have not explore this program yet, however, we did see it fantastic library of sound, from animal or alien. As a result, we think this is all we need for sounding.";
  }
  if(index==7)
  {
    tool.innerHTML="Free website, we will trello to keep track of the work. Khoa used this before during his makings and according to him it is an extremely good tool for managing the project. Basically, what we do with this tool is that we create notes and todo list and once the work is done we drag that notes to completed area.";
  }
  if(index==5)
  {
    tool.innerHTML="This is a free Website. We use Songmaker for background music. It is simple but amazing, the tune is melodious, we think creating we could create a beautiful song with the support of this program. A 2D video game does not require an epic music so this should be the most appropriate to our project.";
  }
  if(index==8)
  {
    tool.innerHTML="Free program. Our plan is to publish the game onto Stream. It is a gamer's heaven as well as developers, lots of player are willing to pay for playing. So we think we would earn bread and butter out of this.";
  }
  if(index==9)
  {
    tool.innerHTML="Hardware requirements: Ram 8GB- Hard drive 250GB: We believe those hardware are essential to create 2D video games smoothly. We may consider an additional screen, due to the fact that seniors preferred that. Moreover, Unity no longer support 32 bit system so it is better to use 64-bit which hardware's condition is about 8GB in RAM for smoothly operation. A video game may seem light but the data and information without compression is unbelievably heavy. A 200MB video game could take up to 15GB in the creators' hardive.";
  }

}
function FBSelection(index)
{
  var title=document.getElementById("Title_FB");
  var khoa=document.getElementById("Khoa_FB");
  var kent=document.getElementById("Kent_FB");
  var phong=document.getElementById("Phong_FB");
  var nhat=document.getElementById("Nhat_FB");
  if(index==0)
  {
    title.innerHTML="Khoa's Antifan";
    khoa.innerHTML="I'm the leader of Crafty Circus, I think in this assignment, we have done a better job with work distribution, though, I still have to do more work than other members as I am the only person who has experience in video games in the group but I think it  worth it. Overall, I am happy with my performance in the team as a leader.";
    kent.innerHTML=" About Kultras, he takes responsibility for the code part, and it has completed a very good job, even helping other members when having trouble.";
    phong.innerHTML="Khoa still remains the strongest member of the group as he mostly take part in making the website again while completing his assigned sections, additionally one of the challenges that he has to take is showing the rest of the member how to design and partially demonstrate on how to use the project-related applications which was double the amount of work that other members have to do, yet he still manages to make it on time of the assigned due date, I am very glad that I got to work with him throughout our group assignment.";
    nhat.innerHTML="";
  }
  if(index==1)
  {
    title.innerHTML="Kent's Antifan";
    khoa.innerHTML="Kent shows such an improvement in this assignment too. Although he is a bit careless at writing and often falls into freestyle writing rather than an academic one, he listens to us and is ready to repair his underwork. In general, he takes more responsibility in this assignment and it is a good sign.";
    kent.innerHTML="As for myself, I feel that I have not done very well when I do wrong some assigned tasks, but I still try to fix and complete it within the time set, and I need to fix this rare problem.";
    phong.innerHTML="Khang has shown me a lot of his focus towards the assignment throughout the working period. Because all of my courses I share with Khang while I was studying with him, the one thing that he keeps mentioning is the questions he has on his section which reflects back on how much he cares for this assignments and how he wants to perfect his section so that the group can have a well-informed product.";
    nhat.innerHTML="";
  }
  if(index==2)
  {
    title.innerHTML="Phong's Antifan";
    khoa.innerHTML="Phong is genuinely a hardworking student, he has to undertake difficult tasks too. We were happy with the content he showed in the last assignment, so I had no worry to entrust him with the major content. The result is he does not turn everyone down this time and actually he got all commits on time.";
    kent.innerHTML="Phong in Assignment 3 is the member who undertake the content the most and still completes it well. He also helps me a lot with my content writing.";
    phong.innerHTML="At this moment after almost ten weeks working together as a group through project two and three I have finally gotten a wider understanding and the strengths, limitations of each member of the group. Before talking about other members, judging from my own personal performance in the assignment three, I can finally confidently say that my time management on working and completing my part as well as helping other group mates with their tasks has improved a lot compared to the last assignment that we did. I managed to deliver my necessary information about the assignment that the group needed at the ideal time with good quality.";
    nhat.innerHTML="";
  }
  if(index==3)
  {
    title.innerHTML="Nhat's Antifan";
    khoa.innerHTML="Nhat is also a person I feel confident when assigning tasks. He is always punctual, way too punctual, his content is fantastic and sometimes, he took it seriously on a minor content. However, there are still some issues with him, he could not join our discussion and take work passively. So I hope he will be more proactive in the future.";
    kent.innerHTML="Although the individual time is very busy for Nhật, he still completes all assigned tasks, but like the last Assignment Nhật still missed group meetings sometime and the least communication to overcome and arrange the time.";
    phong.innerHTML="Nhat has outdone himself with his section providing extremely detailed descriptions and works. Not only that but he also stood up and took one of the questions that demanded a high amount of accuracy, actively participating with the group work and providing his assistance after he finished his part. Overall I would say that he has proven himself with his huge contribution on this assignment.";
    nhat.innerHTML="";
  }
}
function Alert()
{
  alert(" You can not do this, sadly");
}
