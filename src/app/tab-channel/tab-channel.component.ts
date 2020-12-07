import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';

declare var videojs: any;

@Component({
  selector: 'app-tab-channel',
  templateUrl: './tab-channel.component.html',
  styleUrls: ['./tab-channel.component.css']
})
export class TabChannelComponent implements OnInit, AfterViewInit, OnDestroy  {
  Channels : any = [];
  private videoJSplayer: any;
  public posterUrl = '';
  public width = '900';
  public height = '506';


  constructor() { }

  ngOnInit() {
    this.Channels=[
      {"name":1, "url":""},
      {"name":2, "url":""},
      {"name":3, "url":""},
      {"name":4, "url":""},
      {"name":5, "url":""},
      {"name":6, "url":""},
      {"name":7, "url":""},
      {"name":8, "url":""},
      {"name":9, "url":""},
      {"name":10, "url":""},
    ]
  }
  ChangeChannel(ch){
    console.log(ch);
    // const newYoutubeUrl: string = 'http://www.youtube.com/watch?v=' + newId;
    // this.videoJSplayer.src({type: 'video/youtube', src: newYoutubeUrl});
  }
  ngAfterViewInit(): void {
    this.initVideoJs();
  }
  initVideoJs() {
    /*<source
     src="https://example.com/index.m3u8"
     type="application/x-mpegURL">*/
    this.videoJSplayer = videojs('video_player', {
      "liveui": true,
      'breakpoints': {
        'tiny': 300,
        'xsmall': 400,
        'small': 500,
        'medium': 600,
        'large': 700,
        'xlarge': 800,
        'huge': 900
      },
      'responsive': true,
      'fluid': true,
      'controls': true,
      'muted': false,
      'sources': [{
        'type': 'video/mp4',
        'src': 'http://rocksat.ddns.net:25461/movie/LpcDOinfS6/ptf55wfm/37114.mp4'
      }]
    });
    // this.videoJSplayer.play();
  }
  ngOnDestroy() {
    this.videoJSplayer.dispose();
  }
}
