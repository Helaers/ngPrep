export default ngModule => {
    describe('sf-hello', () => {

        beforeEach(window.module(ngModule.name));

        it('should test true-false', () => {
            expect(true).to.be.true;
        });
    });
};
