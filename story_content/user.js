function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6q0RPVZu0Oy":
        Script1();
        break;
      case "6fdbnRxlcKc":
        Script2();
        break;
      case "5duKCxcEqav":
        Script3();
        break;
      case "5t6IfjBCla9":
        Script4();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();


function add_line() {
	var line = document.createElement("audio");
	var head=document.getElementsByTagName('body')[0];
	line.type = "audio/mp3";
	line.src="";
	line.id="bgSong" ;
	line.autoplay = true;
	line.loop = false;
	head.appendChild(line);
}

//We only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
	var audio = document.getElementById('bgSong');
	audio.volume = 0.1;
	player.SetVar("javascriptsLoaded",true)
}
}

function Script2()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;
audio.load();

}

function Script3()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;
audio.load();
audio.play();
}

function Script4()
{
  var player = GetPlayer();

this.Location= player.GetVar("location");
this.audioFile = player.GetVar("audioFile");
var audio = document.getElementById('bgSong');
audio.src=Location + audioFile;

audio.pause();
audio.currentTime = 0;
}

