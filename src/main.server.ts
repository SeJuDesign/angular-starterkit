import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) {
	enableProdMode();
}

// Express Engine
export { AppServerModule } from './app/app.server.module';
export { ngExpressEngine } from '@nguniversal/express-engine';
export { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

export { renderModule, renderModuleFactory } from '@angular/platform-server';
