import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { MAIN_REDIRECTIONS_BY_ROLE } from 'src/app/constants/mainRedirections.constans';
import { RoutesApp } from 'src/app/constants/routes-app.constants';
import { StorageService } from 'src/app/services/internal/storage/storage.service';

@Component({
  selector: 'app-driver-news',
  templateUrl: './driver-news.component.html',
  styleUrls: ['./driver-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DriverNewsComponent implements OnInit {
  constructor(
  ) { }
  ngOnInit(): void {

  }
}
