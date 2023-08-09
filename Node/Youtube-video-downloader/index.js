/*
const fs = require("fs");
const ytdl = require("ytdl-core");

const download = async() => {
    let n = Math.floor(Math.random()*10000);
    // const url = 'https://youtu.be/EiiOYwqk3A0';
    const url = 'https://www.youtube.com/watch?v=zing4uQ3dR4&ab_channel=ZeeMusicCompany';
    const videoId = ytdl.getURLVideoID(url);
    // await ytdl.getInfo(videoId).then(info => {
    //   console.log(info.videoDetails)
        // console.log('Title'+info.videoDetails.title);
        // ytdl(url).pipe(fs.createWriteStream('video-'+n+'.mp4'));
    // })
    let info = await ytdl.getInfo(videoId);
    let format = ytdl.chooseFormat(info.formats, { quality: '134' });
    console.log('Format found!', format);
    console.log("downloading..")
}
// download()

*/

// New approach ----- 

const express = require("express");
const ytdl = require("ytdl-core");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/download", async (req, res) => {
  try {
    const videoUrl = req.body.videoUrl;
    const selectedResolution = req.body.resolution;
    console.log(req.body)

    // Validate video URL
    if (!ytdl.validateURL(videoUrl)) {
      throw new Error("Invalid YouTube video URL");
    }

    // Extract video metadata
    const info = await ytdl.getInfo(videoUrl);
    const formats = info.formats;

    // Filter available resolutions based on user preference
    const resolutions = formats
      .filter((format) => format.container === "mp4" && format.resolution)
      .map((format) => ({
        resolution: format.resolution,
        url: format.url,
      }));

    // Find the URL for the selected resolution
    const selectedFormat = resolutions.find(
      (format) => format.resolution === selectedResolution
    );
    if (!selectedFormat) {
      throw new Error("Selected resolution not available");
    }

    // Provide the video file as a download
    res.header("Content-Disposition", `attachment; filename="${info.title}.mp4"`);
    ytdl(selectedFormat.url).pipe(res);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred.");
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
