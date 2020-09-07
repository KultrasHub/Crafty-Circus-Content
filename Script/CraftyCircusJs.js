function ProfileSelect(index){
  var profileText=document.getElementById('ProfileText');
  var profileImage=document.getElementById('ProfileImage');
  if(index==0)
  {
    profileText.innerHTML="Tran Nguyen Anh Khoa <br> ID: S3863956 <br> <br> Born and raised in a tranquill city, Dalat, I don't usually lose my temper. I could stay calm and cool-headed in most situations and do not really pay attention on what people think of me. However, I am always a curious boy, I often fantasize about living in a sci-fi worlds and visual worlds. I love watching movies of the fantasy future and hold the desire of creating my own imaginary world where people enjoy. I have a great enthusiasm and interest in space and cartoon, for that, I am extremely into sci-fi tales from movies or books. Additionally, I consider myself a crafty person, as a child, I made dragons, soliders out of paper because it fulfilled my desire. However, papercrafting seems a bit off for a 18 years old boy so I changed to game development. To be honest, I love making video games, when I first started it with unity I realised what my purpose is. I have over twenty projects, though the majority of them is abandoned, I completed some. Then I received many compliments of the games but I have not consider it a success. Therefore, I will still follow this path to the end.";
    profileImage.style.backgroundImage="url('Asset/Picture/KhoaPose.jpg')"
  }
  if(index==1)
  {
    profileText.innerHTML="Lu Minh Khang( Kent) <br> ID: S3863969 <br> <br>Ayyo wassup! My name is Lu Minh Khang but you can call me Kent for short. My student ID is just after this 2 dots mark: S3863969. Sharing a little bit about myself, I like made rap, mixed beat, and of course sport is on the list too especially badminton. The story of how I get my attention in IT was started from a movie named “Mission Impossible” and a person in that movie name Benji Dunn was inspired me a lot since then I started to learn more about the world of technology and virtual numbers. I also have many good experiences in IT especially programming software and web-design (I study full-stack so front-end and back-end are both my fields). After all that time of experiencing and updating knowledge about this field, I learned that the world and people are only gorillas without technology. That's a bit of information about myself. This is Kent from the Crafty Circus team with hip hop and love.";
    profileImage.style.backgroundImage="url('Asset/Picture/KentPose.jpg')"
  }
  if(index==2)
  {
    profileText.innerHTML="Nexie Jester <br> ID: 009900 <br> <br> I am cute because I was designed to be cute. My job is easy, all I need to do is staying still and being a good indicator. Besides, I also have hobbies, and loved one is staying still which I do alot, as you can see. I was built from the concept of Olaf in the Frozen. He is like my idol and , therefore, I have been always wanted to have a nose like him. It is sooooo Flexible =^= but mostly because I dont have one which is weird for a clown :/ . By the way, I also have a huge adoration for IT because, I am virtual. So my plan on IT is to discover the way to be real, I want to exist out there T^T because I am drown in boredom already, you know being a statue is a mundane hobby. Life out there is so interesting and exciting, I want to see snow because, Olaf is made of snow and I might find him. So I am one hundred percent ready to learn IT. By the way, try not to look at me much, it's human nature to be uncomfortable when being looked.";
    profileImage.style.backgroundImage="url('Asset/Picture/NexiePose.jpg')"
  }
  if(index==3)
  {
    profileText.innerHTML="Ho Buu Quoc Phong <br> ID: S3803566 <br> <br> I am currently a Vietnamese student studying Information Technology in RMIT University Vietnam aiming to become a programmer in the near future, my student number is S3803566, my email address is s3803566@rmit.edu.vn. The languages that I know currently are English and Vietnamese. I used to study in Canada (Toronto) in York University as a Psychology student before coming back to Vietnam pursuing I.T. My hobbies include reading and playing the piano. I was brought into the computer world because of my brother at a very young age, not only that but I have always been fascinated on the technologies that we humans had and still developing, we are already at the time when human necessities are easily provided by just a click of a mouse or a tap on the phone.";
    profileImage.style.backgroundImage="url('Asset/Picture/PhongPose.jpg')"
  }
  if(index==4)
  {
    profileText.innerHTML="Nguyen Hoang Minh Nhat <br> ID: S3765963 <br> <br>I am Vietnamese.Then, just a little bit about myself that I want to write down, that is I am not an introvert. I am lazy whenever nothing can interest me to do but as soon as I like it, I spend all the time for it, days and nights. I like playing badminton and soccer, but I do not have time and partners to play with, I can be in any group and type of people. There is a long story for me about absolutely studying Information Technology. Since I was in grade 11th, I wished that someday I could create something innovative just like Apple or Microsoft. First it was a dream, then my brother said that IT is one of the most difficult majors in which students graduate very few. At that moment, I was scared, I listened to my parents apply into Hospitality in RMIT. Right there, after two semesters studying, I had found myself getting bored because of business. I found Daniel Shiffman channel who teaches JS, HTML, CSS, ect,.. I admired him and started learning code from him and Processing was the first application which I wrote down my first code. Now, I am going to be a Junior then further due to learning all courses in RMIT. I am wondering if RMIT or me or could be both will help me to be good at using code to help people. ";
    profileImage.style.backgroundImage="url('Asset/Picture/NhatPose.jpg')"
  }
}
function CareerPlan(index)
{
  var khoaCareer=document.getElementById('KhoaCareer');
  var kentCareer=document.getElementById('KentCareer');
  var phongCareer=document.getElementById('PhongCareer');
  var nhatCareer=document.getElementById('NhatCareer');
  if(index==0)
  {
    //stretch the chosen container
    khoaCareer.style.width="62%";
    var child=khoaCareer.childNodes;
    child[7].innerHTML="The majority of Crafty Circus 's members have already experienced other programming languages. Additionally, we have 3 anticipated ideal jobs that are about game development. Therefore, the best role for the team is Game Developer. Game Developer does not appear in the list, however, we can presume a game is a software as they are much or less similar in terms of making. According to the Burning Glass Data, our title scores at the 19th position in the list of in-demand job titles to employers. Game creation requires a handful of abilities, especially, we will have to work with people from different areas. For example, programmers and artists usually have different ways of approaching the problem, this brings us the first consideration which is communication. Coming next are skills that every programmer needs to master, problem solving. Furthermore, Game development is a type of creative work meaning skill that we need to consider is creativity. We will be working on C# especially parts related to the Unity library. Besides, graphic design will be a consideration as people are extremely interested in appearance."
    Collapse(index)
  }
  if(index==1)
  {
    //stretch the chosen container
    kentCareer.style.width="62%";
    var child=kentCareer.childNodes;
    child[7].innerHTML="To add a level of complexity to your transitions, you can use the power of cubic beziers. Most of the time, if you’re just developing websites, you probably won’t need to mess with cubic beziers much. But, if you do and because I am barely competent with math (d’aww), I will let someone who is much better with numbers do the hard work to explain those. Check out The Art of Web for their excellent cubic bezier documentation. Transitions also work with images and can create some really cool effects. In fact, you can make entire slideshows with CSS transitions and images. But we’ll be covering that in another tutorial that’s coming soon!";
    Collapse(index)
  }
  if(index==2)
  {
    //stretch the chosen container
    phongCareer.style.width="62%";
    var child=phongCareer.childNodes;
    child[7].innerHTML="That old, familiar smell hit her first. Hay, strawberries, and sturdy wood. The courtyard of the Argentine Inn had a particular waft to it that brought the ache of memories long past: a hundred concerts, a thousand faces lit by lantern light, and—most painful of all—a time when things were simpler and happier in Demacia. But these days, that version of her home country felt distant. Worlds away. When she first spotted her old friend Etra emerging from the doorway of the inn, her breath hitched—maybe this, too, was different. But Etra’s eyes went wide. She shrieked with joy, and as she ran forward to wrap Sona up in her arms, Sona breathed a little sigh of relief. Some things didn’t change after all. “You got my letter!” Etra said, and squeezed her tight. Sona nodded. As Etra released her, she stood back to get a good look, still clasping Sona’s hands. “Someone’s been traveling,” she said, impressed. As if noticing Sona was on edge, Etra paused, released her hands, and slipped into the rough sign language they’d forged over a lifetime. All is well? It was a relief to be able to sign back. To be understood by someone who loved her. Yes, of course, Sona responded, whether it was true or not. Missed you terribly, though. She held her hands a little lower. Didn’t want passersby to see the sharp gestures, the twitching fingers, and draw the wrong conclusions.";
    Collapse(index)
  }
  if(index==3)
  {
    //stretch the chosen container
    nhatCareer.style.width="62%";
    var child=nhatCareer.childNodes;
    child[7].innerHTML="To add a level of complexity to your transitions, you can use the power of cubic beziers. Most of the time, if you’re just developing websites, you probably won’t need to mess with cubic beziers much. But, if you do and because I am barely competent with math (d’aww), I will let someone who is much better with numbers do the hard work to explain those. Check out The Art of Web for their excellent cubic bezier documentation. Transitions also work with images and can create some really cool effects. In fact, you can make entire slideshows with CSS transitions and images. But we’ll be covering that in another tutorial that’s coming soon!"
    Collapse(index)
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
  childKent[7].innerHTML="orem ipsum dolor sit amet, nec molestie mandamus torquatos ne. No sed dolorum fabellas atomorum. Ex sonet populo duo, ullum error vidisse no nec, ea molestie iudicabit nam. Te cibo salutandi nam, no stet nibh nam. Mel ex duis menandri,tation menandri te sed. Eum at amet inimicus adversarium. Ullum aeterno ea pro, case cibo movet vel an, in sea blandit quaestio rationibus.";
  phongCareer.style.width="23%";
  var childPhong=phongCareer.childNodes;
  childPhong[7].innerHTML=" orem ipsum dolor sit amet, nec molestie mandamus torquatos ne. No sed dolorum fabellas atomorum. Ex sonet populo duo, ullum error vidisse no nec, ea molestie iudicabit nam. Te cibo salutandi nam, no stet nibh nam. Mel ex duis menandri,tation menandri te sed. Eum at amet inimicus adversarium. Ullum aeterno ea pro, case cibo movet vel an, in sea blandit quaestio rationibus.";
  khoaCareer.style.width="23%";
  var childKhoa=khoaCareer.childNodes;
  childKhoa[7].innerHTML="orem ipsum dolor sit amet, nec molestie mandamus torquatos ne. No sed dolorum fabellas atomorum. Ex sonet populo duo, ullum error vidisse no nec, ea molestie iudicabit nam. Te cibo salutandi nam, no stet nibh nam. Mel ex duis menandri,tation menandri te sed. Eum at amet inimicus adversarium. Ullum aeterno ea pro, case cibo movet vel an, in sea blandit quaestio rationibus.";
  nhatCareer.style.width="23%";
  var childNhat=nhatCareer.childNodes;
  childNhat[7].innerHTML="orem ipsum dolor sit amet, nec molestie mandamus torquatos ne. No sed dolorum fabellas atomorum. Ex sonet populo duo, ullum error vidisse no nec, ea molestie iudicabit nam. Te cibo salutandi nam, no stet nibh nam. Mel ex duis menandri,tation menandri te sed. Eum at amet inimicus adversarium. Ullum aeterno ea pro, case cibo movet vel an, in sea blandit quaestio rationibus.";
}
