import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VoiceAudioComponent } from 'src/app/models/voice-audio/voice-audio.component';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {
  isOpen = false;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  openVoiceComponent() {
    this.dialog.open(VoiceAudioComponent)
  }

}
