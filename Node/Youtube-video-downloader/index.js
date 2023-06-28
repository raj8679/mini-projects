// const express = require("express");
// const bodyParseer = require("body-parser")
// const app = express();

// app.get("/",(req,res)=>{
// res.sendFile(__dirname+"/index.html")
// })

// app.listen(3000,(req,res) => {
//     try{
//         console.log("server listening")
//     }catch(err) {
//     console.log(err)
//     }

// })
const fs = require("fs");
const ytdl = require("ytdl-core");

const download = async() => {
    let n = Math.floor(Math.random()*10000);
    const url = 'https://youtu.be/EiiOYwqk3A0';
    const videoId = ytdl.getURLVideoID(url);
    await ytdl.getInfo(videoId).then(info => {
        console.log('Title'+info.videoDetails.title);
        ytdl(url).pipe(fs.createWriteStream('video-'+n+'.mp4'));
    })
    console.log("downloading..")
}
// download()