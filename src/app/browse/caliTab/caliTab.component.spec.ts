import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { CaliTabComponent } from './caliTab.component';
import { CaliTabService } from './shared/caliTab.service';
import { CaliTab } from './shared/caliTab.model';

describe('a caliTab component', () => {
	let component: CaliTabComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: CaliTabService, useClass: MockCaliTabService },
				CaliTabComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([CaliTabComponent], (CaliTabComponent) => {
		component = CaliTabComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original caliTab service
class MockCaliTabService extends CaliTabService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
