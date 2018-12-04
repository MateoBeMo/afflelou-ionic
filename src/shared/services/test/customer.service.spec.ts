import { TestBed, inject, async } from '@angular/core/testing';

import { CustomerService } from '../customer.service';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, HttpModule, XHRBackend, BaseRequestOptions } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';


describe('Service: CustomerService', () => {
    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [
                CustomerService
            ],
            imports: [
              HttpClientModule
            ]
        }).compileComponents();
    });
    it('Get All Customers', async(inject([CustomerService], (service: CustomerService) => {
        service.getCustomers().subscribe(data => {
            expect(data.length).toBeGreaterThan(0);
        });
    })));
});

