import {Application} from 'spectron';
import {expect} from 'chai';
import 'mocha';

describe('application launch', function() {
    this.timeout(10000);

    beforeEach(function() {
        this.app = new Application({
            path: 'release-builds\\template-app-win32-ia32\\template-app.exe'
        });
        return this.app.start();
    });

    afterEach(function() {
        if (this.app && this.app.isRunning()) {
            return this.app.stop();
        }
    });

    it('shows an inital window', function() {
        return this.app.client.getWindowCount().then(function(count) {
            expect(count).to.equal(1);
        })
    });
});