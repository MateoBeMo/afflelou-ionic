import { TestBed, inject, async } from '@angular/core/testing';

import { StadisticsService } from '../stadistics.service';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, HttpModule, XHRBackend, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';

// describe('StadisticsService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [StadisticsService]
//     });
//   });

//   it('should be created', inject([StadisticsService], (service: StadisticsService) => {
//     expect(service).toBeTruthy();
//   }));
// });
describe('Service: StadisticsService', () => {
    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [
                StadisticsService
            ],
            imports: [
              HttpClientModule
            ]
        }).compileComponents();
    });
    it('Get All Stadistics', async(inject([StadisticsService], (service: StadisticsService) => {
        service.getLanguagesData().subscribe(data => {
            expect(data.length).toBeGreaterThan(0);
        });
    })));
    it('Add language', async(inject([StadisticsService], (service: StadisticsService) => {
      service.addLanguage('eeee').subscribe(data => {
          expect(data);
      });
  })));
});
