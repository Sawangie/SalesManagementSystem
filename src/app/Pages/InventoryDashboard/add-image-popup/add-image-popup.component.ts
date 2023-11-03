import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-image-popup',
  templateUrl: './add-image-popup.component.html',
  styleUrls: ['./add-image-popup.component.css']
})
export class AddImagePopupComponent {

  constructor() {

  }

  // selectedImage: string | ArrayBuffer | null = null;

  // handleFileInput(event: Event): void {
  //   const inputElement = event.target as HTMLInputElement;
  //   const file = inputElement.files?.[0];

  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       this.selectedImage = e.target?.result as string | ArrayBuffer;
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }

  url1 = 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp';
  url2 = 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp';
  url3 = 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp';
  url4 = 'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp';
  
  handleFileInput(e: any) {
    if (e.target.files) {
      const reader1 = new FileReader(); // Use separate variable name
      reader1.readAsDataURL(e.target.files[0]);
      reader1.onload = (event: any) => { // Use separate variable name
        this.url1 = event.target.result;
      };
    }
  }
  
  handleFile(e2: any) {
    if (e2.target.files) {
      const reader2 = new FileReader(); // Use separate variable name
      reader2.readAsDataURL(e2.target.files[0]);
      reader2.onload = (event: any) => { // Use separate variable name
        this.url2 = event.target.result;
      };
    }
  }

  handleInput(e3: any) {
    if(e3.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e3.target.files[0]);
      reader.onload=(event:any)=>{
        this.url3 = event.target.result;
      }
    }
  }

  FileInput(e4: any) {
    if(e4.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e4.target.files[0]);
      reader.onload=(event:any)=>{
        this.url4 = event.target.result;
      }
    }
  }

}
