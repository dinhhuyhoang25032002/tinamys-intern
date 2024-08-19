import { exec } from "child_process";
import path from "path";
import fs from "fs";

const __dirname = import.meta.dirname;
const arduinoPatch = path.join(__dirname,"../../arduino-cli", "arduino-cli.exe");
const sketchPath = path.join(__dirname, "../../arduino-cli","MySketch", "MySketch.ino");
const buildPath = path.join(__dirname, "../../arduino-cli", "build");

console.log("check path :", sketchPath);

// Nội dung mới cho file .ino
const newInoContent = `
void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println("New Message"); 
  delay(500); 
}
`;

const editContentInoFile = (filePatch, newContent) => {
  return new Promise((resolve, reject) => {
    try {
      fs.writeFileSync(filePatch, newContent, "utf-8");
      console.log("File .ino has been edited successfully.");
      resolve();
    } catch (err) {
      reject(`Error writing file: ${err.message}`);
    }
  });
};

const compileAndUpload = async () => {
  try {
    await editContentInoFile(sketchPath, newInoContent);
    const compileCommand = `${arduinoPatch} compile --fqbn arduino:avr:uno --output-dir ${buildPath} ${sketchPath}`;
    exec(compileCommand, (stderr, stdout) => {
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`Upload stdout: ${stdout}`);
      return stdout;
    });
  } catch (error) {
    console.error(`Error during upload: ${err.message}`);
    return;
  }
};

 compileAndUpload();
//C:\Users\ADMIN\AppData\Local\Arduino15\packages\arduino\hardware\avr\1.8.6