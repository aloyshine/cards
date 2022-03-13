// <copyright file='environment-settings.ts' company='Symplr'>
//  Copyright © 2021 Symplr.  All rights reserved.  Confidential and Proprietary.
// </copyright>

import { Injectable, Inject } from '@angular/core';
import { environment } from "./environments/environment.prod";

@Injectable()
export class EnvironmentService {
  baseApiPath: string;

  constructor() {
    this.baseApiPath = environment.baseApiPath;
  }
}