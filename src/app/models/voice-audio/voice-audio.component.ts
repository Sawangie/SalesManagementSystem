import { Component, OnInit } from '@angular/core';
import { RecordServiceService } from 'src/app/shared/record-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-voice-audio',
  templateUrl: './voice-audio.component.html',
  styleUrls: ['./voice-audio.component.css']
})
export class VoiceAudioComponent implements OnInit {

  constructor(
    public _recordRTC: RecordServiceService,
    private http: HttpClient
  ){}



  ngOnInit() {
  }
  responseMessage: string = '';
  selectedFile!: File;


  uploadFile(event: any): void {
    let files = event.target.files[0];
    const formData = new FormData();
    formData.append('audio', files, files.name);
  
    this.http.post('http://127.0.0.1:8000/whisper', formData).subscribe(
      (response: any) => {
        this.responseMessage = response.command;
        console.log(this.responseMessage.toString());
      },
      (error) => {
        // Handle any errors
      }
    );
  }

  convertFileToBytecode(file: File) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const arrayBuffer = e.target?.result as ArrayBuffer;

      // Now you have the file data as an ArrayBuffer.
      // You can convert it to bytecode as needed.
      // For example, you can use the DataView or TypedArray APIs.
      // The specific conversion depends on your requirements.
    };

    reader.readAsArrayBuffer(file);
  }

  startVoiceRecord() {
    const URLs = this._recordRTC.toggleRecord();
    console.log("URL IS", URLs);
  }

}
