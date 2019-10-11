import { PushOverConnector } from './../index';
import { AssertionError } from 'assert';

describe('constructor', () => {

    it('should fail for missing user', () => {
        function execute() {
            new PushOverConnector();
        }
        expect(execute).toThrow(AssertionError);
    });

    it('should fail for empty user', () => {
        function execute() {
            new PushOverConnector("");
        }
        expect(execute).toThrow(AssertionError);
    });

    it('should fail for missing token', () => {
        function execute() {
            new PushOverConnector("myUser");
        }
        expect(execute).toThrow(AssertionError);
    });

    it('should fail for empty token', () => {
        function execute() {
            new PushOverConnector("myUser", "");
        }
        expect(execute).toThrow(AssertionError);
    });

    it('should succeed', () => {
        function execute() {
            new PushOverConnector("myUser", "myToken");
        }
        expect(execute).not.toThrow();
    });

});
