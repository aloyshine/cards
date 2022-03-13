//<copyright file="environment.service.spec.ts" company="Symplr software">
// Copyright © 2020 Symplr.  All rights reserved.  Confidential and Proprietary.
// </copyright>

import { TestBed, inject } from '@angular/core/testing';
import { EnvironmentService } from './environment.service';

describe('EnvironmentService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
        providers: [
            EnvironmentService,
        ]
        });
    });

    it('reads the values from the appropriate environment file', inject([EnvironmentService], (environmentService: EnvironmentService) => {
        expect(environmentService.baseApiPath).toBeDefined();
    }));
});
